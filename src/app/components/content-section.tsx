"use client";
import React from "react";
import { StickyScroll } from "./sticky";


const content = [
    {
        title: "Sobre mim",
        description:
            "Formado em psicologia pela Universidade Federal do Vale do São Francisco (UNIVASF).  Atua como psicólogo clínico através da psicanálise lacaniana, trabalhando com atendimentos individuais para o público adulto na modalidade on-line (Brasil) e presencial (Salvador-BA). É membro do Oré Coletivo Solidário, coletivo de saúde mental voltado a pensar as condições de trabalho do psicólogo a partir do modelo da Economia Solidária (ECOSOL). É pesquisador no CERCOS (Grupo de Estudos e Pesquisa sobre Cercamento, Controles e Mercados), atualmente interessado no tema da produção de luto em contextos emergênciais.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
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
        title: "Uma visão geral da psicanálise",
        description:
            "A psicanálise é um campo de investigação que lida com os efeitos da dimensão inconsciente dos processsos psíquicos e sua repercussão sobre o nosso cotidiano. Essa perspectiva busca retomar esses processos tendo em vista a experiência de cada paciente com a sua história e a presença  desta nas suas ações, abordando temas que muitas vezes não são imediatamente acessíveis ou evidentes a nossa percepção, mas que determinam em algum grau o mal-estar que vivenciamos: a partir dos conflitos que se constituiram antes e depois de nós por meio dos outros e nossa experiências com os mesmos, das condições e valores que adotamos a partir da comunidade na qual nascemos e somos desejados e nos embates produzidos a partir das expectativas que moldam as nossas relações com o campo social.",
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
        description:
            "O campo de intervenção da psicanálise lacaniana se dá no campo dos processos de sofrimento psíquico. O que normalmente reconhecemos sob o nome de: depressão, luto, ansiedade, distúrbios, compulsão, fobias etc., são o resultado em nós das dinâmica de relações nas quais estamos implicados, que formam uma trama complexa de sentidos que assumimos e dão a tônica dos nossos sintomas. A psicanálise lacaniana, portanto, se apresenta como uma alternativa que buscaria possibilitar a transformação do sofrimento psíquico através da fala e a interpretação dos processos subjacentes ao relato do paciente, facilitando a construção de novas questões que possam possibilitar a reformulação dos modos através dos quais reconhecemos a nós mesmo, a nossa história e os nossos outros. Todo o processo garante o sigilo e o cuidado como pilares fundamentais do acompanhamento.",
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
            <StickyScroll content={content} />
        </div>
    );
}
