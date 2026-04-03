import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, Stars, useTexture, Text } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = ({ count = 300 }) => {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
       p[i * 3] = (Math.random() - 0.5) * 15;
       p[i * 3 + 1] = (Math.random() - 0.5) * 15;
       p[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return p;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#A8B828" transparent opacity={0.4} />
    </points>
  );
};

const EmojiParticle = ({ emoji, position, scale, speed }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y += Math.sin(time * speed) * 0.002;
    meshRef.current.rotation.x = Math.cos(time * 0.1) * 0.1;
    meshRef.current.rotation.y += 0.001 * speed;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Text
        ref={meshRef}
        position={position}
        fontSize={scale}
        color="white"
        anchorX="center"
        anchorY="middle"
        material-opacity={0.3}
        material-transparent
      >
        {emoji}
      </Text>
    </Float>
  );
};

const FloatingSpice = ({ texturePath, position, scale, rotationSpeed = 1, opacity = 1 }) => {
  const meshRef = useRef();
  const texture = useTexture(texturePath);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y += Math.sin(time * rotationSpeed * 0.5) * 0.001;
    meshRef.current.rotation.x = Math.cos(time * 0.1) * 0.1;
    meshRef.current.rotation.y += 0.002 * rotationSpeed;
  });

  return (
    <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
         <planeGeometry args={[1, 1]} />
         <meshStandardMaterial 
           map={texture} 
           transparent 
           alphaTest={0.05}
           opacity={opacity}
           side={THREE.DoubleSide} 
         />
      </mesh>
    </Float>
  );
};

const AntiGravityScene = () => {
  const spiceEmojis = ['🌿', '⚫', '💚', '🟤', '🟡', '🫚', '🌱', '🟠', '✨', '🌶️'];
  
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas 
        shadows 
        dpr={[1, 2]} 
        gl={{ 
          antialias: true, 
          stencil: false, 
          depth: true, 
          powerPreference: 'high-performance',
          alpha: true
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={50} />
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#A8B828" />
        <spotLight position={[-10, 20, -10]} intensity={0.5} angle={0.2} penumbra={1} />

        {/* 3D Textures / Models */}
        <FloatingSpice 
          texturePath="/assets/cinnamon.png" 
          position={[-3, 1.5, -2]} 
          scale={[4, 4, 1]} 
          rotationSpeed={0.4} 
        />
        <FloatingSpice 
          texturePath="/assets/pepper.png" 
          position={[3.5, -2, 1]} 
          scale={[2, 2, 1]} 
          rotationSpeed={0.8} 
        />
        <FloatingSpice 
          texturePath="/assets/cloves.png" 
          position={[-2, -2.5, -1]} 
          scale={[2.5, 2.5, 1]} 
          rotationSpeed={0.6} 
        />

        {/* Emoji Particles for Hybrid Feel */}
        {spiceEmojis.map((emoji, idx) => (
          <EmojiParticle 
            key={idx}
            emoji={emoji}
            position={[
              (Math.random() - 0.5) * 15,
              (Math.random() - 0.5) * 15,
              (Math.random() - 0.5) * 10 - 5
            ]}
            scale={0.5 + Math.random()}
            speed={0.5 + Math.random()}
          />
        ))}

        <ParticleField count={400} />
        <Stars radius={150} depth={60} count={7000} factor={6} saturation={0.5} fade speed={1.5} />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
};

export default AntiGravityScene;
