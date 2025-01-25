import Link from "next/link";

import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/HenriqueDeJesus" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/henrique-guilherme-jesus-hernandes-73a72728a/" },
    { icon: <FaDiscord />, path: "https://discord.gg/8x4dpFYU" },
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