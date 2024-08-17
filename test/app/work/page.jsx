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
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

const projects = [
  {
    num: "01",
    category: "CNN",
    title: "X-ray-Chest-Diagnosis",
    description:"My project is based on convolution neural network (CNN) which is a type of deep learning model used for image classification. It is trained on a large dataset of images and is capable of recognizing and classifying objects within images.",
    stack:[{name:"React.js"},{name:"Node.js"},{name:"Express.js"},{name:"MongoDB"},{name:"Mongoose"},{name:"Figma"},{name:"HTML"},{name:"CSS"},{name:"JavaScript"}],
    image:'/D_assets/work/thumb1.png',
    live:"",
    github:"",
  },
  {
    num: "02",
    category: "ANN",
    title: "",
    description:"My project is based on convolution neural network (CNN) which is a type of deep learning model used for image classification. It is trained on a large dataset of images and is capable of recognizing and classifying objects within images.",
    stack:[{name:"React.js"},{name:"Node.js"},{name:"Express.js"},{name:"MongoDB"},{name:"Mongoose"},{name:"Figma"},{name:"HTML"},{name:"CSS"},{name:"JavaScript"}],
    image:'/D_assets/work/thumb1.png',
    live:"",
    github:"",
  },
  {
    num: "01",
    category: "CNN",
    title: "X-ray-Chest-Diagnosis",
    description:"My project is based on convolution neural network (CNN) which is a type of deep learning model used for image classification. It is trained on a large dataset of images and is capable of recognizing and classifying objects within images.",
    stack:[{name:"React.js"},{name:"Node.js"},{name:"Express.js"},{name:"MongoDB"},{name:"Mongoose"},{name:"Figma"},{name:"HTML"},{name:"CSS"},{name:"JavaScript"}],
    image:'/D_assets/work/thumb1.png',
    live:"",
    github:"",
  },
];





const Work = () => {
    return <div>work page</div>;
};
    
    export default Work;