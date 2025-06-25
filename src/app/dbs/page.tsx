"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import DBSData from "@/data/dbs";

export default function DBSPage() {
    return (
        <main className="min-h-screen w-screen max-w-screen overflow-x-hidden">
            <section className="bg-black flex flex-col items-center justify-center w-screen h-[90vh] relative">
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 1 }}
                    className="relative w-full h-full"
                    style={{ aspectRatio: "1920/975" }}
                >
                    <Image
                        src="/dbs/header.png"
                        alt="DBS"
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
                        src="/dbs/logo.png"
                        alt="DBS Logo"
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
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-gray-300 text-xl max-w-[800px] leading-loose"
                    >
                        {DBSData.DBSHeroData.description ||
                            "DBS Bank is a leading financial institution known for its innovation in the banking sector, particularly within its Institutional Banking Group (IBG) division. My team was tasked with transforming their approach to IBG customer experience specifically on Credit Architecture Programme (CAP), focusing on delivering solutions that are research-led and customer-centric to facilitate a more seamless digital tracing and risk management."}
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 1 }}
                    className="relative w-[90vw] my-20"
                    style={{ aspectRatio: "1680/765" }}
                >
                    <Image
                        src="/dbs/Banner01.png"
                        alt="DBS Image"
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
                        className="text-white text-5xl max-w-[800px] leading-relaxed"
                    >
                        {DBSData.ApproachData.title ||
                            "Adopting A.C.T Process into the Digital Product Development."}
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
                        {DBSData.ApproachData.description ||
                            "We brought over the practice of design thinking and leverage our own A.C.T process to help make better products and services for DBS. My team and I found joy in shaping the mindset of the clients into a more research-based and customer-centric approach."}
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center justify-center p-8 w-screen h-fit mt-10 mb-60"
                    style={{ aspectRatio: "1919/337" }}
                >
                    <Image
                        src="/dbs/diagram.png"
                        alt="DBS Diagram"
                        fill
                        className="object-cover"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center justify-center p-8 w-screen h-fit mb-10"
                    style={{ aspectRatio: "1921/824" }}
                >
                    <Image
                        src="/dbs/Banner02.png"
                        alt="DBS Image"
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
                            3+
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
                            Years of Partnership
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
                            10+
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
                            Product Streams
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
                            94
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
                            Usability Testings
                        </motion.p>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center justify-center p-8 w-[90vw] h-fit"
                    style={{ aspectRatio: "1680/719" }}
                >
                    <Image
                        src="/dbs/Banner03.png"
                        alt="DBS Image"
                        fill
                        className="object-cover rounded-lg"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center justify-center p-8 w-[90vw] h-fit my-20"
                    style={{ aspectRatio: "1680/719" }}
                >
                    <Image
                        src="/dbs/Banner04.png"
                        alt="DBS Image"
                        fill
                        className="object-cover rounded-lg"
                    />
                </motion.div>
                <div className="flex flex-row items-center justify-center text-center p-8 max-w-[90vw] h-fit mb-20">
                    <div className="flex flex-col text-center p-8 max-w-fit h-full">
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
                            className="text-white text-xl font-bold leading-relaxed mb-4"
                        >
                            {DBSData.SolutionData1.title ||
                                "Research Empowerment"}
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
                            className="text-gray-300 text-lg max-w-md leading-loose"
                        >
                            {DBSData.SolutionData1.description ||
                                "Encouraged the delivery team to take ownership of design decisions by promoting more research practices (workshop, analysis, insights, validation)."}
                        </motion.p>
                    </div>
                    <div className="flex flex-col text-center p-8 max-w-fit h-full">
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
                            className="text-white text-xl font-bold max-w-sm leading-relaxed mb-4"
                        >
                            {DBSData.SolutionData2.title ||
                                "Customer-Centric Mindset"}
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
                            className="text-gray-300 text-lg max-w-sm leading-loose"
                        >
                            {DBSData.SolutionData2.description ||
                                "Fostered a collaborative, inclusive approach between design and business, shifting the mindset towards customer-first solutions."}
                        </motion.p>
                    </div>
                    <div className="flex flex-col text-center p-8 max-w-fit h-full">
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
                            className="text-white text-xl font-bold text-nowrap leading-relaxed mb-4"
                        >
                            {DBSData.SolutionData3.title ||
                                "Creative x Business Facilitation"}
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
                            className="text-gray-300 text-lg max-w-sm leading-loose"
                        >
                            {DBSData.SolutionData3.description ||
                                "Implemented effective stakeholder management to ensure alignment and seamless communication across departments."}
                        </motion.p>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center justify-center p-8 w-[90vw] h-fit mt-20 mb-10"
                    style={{ aspectRatio: "1673.12/576" }}
                >
                    <Image
                        src="/dbs/Banner05.png"
                        alt="DBS Image"
                        fill
                        className="object-cover rounded-lg"
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
                        {DBSData.InsightsData.title ||
                            "The shift of focus into improving customer satisfaction, rather than churning out more screens."}
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
                        {DBSData.InsightsData.description ||
                            "My team and I believed that we have left the entire CAP team with long-lasting impact through the act of empathy by including the business team into usability testing process, guiding them on how to see the value of customer’s voice in deciding their product roadmaps."}
                    </motion.p>
                </div>
            </section>
        </main>
    );
}
