"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
    {
        num: "01",
        title: "Desenvolvimento Web Full-Stack",
        description: 
            "Desenvolvimento de aplicações web completas utilizando Django e outras tecnologias modernas de front-end e back-end, além da utilização de banco de dados relacionais e não relacionais, com deploy em plataformas como AWS.",
        href: ""
    },
    {
        num: "02",
        title: "Desenvolvimento de APIs REST",
        description: 
            "Desenvolvimento de APIs robustas com Django para integração de sistemas, garantindo segurança e escalabilidade, consumidas por aplicações em diversas plataformas.",
        href: ""
    },
    {
        num: "03",
        title: "Análise de Dados",
        description: 
            "Criação de dashboards interativos e análise de grandes volumes de dados usando Power BI e Python para otimizar processos e gerar insights estratégicos.",
        href: ""
    },
    {
        num: "04",
        title: "Consultoria",
        description: 
            "Reestruturação empresarial, desenvolvimento de sistemas, integração de APIs e análise de dados para soluções tecnológicas sob medida.",
        href: ""
    }
];

import { motion } from "framer-motion";

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return(
                            <div 
                                key={index}
                                className="flex-1 flex flex-col justify-center gap-6 group"
                            >
                                {/* top */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                        {service.num}
                                    </div>
                                    {service.href && (
                                        <Link 
                                            href={service.href}
                                            className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                        >
                                            <BsArrowDownRight className="text-primary text-3xl" />
                                        </Link>
                                    )}
                                </div>
                                {/* title */}
                                <h2 className="text-[30px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                    {service.title}
                                </h2>
                                {/* description */}
                                <p className="text-white/60">{service.description}</p>
                                {/* border */}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services