"use client"

import {
    FaHtml5, 
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
    FaGit,
    FaGithub,
    FaPython,
    FaPhp,
    FaJava,
    FaBootstrap,
    FaAngular,
    FaLaravel,
    FaAws,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiDjango, SiKotlin, SiPostgresql, SiMysql, SiSqlite, SiMongodb, SiGooglecloud } from "react-icons/si";

// about data
const about = {
    title: "Sobre mim",
    description:
        "Sou desenvolvedor full-stack com experiência em Python, Django, análise de dados e deploy de aplicações na AWS. Tenho interesse em automação de processos e criação de sistemas eficientes que otimizam a gestão de dados.",
    info: [
        {
            fieldName: "Nome",
            fieldValue: "Henrique Guilherme"
        },
        {
            fieldName: "Telefone",
            fieldValue: "11 96721-5295"
        },
        {
            fieldName: "Experiência",
            fieldValue: "8 Meses"
        },
        {
            fieldName: "Discord",
            fieldValue: "henriq3156"
        },
        {
            fieldName: "Nacionalidade",
            fieldValue: "Brasil"
        },
        {
            fieldName: "Email",
            fieldValue: "henriquedejesushernandes@gmail.com"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Disponível"
        },
        {
            fieldName: "Idiomas",
            fieldValue: "Português, Inglês"
        },
    ]
};

// experience data
const experience = {
    icon: "/assets/resume/badge.svg",
    title: "Minha experiência",
    description:
        "Minhas experiências de trabalho, demontrando as áreas que eu atuei no mercado de trabalho",
    items: [
        {
            company: "Projetos Freelance",
            position: "Desenvolvedor Mobile",
            duration: "11/2024 - 12/2024",
        },
        {
            company: "Prefeitura Municipal de Ferraz de Vasconcelos",
            position: "Estagiário em Análise de Dados e Desenvolvedor de Sistemas",
            duration: "11/2023 - 06/2024",
        },
    ],
};

// education data
const education = {
    icon: "/assets/resume/cap.svg",
    title: "Minha educação",
    description:
        "Cursos realizados e em andamentos",
    items: [
        /* 2024 ou cursos que estou fazendo */
        {
            institution: "Fatec Ferraz de Vasconcelos",
            degree: "Análise e Desenvolvimento de Sistemas",
            duration: "2021 - 2024",
            statusCourse: "Concluído",
        },
        {
            institution: "Codeacademy PycodeBR",
            degree: "Django Master - Aplicações Web com Python e Django",
            duration: "2024",
            statusCourse: "Concluído",
        },
        {
            institution: "Udemy",
            degree: "Curso de Python 3 do básico ao avançado",
            duration: "2024",
            statusCourse: "Cursando",
        },
        {
            institution: "Udemy",
            degree: "SQL para Análise de Dados: Do básico ao avançado",
            duration: "04/10/2024",
            statusCourse: "Concluído",
        },
        {
            institution: "Udemy",
            degree: "Curso de JavaScript e TypeScript do básico ao avançado JS/TS",
            duration: "2024",
            statusCourse: "Cursando",
        },
        {
            institution: "DIO (Digital Innovation One)",
            degree: "Bootcamp Claro - Java com Spring Boot",
            duration: "2024",
            statusCourse: "Cursando",
        },
        {
            institution: "Alura",
            degree: "Imersão Dev com Google Gemini",
            duration: "2024",
            statusCourse: "Concluído",
        },
        {
            institution: "Alura",
            degree: "Imersão Front-End",
            duration: "2024",
            statusCourse: "Concluído",
        },
        {
            institution: "Alura",
            degree: "Imersão Python: Do Excel à Análise de Dados",
            duration: "2024",
            statusCourse: "Concluído",
        },
        {
            institution: "Rocketseat",
            degree: "NLW Expert trilha de Python",
            duration: "2024",
            statusCourse: "Concluído",
        },
        {
            institution: "DIO (Digital Innovation One)",
            degree: "Ganhando Produtividade com Stream API",
            duration: "02/10/2024",
            statusCourse: "Concluído",
        },
        {
            institution: "DIO (Digital Innovation One)",
            degree: "Conhecendo Collections Java",
            duration: "19/09/2024",
            statusCourse: "Concluído",
        },
        {
            institution: "DIO (Digital Innovation One)",
            degree: "Pilares da Programação Orientada a Objetos em Java",
            duration: "28/08/2024",
            statusCourse: "Concluído",
        },
        {
            institution: "DIO (Digital Innovation One)",
            degree: "Fundamentos da Programação Orientada a Objetos com Java",
            duration: "27/08/2024",
            statusCourse: "Concluído",
        },
        {
            institution: "DIO (Digital Innovation One)",
            degree: "Sintaxe Básica com Java",
            duration: "24/08/2024",
            statusCourse: "Concluído",
        },
        {
            institution: "DIO (Digital Innovation One)",
            degree: "Introdução ao Ambiente Java e Projetos Colaborativos",
            duration: "15/08/2024",
            statusCourse: "Concluído",
        },
        {
            institution: "DIO (Digital Innovation One)",
            degree: "Versionamento de Código com Git e GitHub",
            duration: "14/08/2024",
            statusCourse: "Concluído",
        },
        {
            institution: "DIO (Digital Innovation One)",
            degree: "Ambiente de Desenvolvimento Java",
            duration: "13/08/2024",
            statusCourse: "Concluído",
        },
        {
            institution: "DIO (Digital Innovation One)",
            degree: " Introdução à Plataforma Java",
            duration: "13/08/2024",
            statusCourse: "Concluído",
        },        
        /* 2023 */
        {
            institution: "Senai Nami Jafet Mogi das Cruzes",
            degree: "Implantação de Serviços em Nuvem - AWS Cloud Practitioner Foundational",
            duration: "02/09/2023 - 11/11/2023",
            statusCourse: "Concluído",
        },
        {
            institution: "Cisco Networking Academy",
            degree: "CCNAv7: Introduction to Networks",
            duration: "2023",
            statusCourse: "Concluído",
        },
        {
            institution: "Partner: NDG Linux Unhatched",
            degree: "Cisco Networking Academy",
            duration: "2023",
            statusCourse: "Concluído",
        },
        {
            institution: "DIO (Digital Innovation One)",
            degree: " Introdução ao Desenvolvimento e Criação de Jogos",
            duration: "30/10/2023",
            statusCourse: "Concluído",
        },
        {
            institution: "DIO (Digital Innovation One)",
            degree: "Fundamentos de Lógica de Programação",
            duration: "25/06/2023",
            statusCourse: "Concluído",
        },
        /* 2022 */
        {
            institution: "Fundação Bradesco",
            degree: "HTML - Básico",
            duration: "14/09/2022",
            statusCourse: "Concluído",
        },
        {
            institution: "Fundação Bradesco",
            degree: "Microsoft Word 2016 - Avançado",
            duration: "08/08/2022",
            statusCourse: "Concluído",
        },
        {
            institution: "Fundação Bradesco",
            degree: "Microsoft Word 2016 - Intermediário",
            duration: "29/07/2022",
            statusCourse: "Concluído",
        },
        {
            institution: "Fundação Bradesco",
            degree: "Microsoft Excel 2016 - Intermediário",
            duration: "29/07/2022",
            statusCourse: "Concluído",
        },
        {
            institution: "Fundação Bradesco",
            degree: "Microsoft Word 2016 - Básico",
            duration: "22/07/2022",
            statusCourse: "Concluído",
        },
        {
            institution: "Fundação Bradesco",
            degree: "Microsoft Excel 2016 - Básico",
            duration: "22/07/2022",
            statusCourse: "Concluído",
        },
        {
            institution: "Fundação Bradesco",
            degree: "Estratégia de Negócios",
            duration: "29/04/2022",
            statusCourse: "Concluído",
        },
        {
            institution: "DIO (Digital Innovation One)",
            degree: "Modelagem de Negócios",
            duration: "28/04/2022",
            statusCourse: "Concluído",
        },
        {
            institution: "DIO (Digital Innovation One)",
            degree: "Projetos ágeis com SCRUM",
            duration: "28/03/2022",
            statusCourse: "Concluído",
        },
        /* 2021 */
        {
            institution: "Fundação Bradesco",
            degree: "Fundamentos de TI – Hardware e Software",
            duration: "03/10/2021",
            statusCourse: "Concluído",
        },        
        /* 2018 */
        {
            institution: "Informática – Windows, Word, Excel, e PowerPoint",
            degree: "Quality Training Educação Profissional",
            duration: "14/12/2018",
            statusCourse: "Concluído",
        },
    ],
};

