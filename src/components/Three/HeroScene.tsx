import { Canvas } from "@react-three/fiber";
import BrunoRoom from "./BrunoRoom";

export default function HeroScene() {
    return (
        <Canvas
            camera={{ position: [0, 0, 8], fov: 45 }}
            gl={{ alpha: true, antialias: true }}
            dpr={[1, 2]}
        >
            <BrunoRoom />
        </Canvas>
    );
}