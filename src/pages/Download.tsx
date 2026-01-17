import { Ground } from '@/components/Ground';
import { Loader } from '@/components/Loader';
import { CV } from '@/components/models/CV';
import { Printer } from '@/components/models/Printer';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Environment, Lightformer, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { CuboidCollider, Physics, RigidBody } from '@react-three/rapier';
import {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';
import * as THREE from 'three';

const BASE_URL = import.meta.env.VITE_BASE_PATH;

interface Props {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
}

function PrintingPaper(props: {
  setHovered: Dispatch<SetStateAction<boolean>>;
  setDialogOpen: Dispatch<SetStateAction<boolean>>;
}) {
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
      bodyRef.current.applyImpulse({ x: 0, y: 0, z: 0.0014 }, true);
    }
  });

  const onClick = useCallback(() => {
    props.setDialogOpen(true);
  }, [props.setDialogOpen]);

  return (
    <RigidBody ref={bodyRef} ccd={true}>
      <group ref={groupRef}>
        <CV
          onPointerOver={() => props.setHovered(true)}
          onPointerOut={() => props.setHovered(false)}
          onClick={() => onClick()}
          position={[0, 1.3, 0.1]}
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
  const [hovered, setHovered] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(
    () => typeof window !== 'undefined' && window.innerWidth < 768
  );

  useEffect(() => {
    const handleResize = (): void => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDownload = () => {
    const pdfUrl = `${BASE_URL}cv.pdf`;

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Yuanhui-Lin-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Canvas
        camera={{ position, fov }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) =>
          gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)
        }
        style={{
          width: '100vw',
          height: '100vh',
          cursor: hovered ? 'pointer' : 'auto',
        }}
      >
        <ambientLight intensity={Math.PI} />
        <Suspense fallback={<Loader />}>
          <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
            <RigidBody type="fixed" colliders={false}>
              <Printer scale={[3, 3, 3]} position={[0, 1.63, 0]} />
              {/* Printer inside collider - hold the paper inside */}
              <CuboidCollider
                args={[0.4, 0.35, 0.5]}
                position={[0, 1.0, -0.65]}
              />
              {/* Paper tray collider - flat surface where paper lands */}
              <CuboidCollider args={[0.4, 0.2, 2]} position={[0, 1.0, 0.6]} />
            </RigidBody>
            <PrintingPaper
              setHovered={setHovered}
              setDialogOpen={setDialogOpen}
            />
            <Ground />
          </Physics>
        </Suspense>
        <OrbitControls
          target={[0, 1, 0]}
          minDistance={10}
          maxDistance={50}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
        />
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
      <AlertDialog open={dialogOpen}>
        <AlertDialogContent className="p-2 bg-black border-lime-500/50">
          <AlertDialogHeader>
            <AlertDialogTitle>Are we going to download my CV?</AlertDialogTitle>
            <AlertDialogDescription>
              Hey! You just clicked the printed CV to collect it. Click continue
              to download it locally if you wish! 😃
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              className="cursor-pointer text-black"
              onClick={() => setDialogOpen(false)}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-lime-500/30 hover:bg-lime-500/30 cursor-pointer"
              onClick={() => {
                handleDownload();
                setDialogOpen(false);
              }}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
