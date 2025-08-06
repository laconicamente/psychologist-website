"use client";
import { Box, Link, Typography, Card } from "@mui/material";
import MapOutlined from "@mui/icons-material/MapOutlined";
import CallEndRounded from "@mui/icons-material/CallEndRounded";
import { motion } from "motion/react";
import { LinkPreview } from "./link-preview";

export function ContactSection() {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          delay: 1.2,
        }}
        className="relative w-full"
      >
        <Box minHeight={"15em"}>
        <div className="relative p-10 pb-15">
        <Box display={"flex"} flexDirection={{ xs: "column", sm: "column", md: "row" }} gap={9}>
              <Box width={{ sm: "100%", md: "40%" }}>
                <Box gap={3}>
                  <h2 className="playfair relative z-20 py-8 font-bold text-5xl sm:text-5xl">
                    {"Entre em contato".split(" ").map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1,
                          ease: "easeInOut",
                        }}
                        className="mr-2 inline-block"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </h2>
                  <Box>
                    Se desejar esclarecer dúvidas, agendar consultas online ou
                    obter mais informações, estou à disposição para nos canais
                    de contato disponibilizados no site.
                  </Box>
                </Box>
              </Box>

              <div className="w-full relative flex flex-wrap justify-start items-end gap-4">
                <div className="relative flex flex-wrap justify-center gap-2">
                  <Card
                    sx={{
                      width: "4em",
                      height: "4em",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexWrap: "wrap"
                    }}
                  >
                    <MapOutlined />
                  </Card>
                  <Typography>
                    <strong>Endereço</strong> <br />
                    Av. Tancredo Neves, 1283 - Caminho das Árvores, <br />Salvador -
                    BA, 41100-800
                  </Typography>
                </div>
                <div className="relative flex flex-wrap justify-center gap-2">
                  <Card
                    style={{
                      width: "4em",
                      height: "4em",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexWrap: "wrap"
                    }}
                  >
                    <CallEndRounded />
                  </Card>
                  <Typography>
                    <strong>Contato</strong> <br />
                    +55 (74) 9 9804-4544
                    <br />
                    contatopedrovieirapsi@gmail.com
                  </Typography>
                </div>
              </div>
            </Box>
          </div>
          <Box position={"relative"}>
      
              <Box
                position={"relative"}
                style={{
                  background: "url('images/mapa.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: "0.9",
                  filter: "brightness(0.7)",
                }}
                height={"25em"}
              ></Box>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                position={'absolute'}
                width={"100%"}
                top={'45%'}
              >
                <LinkPreview url="https://maps.app.goo.gl/24bJCns1N8YMWhbT7" className="font-bold">

                  <button style={{ cursor: 'pointer' }} className="px-12 py-4 rounded-full bg-white font-bold text-stale-700 tracking-widest uppercase transform hover:scale-105 hover:bg-gray-100 transition-colors duration-200">
                    <MapOutlined /> Veja a localização
                  </button>
                </LinkPreview>
              </Box>
          </Box>
        </Box>
      </motion.div>
    </>
  );
}
