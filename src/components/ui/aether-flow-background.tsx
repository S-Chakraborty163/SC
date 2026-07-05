"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface Node {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  originalPosition: THREE.Vector3;
  mass: number;
}

export function AetherFlowBackground({ className, ...props }: React.ComponentProps<"div">) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const nodesRef = useRef<Node[]>([]);
  const particlesRef = useRef<THREE.Points | null>(null);
  const linesRef = useRef<THREE.LineSegments | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Get dimensions
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 60;
    cameraRef.current = camera;

    // Renderer setup
    if (!canvasRef.current) return;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    rendererRef.current = renderer;

    // Create nodes
    const nodeCount = 50;
    const nodes: Node[] = [];
    const positions: number[] = [];
    const colors: number[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      );

      const node: Node = {
        position: position.clone(),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.5,
          (Math.random() - 0.5) * 0.5,
          (Math.random() - 0.5) * 0.5
        ),
        originalPosition: position.clone(),
        mass: 1 + Math.random() * 2,
      };

      nodes.push(node);

      positions.push(position.x, position.y, position.z);

      // Purple/Blue gradient colors
      const hue = 0.65 + Math.random() * 0.15;
      const saturation = 0.7 + Math.random() * 0.3;
      const lightness = 0.4 + Math.random() * 0.4;

      const color = new THREE.Color();
      color.setHSL(hue, saturation, lightness);
      colors.push(color.r, color.g, color.b);
    }

    nodesRef.current = nodes;

    // Create particles
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(positions), 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(new Float32Array(colors), 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Create connection lines
    const lineGeometry = new THREE.BufferGeometry();
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.3,
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);
    linesRef.current = lines;

    // Handle resize
    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Update node positions
      const connectionDistance = 40;
      const maxForce = 0.05;

      nodes.forEach((node, i) => {
        // Attraction to original position
        const toOrigin = node.originalPosition.clone().sub(node.position);
        const distance = toOrigin.length();
        if (distance > 0) {
          toOrigin.normalize().multiplyScalar((maxForce * 0.1) / node.mass);
          node.velocity.add(toOrigin);
        }

        // Repulsion between nodes
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const toOther = otherNode.position.clone().sub(node.position);
            const dist = toOther.length();
            if (dist > 0 && dist < connectionDistance) {
              const force = -maxForce / (dist * dist) * 0.1;
              toOther.normalize().multiplyScalar(force / node.mass);
              node.velocity.add(toOther);
            }
          }
        });

        // Damping
        node.velocity.multiplyScalar(0.98);

        // Update position
        node.position.add(node.velocity);

        // Boundary
        const boundary = 50;
        const axes = ["x", "y", "z"] as const;
        axes.forEach((axis) => {
          const posValue = node.position[axis];
          if (Math.abs(posValue) > boundary) {
            node.position[axis] = Math.sign(posValue) * boundary;
            node.velocity[axis] *= -0.5;
          }
        });

        // Update particle position
        const posArray = (particleGeometry.getAttribute("position") as THREE.BufferAttribute).array as Float32Array;
        posArray[i * 3] = node.position.x;
        posArray[i * 3 + 1] = node.position.y;
        posArray[i * 3 + 2] = node.position.z;
      });

      (particleGeometry.getAttribute("position") as THREE.BufferAttribute).needsUpdate = true;

      // Update lines
      const linePositions: number[] = [];
      const connectionCount = Math.min(3, nodeCount - 1);

      nodes.forEach((node, i) => {
        // Connect to closest nodes
        const distances = nodes.map((other, j) => ({
          distance: node.position.distanceTo(other.position),
          index: j,
        }));
        distances.sort((a, b) => a.distance - b.distance);

        for (let k = 1; k <= connectionCount; k++) {
          if (distances[k] && distances[k].distance < connectionDistance) {
            const other = nodes[distances[k].index];
            linePositions.push(node.position.x, node.position.y, node.position.z);
            linePositions.push(other.position.x, other.position.y, other.position.z);
          }
        }
      });

      lineGeometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(linePositions), 3));

      // Rotate scene
      scene.rotation.x += 0.0001;
      scene.rotation.y += 0.0002;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
}
