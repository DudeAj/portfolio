import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const RotatingCube = () => {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    if (rendererRef.current) {
      currentMount.removeChild(rendererRef.current.domElement);
      rendererRef.current.dispose();
    }

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Cube geometry and gray material
    const geometry = new THREE.BoxGeometry(2.1, 2.1, 2.1);

    const material = new THREE.MeshBasicMaterial({ color: 0x808080 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Black edges
    const edges = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color: "#000000" });
    const lineSegments = new THREE.LineSegments(edges, lineMaterial);
    scene.add(lineSegments);

    camera.position.z = 5;
    cube.rotateX(Math.PI / 4);
    cube.position.y = 0.5;
    cube.position.z = -0.2;
    lineSegments.position.y = 0.5;
    lineSegments.position.z = -0.2;

    let frameId;
    const animate = () => {
      //   cube.rotation.x += 0.01;
      cube.rotation.y += 0.008;
      cube.rotation.z += 0.008;
      cube.rotation.x += 0.008;

      // Keep edges in sync with cube rotation
      lineSegments.rotation.x = cube.rotation.x;
      lineSegments.rotation.y = cube.rotation.y;
      lineSegments.rotation.z = cube.rotation.z;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    // lineSegments.rotation.x = cube.rotation.x;
    // lineSegments.rotation.y = cube.rotation.y;
    // lineSegments.rotation.z = cube.rotation.z;

    // Handle window resize
    const handleResize = () => {
      const width = currentMount.clientWidth;
      const height = currentMount.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
      currentMount.removeChild(renderer.domElement);
      rendererRef.current = null;
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="absolute top-0 z-10"
      ref={mountRef}
      style={{
        width: "100vw",
        height: "100vh",
        background: "transparent",
        display: "block",
      }}
    />
  );
};

export default RotatingCube;
