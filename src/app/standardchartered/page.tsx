"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import StandardCharteredData from "@/data/standardchartered";

export default function StandardCharteredPage() {
    return (
        <main className="min-h-screen w-screen max-w-screen overflow-x-hidden">
            <section className="bg-black flex flex-col items-center justify-center w-screen h-screen">
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 1 }}
                    className="relative w-full h-full"
                    style={{ aspectRatio: "1920/1194" }}
                >
                    <Image
                        src="/sc/header.png"
                        alt="Standard Chartered Logo"
                        fill
                        className="object-cover"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute top-0 right-0 w-150 h-130 flex items-center justify-center"
                >
                    <Image
                        src="/sc/logo.png"
                        alt="Standard Chartered Logo"
                        fill
                        style={{
                            aspectRatio: "1955.09/1354.28",
                            objectFit: "cover",
                        }}
                    />
                </motion.div>
            </section>
            <section className="bg-black flex flex-col items-center justify-center w-screen h-fit">
                <div className="flex flex-col items-center justify-center text-center p-8 mb-20">
                    <motion.p
                        initial={{ opacity: 0, transform: "translateY(30px)" }}
                        whileInView={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        transition={{ duration: 1 }}
                        className="text-gray-300 text-xl mb-8 max-w-[800px] leading-loose"
                    >
                        {StandardCharteredData.HeaderData.description1 ||
                            "Standard Chartered is a leading international bank championing sustainable growth, unique diversity, and inclusivity as a leading international bank. My team and I were on the journey of transforming their customer experience for all digital products in CCIB (Corporate & Investment Banking) department."}
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
                        {StandardCharteredData.HeaderData.description2 ||
                            "We gathered data-driven research, built scalable design systems, and collaborated seamlessly within teams to achieve one goal: Improve Standard Chartered's core banking experience for their customers."}
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 1 }}
                    className="relative w-[90vw] my-10"
                    style={{ aspectRatio: "1680/765" }}
                >
                    <Image
                        src="/sc/Banner01.png"
                        alt="Standard Chartered Image"
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
                        PROBLEM STATEMENT
                    </motion.h3>
                    <motion.h1
                        initial={{ opacity: 0, transform: "translateY(30px)" }}
                        whileInView={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        transition={{ duration: 1 }}
                        className="text-white text-5xl max-w-[700px] leading-relaxed"
                    >
                        {StandardCharteredData.ProblemStatementData.title ||
                            "Fragmented design operations greatly hindered scalability and cohesion."}
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
                        {StandardCharteredData.ProblemStatementData
                            .description ||
                            "The business and product owner aimed to expand and reposition their offerings to better serve corporate banking clients with speed and reliability, leveraging Standard Chartered's strong corporate rebrand. However, the design team operated in silos, lacking cohesion and consistency, highlighting the need for a unified, cost-effective design process."}
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center justify-center p-8 w-screen h-fit"
                    style={{ aspectRatio: "1920/1174" }}
                >
                    <Image
                        src="/sc/Banner02.png"
                        alt="Standard Chartered Mobile App"
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
                        INSIGHTS
                    </motion.h3>
                    <motion.h1
                        initial={{ opacity: 0, transform: "translateY(30px)" }}
                        whileInView={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        transition={{ duration: 1 }}
                        className="text-white text-5xl max-w-[700px] leading-relaxed"
                    >
                        {StandardCharteredData.InsightsData.title ||
                            "Speed is essential, but organic ecosystem is the key to the long-term sustainability."}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, transform: "translateY(30px)" }}
                        whileInView={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-gray-300 text-xl max-w-[800px] leading-loose mb-20"
                    >
                        {StandardCharteredData.InsightsData.description ||
                            "Streamlining design efforts across teams, through agreed process would significantly boost output. Aligning designers, technologists, and business stakeholders to speak a common language would reduce friction and move everyone towards the same page."}
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center justify-center p-8 w-[90vw] h-fit mb-60"
                    style={{ aspectRatio: "1646/948" }}
                >
                    <Image
                        src="/sc/Banner03.png"
                        alt="Standard Chartered metrics"
                        fill
                        className="object-cover"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center justify-center p-8 w-[90vw] h-fit"
                    style={{ aspectRatio: "1680/950" }}
                >
                    <Image
                        src="/sc/Banner04.png"
                        alt="Standard Chartered design system"
                        fill
                        className="object-cover"
                    />
                </motion.div>
                <div className="flex flex-row justify-evenly items-center mb-40 w-screen h-fit text-center">
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
                            20+
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
                            Product Delivery Streams / Tracks
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
                            22+
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
                            Multi-disciplinary Creatives
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
                            45+
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
                            Countries / Markets Impacted
                        </motion.p>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center text-center p-8 max-w-[90vw] h-[80vh]">
                    <div className="flex flex-col text-center p-8 max-w-fit h-full">
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
                            className="relative w-[25vw] mb-20"
                            style={{ aspectRatio: "428.96/250" }}
                        >
                            <Image
                                src="/sc/solution1.png"
                                alt="Standard Chartered Solution"
                                fill
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
                            className="text-white text-2xl font-bold max-w-sm leading-relaxed mb-4"
                        >
                            {StandardCharteredData.SolutionData1.title ||
                                "One Team, One Vision"}
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
                            className="text-gray-300 text-xl max-w-sm leading-loose"
                        >
                            {StandardCharteredData.SolutionData1.description ||
                                "A centralized design team, backed by a unified design system, ensuring consistency and stability from design patterns through to handoff with the technology team."}
                        </motion.p>
                    </div>
                    <div className="flex flex-col text-center p-8 max-w-fit h-full">
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
                            className="relative w-[25vw] mb-20"
                            style={{ aspectRatio: "445/250" }}
                        >
                            <Image
                                src="/sc/solution2.png"
                                alt="Standard Chartered Solution"
                                fill
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
                            className="text-white text-2xl font-bold max-w-sm leading-relaxed mb-4"
                        >
                            {StandardCharteredData.SolutionData2.title ||
                                "Humanized & Systemized Process"}
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
                            className="text-gray-300 text-xl max-w-sm leading-loose"
                        >
                            {StandardCharteredData.SolutionData2.description ||
                                "Implemented DesignOps with a human-centered approach and sustainable processes, enhancing communication and collaboration across departments."}
                        </motion.p>
                    </div>
                    <div className="flex flex-col text-center p-8 max-w-fit h-full">
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
                            className="relative w-[25vw] mb-20"
                            style={{ aspectRatio: "445/250" }}
                        >
                            <Image
                                src="/sc/solution3.png"
                                alt="Standard Chartered Solution"
                                fill
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
                            className="text-white text-2xl font-bold max-w-sm leading-relaxed mb-4"
                        >
                            {StandardCharteredData.SolutionData3.title ||
                                "Design Culture for Excellency"}
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
                            className="text-gray-300 text-xl max-w-sm leading-loose"
                        >
                            {StandardCharteredData.SolutionData3.description ||
                                "Improved design culture and employee's experience by continuously upgrading the team's skills with the latest tools and trends to accelerate operational pace and efficiency."}
                        </motion.p>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center justify-center p-8 w-screen h-fit my-20"
                    style={{ aspectRatio: "1920/824" }}
                >
                    <Image
                        src="/sc/Impactbanner.png"
                        alt="Standard Chartered metrics"
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
                        IMPACT
                    </motion.h3>
                    <motion.h1
                        initial={{ opacity: 0, transform: "translateY(30px)" }}
                        whileInView={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        transition={{ duration: 1 }}
                        className="text-white text-5xl max-w-[900px] leading-normal mb-8"
                    >
                        {StandardCharteredData.ImpactData.title ||
                            "Products grow exponentially in consistent and shared understanding of design knowledge."}  
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, transform: "translateY(30px)" }}
                        whileInView={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-gray-300 text-lg max-w-[800px] leading-loose mb-20"
                    >
                        {StandardCharteredData.ImpactData.description ||
                            "Reduced efforts to tackle UI/UX defects lead to more time investment to produce new ideas, fresh leads and customer-centric needs. My team and I have contributed in shaping the CCIB products from both mobile and desktop version, across multiple streams (accounts, cash, fx, reporting, E&I, post-trade, etc). We handed over the process & standard of output to let the Standard Chartered team fly on their own for future development."}
                    </motion.p>
                </div>
            </section>
        </main>
    );
}
