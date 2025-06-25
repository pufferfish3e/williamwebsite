"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import UOBData from "@/data/uob";

export default function UOBPage() {
    return (
        <main className="min-h-screen w-screen max-w-screen overflow-x-hidden">
            <section className="bg-black flex flex-col items-center justify-center w-screen min-h-screen relative">
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 1 }}
                    className="relative w-full h-full"
                    style={{ aspectRatio: "1920/975" }}
                >
                    <Image
                        src="/uob/header.png"
                        alt="UOB Header"
                        fill
                        className="object-cover"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute top-10 right-10 w-30"
                    style={{ aspectRatio: "186.69/69.23" }}
                >
                    <Image
                        src="/uob/logo.png"
                        alt="UOB Logo"
                        fill
                        className="object-cover"
                    />
                </motion.div>
                <div className="flex flex-col items-center justify-center text-center p-8 mb-20">
                    <motion.p
                        initial={{ opacity: 0, transform: "translateY(30px)" }}
                        whileInView={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-gray-300 text-xl max-w-[800px] leading-loose"
                    >
                        {UOBData.UOBHeroData.description ||
                            "Equipped with a digital-first mindset, UOB made a splash with their products, particularly UOB TMRW which had been successfully launched in Thailand and Indonesia market. I collaborated with the UOB Design Team in delivering the experience that was aligned with tomorrow’s standard and customer’s needs."}
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 1 }}
                    className="relative w-[90vw] my-20"
                    style={{ aspectRatio: "1680/937" }}
                >
                    <Image
                        src="/uob/Banner01.png"
                        alt="UOB Image"
                        fill
                        className="object-cover rounded-lg"
                    />
                </motion.div>
                <div className="flex flex-col gap-10 items-center justify-center text-center p-8 w-screen h-fit">
                    <motion.h3
                        initial={{ opacity: 0, transform: "translateY(30px)" }}
                        whileInView={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        transition={{ duration: 1 }}
                        className="text-[#6BDA81] font-bold text-md mt-20"
                    >
                        APPROACH
                    </motion.h3>
                    <motion.h1
                        initial={{ opacity: 0, transform: "translateY(30px)" }}
                        whileInView={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        transition={{ duration: 1 }}
                        className="text-white text-5xl max-w-[800px] leading-snug"
                    >
                        {UOBData.UOBApproachData.title ||
                            "From Research to Validation. From insights to Vision."}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, transform: "translateY(30px)" }}
                        whileInView={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-gray-300 text-xl max-w-[800px] leading-loose"
                    >
                        {UOBData.UOBApproachData.description ||
                            "When UOB decided to launch a digital bank, the concept was still new in the market and there were not many references. We had to conduct many research to gather insights from the customers both in Thailand & Indonesia. From the insights, it gave birth to the brand style, tone of content, and visual guidelines."}
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 1 }}
                    className="relative w-[50vw] mt-20 mb-60"
                    style={{ aspectRatio: "779/626" }}
                >
                    <Image
                        src="/uob/diagram.png"
                        alt="UOB diagram"
                        fill
                        className="object-cover rounded-lg"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center justify-center p-8 w-screen h-fit mb-10"
                    style={{ aspectRatio: "1668/782" }}
                >
                    <Image
                        src="/uob/Banner02.png"
                        alt="UOB Banner"
                        fill
                        className="object-cover"
                    />
                </motion.div>
                <div className="flex flex-row justify-evenly items-center mb-20 w-screen h-fit text-center">
                    <div className="flex flex-col justify-center items-center mt-20 max-w-[200px] gap-2">
                        <motion.h1
                            initial={{
                                opacity: 0,
                                transform: "translateY(30px)",
                            }}
                            whileInView={{
                                opacity: 1,
                                transform: "translateY(0px)",
                            }}
                            transition={{ duration: 1 }}
                            className="text-white text-9xl"
                        >
                            06
                        </motion.h1>
                        <motion.p
                            initial={{
                                opacity: 0,
                                transform: "translateY(30px)",
                            }}
                            whileInView={{
                                opacity: 1,
                                transform: "translateY(0px)",
                            }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-white text-xl"
                        >
                            Product Transformation
                        </motion.p>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-20 max-w-[200px] gap-2">
                        <motion.h1
                            initial={{
                                opacity: 0,
                                transform: "translateY(30px)",
                            }}
                            whileInView={{
                                opacity: 1,
                                transform: "translateY(0px)",
                            }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-white text-9xl"
                        >
                            05+
                        </motion.h1>
                        <motion.p
                            initial={{
                                opacity: 0,
                                transform: "translateY(30px)",
                            }}
                            whileInView={{
                                opacity: 1,
                                transform: "translateY(0px)",
                            }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="text-white text-xl"
                        >
                            Continuous Years of Partnership
                        </motion.p>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-20 max-w-[150px] gap-2">
                        <motion.h1
                            initial={{
                                opacity: 0,
                                transform: "translateY(30px)",
                            }}
                            whileInView={{
                                opacity: 1,
                                transform: "translateY(0px)",
                            }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="text-white text-9xl"
                        >
                            25+
                        </motion.h1>
                        <motion.p
                            initial={{
                                opacity: 0,
                                transform: "translateY(30px)",
                            }}
                            whileInView={{
                                opacity: 1,
                                transform: "translateY(0px)",
                            }}
                            transition={{ duration: 1, delay: 1 }}
                            className="text-white text-xl"
                        >
                            Creative Members
                        </motion.p>
                    </div>
                </div>
                <div className="flex flex-col gap-10 items-center justify-center text-center p-8 w-screen h-fit">
                    <motion.h3
                        initial={{ opacity: 0, transform: "translateY(30px)" }}
                        whileInView={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        transition={{ duration: 1 }}
                        className="text-[#6BDA81] font-bold text-md mt-20"
                    >
                        SOLUTION
                    </motion.h3>
                    <motion.h1
                        initial={{ opacity: 0, transform: "translateY(30px)" }}
                        whileInView={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        transition={{ duration: 1 }}
                        className="text-white text-5xl max-w-[800px] leading-snug"
                    >
                        {UOBData.UOBSolutionData.title ||
                            "One App for All Customer's Banking Needs."}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, transform: "translateY(30px)" }}
                        whileInView={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-gray-300 text-xl max-w-[800px] leading-loose"
                    >
                        {UOBData.UOBSolutionData.description ||
                            "UOB TMRW was launched in late 2019, bringing together the best of the UOB Mighty and TMRW banking apps across Southeast Asia. To build a unified digital platform, my team and I designed and developed UOB TMRW with AI-driven insights, personalized rewards and accessible investing options to engage customers and help them make the right financial decisions."}
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 1 }}
                    className="relative w-[90vw] my-20"
                    style={{ aspectRatio: "1680/938" }}
                >
                    <Image
                        src="/uob/Banner03.png"
                        alt="UOB Banner"
                        fill
                        className="object-cover rounded-lg"
                    />
                </motion.div>
                <div className="flex flex-col gap-10 items-center justify-center text-center p-8 w-screen h-fit mb-20">
                    <motion.h3
                        initial={{ opacity: 0, transform: "translateY(30px)" }}
                        whileInView={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        transition={{ duration: 1 }}
                        className="text-[#6BDA81] font-bold text-md mt-20"
                    >
                        SOLUTION
                    </motion.h3>
                    <motion.h1
                        initial={{ opacity: 0, transform: "translateY(30px)" }}
                        whileInView={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        transition={{ duration: 1 }}
                        className="text-white text-5xl max-w-[800px] leading-snug"
                    >
                        {UOBData.UOBInsightsData.title ||
                            "Continuous Change is Needed. Evolution is Inevitable."}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, transform: "translateY(30px)" }}
                        whileInView={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-gray-300 text-xl max-w-[800px] leading-loose"
                    >
                        {UOBData.UOBInsightsData.description ||
                            "With more competitors flocking the market over the years, our customer’s needs and interest    also shifted. My team and I were continuously align visions and seek transformation that can propel the brand and business forward. I also help to up-skill the team’s capability in service design hoping that it can open up a more comprehensive end-to-end business experience."}
                    </motion.p>
                </div>
                <div className="flex flex-col items-center justify-center max-w-[90vw] h-fit mb-40">
                    <motion.div
                        initial={{ opacity: 0, transform: "translateY(70px)" }}
                        animate={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        transition={{ duration: 1 }}
                        className="flex flex-col items-center justify-center p-8 w-[90vw] h-fit"
                        style={{ aspectRatio: "1759.26/989.36" }}
                    >
                        <Image
                            src="/uob/gallery11.png"
                            alt="UOB Banner"
                            fill
                            className="object-cover rounded-xl"
                        />
                    </motion.div>
                    <div className="flex flex-row justify-center items-center w-full h-fit">
                        <motion.div
                            initial={{
                                opacity: 0,
                                transform: "translateY(70px)",
                            }}
                            animate={{
                                opacity: 1,
                                transform: "translateY(0px)",
                            }}
                            transition={{ duration: 1 }}
                            className="flex flex-col items-center justify-center p-8 w-1/4 h-fit aspect-square"
                        >
                            <Image
                                src="/uob/gallery21.png"
                                alt="UOB Gallery"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                transform: "translateY(70px)",
                            }}
                            animate={{
                                opacity: 1,
                                transform: "translateY(0px)",
                            }}
                            transition={{ duration: 1 }}
                            className="flex flex-col items-center justify-center w-1/4 h-fit"
                        >
                            <video
                                src="/uob/1.mp4"
                                autoPlay
                                loop
                                muted
                                controls={false}
                                className="w-full h-full object-cover rounded-4xl aspect-square"
                            />
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                transform: "translateY(70px)",
                            }}
                            animate={{
                                opacity: 1,
                                transform: "translateY(0px)",
                            }}
                            transition={{ duration: 1 }}
                            className="flex flex-col items-center justify-center w-1/4 h-fit"
                        >
                            <video
                                src="/uob/2.mp4"
                                autoPlay
                                loop
                                muted
                                controls={false}
                                className="w-full h-full object-cover rounded-4xl aspect-square"
                            />
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                transform: "translateY(70px)",
                            }}
                            animate={{
                                opacity: 1,
                                transform: "translateY(0px)",
                            }}
                            transition={{ duration: 1 }}
                            className="flex flex-col items-center justify-center p-8 w-1/4 h-fit aspect-square"
                        >
                            <Image
                                src="/uob/gallery24.png"
                                alt="UOB Gallery"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, transform: "translateY(70px)" }}
                        animate={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        transition={{ duration: 1 }}
                        className="flex flex-col items-center justify-center p-8 w-[90vw] h-fit"
                        style={{ aspectRatio: "1666.65/590" }}
                    >
                        <Image
                            src="/uob/gallery31.png"
                            alt="UOB Banner"
                            fill
                            className="object-cover rounded-xl"
                        />
                    </motion.div>
                    <div className="flex flex-row justify-center items-center w-full h-fit">
                        <motion.div
                            initial={{
                                opacity: 0,
                                transform: "translateY(70px)",
                            }}
                            animate={{
                                opacity: 1,
                                transform: "translateY(0px)",
                            }}
                            transition={{ duration: 1 }}
                            className="flex flex-col items-center justify-center p-8 w-1/4 h-fit aspect-square"
                        >
                            <Image
                                src="/uob/gallery41.png"
                                alt="UOB Gallery"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                transform: "translateY(70px)",
                            }}
                            animate={{
                                opacity: 1,
                                transform: "translateY(0px)",
                            }}
                            transition={{ duration: 1 }}
                            className="flex flex-col items-center justify-center w-1/4 h-fit"
                        >
                            <video
                                src="/uob/3.mp4"
                                autoPlay
                                loop
                                muted
                                controls={false}
                                className="w-full h-full object-cover rounded-4xl aspect-square"
                            />
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                transform: "translateY(70px)",
                            }}
                            animate={{
                                opacity: 1,
                                transform: "translateY(0px)",
                            }}
                            transition={{ duration: 1 }}
                            className="flex flex-col items-center justify-center p-8 w-1/4 h-fit aspect-square"
                        >
                            <Image
                                src="/uob/gallery43.png"
                                alt="UOB Gallery"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                transform: "translateY(70px)",
                            }}
                            animate={{
                                opacity: 1,
                                transform: "translateY(0px)",
                            }}
                            transition={{ duration: 1 }}
                            className="flex flex-col items-center justify-center w-1/4 h-fit"
                        >
                            <video
                                src="/uob/4.mp4"
                                autoPlay
                                loop
                                muted
                                controls={false}
                                className="w-full h-full object-cover rounded-4xl aspect-square"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
