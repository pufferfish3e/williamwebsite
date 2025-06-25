"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import HomepageData from "@/data/homepage";

export default function Home() {
    return (
        <main className="min-h-screen w-screen max-w-screen overflow-x-hidden">
            <section className="flex flex-row min-h-screen w-screen items-center justify-center relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative flex items-center justify-center"
                >
                    <span className="rounded-full w-[125px] h-[125px] bg-[#25F539] block z-20">
                        <Image
                            src="/hero/william.png"
                            alt="Logo"
                            width={125}
                            height={125}
                            className="rounded-full mb-8"
                        />
                    </span>
                    <span className="absolute rounded-full w-[275px] h-[275px] z-10">
                        <div className="ring-container absolute top-0 left-0 w-full h-full">
                            <Image
                                src="/ui/yellow(1).png"
                                alt="Ring 1"
                                width={275}
                                height={275}
                                className="ring-image ring-1"
                            />
                            <Image
                                src="/ui/blue(2).png"
                                alt="Ring 2"
                                width={275}
                                height={275}
                                className="ring-image ring-2"
                            />
                            <Image
                                src="/ui/green(3).png"
                                alt="Ring 3"
                                width={275}
                                height={275}
                                className="ring-image ring-3"
                            />
                            <Image
                                src="/ui/blue(4).png"
                                alt="Ring 4"
                                width={275}
                                height={275}
                                className="ring-image ring-4"
                            />
                            <Image
                                src="/ui/yellow(5).png"
                                alt="Ring 5"
                                width={275}
                                height={275}
                                className="ring-image ring-5"
                            />
                            <Image
                                src="/ui/blue(6).png"
                                alt="Ring 6"
                                width={275}
                                height={275}
                                className="ring-image ring-6"
                            />
                            <Image
                                src="/ui/green(7).png"
                                alt="Ring 7"
                                width={275}
                                height={275}
                                className="ring-image ring-7"
                            />
                        </div>
                    </span>
                    <span className="absolute blur-[250px] rounded-full w-[450px] h-[450px] bg-radial from-[#2CE779] from-20% opacity-70 via-[#12C5BA] via-40% to-transparent to-60% z-10" />
                </motion.div>
                <motion.div
                    className="flex flex-row items-center justify-center"
                    initial={{ opacity: 0, transform: "translateY(30px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 1 }}
                >
                    <div className="text-8xl font-bold scale-x-[1.4] bg-gradient-to-r from-[#091101] via-[#2CE779] to-[#FFFFFF] text-transparent bg-clip-text ml-26">
                        WILLIAM
                    </div>
                    <div className="flex flex-col items-center justify-center mx-4 text-[#D3FAE3]">
                        <div className="text-3xl font-bold scale-x-[1.2] ml-23">
                            SURYA
                        </div>
                        <div className="text-3xl font-bold scale-x-[1.2] ml-20">
                            JAYA
                        </div>
                    </div>
                </motion.div>
            </section>
            <section className="min-h-screen flex items-center justify-center p-4 w-screen flex-col">
                <div className="text-center">
                    <motion.h1
                        initial={{ opacity: 0, transform: "translateY(70px)" }}
                        whileInView={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        transition={{ duration: 1 }}
                        className="text-5xl leading-snug mb-2 max-w-[1000px] mx-auto"
                    >
                        {HomepageData.HomepageData.title ||
                            "Your go-to-wizard for digital transformation, impactful design and product innovation"}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, transform: "translateY(70px)" }}
                        whileInView={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mt-20 mb-40 text-2xl leading-loose text-gray-400 max-w-[800px] mx-auto"
                    >
                        {HomepageData.HomepageData.description ||
                            "With over 13 years of experience in digital products, my expertise and creative leadership spans various industries, including but not limited to retail banking, corporate banking, financial services, government projects, etc."}
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{
                        opacity: 1,
                        transform: "translateY(0px)",
                    }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center justify-center w-screen h-50 relative"
                >
                    <span className="absolute blur-[250px] rounded-full w-[450px] h-[450px] bg-radial from-[#2CE779] from-20% opacity-70 via-[#12C5BA] via-40% to-transparent to-60% z-10 translate-y-[-70px]" />
                    <Image src="/hero/STORY.png" alt="story" fill />
                    <div className="absolute w-screen h-50 bg-gradient-to-b from-transparent from 60% to-black" />
                </motion.div>
            </section>
            <section className="min-h-screen flex items-center justify-center p-4 w-screen flex-col relative">
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    whileHover="hover"
                    transition={{ duration: 1 }}
                    className="w-screen justify-center items-center flex flex-col relative group"
                    style={{ aspectRatio: "1680/880" }}
                >
                    <div className="absolute bottom-0 w-full h-full z-40 flex flex-col justify-center items-center">
                        <motion.div
                            initial={{ opacity: 0}}
                            variants={{
                                hover: { opacity: 1},
                            }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 bg-black/80"
                        />
                        <motion.h1
                            initial={{
                                opacity: 0,
                                transform: "translateY(70px)",
                            }}
                            variants={{
                                hover: {
                                    opacity: 1,
                                    transform: "translateY(0px)",
                                },
                            }}
                            transition={{ duration: 1 }}
                            className="flex flex-col items-center leading-tight justify-center max-w-xl text-4xl text-center relative z-10 mb-6"
                        >
                            {HomepageData.ProjectDescriptions.scb}
                        </motion.h1>
                        <Link href={"/standardchartered"}>
                        <motion.button
                            initial={{
                                opacity: 0,
                                transform: "translateY(70px)",
                            }}
                            variants={{
                                hover: {
                                    opacity: 1,
                                    transform: "translateY(0px)",
                                },
                            }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="border-2 border-white rounded-full px-6 py-2 mr-6"
                        >
                            View Story
                        </motion.button>
                        </Link>
                    </div>
                    <Image
                        src="/hero/scb.png"
                        alt="scb"
                        fill
                        className="mb-8"
                    />
                </motion.div>
                <div className="w-[95vw] flex flex-row justify-evenly mt-20">
                    <motion.div
                        initial={{ opacity: 0, transform: "translateY(70px)" }}
                        whileInView={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        whileHover="hover"
                        transition={{ duration: 1 }}
                        className="w-[30vw] h-[30vw] justify-center items-center flex flex-col aspect-video relative group"
                    >
                        <div className="absolute bottom-0 w-full h-full z-40 flex flex-col justify-center items-center">
                            <motion.div
                                initial={{ opacity: 0 }}
                                variants={{
                                    hover: { opacity: 1 },
                                }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 bg-black/80"
                            />
                            <motion.h1
                                initial={{
                                    opacity: 0,
                                    transform: "translateY(70px)",
                                }}
                                variants={{
                                    hover: {
                                        opacity: 1,
                                        transform: "translateY(0px)",
                                    },
                                }}
                                transition={{ duration: 1 }}
                                className="flex flex-col items-center justify-center max-w-sm text-4xl text-center relative z-10 mb-6"
                            >
                                {HomepageData.ProjectDescriptions.dbs}
                            </motion.h1>
                            <Link href={"/dbs"}>
                            <motion.button
                                initial={{
                                    opacity: 0,
                                    transform: "translateY(70px)",
                                }}
                                variants={{
                                    hover: {
                                        opacity: 1,
                                        transform: "translateY(0px)",
                                    },
                                }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="border-2 border-white rounded-full px-6 py-2 mr-6"
                            >
                                View Story
                            </motion.button>
                            </Link>
                        </div>
                        <Image
                            src="/hero/dbs.png"
                            alt="dbs"
                            fill
                            className="rounded-xl"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, transform: "translateY(70px)" }}
                        whileInView={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        whileHover="hover"
                        transition={{ duration: 1 }}
                        className="w-[30vw] h-[30vw] justify-center items-center flex flex-col aspect-video relative group"
                    >
                        <div className="absolute bottom-0 w-full h-full z-40 flex flex-col justify-center items-center">
                            <motion.div
                                initial={{ opacity: 0 }}
                                variants={{
                                    hover: { opacity: 1 },
                                }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 bg-black/80"
                            />
                            <motion.h1
                                initial={{
                                    opacity: 0,
                                    transform: "translateY(70px)",
                                }}
                                variants={{
                                    hover: {
                                        opacity: 1,
                                        transform: "translateY(0px)",
                                    },
                                }}
                                transition={{ duration: 1 }}
                                className="flex flex-col items-center justify-center max-w-sm text-4xl text-center relative z-10 mb-6"
                            >
                                {HomepageData.ProjectDescriptions.uob}
                            </motion.h1>
                            <Link href={"/uob"}>
                            <motion.button
                                initial={{
                                    opacity: 0,
                                    transform: "translateY(70px)",
                                }}
                                variants={{
                                    hover: {
                                        opacity: 1,
                                        transform: "translateY(0px)",
                                    },
                                }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="border-2 border-white rounded-full px-6 py-2 mr-6"
                            >
                                View Story
                            </motion.button>
                            </Link>
                        </div>
                        <Image
                            src="/hero/uob.png"
                            alt="uob"
                            fill
                            className="rounded-xl"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, transform: "translateY(70px)" }}
                        whileInView={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        whileHover="hover"
                        transition={{ duration: 1 }}
                        className="w-[30vw] h-[30vw] justify-center items-center flex flex-col aspect-video relative group"
                    >
                        <div className="absolute bottom-0 w-full h-full z-40 flex flex-col justify-center items-center">
                            <motion.div
                                initial={{ opacity: 0 }}
                                variants={{
                                    hover: { opacity: 1 },
                                }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 bg-black/80"
                            />
                            <motion.h1
                                initial={{
                                    opacity: 0,
                                    transform: "translateY(70px)",
                                }}
                                variants={{
                                    hover: {
                                        opacity: 1,
                                        transform: "translateY(0px)",
                                    },
                                }}
                                transition={{ duration: 1 }}
                                className="flex flex-col items-center justify-center max-w-sm text-4xl text-center relative z-10 mb-6"
                            >
                                {HomepageData.ProjectDescriptions.ocb}
                            </motion.h1>
                            <Link href={"/ocb"}>
                            <motion.button
                                initial={{
                                    opacity: 0,
                                    transform: "translateY(70px)",
                                }}
                                variants={{
                                    hover: {
                                        opacity: 1,
                                        transform: "translateY(0px)",
                                    },
                                }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="border-2 border-white rounded-full px-6 py-2 mr-6"
                            >
                                View Story
                            </motion.button>
                            </Link>
                        </div>
                        <Image
                            src="/hero/ocb.png"
                            alt="ocb"
                            fill
                            className="rounded-xl"
                        />
                    </motion.div>
                </div>
            </section>
            <section className="w-screen h-fit flex flex-col items-center justify-center relative mt-20">
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 1 }}
                    className="absolute top-0 left-1/2 translate-x-[-50%] w-200 h-200"
                >
                    <div className="w-full h-full flex items-center justify-center">
                        <Image
                            src="/ui/circle.png"
                            alt="circle"
                            fill
                            className="circle ring-1"
                        />
                    </div>
                </motion.div>
                <div className="flex flex-col items-center justify-center text-center bg-gradient-to-b from-transparent to-black to-30% w-screen h-screen z-10 relative">
                    <motion.h1
                        initial={{ opacity: 0, transform: "translateY(70px)" }}
                        whileInView={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        transition={{ duration: 1 }}
                        className="text-5xl leading-snug mb-2 max-w-[1000px] mx-auto"
                    >
                        {HomepageData.SectionData1.title ||
                            "Transformation always starts with the shift of mindset."}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, transform: "translateY(70px)" }}
                        whileInView={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mt-10 mb-20 text-2xl leading-loose text-gray-400 max-w-[800px] mx-auto"
                    >
                        {HomepageData.SectionData1.description ||
                            "One of my personal joys is to see how my client's behaviour, thought process and approach change after learning the design thinking. As a self-taught design thinker, I run workshops/training to drive multiple businesses achieve more impactful outcomes."}
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    whileHover="hover"
                    transition={{ duration: 1 }}
                    className="w-[90vw] justify-center items-center flex flex-col relative group"
                    style={{ aspectRatio: "1680/765" }}
                >
                    <div className="absolute bottom-0 w-full h-full z-40 flex flex-col justify-center items-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            variants={{
                                hover: { opacity: 1 },
                            }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 bg-black/80"
                        />
                        <motion.h1
                            initial={{
                                opacity: 0,
                                transform: "translateY(70px)",
                            }}
                            variants={{
                                hover: {
                                    opacity: 1,
                                    transform: "translateY(0px)",
                                },
                            }}
                            transition={{ duration: 1 }}
                            className="flex flex-col items-center justify-center max-w-lg leading-snug text-4xl text-center relative z-10 mb-6"
                        >
                            {HomepageData.ProjectDescriptions.imda ||
                                "Infocomm Media Development Authority (SG): Design Thinking"}
                        </motion.h1>
                        <Link href={"/"}>
                        <motion.button
                            initial={{
                                opacity: 0,
                                transform: "translateY(70px)",
                            }}
                            variants={{
                                hover: {
                                    opacity: 1,
                                    transform: "translateY(0px)",
                                },
                            }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="border-2 border-white rounded-full px-6 py-2 mr-6"
                        >
                            View Story
                        </motion.button>
                        </Link>
                    </div>
                    <Image
                        src="/hero/imda.png"
                        alt="imda"
                        fill
                        className="mb-8 rounded-xl"
                    />
                </motion.div>
            </section>
            <section className="w-screen h-fit flex flex-col items-center justify-center relative mt-40">
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 1 }}
                    className="absolute top-0 left-1/2 translate-x-[-50%] w-200 h-200"
                >
                    <div className="w-full h-full flex items-center justify-center">
                        <Image
                            src="/ui/circlesbg.png"
                            alt="circle"
                            fill
                            style={{ scale: "2" }}
                        />
                    </div>
                </motion.div>
                <div className="flex flex-col items-center justify-center text-center w-screen h-fit z-10 relative">
                    <motion.h1
                        initial={{ opacity: 0, transform: "translateY(70px)" }}
                        whileInView={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        transition={{ duration: 1 }}
                        className="text-5xl leading-normal mb-2 max-w-[800px] mx-auto"
                    >
                        {HomepageData.SectionData2.title ||
                            "Concept powered with research is a magic in the making."} 
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, transform: "translateY(70px)" }}
                        whileInView={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mt-10 mb-30 text-2xl leading-loose text-gray-400 max-w-[800px] mx-auto"
                    >
                        {HomepageData.SectionData2.description ||
                            "Concept powered with research is a magic in the making. I believe that understanding and analysis are the foundations of creative practice that lead to holistic end-to-end design solutions."}
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(70px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    whileHover="hover"
                    transition={{ duration: 1 }}
                    className="w-[90vw] justify-center items-center flex flex-col relative group"
                    style={{ aspectRatio: "1680/765" }}
                >
                    <div className="absolute bottom-0 w-full h-full z-40 flex flex-col justify-center items-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            variants={{
                                hover: { opacity: 1 },
                            }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 bg-black/80"
                        />
                        <motion.h1
                            initial={{
                                opacity: 0,
                                transform: "translateY(70px)",
                            }}
                            variants={{
                                hover: {
                                    opacity: 1,
                                    transform: "translateY(0px)",
                                },
                            }}
                            transition={{ duration: 1 }}
                            className="flex flex-col items-center justify-center max-w-lg leading-snug text-4xl text-center relative z-10 mb-6"
                        >
                            {HomepageData.ProjectDescriptions.circles ||
                                "Circles X: Product Strategy & Concepts"}
                        </motion.h1>
                        <Link href={"/"}>
                        <motion.button
                            initial={{
                                opacity: 0,
                                transform: "translateY(70px)",
                            }}
                            variants={{
                                hover: {
                                    opacity: 1,
                                    transform: "translateY(0px)",
                                },
                            }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="border-2 border-white rounded-full px-6 py-2 mr-6"
                        >
                            View Story
                        </motion.button>
                        </Link>
                    </div>
                    <Image
                        src="/hero/circles.png"
                        alt="circles"
                        fill
                        className="mb-8 rounded-xl"
                    />
                </motion.div>
            </section>
        </main>
    );
}
