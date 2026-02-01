"use client";

import React from "react";
import Galaxy from "@/components/Galaxy";
import TextType from "@/components/TextType";

const Hero = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-black text-white">
            {/* Galaxy Background */}
            <div className="absolute inset-0 z-0">
                <Galaxy />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full pointer-events-none">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                    <TextType
                        as="span"
                        text={["Soham Darak"]}
                        typingSpeed={100}
                        cursorCharacter=""
                        loop={false}
                    />
                </h1>
                <p className="text-xl md:text-2xl text-white/80 tracking-wide">
                    <TextType
                        as="span"
                        text={["Creative Developer"]}
                        typingSpeed={50}
                        initialDelay={1500}
                        loop={false}
                        cursorCharacter="|"
                    />
                </p>
            </div>
        </div>
    );
};

export default Hero;
