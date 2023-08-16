import { Canvas } from "@react-three/fiber";
import { Sparkles, CameraShake } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

function Model() {
  const model = useLoader(GLTFLoader, "../../public/scene.glb");
  return <primitive object={model.scene} scale={0.03} position={[0, -7, 0]} />;
}

function Background({ ready }) {
  return (
    <>
      <Canvas
        style={{ position: "fixed", top: 50, left: 0 }}
        width={window.innerWidth}
        height={window.innerHeight}
        camera={{ position: [0, 6, 20], fov: 40 }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
        {/* <Model ready={ready} /> */}
        <CameraShake
          maxYaw={0.08} // Max amount camera can yaw in either direction
          maxPitch={0.08} // Max amount camera can pitch in either direction
          maxRoll={0.05} // Max amount camera can roll in either direction
          rollFrequency={0.09} // Frequency of the roll rotation
          intensity={1} // initial intensity of the shake
          decayRate={0.2} // if decay = true this is the rate at which intensity will reduce at />
        />
        <Sparkles
          size={20}
          scale={[20, 20, 20]}
          position-y={1}
          speed={1}
          count={50}
        />
      </Canvas>
    </>
  );
}

export default Background;
