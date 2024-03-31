import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Loader from '../components/Loader';
import { Island } from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';
import sakura from '../assets/sakura.mp3';
import { soundoff, soundon } from '../assets/icons';
import DarkMode from '../components/DarkMode';

const Home = () => {
    
    
    const [isDarkMode, setIsDarkMode] = useState(false);
    const ambientLightIntensity = isDarkMode ? -1 : 0.5;
    const hemisphereIntensity = isDarkMode ? 0.9 : 1;
    const directionalIntensity = isDarkMode ? 1 : 2;

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const audioRef = useRef(new Audio(sakura));
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;

    const [currentStage, setCurrentStage] = useState(1);
    const [isRotating, setIsRotating] = useState(false);
    const [isPlayingMusic, setIsPlayingMusic] = useState(false);

    useEffect(() => {
        if (isPlayingMusic) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlayingMusic]);

    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        let rotation = [0.1, 4.7, 0];

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        } else {
            screenScale = [1, 1, 1];
        }
        return [screenScale, screenPosition, rotation];
    };

    const adjustPlaneForScreenSize = () => {
        let screenScale, screenPosition;

        if (window.innerWidth < 768) {
            screenScale = [0.001, 0.001, 0.001];
            screenPosition = [0, -1.5, 0];
        } else {
            screenScale = [0.0019, 0.0019, 0.0019];
            screenPosition = [1, -3.5, -4];
        }
        return [screenScale, screenPosition];
    };

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
    const [planeScale, planePosition] = adjustPlaneForScreenSize();

    

    return (
        <section className='w-full h-screen relative'>
            <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>

            <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{ near: 0.1, far: 1000 }}>
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={directionalIntensity} />
                    <ambientLight intensity={ambientLightIntensity} /> {/* Set initial intensity based on isDarkMode */}
                    <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={hemisphereIntensity} />
                    <Bird />
                    <Sky isRotating={isRotating} />

                    <Island
                        isDarkMode={isDarkMode}
                        position={islandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                    <Plane
                        isRotating={isRotating}
                        scale={planeScale}
                        position={planePosition}
                        rotation={[0.1, 30, 0]}
                    />
                </Suspense>
            </Canvas>
            <div onClick={toggleDarkMode} className='absolute block bottom-7 lg:top-7 right-7 '>
                <DarkMode />
            </div>

            <div className='absolute bottom-2 left-2'>
                <img src={!isPlayingMusic ? soundoff : soundon} alt="sound" className='w-10 h-10 cursor-pointer object-contain' onClick={() => setIsPlayingMusic(!isPlayingMusic)} />
            </div>
        </section>
    );
}

export default Home;
