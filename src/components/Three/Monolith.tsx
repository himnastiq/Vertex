import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Monolith() {
    const groupRef = useRef<THREE.Group>(null);
    const lineMaterialRef = useRef<THREE.LineBasicMaterial>(null);

    // Mouse tracking for parallax rotation
    const mouse = useRef({ x: 0, y: 0 });
    const target = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            mouse.current.x = event.clientX / window.innerWidth - 0.5;
            mouse.current.y = event.clientY / window.innerHeight - 0.5;
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Shared geometries so animated opacity affects every instance at once
    const bodyGeometry = useMemo(() => new THREE.BoxGeometry(1.8, 4.5, 1.8), []);
    const edgesGeometry = useMemo(() => new THREE.EdgesGeometry(bodyGeometry), [bodyGeometry]);
    const carvingMaterial = useMemo(
        () => new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 1, roughness: 0.2 }),
        []
    );
    const grooveGeometry = useMemo(() => new THREE.BoxGeometry(0.05, 4.0, 0.05), []);
    const bandGeometry = useMemo(() => new THREE.BoxGeometry(1.82, 0.05, 1.82), []);
    const circuitGeometry = useMemo(() => new THREE.SphereGeometry(0.6, 16, 16), []);

    // Shared material for circuit spheres — single instance so all three pulse in sync
    const circuitMaterial = useMemo(
        () => new THREE.MeshBasicMaterial({ color: 0x0047ff, wireframe: true, transparent: true, opacity: 0.2 }),
        []
    );

    const grooves = useMemo(
        () =>
            Array.from({ length: 4 }, (_, i) => {
                const angle = (i / 4) * Math.PI * 2 + Math.PI / 4;
                return { position: [Math.cos(angle) * 0.9, 0, Math.sin(angle) * 0.9] as const };
            }),
        []
    );

    const bands = useMemo(() => [-2, -1, 0, 1, 2], []);
    const circuits = useMemo(() => [-1, 0, 1], []);

    useFrame((state) => {
        target.current.x += (mouse.current.x - target.current.x) * 0.05;
        target.current.y += (mouse.current.y - target.current.y) * 0.05;

        if (groupRef.current) {
            groupRef.current.rotation.y += 0.003 + target.current.x * 0.15;
            groupRef.current.rotation.x = target.current.y * 0.15;
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
        }

        const t = state.clock.elapsedTime;
        if (lineMaterialRef.current) {
            lineMaterialRef.current.opacity = 0.3 + Math.abs(Math.sin(t * 0.8)) * 0.5;
        }
        circuitMaterial.opacity = 0.1 + Math.abs(Math.cos(t * 1.2)) * 0.2;
    });

    return (
        <group ref={groupRef}>
            {/* Main body */}
            <mesh geometry={bodyGeometry}>
                <meshPhysicalMaterial
                    color="#3b82f6"
                    emissive="#1d4ed8"
                    metalness={0.95}
                    roughness={0.05}
                    transmission={0.1}
                    thickness={1.0}
                    transparent
                    opacity={0.98}
                    reflectivity={0.9}
                    clearcoat={1.0}
                    clearcoatRoughness={0.02}
                />
            </mesh>

            {/* Vertical grooves */}
            {grooves.map((g, i) => (
                <mesh key={`groove-${i}`} geometry={grooveGeometry} material={carvingMaterial} position={g.position} />
            ))}

            {/* Horizontal bands */}
            {bands.map((y) => (
                <mesh key={`band-${y}`} geometry={bandGeometry} material={carvingMaterial} position={[0, y, 0]} />
            ))}

            {/* Glowing edges */}
            <lineSegments geometry={edgesGeometry}>
                <lineBasicMaterial ref={lineMaterialRef} color={0x0047ff} transparent opacity={0.8} />
            </lineSegments>

            {/* Internal circuitry spheres — shared material so they pulse in sync */}
            {circuits.map((y) => (
                <mesh key={`circuit-${y}`} geometry={circuitGeometry} material={circuitMaterial} position={[0, y * 1.5, 0]} scale={[1, 2, 1]} />
            ))}

            <ambientLight intensity={0.4} />
            <spotLight position={[10, 15, 10]} intensity={2.0} angle={Math.PI / 6} penumbra={0.5} />
            <pointLight position={[-5, 0, 5]} color={0x0047ff} intensity={3} distance={15} />
        </group>
    );
}
