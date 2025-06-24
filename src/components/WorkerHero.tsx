// File: src/components/WorkerHero.tsx

import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function WorkerHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      muted ? audioRef.current.pause() : audioRef.current.play();
    }
  }, [muted]);

  return (
    <section className="relative w-full h-screen bg-gray-100 dark:bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="./videos/Screen Recording 2025-06-24 113615.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <audio ref={audioRef} loop>
        <source src="/audios/worker1-voice.mp3" type="audio/mp3" />
      </audio>

      {/* <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-md">
          Meet Our Dedicated Workers
        </h1>
        <p className="mt-4 text-lg md:text-xl drop-shadow">
          Real stories. Real people. Real impact.
        </p>

        <Button
          className="mt-6"
          variant="secondary"
          onClick={() => setMuted((prev) => !prev)}
        >
          {muted ? "🔇 Unmute Voiceover" : "🔊 Mute Voiceover"}
        </Button>
      </div> */}

      <div className="absolute inset-0 bg-black/40" />
    </section>
  );
}
