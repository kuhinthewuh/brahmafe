import React, { useRef, useState, useMemo, Component } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function FallbackBrain() {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1.5, 64, 64]} scale={[1, 0.8, 1.1]}>
        <MeshDistortMaterial
          color="#8be8ff"
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.8}
          roughness={0.2}
          distort={0.4}
          speed={2}
          wireframe={true}
          emissive="#8be8ff"
          emissiveIntensity={0.2}
        />
      </Sphere>
      
      {/* Neural Core Glow */}
      <Sphere args={[1.2, 32, 32]}>
        <meshBasicMaterial color="#8be8ff" transparent opacity={0.1} />
      </Sphere>
    </Float>
  );
}

function GLTFBrain({ url }) {
  const { scene } = useGLTF(url);
  const ref = useRef();
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.1;
      // subtle breathing
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.02;
      ref.current.scale.set(scale, scale, scale);
    }
  });

  // Apply BRAHMA aesthetic to the model materials
  useMemo(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: '#222222',
          emissive: '#8be8ff',
          emissiveIntensity: 0.1,
          roughness: 0.2,
          metalness: 0.8,
          wireframe: true,
          transparent: true,
          opacity: 0.8,
        });
      }
    });
  }, [scene]);

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <primitive ref={ref} object={scene} scale={2} position={[0, -0.5, 0]} />
    </Float>
  );
}

function BrainScene({ modelUrl }) {
  const [modelFailed, setModelFailed] = useState(false);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#8be8ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ffcc" />
      
      <ErrorBoundary fallback={<FallbackBrain />}>
        <React.Suspense fallback={<FallbackBrain />}>
          {modelUrl ? (
            <GLTFBrain url={modelUrl} />
          ) : (
            <FallbackBrain />
          )}
        </React.Suspense>
      </ErrorBoundary>
      
      <Environment preset="city" />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate={false}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

export default function BrainModel({ modelUrl = '/brain.glb' }) {
  return (
    <div className="w-full h-full min-h-[300px] relative rounded-2xl overflow-hidden bg-gradient-to-b from-black/20 to-black/60 border border-white/5">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <BrainScene modelUrl={modelUrl} />
      </Canvas>
      
      {/* Overlay Information */}
      <div className="absolute bottom-6 left-6 flex flex-col gap-1 pointer-events-none">
        <div className="text-[10px] font-bold tracking-widest text-[#8be8ff] uppercase">Mother</div>
        <div className="text-2xl font-light text-white tracking-tight">Healthy</div>
        <div className="text-xs text-white/50 mt-1">Active Mission #042</div>
      </div>
      
      <div className="absolute bottom-6 right-6">
        <button className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-medium text-white backdrop-blur-md transition-all pointer-events-auto shadow-[0_0_15px_rgba(163,255,0,0.15)]">
          Inspect Mother
        </button>
      </div>
      
      {/* License Attribution placeholder */}
      <div className="absolute top-4 right-4 text-[9px] text-white/30 pointer-events-none">
        Brain model via Poly Pizza (CC-BY)
      </div>
    </div>
  );
}
