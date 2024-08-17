"use client";

import { 
    FaHtml5, 
    FaCss3, 
    FaJs, 
    FaReact, 
    FaFigma, 
    FaNode,  
} from "react-icons/fa";

import { 
     SiTailwindcss, 
     SiNextdotjs
} from "react-icons/si";

//about data
const about = {
    title: 'About Me',
    description: "I am a software developer with a passion for creating innovative solutions that make a difference in the world I have a strong background in web development, machine learning, and cloud computing, and I am constantly learning and growing as a professional.",
    info: [
        {
            fieldName: 'Name',
            fieldValue: 'Durgesh',
        },
        {
            fieldName: 'Phone',
            fieldValue: '+91 8287372972',
        },
        {
            fieldName: 'Email',
            fieldValue: 'durgesh.vns24@gmail.com',
        },
        {
            fieldName: 'Address',
            fieldValue: 'Pune, India',
        },
        {
            fieldName: 'Experience',
            fieldValue: '1+ years',
        },
        {
            fieldName: 'Languages',
            fieldValue: 'English, Hindi, Marathi',
        },
    ]
};

const experience = {
    icon: '/D_assets/resume/badge.svg',
    title: 'My experience',
    description: 'I have worked in various roles in the tech industry, including software engineer, data analyst, and project manager. I have also worked as a freelancer, contributing to various projects and initiatives.',
    items: [
        {
           company:"NRSC-ISRO",
           position:"Machine Learning Engineer",
           duration:"Sept 2024 - Present",
        },
        {
            company:"Omdena.",
            position:"Task Lead",
            duration:"June 2023- June 2024",
         }
    ],  
};


//education data
const education = {
    icon: '/D_assets/resume/cap.svg',
    title: 'My education',
    description: 'I have completed my undergraduate studies in Computer Science and Engineering at VIT University. I have also completed my Masters in Data Science in Artificial Intelligence  and Machine Learnig.',
    items: [
        {
            institution: "VIT University Bhopal",
            degree: "Integrated Master of Science in Computer Science and Engineering",
            duration: "2021-2026",
            CGPA: "9.2",
        },
        {
            institution: "Norosjee Wadia Collage",
            degree: "Intermediate",
            duration: "2019-2020",
            grade: "A",
        },
        {
            institution: "Kendriya Vidyalaya Southern Command, Pune",
            degree: "High School",
            duration: "2017-2018",
            CGPA: "10",
        }
    ],
};

//skills data
const skills = {
    icon: '/D_assets/resume/cap.svg',
    title: 'My Skills',
    description: 'I have a strong background in web development, machine learning, and cloud computing. I am constantly learning and growing as a professional.',
    skillList: [
        {
            icon: <FaHtml5 />,
            name: 'HTML-5',
            level: 'Advanced',
        },
        {
            icon: <FaCss3 />,
            name: 'CSS-3',
            level: 'Advanced',
        },
        {
            icon: <FaJs />,
            name: 'JavaScript',
            level: 'Advanced',
        },
        {
            icon: <FaReact />,
            name: 'react.js',
            level: 'Intermediate',
        },
        {
            icon: <SiNextdotjs />,
            name: 'Next.js',
            level: 'Advanced',
        },

        {
            icon: <SiTailwindcss />,
            name: 'Tailwind CSS',
            level: 'Intermediate',
            
        },
        
        {
            
            icon: <FaFigma />,
            name: 'Figma',
            level: 'Intermediate',
        },

        {
            
            icon: <FaNode />,
            name: 'node.js',
            level: 'Intermediate',
        }
            
    ],
};
import { Tabs, TabContent, TabsList, TabsTrigger } from "@/components/tabs";
z
import{
    ToolTip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@components/ui/tooltip';

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion} from "framer-motion";

const Resume = () => {
    return( 
    <motion.div
      initial={{opacity: 0}}
    animate={{
        opacity: 1, 
        transition:{
        delay: 2.4,
        duration: 0.4,
        ease: 'easeIn'
    },
    }} 
    className="min-h-[80vh] felx items-center justify-center py-12 xl:py-0"
    >
        <div className="container m-auto">
            <Tabs>
                <TabsList>
                    <TabsTrigger>Experience</TabsTrigger>
                    <TabsTrigger>Education</TabsTrigger>
                    <TabsTrigger>Skills</TabsTrigger>
                    <TabsTrigger>About me</TabsTrigger>

                </TabsList>
            </Tabs>
        </div>

    </motion.div>
);
};
    
    export default Resume;