// skills data
const skills = {
    title: "Minhas habilidades",/**My skills */
    description:
        "Habilidades adquiridas através do trabalho, cursos e faculdade.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <FaFigma />,
            name: "figma",
        },
        {
            icon: <FaGit />,
            name: "git",
        },
        {
            icon: <FaGithub />,
            name: "github",
        },
        {
            icon: <FaPython />,
            name: "python",
        },
        {
            icon: <FaPhp />,
            name: "php",
        },
        {
            icon: <FaJava />,
            name: "java",
        },
        {
            icon: <FaBootstrap />,
            name: "bootstrap",
        },
        {
            icon: <FaAngular />,
            name: "angular",
        },
        {
            icon: <FaLaravel />,
            name: "laravel",
        },
        {
            icon: <FaAws />,
            name: "aws",
        },
        {
            icon: <SiDjango />,
            name: "django",
        },
        {
            icon: <SiKotlin />,
            name: "kotlin",
        },
        {
            icon: <SiPostgresql />,
            name: "postgresql",
        },
        {
            icon: <SiMysql />,
            name: "mysql",
        },
        {
            icon: <SiSqlite />,
            name: "sqlite",
        },
        {
            icon: <SiMongodb />,
            name: "mongodb",
        },
        {
            icon: <SiGooglecloud />,
            name: "google cloud",
        },
    ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mz-0 gap-6">
                        <TabsTrigger value="experience">Experiência</TabsTrigger>
                        <TabsTrigger value="education">Educação</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">Sobre mim</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px) text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index)=> {
                                            return (
                                            <li 
                                                key={index}  /* h-[184] era o valor original */
                                                className="bg-[#232329] h-[260px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                    {item.position}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
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
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index)=> {
                                            return (
                                            <li 
                                                key={index}
                                                className="bg-[#232329] h-[289px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{item.statusCourse}</span>
                                                <h3 className="text-xl max-w-[400px] min-h-[60px] text-center lg:text-left" text-2xl>
                                                    {item.degree}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
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
                        <TabsContent value="skills" className="w-full h-full">
                        <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {skills.description}
                                </p>
                            </div>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                            {skills.skillList.map((skill, index) => { 
                                return (
                                    <li key={index}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                        {skill.icon}
                                                    </div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="capitalize">{skill.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </li>
                                ); 
                            })}
                        </ul>
                        </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent 
                            value="about" 
                            className="w-full text-center xl:text-left"
                        >
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="flex items-center justify-center xl:justify-start gap-4"
                                            >
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

export default Resume