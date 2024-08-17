import { Button } from "@/components/ui/Button";
import { Section, SettingsIcon } from "lucide-react";
import { FiDownload } from "react-icons/fi";

//components
import Social from "../components/Social";
import Photo from "../components/Photo";
import Stats from "../components/Stats";


const Home = () => {
  return (
    <section classname="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center 
        justify-between xl:pt-8 xl:pb-24">
          {/* {text} */}
        <div className="text-center xl:text-left order-2 xl:order-none">
        <span>Software Developer</span>
        <h1 className=" h1 mb-6">
          Hello I'm <br /> <span className="text-accent">Durgesh Singh</span> 
        </h1>
        <p className="max-w-[550px] mb-9 text-white/80">
          I excel at crafting smooth elegent digital experiences and 
          I am proficient in various programming languages 
          having  numerous specializations in field like Machine Learning.
        </p>
        {/* {btn & socials} */}
        <div className="flex flex-col xl:flex-row items-center gap-8">
          <Button 
          variant="outline"
          size="lg"
          className="uppercase flex items-center gap-2 px-6 py-3 border-2 text-lg font-semibold"
          >
            <span>Download CV</span>
            <FiDownload className="text-xl"/>
          </Button>
          <div className="mb-8 xl:mb-0">
            <Social 
            containerStyles="flex gap-6"
            iconStyles="w-9 h-9 border border-accent rounded-full flex
            justify-center items-center text-accent text-base hover:bg-accent
            hover:text-primary hover:transition-all duration-500"
            />
          </div>
        </div>
      </div>
      {/* {photo} */}
      <div className="order-1 xl:order-none mb-8 xl:mb-0">
        <Photo />
      </div>
        </div>
        </div>
        <Stats />
    </section>
  );
};
  
  export default Home;
