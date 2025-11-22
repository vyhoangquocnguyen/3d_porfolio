import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import PlaneScene from "../assets/3d/plane.glb";

import { useFrame } from "@react-three/fiber";

const Plane = ({ isRotating, position, ...props }) => {
  const ref = useRef();

  const { scene, animations } = useGLTF(PlaneScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].play();
    }
  }, [actions, isRotating]);

  useFrame(({ clock }) => {
    // Make the plane fly in a circle
    // Adjust radius and speed as needed
    const t = clock.getElapsedTime();
    const radius = 25; // Radius of the orbit
    const speed = 0.2; // Speed of the orbit

    // Center point (Island position)
    const centerX = 0;
    const centerZ = -43;

    // Calculate current position (Counter-Clockwise)
    // x = cos(t), z = -sin(t) gives CCW in XZ plane (Y-up)
    const currentX = centerX + Math.cos(t * speed) * radius;
    const currentZ = centerZ - Math.sin(t * speed) * radius;

    // Calculate a future position to look at (tangent)
    const futureT = t + 0.1;
    const futureX = centerX + Math.cos(futureT * speed) * radius;
    const futureZ = centerZ - Math.sin(futureT * speed) * radius;

    // Update position
    ref.current.position.x = currentX;
    ref.current.position.z = currentZ;
    ref.current.position.y = position[1]; // Use the Y position passed from props

    // Make the plane face the direction of movement
    ref.current.lookAt(futureX, ref.current.position.y, futureZ);
  });

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
