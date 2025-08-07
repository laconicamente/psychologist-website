"use client";
import React from "react";
import { StickyScroll } from "./sticky";


const content = [
    {
        title: "Sobre mim",
        description:
            "Formado em psicologia pela Universidade Federal do Vale do São Francisco (UNIVASF).  Atua como psicólogo clínico através da psicanálise lacaniana, trabalhando com atendimentos individuais para o público adulto na modalidade on-line (Brasil) e presencial (Salvador-BA). É membro do Oré Coletivo Solidário, coletivo de saúde mental voltado a pensar as condições de trabalho do psicólogo a partir do modelo da Economia Solidária (ECOSOL). É pesquisador no CERCOS (Grupo de Estudos e Pesquisa sobre Cercamento, Controles e Mercados), atualmente interessado no tema da produção de luto em contextos emergênciais.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white hidden md:flex lg:flex">
                <img
                    src="/images/pedro-vieira.png"
                    width={300}
                    height={700}
                    className="h-full w-full object-cover"
                    alt="Sobre mim (Pedro Vieira)"
                />
            </div>
        ),
    },
    {
        title: "Uma visão geral da psicanálise lacaniana",
        description:
            "A psicanálise é um campo de investigação que estuda os efeitos do inconsciente nos processos psíquicos e suas reverberações na vida cotidiana. Essa abordagem busca resgatar tais processos a partir da experiência singular de cada sujeito com sua história pessoal e como esta se manifesta em seus atos. Ela trabalha com elementos que frequentemente escapam à nossa percepção imediata, mas que fundamentam o mal-estar que experimentamos. Esse desconforto surge a partir de múltiplas fontes entrelaçadas: dos conflitos que nos antecedem e que continuamos a elaborar através das relações com os outros e de nossas vivências compartilhadas; dos valores e condicionamentos assimilados no seio da comunidade que nos acolheu e nos deseja; e, por fim, das tensões geradas pelo choque entre nossas subjetividades e as expectativas impostas pelo tecido social.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/images/psicanalise.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Uma visão geral da psicanálise"
                />
            </div>
        ),
    },
    {
        title: "Sobre quais processos a psicanálise lacaniana atuaria?",
        description: "O campo de intervenção da psicanálise lacaniana se dá no campo dos processos de sofrimento psíquico. O que normalmente reconhecemos sob os nomes de depressão, luto, ansiedade, distúrbios, compulsão, fobias etc. são, em nós, o resultado das dinâmicas de relações nas quais estamos implicados – relações que formam uma trama complexa de sentidos que assumimos e que dão a tônica aos nossos sintomas. A psicanálise lacaniana, portanto, se apresenta como uma alternativa que buscaria possibilitar a transformação do sofrimento psíquico por meio da fala e da interpretação dos processos subjacentes ao relato do paciente, facilitando a construção de novas questões. Essas, por sua vez, podem possibilitar a reformulação dos modos pelos quais nos reconhecemos, nossa história e nossos outros. Todo o processo garante o sigilo e o cuidado como pilares fundamentais do acompanhamento.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/images/approach.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Sobre quais processos a psicanálise lacaniana atuaria?"
                />
            </div>
        ),
    },
];
export function ContentSection() {
    return (
        <div className="w-full">
            <StickyScroll content={content}/>
        </div>
    );
}
