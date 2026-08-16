--- src/App.tsx (原始)
import { useEffect, useRef } from "react";
import { PhoGame } from "./game/engine";

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const game = new PhoGame(cv);
    (window as unknown as { __pho36: PhoGame }).__pho36 = game;
    return () => game.destroy();
  }, []);

  return (
    <div className="game-root">
      <canvas ref={canvasRef} className="game-canvas" />
    </div>
  );
}


+++ src/App.tsx (修改后)
import { GameMap } from "./components/gameMap";

/**
 * App — điểm vào của ứng dụng.
 * Toàn bộ game được dựng trong <GameMap /> (canvas 2D + khung trang trí).
 */
export default function App() {
  return <GameMap />;
}
