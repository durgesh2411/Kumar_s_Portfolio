"use client";

import {motion} from "framer-motion"; 
import React, { useState } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"

import {BsArrowUpRight, BsGithub} from "react-icons/bs";

import {Tooltip, 
        TooltipContent, 
        TooltipProvider,
        TooltipTrigger} 
        from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

// import { imageConfigDefault } from "next/dist/shared/lib/image-config";

const projects = [
    {
      num: "01",
      category: "Weather-Forecast",
      title: "X-ray-Chest-Diagnosis",
      description: "The aim is to predict the 14-day average of maximum and minimum temperatures for various US locations, using historical weather data. This project supports community preparedness against extreme weather from climate change.",
      stack: [{ name: "ANN" }, { name: "DeepLearning" }, { name: "Keras" }, { name: "Tensorflow" }, { name: "MongoDB" }],
      image: '/D_assets/work/thumb1.png',
      live: "",
      github: "https://github.com/durgesh2411/Extreme-14-Day-Weather-Forecast",
    },

  {
    num: "02",
    category: "X-ray Chest Diagnosis",
    title: "X-ray-Chest-Diagnosis",
    description:"My project is based on artificial neural network (ANN) which is a type of deep learning model used for regression analysis. It is trained on a large dataset of weather data and is capable of predicting the weather for a given day.",
    stack: [{ name: "CNN" }, { name: "DeepLearning" }, { name: "Keras" }, { name: "Tensorflow" }, { name: "Python" }],
    image:'/D_assets/work/thumb2.png',
    live:"",
    github:"https://github.com/durgesh2411/X-ray-Chest-Diagnosis",
  },
  {
    num: "03",
    category: "Web-Development",
    title: "Vibify",
    description:
    "My project is based on full stack development which is a type of web development. It is a web application that allows users to create and share thier personalized song playlists.",
    stack:[{name:"React.js"},{name:"Node.js"},{name:"Express.js"},{name:"JavaScript"}],
    image:'/D_assets/work/thumb3.png',
    live:"",
    github:"",
  },
  {
  num: "04",
  category: "Sign Language Recognition",
  title: "Vibify",
  description:
  "Sign-Language-Recognition-using-LSTM-model",
  stack: [{ name: "LSTM" }, { name: "Keras" }, { name: "Tensorflow" }, { name: "Machine Learning" }],
  image:'/D_assets/work/thumb3.png',
  live:"",
  github:"https://github.com/durgesh2411/Sign-Language-Recognition-using-LSTM-model",
},
{
    num: "05",
    category: "Internet Service Churn Pridiction",
    title: "Vibify",
    description:
    "Internet Service Churn Prediction using Deep Learning (Tensorflow and Keras).",
    stack: [ { name: "DeepLearning" }, { name: "Keras" }, { name: "Tensorflow" }],
    image:'/D_assets/work/thumb3.png',
    live:"",
    github:"https://github.com/durgesh2411/Sign-Language-Recognition-using-LSTM-model",
  },
];


const Work = () => {
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper, e) => {
        //get the current slide index
        const currentSlide = swiper.activeIndex;
        //update project state based on the current slide index
        setProject(projects[currentSlide]);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 ,
                transition:{delay: 2.4, duration:0.4, ease:"easeIn"},
        }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none"
                    >
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div
                                className="text-8xl leading-none font-extrabold text-transparent text-outline"
                            >
                                {project.num}
                            </div>
                            {/* project category */}
                            <h2
                                className="text-[42px] font-hold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize"
                            >
                                {project.category} project
                            </h2>
                            {/* project description */}
                            <p className="text-white/60">{project.description}</p>
                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => (
                                    <li key={index} className="text-xl text-accent">
                                        {item.name}
                                        {/* Comma for items except the last */}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                ))}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* button */}
                            <div className="flex item-centergap-4">
                                    {/* live link button*/}
                                    <Link href={project.live}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                                                bg-white/5 flex justify-center items-center group">
                                                    <BsArrowUpRight  className="text-white text-3xl
                                                    group-hover:text-accent"/>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Live project</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                         {/* github project button*/}
                                         <Link href={project.github}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                                                bg-white/5 flex justify-center items-center group">
                                                    <BsGithub  className="text-white text-3xl
                                                    group-hover:text-accent"/>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>GitHub repository</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                        spaceBetween={30}
                        slidePerView={1}
                        className="xl:h-[520px] mb-12"
                        onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return <SwiperSlide
                                    key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center
                                        items-center bg-pink-50/20">
                                            {/* overlay */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10
                                            z-10">

                                            </div>
                                            {/* image */}
                                            <div className="relative w-full h-full">
                                                <Image src={project.image} 
                                                alt="project image" 
                                                fill 
                                                className="object-cover" 
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>;
                            })}
                            {/* sliderbuttons */}
                            <WorkSliderBtns 
                            containerStyles="flex gap-2 absolute right-0 
                            bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between 
                            xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover
                            text-primary text-[22px] w-[44px] h-[44px] flex justify-center
                            items-center transition-all"/>

                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;
