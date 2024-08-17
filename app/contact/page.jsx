"use client";

import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Textarea } from "../../components/ui/Textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    placeholder: "Phone number",
    name: "phone",
    description: "(+91) 8287372972",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    placeholder: "Email",
    name: "email",
    description: "durgesh.vns02@gmail.com",
    required: true,
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    placeholder: "Address",
    name: "address",
    description: "B.T Kawde Road,Mundawa,Pune-411036",
    required: true,
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores doloremque dolore quos quia voluptatem tempore velit
                fugit laborum et consequuntur ipsa quisquam voluptas.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Use the Input component instead of raw input elements */}
                <Input type="text" placeholder="First Name" />
                <Input type="text" placeholder="Last Name" />
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Phone" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                    <SelectValue  placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Select a service</SelectLabel>
                        <SelectItem value="est">Machine Learning</SelectItem>
                        <SelectItem value="cst">Deep Learning</SelectItem>
                        <SelectItem value="mst">Full-Stack-Development</SelectItem>
                        <SelectItem value="hst">Dev Ops</SelectItem>
                    </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea 
              className="h-[200px]"
              placeholder="Type your message here."
                />
                {/* btn */}
                <Button size="md" className="max-w-40">
                    Send message
                </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 
          xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                    return(
                    <li 
                    key={index} className="flex items-center gap-6">
                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] 
                        bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                            <div className="text-[28px]">{item.icon}</div>
                        </div>
                        <div className="flex-1">
                            <p className="text-white/60">{item.title}</p>
                            <h3 className="text-xl">{item.description}</h3>
                        </div>
                    </li>
                    );
                })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
