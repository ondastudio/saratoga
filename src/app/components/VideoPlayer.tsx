import { useState, useEffect, useRef, useCallback } from "react";
import { IconButton } from "./IconButton";
import { PlayIcon, PauseIcon } from "./ArrowIcon";

const TIMELINE_DURATION = 30; // seconds for full timeline

interface VideoPlayerProps {
  className?: string;
}

export function VideoPlayer({ className }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const animRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const pausedAtRef = useRef<number>(0);

  const animate = useCallback((timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = (timestamp - startTimeRef.current) / 1000;
    const total = pausedAtRef.current + elapsed;
    const pct = Math.min((total / TIMELINE_DURATION) * 100, 100);
    setProgress(pct);
    if (pct < 100) {
      animRef.current = requestAnimationFrame(animate);
    } else {
      setIsPlaying(false);
      pausedAtRef.current = 0;
      setProgress(0);
    }
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      pausedAtRef.current += (performance.now() - (startTimeRef.current || performance.now())) / 1000;
      startTimeRef.current = 0;
      setIsPlaying(false);
    } else {
      startTimeRef.current = 0;
      setIsPlaying(true);
      animRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, []);

  return (
    <div className={`bg-[rgba(255,255,255,0.5)] overflow-clip relative rounded-[4px] ${className ?? ""}`}>
      {/* Play button — centered, visible when NOT playing */}
      <div
        className={`-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 transition-all duration-300 ${isPlaying ? "opacity-0 pointer-events-none scale-75" : "opacity-100"}`}
      >
        <IconButton size={40} variant="filled-white" onClick={togglePlay}>
          <span className="group-hover:hidden"><PlayIcon color="#202020" /></span>
          <span className="hidden group-hover:block"><PlayIcon color="#F5F5F5" /></span>
        </IconButton>
      </div>

      {/* Pause button — bottom-left, visible when playing */}
      <div
        className={`absolute bottom-[24px] left-[24px] transition-all duration-300 ${isPlaying ? "opacity-100" : "opacity-0 pointer-events-none translate-y-2"}`}
      >
        <IconButton size={40} variant="filled-white" onClick={togglePlay}>
          <span className="group-hover:hidden"><PauseIcon color="#110846" /></span>
          <span className="hidden group-hover:block"><PauseIcon color="#F5F5F5" /></span>
        </IconButton>
      </div>

      {/* Timeline progress bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[4px] transition-opacity duration-300 ${isPlaying || progress > 0 ? "opacity-100" : "opacity-0"}`}
      >
        <div
          className="h-full rounded-r-[2px] transition-[width] duration-100 ease-linear"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #8740ff 0%, #af63ff 100%)",
          }}
        />
      </div>
    </div>
  );
}
