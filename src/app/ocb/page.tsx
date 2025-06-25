"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import OCBData from "@/data/ocb";

export default function OCB() {
    return (
        <main className="min-h-screen w-screen max-w-screen overflow-x-hidden">
            <section className="bg-black flex flex-col justify-center items-center w-screen min-h-screen relative">
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 1 }}
                    className="relative w-full h-full"
                    style={{ aspectRatio: "1920/975" }}
                >
                    <Image
                        src="/ocb/header.png"
                        alt="OCB Header"
                        fill
                        className="object-cover"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute top-10 right-10 w-30"
                    style={{ aspectRatio: "192/67" }}
                >
                    <Image
                        src="/ocb/logo.png"
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
                        {OCBData.OCBHero.description ||
                            "OCB is one of the leading commercial banks in Vietnam. Growing rapidly across the cities and provinces, OCB sought to improve the overall retail product experience through a refresh outlook in hope of further elevating the brand in the market. I led the high-performing team in Vietnam to carry out this big ambition of OCB."}
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 1 }}
                    className="relative w-[90vw] my-20"
                    style={{ aspectRatio: "1680/945" }}
                >
                    <Image
                        src="/ocb/Banner01.png"
                        alt="OCB Image"
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
                        {OCBData.OCBApproach.title ||
                            "Start from research. Build clarity and confidence."}
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
                        {OCBData.OCBApproach.description ||
                            "We employed a various methodologies to consolidate insights that could help build the foundation of decisions for the stakeholders and the creative team."}
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 1 }}
                    className="relative w-screen my-20"
                    style={{ aspectRatio: "1920/392" }}
                >
                    <Image
                        src="/ocb/graphic.png"
                        alt="OCB Image"
                        fill
                        className="object-cover"
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
                        PROBLEM & VISION
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
                        {OCBData.OCBProblem.title ||
                            "Low active users combined with the lack of user insights prompt the biggest business challenges."}
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
                        {OCBData.OCBProblem.description ||
                            "The team envisions a simpler product that guides customers towards a personalized space to manage their banking needs. Reborn with intuitive experience, the new OMNI app is expected to bring privileged experience for the affluents."}
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 1 }}
                    className="relative w-[90vw] my-20"
                    style={{ aspectRatio: "1680/945" }}
                >
                    <Image
                        src="/ocb/Banner02.png"
                        alt="OCB Image"
                        fill
                        className="object-cover rounded-lg"
                    />
                </motion.div>
                <div className="grid grid-cols-3 gap-8 w-[90vw] min-h-[50vh] p-8 mb-20">
                    <div className="flex flex-col text-center">
                        <motion.div
                            initial={{
                                opacity: 0,
                                transform: "translateY(70px)",
                            }}
                            whileInView={{
                                opacity: 1,
                                transform: "translateY(0px)",
                            }}
                            transition={{ duration: 1 }}
                            className="relative h-32 mb-8 flex justify-center items-center"
                        >
                            <Image
                                src="/ocb/1.png"
                                alt="Strong Foundation"
                                width={100}
                                height={100}
                                className="object-cover"
                            />
                        </motion.div>
                        <motion.h1
                            initial={{
                                opacity: 0,
                                transform: "translateY(30px)",
                            }}
                            whileInView={{
                                opacity: 1,
                                transform: "translateY(0px)",
                            }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-white text-xl font-bold leading-relaxed mb-4 h-16 flex items-center justify-center"
                        >
                            {OCBData.OCBPrinciples1.title ||
                                "Strong Foundation"}
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
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-gray-300 text-xl leading-loose"
                        >
                            {OCBData.OCBPrinciples1.description ||
                                "Scalable and structured solutions that supports expansion of product requirement"}
                        </motion.p>
                    </div>
                    <div className="flex flex-col text-center">
                        <motion.div
                            initial={{
                                opacity: 0,
                                transform: "translateY(70px)",
                            }}
                            whileInView={{
                                opacity: 1,
                                transform: "translateY(0px)",
                            }}
                            transition={{ duration: 1 }}
                            className="relative h-32 mb-8 flex justify-center items-center"
                        >
                            <Image
                                src="/ocb/2.png"
                                alt="Hyper Connection"
                                width={100}
                                height={100}
                                className="object-cover"
                            />
                        </motion.div>
                        <motion.h1
                            initial={{
                                opacity: 0,
                                transform: "translateY(30px)",
                            }}
                            whileInView={{
                                opacity: 1,
                                transform: "translateY(0px)",
                            }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-white text-xl font-bold leading-relaxed mb-4 h-16 flex items-center justify-center"
                        >
                            {OCBData.OCBPrinciples2.title || "Hyper Connection"}
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
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-gray-300 text-xl leading-loose"
                        >
                            {OCBData.OCBPrinciples2.description ||
                                "Open communication between businesses, tech and design foster deeper trust"}
                        </motion.p>
                    </div>
                    <div className="flex flex-col text-center">
                        <motion.div
                            initial={{
                                opacity: 0,
                                transform: "translateY(70px)",
                            }}
                            whileInView={{
                                opacity: 1,
                                transform: "translateY(0px)",
                            }}
                            transition={{ duration: 1 }}
                            className="relative h-32 mb-8 flex justify-center items-center"
                        >
                            <Image
                                src="/ocb/3.png"
                                alt="Progressive Effort"
                                width={100}
                                height={100}
                                className="object-cover"
                            />
                        </motion.div>
                        <motion.h1
                            initial={{
                                opacity: 0,
                                transform: "translateY(30px)",
                            }}
                            whileInView={{
                                opacity: 1,
                                transform: "translateY(0px)",
                            }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-white text-xl font-bold leading-relaxed mb-4 h-16 flex items-center justify-center"
                        >
                            {OCBData.OCBPrinciples3.title ||
                                "Progressive Effort"}
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
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-gray-300 text-xl leading-loose"
                        >
                            {OCBData.OCBPrinciples3.description ||
                                "Maintaining experience consistency is dedicated effort"}
                        </motion.p>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 1 }}
                    className="relative w-full my-20"
                    style={{ aspectRatio: "1680/824" }}
                >
                    <Image
                        src="/ocb/Banner03.png"
                        alt="OCB Image"
                        fill
                        className="object-cover"
                    />
                </motion.div>
                <div className="flex flex-row justify-evenly items-center w-screen h-fit text-center mb-80">
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
                            07
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
                            className="text-white text-xl max-w-[100px] text-center"
                        >
                            Creative Members
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
                            21+
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
                            Weeks Delivery (Research to UI/UX)
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
                            transition={{ duration: 1, delay: 0.8 }}
                            className="text-white text-9xl"
                        >
                            300+
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
                            className="text-white text-xl max-w-[100px] text-center"
                        >
                            Screens Handover
                        </motion.p>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 1 }}
                    className="relative w-[90vw] my-20"
                    style={{ aspectRatio: "1680/824" }}
                >
                    <Image
                        src="/ocb/Banner04.png"
                        alt="OCB Image"
                        fill
                        className="object-cover rounded-xl"
                    />
                </motion.div>
                <div className="flex flex-col gap-10 items-center justify-center text-center p-8 w-screen h-fit mb-40">
                    <motion.h3
                        initial={{ opacity: 0, transform: "translateY(30px)" }}
                        whileInView={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        transition={{ duration: 1 }}
                        className="text-[#6BDA81] font-bold text-md mt-20"
                    >
                        IMPACT
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
                        {OCBData.OCBSolution.title ||
                            "New frontier for modern digital banking in Vietnam."}
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
                        {OCBData.OCBSolution.description ||
                            "The OCB OMNI 4.0 version was launched in May 2024. It offers modern and convenient digital banking services such as account opening and management, money transfers, bill payments, card services, deposits, loans, and many other outstanding features. It is built with Backbase Engagement Banking Platform in just 6 months which is 3x faster than industry norm when it comes to the implementation speed."}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, transform: "translateY(30px)" }}
                        whileInView={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-gray-300 text-xl max-w-[800px] leading-loose"
                    >
                        {OCBData.OCBSolution.description2 ||
                            "OCB OMNI 4.0 has set a new standard in the digital banking sector with features that meet the immediate satisfaction, speed, and convenience needs of Vietnamese consumers."}
                    </motion.p>
                </div>
            </section>
        </main>
    );
}
