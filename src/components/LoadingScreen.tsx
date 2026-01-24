import { useProgress } from "@react-three/drei";

const LoadingScreen = () => {
  const { progress } = useProgress();

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0e0e0e",
        color: "white",
        fontSize: "1.2rem",
        zIndex: 9999,
        flexDirection: "column",
      }}
    >
      <div>Loading assets…</div>
      <div style={{ marginTop: 12 }}>{Math.round(progress)}%</div>
    </div>
  );
};

export default LoadingScreen;
