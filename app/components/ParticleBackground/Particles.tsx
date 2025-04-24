import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Theme, useTheme } from "remix-themes";
import { Points } from "three";

const PARTICLE_COUNT = 500;

export default function Particles() {
  const mesh = useRef<Points>(null);
  const [theme] = useTheme();

  const positions = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  const velocities = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3).fill(0);
    return arr;
  }, []);

  useFrame(({ pointer }) => {
    const positionsAttr = mesh.current?.geometry.attributes.position;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      const dx = positions[i3] - pointer.x;
      const dy = positions[i3 + 1] - pointer.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 2) {
        const force = (2 - dist) * 0.05;
        velocities[i3] += (dx / dist) * force;
        velocities[i3 + 1] += (dy / dist) * force;
      }

      // Apply velocity and friction
      positions[i3] += velocities[i3];
      positions[i3 + 1] += velocities[i3 + 1];

      velocities[i3] *= 0.9;
      velocities[i3 + 1] *= 0.9;
    }

    if (!positionsAttr) {
      return;
    }
    positionsAttr.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          args={[positions, 3]}
          count={positions.length / 3}
          attach="attributes-position"
        />
      </bufferGeometry>
      <pointsMaterial
        color={theme === Theme.DARK ? "#61dafb" : "#1f6173"}
        size={0.05}
      />
    </points>
  );
}
