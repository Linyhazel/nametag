import { Ground } from '@/components/Ground';
import { CV } from '@/components/models/CV';
import { Printer } from '@/components/models/Printer';
import { Environment, Lightformer, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { CuboidCollider, Physics, RigidBody } from '@react-three/rapier';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Props {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
}

function PrintingPaper() {
  const bodyRef = useRef<any>(null);
  const groupRef = useRef<any>(null);

  useFrame(() => {
    if (!bodyRef.current || !groupRef.current) return;

    const pos = bodyRef.current.translation();

    // Sync group to rigid body
    groupRef.current.position.set(pos.x, pos.y, pos.z);

    const printerEndZ = 0.85;

    if (pos.z < printerEndZ) {
      // Still on table → apply tiny impulse to slide
      bodyRef.current.applyImpulse({ x: 0, y: 0, z: 0.001 }, true);
    }
  });

  return (
    <RigidBody ref={bodyRef} ccd={true}>
      <group ref={groupRef}>
        <CV
          position={[0, 1.35, 0.1]}
          scale={[0.8, 0.8, 0.8]}
          rotation={[0, Math.PI, 0]}
        />
      </group>
    </RigidBody>
  );
}

export default function DownloadPage({
  position = [-10, 28, 20],
  gravity = [0, -9.81, 0],
  fov = 10,
  transparent = true,
}: Props) {
  const [isMobile, setIsMobile] = useState<boolean>(
    () => typeof window !== 'undefined' && window.innerWidth < 768
  );

  useEffect(() => {
    const handleResize = (): void => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Canvas
      camera={{ position, fov }}
      dpr={[1, isMobile ? 1.5 : 2]}
      gl={{ alpha: transparent }}
      onCreated={({ gl }) =>
        gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)
      }
    >
      <ambientLight intensity={Math.PI} />
      <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
        <RigidBody type="fixed" colliders={false}>
          <Printer scale={[3, 3, 3]} position={[0, 1.63, 0]} />
          {/* Printer inside collider - hold the paper inside */}
          <CuboidCollider args={[0.4, 0.35, 0.5]} position={[0, 1.0, -0.6]} />
          {/* Paper tray collider - flat surface where paper lands */}
          <CuboidCollider args={[0.4, 0.25, 2]} position={[0, 1.0, 0.6]} />
        </RigidBody>
        <PrintingPaper />
        <Ground />
      </Physics>
      <OrbitControls />
      <Environment blur={0.75}>
        <Lightformer
          intensity={2}
          color="white"
          position={[0, -1, 5]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[-1, -1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[1, 1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
      </Environment>
    </Canvas>
  );
}
