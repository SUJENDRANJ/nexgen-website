import Navbar from "@/components/Navbar";
import WorkerHero from "@/components/WorkerHero";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-black">
      {/* <Sidebar /> */}
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-6 space-y-6 overflow-y-auto">
          {/* <VideoUpload />
          <WorkerTable /> */}

          <WorkerHero />

          <TeamCardsSection />
        </main>
      </div>
    </div>
  );
}

// File: src/components/FruitfulStyleCards.tsx

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
// import { users } from "./data"; // Assume an array of team members

const TeamCardsSection = () => {
  const [hoverRotation, setHoverRotation] = useState(0);

  const getRandomRotation = () => {
    const angles = [0, -10, 10];
    return angles[Math.floor(Math.random() * angles.length)];
  };

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Meet Our Team
        </h2>

        <ScrollArea className="overflow-x-auto">
          <div className="flex p-10 ">
            {users.map((user, index) => (
              <motion.div
                key={user.id}
                onMouseEnter={() => setHoverRotation(getRandomRotation())}
                whileHover={{
                  scale: 1.05,
                  rotate: hoverRotation,
                  zIndex: 1,
                }}
                initial={{ rotate: index % 2 === 0 ? -2 : 2 }}
                className="min-w-[180px] w-[200px] h-[280px] transform-gpu -m-1"
              >
                <Card className="rounded-2xl shadow-lg overflow-hidden p-0 bg-white w-full h-full">
                  <HoverVideoAvatar
                    image={user.image}
                    video={user.video}
                    alt={user.name}
                    name={user.name}
                    title={user.title}
                    description={user.description}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

const HoverVideoAvatar = ({
  image,
  video,
  alt,
  name,
  title,
  description,
}: any) => {
  const [isHovered, setHovered] = useState(false);
  const [isVideoLoaded, setVideoLoaded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const videoRef: any = useRef(null);
  const timeoutRef: any = useRef(null);

  const handleVideoEnd = () => {
    setShowDetails(true);
    timeoutRef.current = setTimeout(() => {
      setShowDetails(false);
      videoRef.current?.play();
    }, 3000);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setVideoLoaded(false);
    setShowDetails(false);
    clearTimeout(timeoutRef.current);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="relative w-full h-full cursor-pointer overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && video ? (
        <div className="relative w-full h-full">
          {showDetails ? (
            <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col items-center justify-center text-center p-4 z-10">
              <p className="font-semibold text-lg">{name}</p>
              <p className="text-xs text-gray-300">{title}</p>
              <p className="text-xs text-gray-400 mt-2">{description}</p>
            </div>
          ) : null}

          {!isVideoLoaded && !showDetails && (
            <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col items-center justify-center text-center p-4 z-10">
              <p className="font-semibold text-lg">{name}</p>
              <p className="text-xs text-gray-300">{title}</p>
              <p className="text-xs text-gray-400 mt-2">{description}</p>
            </div>
          )}

          <video
            ref={videoRef}
            src={video}
            preload="auto" // 👈 KEY!
            autoPlay
            muted
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            onEnded={handleVideoEnd}
            className="w-full h-full object-cover"
          />
        </div>
      ) : image ? (
        <img src={image} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-600 text-sm">
          No image available
        </div>
      )}
    </div>
  );
};

const users = [
  {
    id: 1,
    name: "Suje J",
    title: "Lead Designer",
    description: "Passionate about clean, user-centered design.",
    image: "/images/suje.jpg",
    video: "./videos/user2.mp4",
  },

  // Add more team members...

  {
    id: 2,
    name: "Suje J",
    title: "Lead Designer",
    description: "Passionate about clean, user-centered design.",
    image: "/images/suje.jpg",
    video: "./videos/user1.mp4",
  },
  {
    id: 3,
    name: "Suje J",
    title: "Lead Designer",
    description: "Passionate about clean, user-centered design.",
    image: "/images/suje.jpg",
    video: "./videos/user2.mp4",
  },
];
