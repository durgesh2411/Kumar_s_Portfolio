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
            fieldValue: 'Durgesh Singh',
        },
        {
            fieldName: 'Phone',
            fieldValue: '(+91) 8287372972',
        },
        {
            fieldName: 'Experience',
            fieldValue: '1+ years',
        },
        {
            fieldName: 'Github',
            fieldValue: 'durgesh2411',
        },
        {
            fieldName: 'Nationality',
            fieldValue: 'Indian',
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
            fieldName: 'Languages',
            fieldValue: 'English, Hindi',
        },
    ]
};

const experience = {
    icon: '/D_assets/resume/badge.svg',
    title: 'My experience',
    description: 'I have worked in various roles in the tech industry, including software engineer, data analyst, and project manager. I have also worked as a freelancer, contributing to various projects and initiatives.',
    items: [
        {
           company:"NRSC-ISRO.",
           position:"ML Engineer Intern",
           duration:"Sept 2024 - Present",
        },
         {
            company:"Blockchain club VIT'B.",
            position:"Lead R&D division",
            duration:"June 2024 - June 2024",
         },
         {
            company:"Omdena Berlin Chap.",
            position:"Task-Lead",
            duration:"June 2023 - June 2024",
         },
         {
            company:"Meraki VIT'B.",
            position:"Event-Lead",
            duration:"June 2021 - June 2024",
         },
         {
            company:"Lift for Upliftment.",
            position:"Senior NGO-worker",
            duration:"June 2021 - June 2024",
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
            degree: "Integrated Master of CSE in AI and ML",
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
            institution: "K V Southern Command, Pune",
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

import{
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '../../components/ui/tooltip';

import { ScrollArea } from "../../components/ui/scroll-area";
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
            <Tabs defaultValue="experience" 
            className="flex flex-col xl:flex-row gap-[60px]">
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About me</TabsTrigger>
                </TabsList>
                {/* content */}
                <div className="min-h-[70vh] w-full">
                    {/* experience */}
                    <TabsContent value="experience" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{experience.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-suto xl:mx-0">
                                {experience.description}
                            </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                                            flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                    {item.position}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full
                                                    bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                    
                        </div>
                    </TabsContent>
                     {/* education */}
                     <TabsContent value="education"className="w-full">
                     <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{education.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-suto xl:mx-0">
                                {education.description}
                            </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                                            flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                    {item.degree}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full
                                                    bg-accent"></span>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                    
                        </div>
                    </TabsContent>
                    {/* skills */}
                    <TabsContent value="skills"className="w-full h-full">
                       <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <div>
                            <h3 className="text-4xl font-bold">{skills.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                            {skills.description}
                            </p>
                        </div>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                            {skills.skillList.map((skill, index) => {
                                return <li key={index}>
                                   <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329]
                                        rounded-xl flex justify-center items-center group">
                                            <div 
                                            className="text-6xl group-hover:text-accent
                                            transtion-all duration-300">
                                                {skill.icon}
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="capitalize">{skill.name}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                    </TooltipProvider>
                                </li>;
                            })}
                        </ul>
                       </div>
                    </TabsContent>
                    {/* about */}
                    <TabsContent value="about"className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">
                                {about.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                            {about.description}
                            </p>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                {about.info.map((item, index) => {
                                    return(
                                    <li 
                                    key={index} 
                                    className="flex items-center justify-center
                                    xl:justify-start gap-4">
                                        <span className="text-white/60">{item.fieldName}</span>
                                        <span className="text-xl">{item.fieldValue}</span>
                                    </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    </motion.div>
);
};
    
    export default Resume;