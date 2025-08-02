import "./App.scss";
import {
  Flex,
  Button,
  Text,
  Box,
  Heading,
  Section,
  Card,
  Strong,
  Grid,
  Link,
} from "@radix-ui/themes";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { CallOutlined, MapRounded } from "@mui/icons-material";
import { CalendarIcon } from "@radix-ui/react-icons";

function App() {
  return (
    <Box className="App">
      <Box className=" header-background">
        <Box minHeight={"400px"} className="methodology-section">
          <Section>
            <Flex direction={"column"} gap={"3"} align={"center"} justify={"center"}>
              <Heading size="9" className="heading-title" color={"gray"}>
                Pedro C. Vieira
              </Heading>
              <Text size={"5"} style={{ lineHeight: "0.5" }}>
                Psicólogo e Psicanalista
              </Text>
              <Text>
                <strong>CRP 03/27244</strong>
              </Text>
              <Text>
                Um espaço de escuta e transformação para suas questões mais
                profundas.
              </Text>
              <Box mt={"3"}>
                <Button size={"3"}>
                  <CalendarIcon fontSize={"4"} /> Agende sua consulta
                </Button>
              </Box>
            </Flex>
          </Section>
        </Box>
      </Box>
      <Box className="about-section">
        <Grid
          columns={{ initial: "1", md: "2" }}
          gap="3"
          width="auto"
          minHeight={"30em"}
        >
          <Box position={"relative"} className="about-section--photo">
          </Box>
          <Box px={"9"}> 
            <Section>
              <Flex direction={"column"} gap={"5"}>
                <Heading size="8" className="heading-title">
                  Sobre mim
                </Heading>
                <Text>
                  Formado em psicologia pela <strong>Universidade Federal do Vale do São
                    Francisco (UNIVASF)</strong>. Atualmente é dedicado atuação no campo
                  clínico através da psicanálise lacaniana, trabalhando com
                  atendimentos clínicos individuais para o público adulto
                  na modalidade on-line (Brasil) e presencial (Salvador-BA).
                  Atualmente é membro do Oré Coletivo Solidário, além de
                  pesquisador voluntário no CERCOS (Grupo de Estudos e Pesquisa
                  sobre Cercamento, Controles e Mercados).
                </Text>
              </Flex>
            </Section>
          </Box>
        </Grid>
      </Box>
      <Box minHeight={"15em"} className="approach-section">
        <Grid columns={{ initial: "1", md: "2" }} gap="3" width="auto">
          <Box p={"8"}>
            <Flex direction={"column"} gap={"5"}>
              <Heading size="8" className="heading-title">
                Sobre a abordagem
              </Heading>
              <Text>
                A psicanálise é um campo de investigação que lida com os
                efeitos da dimensão inconsciente dos processsos psíquicos.
                Deste modo, essa perspectiva versa a retomada da nossa
                história e sua presença através da fala, incluindo-a em temas
                que participam do nosso cotidiano e normalmente não nos damos
                conta, mas que determinam em algum grau o nosso mal-estar
                atual: a partir dos conflitos que se constituiram antes e
                depois de nós por meio de nossas experiencias com os outros,
                das condições e valores que adotamos a partir da comunidade na
                qual nascemos e somos desejados e nos embates produzidos pelas
                relações moldadas nesse campo social.
                <br />
                Desse ponto de vista, entende-se que o sofrimento psíquico,
                nos termos como normalmente os conhecemos: depressão, luto,
                conflitos internos, ansiedade, distúrbios, compulsão, dores
                psicossomáticas, fobias, dentre outros, é resultado de um
                processo que se estende e se expressa em nós através de uma
                trama complexa de sentidos que afetam nossos modos de pensar,
                sentir e agir, e que dão a tônica do nossos sintomas.
                <br />A psicanálise lacaniana, assim, se apresenta como uma
                alternativa que buscaria possibilitar o acesso, a construção e
                a transformação do sofrimento psíquico, centrando-se na
                singularidade de cada paciente em sua fala, tendo como
                premissa fundamental o sigilo e o cuidado como importantes
                diretrizes para o tratamento.
              </Text>
            </Flex>
          </Box>
          <Box position={"relative"} className="approach-section--photo"></Box>
        </Grid>
      </Box>
      <Box minHeight={"15em"} className="contact-section">
        <Flex>
          <Box px={"8"}>
            <Section>
              <Flex direction={"row"} gap={"9"}>
                <Box width={"50%"}>
                  <Flex direction={"column"} gap={"3"}>
                    <Heading size="8" className="heading-title">
                      Entre em contato
                    </Heading>
                    <Text>
                    Se desejar esclarecer dúvidas, agendar consultas online ou obter mais informações, estou à disposição para nos canais de contato disponibilizados no site. 
                    </Text>
                  </Flex>
                </Box>
                <Box>
                  <Flex gap="6" align="center">
                    <Box>
                      <Flex gap={"4"} direction={"column"}>
                        <Card
                          style={{
                            width: "4em",
                            height: "4em",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <FmdGoodOutlinedIcon />
                        </Card>
                        <Text as="p" size="3">
                          <Strong>Endereço</Strong> <br />
                          Av. Tancredo Neves, 1283 - Caminho das Árvores, Salvador - BA, 41100-800
                        </Text>
                      </Flex>
                    </Box>
                    <Box>
                      <Flex gap={"4"} direction={"column"}>
                        <Card
                          style={{
                            width: "4em",
                            height: "4em",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <CallOutlined />
                        </Card>
                        <Text as="p" size="3">
                          <Strong>Contato</Strong> <br />
                          +55 (74) 9 9804-4544<br />
                          contatopedrovieirapsi@gmail.com
                        </Text>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Section>
          </Box>
        </Flex>
        <Box position={"relative"}>
        <Link href={"https://maps.app.goo.gl/24bJCns1N8YMWhbT7"} target="_blank">
          <Box
            position={"relative"}
            className="contact-section--map"
            style={{
              background:
                "url('images/mapa.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: "0.9",
              filter: "brightness(0.7)",
            }}
            height={"25em"}
          >
           
          </Box>
          <Box position={"absolute"} top={"45%"} bottom={"0"} right={"0"} left={"0"}>
          <Flex justify={"center"}>
              <Button size={"4"}>
                <MapRounded /> Veja a localização
              </Button>
            </Flex>
          </Box>
        </Link>
            </Box>
      </Box>
      <footer>
        <Flex className="footer-section" justify={"center"}>
          <Box display={"contents"}>
            <Section>
              <Text>
                © 2025 Pedro C. Vieira - Psicológo e Psicanalista. Todos os
                direitos reservados.
              </Text>
            </Section>
          </Box>
        </Flex>
      </footer>
    </Box>
  );
}

export default App;
