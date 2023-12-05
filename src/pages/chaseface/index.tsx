import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas, useThree, useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three-stdlib';
import { Vector3 } from 'three/src/Three.js';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

function FaceModel() {
  // 3Dモデルの読み込み
  const { scene } = useLoader(GLTFLoader, '/shishiga_gaz-66/scene.gltf');
  const { camera, mouse } = useThree();
  const vec = new Vector3()

  useFrame(() => {
    camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.5);
    camera.lookAt(0, 0, 0);

  });

  return <primitive object={scene} />;
}

export default function Chaseface() {
  return (
    <div className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <Canvas camera={{ position: [-20, 5, 20], fov: 5, near: 1, far: 2000 }}>
        <ambientLight />
        <Suspense fallback={null}>
          <FaceModel />
        </Suspense>
      </Canvas>
    </div>

  );
}