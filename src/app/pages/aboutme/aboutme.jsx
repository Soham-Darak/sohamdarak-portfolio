"use client";
import React from "react";
import ProfileCard from "@/components/ProfileCard/ProfileCard";

export default function AboutMe() {
    return (
        <div className="mt-10 sm:mt-15 mx-4 sm:mx-auto w-full max-w-[1600px] relative px-4 sm:px-8">
            <section
                className="w-full rounded-2xl bg-gray-900/80 border border-gray-700 p-4 sm:p-6 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 group backdrop-blur-sm"
                id="about"
            >
                {/* Shimmer effect matching the skill cards */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.05)] to-transparent group-hover:via-[rgba(100,100,255,0.15)] animate-shimmer pointer-events-none"></div>

                <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 lg:gap-10 pt-0 px-4 sm:px-8 relative z-10">
                    {/* Right Column (Desktop): Text Content */}
                    <div className="basis-full lg:basis-7/12 pl-0 lg:pl-8 border-b lg:border-b-0 lg:border-l border-gray-700/50 pb-8 lg:pb-0">
                        <div className="flex-1 text-left">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-5">
                                About Me
                            </h2>

                            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 text-gray-300/90">
                                I&apos;m Soham Darak, a full-stack developer passionate about building modern,
                                high-performance applications with an intuitive user experience. I enjoy working
                                with the latest technologies like Artificial Intelligence, Machine Learning, and
                                cloud-based development, blending creativity with precision to deliver impactful
                                solutions. With over three years of experience and more than 10 completed projects,
                                I&apos;m committed to helping users and businesses grow in the digital era through
                                functional, aesthetic, and scalable digital products.
                            </p>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start text-left gap-y-6 sm:gap-x-16 mb-4 w-full">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl mb-1 text-white font-bold">
                                        10<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">+</span>
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-300">Projects Finished</p>
                                </div>
                                <div className="max-w-[280px]">
                                    <h3 className="text-2xl sm:text-3xl md:text-3xl mb-1 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                                        Student
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-300 leading-snug">
                                        Shri Ramdeobaba College of Engineering and Management, Nagpur
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Left Column (Desktop): ProfileCard */}
                    <div className="basis-full lg:basis-5/12 flex justify-center items-center py-4 lg:py-0">
                        <ProfileCard
                            avatarUrl="/soham.png"
                            name="Soham Darak"
                            title="Software Engineer"
                            handle="sohamdarak"
                            status="Online"
                            contactText="Contact Me"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}