"use client";
import { useEffect, useState } from "react"; // Para carregar o script no lado do cliente
import emailjs from "emailjs-com";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion"; // Importando o motion

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

// Informações de contato
const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Telefone",
        description: "(+55) 11 96721-5295",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "henriquedejesushernandes@gmail.com",
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Endereço",
        description: "Avenida Itaquera, São Paulo",
    },
];

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(false);
    emailjs.init("KIE9MJNHWlOoyLmMt");

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true); // Começar o carregamento
        const templateParams = {
            name: event.target.firstname.value,
            lastname: event.target.lastname.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            list: event.target.list.value,
            message: event.target.message.value,
        };

        emailjs.send('service_nibc36d', 'template_6afg2ro', templateParams)
            .then((response) => {
                setLoading(false);
                setSent(true);
                setTimeout(() => setSent(false), 3000); // Ocultar a mensagem após 3 segundos
            })
            .catch((error) => {
                console.log('FAILED...', error);
                setLoading(false);
                setError(true);
            });
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6 overflow-hidden"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form id="contact-form" className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
                            <h3 className="text-4xl text-accent">Vamos trabalhar juntos</h3>
                            <p className="text-white/60">
                                Me mande uma mensagem, para que eu possa te ajudar e esclarecer suas dúvidas, vamos nos conectar.
                            </p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input id="firstname" name="firstname" type="text" placeholder="Nome" required />
                                <Input id="lastname" name="lastname" type="text" placeholder="Sobrenome" required />
                                <Input id="email" name="email" type="email" placeholder="Email" required />
                                <Input id="phone" name="phone" type="tel" placeholder="Número de telefone" required />
                            </div>
                            {/* select */}
                            <Select name="list" required>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Selecione o serviço" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Selecione o serviço</SelectLabel>
                                        <SelectItem value="webdev">Desenvolvimento Web</SelectItem>
                                        <SelectItem value="dataanalysis">Análise de Dados</SelectItem>
                                        <SelectItem value="backend">Desenvolvimento Back-End</SelectItem>
                                        <SelectItem value="frontend">Desenvolvimento Front-End</SelectItem>
                                        <SelectItem value="apidev">Desenvolvimento de APIs</SelectItem>
                                        <SelectItem value="mobile">Desenvolvimento de Aplicativos Mobile</SelectItem>
                                        <SelectItem value="freelance">Projetos Freelancer e Consultoria</SelectItem>
                                        <SelectItem value="recruitment">Contato para Recrutadores/Empregadores</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* textarea */}
                            <Textarea id="message" name="message" className="h-[200px]" placeholder="Digite sua mensagem aqui." required />
                            {/* btn */}
                            <Button size="md" className="max-w-40" type="submit" disabled={loading}>
                                {loading ? "Enviando..." : "Enviar mensagem"}
                            </Button>

                            {sent && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="sent-message text-green-500"
                                >
                                    Mensagem enviada com sucesso!
                                </motion.div>
                            )}
                            {error && <div className="error-message text-red-500">Falha ao enviar a mensagem. Tente novamente.</div>}
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
