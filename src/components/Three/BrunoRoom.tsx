import { useRef, useEffect } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame, type ThreeElements } from '@react-three/fiber';

export default function BrunoRoom(props: ThreeElements['group']) {
    const { scene } = useGLTF(`${import.meta.env.BASE_URL}room-assets/roomModel.glb`);
    const bakedTexture = useTexture(`${import.meta.env.BASE_URL}room-assets/bakedNight.jpg`);
    bakedTexture.flipY = false;

    useEffect(() => {
        bakedTexture.colorSpace = THREE.SRGBColorSpace;
        bakedTexture.needsUpdate = true;
        const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture });

        scene.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
                (child as THREE.Mesh).material = bakedMaterial;
            }
        });
    }, [scene, bakedTexture]);

    const groupRef = useRef<THREE.Group>(null);
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

    useFrame(() => {
        target.current.x += (mouse.current.x - target.current.x) * 0.05;
        target.current.y += (mouse.current.y - target.current.y) * 0.05;

        if (groupRef.current) {
            // Add subtle parallax based on mouse
            groupRef.current.rotation.y = target.current.x * 0.2;
            groupRef.current.rotation.x = target.current.y * 0.2;
        }
    });

    return (
        <group ref={groupRef} {...props} dispose={null} position={[0, -1, 0]} rotation={[0, -Math.PI / 4, 0]} scale={0.5}>
            <primitive object={scene} />
        </group>
    );
}

useGLTF.preload(`${import.meta.env.BASE_URL}room-assets/roomModel.glb`);
useTexture.preload(`${import.meta.env.BASE_URL}room-assets/bakedNight.jpg`);
