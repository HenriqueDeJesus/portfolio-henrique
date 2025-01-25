"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "Streamilit",
        title: "project 1",
        description:
            "Sistema desenvolvido em Streamlit que faz a requisição em uma API que está em meu github com o nome do repositório flix_api que tem como objetivo mostrar os filmes, atores, gênero do filme e avaliação do filme além disso tem a tela de login e uma home que traz gráficos dinamicos para uma análise de dados. Lembrando que o sistema permite fazer o CRUD completo e com isso faz a atualização dos gráficos de forma automática.",
        stack: [{ name: "Python" }, { name: "Streamlit" }],
        image: '/assets/work/flixApp.png',
        live: "",
        github: "https://github.com/HenriqueDeJesus/flix_app",
    },
    {
        num: "02",
        category: "SGE (Sistema de Gestão de Estoque)",
        title: "SGE",
        description:
            "O Sistema de Gestão de Estoque (SGE) é um projeto desenvolvido utilizando Django e Bootstrap 5, com o objetivo de facilitar o gerenciamento de estoque de forma eficiente. O projeto inclui funcionalidades full stack, além de uma API que pode ser utilizada para integração com outros sistemas. Durante o desenvolvimento, foram abordados temas como levantamento de requisitos, modelagem de banco de dados e modelagem do sistema.",
        stack: [{ name: "Python" }, { name: "Django" }, { name: "Bootstrap 5" }],
        image: '/assets/work/sge.png',
        live: "",
        github: "https://github.com/HenriqueDeJesus/SGE",
    },
    {
        num: "03",
        category: "API",
        title: "project 3",
        description:
            "A API foi desenvolvida com o Django REST Framework e tem como finalidade exibir informações sobre filmes, avaliações e outros detalhes. Essa API está sendo consumida por um projeto feito com Streamlit, permitindo uma visualização mais amigável. Além disso, as requisições à API podem ser feitas diretamente pelo Postman.",
        stack: [{ name: "Python" }, { name: "Django" }, { name: "Django REST framework" }],
        image: '/assets/work/flixApi.png',
        live: "",
        github: "https://github.com/HenriqueDeJesus/flix_api",
    },
    {
        num: "04",
        category: "Carros",
        title: "project 4",
        description:
            "Este projeto web foi desenvolvido utilizando o framework Django com a linguagem de programação Python e tem como finalidade gerenciar o cadastro de marcas e veículos. O sistema permite a criação, edição, exclusão e visualização dos detalhes de cada veículo. Utilizei o banco de dados PostgreSQL, o servidor web Nginx, e o aplicativo de servidor uWSGI para garantir a robustez e eficiência da aplicação. O deploy foi realizado na AWS, utilizando uma instância EC2 para assegurar sua alta disponibilidade e desempenho.",
        stack: [{ name: "Python, Django, HTML, CSS, PostgreSQL, AWS" }],
        image: '/assets/work/car.png',
        live: "",
        github: "https://github.com/HenriqueDeJesus/carros",
    },
    {
        num: "05",
        category: "Mundo Pixar",
        title: "project 5",
        description:
            "Este projeto é uma página web que apresenta uma seleção de filmes da Pixar, permitindo aos usuários visualizar detalhes sobre esses filmes e personagens relacionados. A aplicação conta com uma funcionalidade de pesquisa que facilita a busca por filmes ou personagens específicos.",
        stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
        image: '/assets/work/pixar.png',
        live: "https://pixar-ivory.vercel.app/",
        github: "https://github.com/HenriqueDeJesus/Pixar",
    },
    {
        num: "06",
        category: "X-MEN",
        title: "project 6",
        description:
            "Este projeto é uma página web interativa que apresenta os personagens dos X-MEN de forma dinâmica. Ao passar o mouse sobre um personagem, os usuários podem visualizar uma breve descrição sobre ele.",
        stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
        image: '/assets/work/xmen.png',
        live: "https://henriquedejesus.github.io/x-men-szpc/",
        github: "https://github.com/HenriqueDeJesus/x-men-szpc",
    },
    {
        num: "07",
        category: "Power BI",
        title: "project 7",
        description:
            "Este projeto apresenta dashboard dinâmicos desenvolvidos no Power BI com o objetivo de demonstrar, por meio de dados fictícios, a receita financeira de uma empresa. É possível visualizar a evolução da receita ao longo dos anos, com comparações anuais e mensais. O projeto também oferece a funcionalidade de filtros, permitindo que o usuário selecione uma ou mais receitas específicas para análise detalhada. Além disso, utiliza a ferramenta de previsão do Power BI para projetar possíveis arrecadações futuras, e também é possível verificar quanto foi arrecadado em relação ao previsto e ao previsto atualizado.",
        stack: [{ name: "Power BI" }],
        image: '/assets/work/dividas.png',
        live: "",
        github: "",
    },
    {
        num: "08",
        category: "Dashboard de Vendas",
        title: "project 8",
        description:
            "Este projeto de dashboard de vendas criado no Excel e utilizando os dados do PostgreSQL, apresenta os principais indicadores de desempenho e com os principais drivers dos resultados do mês.",
        stack: [{ name: "Excel" }, { name: "PostgreSQL" }],
        image: '/assets/work/vendas.png',
        live: "",
        github: "",
    },
    {
        num: "09",
        category: "Análise de perfil dos leads",
        title: "project 9",
        description:
            "Este projeto de análise de perfil dos leads criado no Excel e utilizando os dados do PostgreSQL, busca trazer as principais características dos leads que visitam a loja de um e-commerce.",
        stack: [{ name: "Excel" }, { name: "PostgreSQL" }],
        image: '/assets/work/leads.png',
        live: "",
        github: "",
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;
        // update project state based on current slide index
        setProject(projects[currentIndex]);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-7xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* project category */}
                            <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                Projeto {project.category}
                            </h2>
                            {/* project description */}
                            <p className="text-white/60 text-[14px]">{project.description}</p>
                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {/* remove the last comma */}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* button */}
                            <div className="flex items-center gap-4">
                                {/* live project button */}
                                {project.live && (
                                    <Link href={project.live}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Live project</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                )}
                                {/* github project button */}
                                {project.github && (
                                    <Link href={project.github}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Github repository</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            {/* overlay */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            {/* image */}
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={project.image}
                                                    fill
                                                    className="object-cover"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            {/* slider buttons */}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work