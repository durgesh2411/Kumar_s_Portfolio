import Link from "next/link";

import{FaGithub, FaLinkedin, FaTwitter, FaInstagram} from "react-icons/fa";


const socials = [
    {icon: <FaGithub />, path: "https://github.com/durgesh2411"},
    {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/durgesh-singh-745263252//"},
    {icon: <FaTwitter />, path: "https://twitter.com/durgeshsingh"},
    {icon: <FaInstagram />, path: "https://www.instagram.com/itzz.durgeshh/"},
];
    

const Social = ({containerStyles, iconStyles}) => {
    return (
      <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            );
        })}
      </div>
    );
};
    
    export default Social;