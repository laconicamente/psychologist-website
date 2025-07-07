import "./App.scss";
import { Flex, Button, Text, Box, Heading, Section, Card, Strong } from "@radix-ui/themes";
import { CalendarIcon } from "@radix-ui/react-icons";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { CallOutlined } from "@mui/icons-material";

function App() {
  return (
    <Box className="App">
      <Box className=" header-background">
        <header>
          <Box px={'8'} py={'4'}>
            <Heading size="8" className="logo" color={"gray"}>
              Pedro Vieira
            </Heading>
          </Box>
        </header>

        <Box minHeight={"400px"} className="methodology-section">
          <Section>
            <Flex direction={"column"} gap={"3"} align={"center"}>
              <Heading size="9" className="logo" color={"gray"}>
                Psicanálise Lacaniana
              </Heading>
              <Text>
                Um espaço de escuta e transformação para suas questões mais
                profundas.
              </Text>
              <Button>
                <CalendarIcon /> Agende sua consulta
              </Button>
            </Flex>
          </Section>
        </Box>
      </Box>
      <Box className="about-section">
        <Flex direction={"row"} minHeight={"42em"}>
          <Box width={"55%"} position={'relative'} className="about-section--photo">
            <Box className="about-section--photo-text" p={'4'}>
              <Flex direction={'column'} align={'center'}>
                <Text>Pedro C. Vieira</Text>
                <Text>Psicólogo e Psicanalista</Text>
                <Text>
                  <strong>CRP 12/20332</strong>
                </Text>
              </Flex>
            </Box>
          </Box>
          <Box px={'9'} width={'80%'}>
            <Section>
              <Flex direction={'column'} gap={'5'}>
                <Heading size="8" className="logo">
                  Psicanalista e Psicólogo
                </Heading>
                <Text>
                  Psicólogo formado pela Universidade do Vale do São Francisco
                  (UNIVASF), atua em Salvador (BA) com atendimento clínico
                  individual para adultos, adolescentes e crianças, utilizando a
                  abordagem psicanalítica desenvolvida por Jacques Lacan.
                  <br />
                  Participa de grupos de estudo, supervisão e pesquisa em
                  psicanálise, aprofundando-se nas interfaces entre a psicanálise
                  lacaniana e teorias críticas.
                  <br />
                  Os atendimentos podem ser presenciais em Salvador ou online para
                  todo o Brasil.
                </Text>
              </Flex>
            </Section>
          </Box>
        </Flex>
      </Box>
      <Box minHeight={"15em"} className="approach-section">
        <Flex>
          <Box width={'50%'} p={'8'}>
            <Section>
              <Flex direction={'column'} gap={'3'}>
                <Heading size="8" className="logo">
                  Sobre a abordagem
                </Heading>
                <Text>A psicanálise é um campo de investigação que lida com a dimensão inconsciente. Se considerarmos que nunca encontramos modos idênticos de sofrer, de amar, de se reconhecer e nos darmos conta da autenticidade desses processos em nossas vidas, a possibilidade que cada um encontra de falar sobre si deixa de ser algo trivial e passa a ser o meio pelo qual a análise se desenvolve.
                  O sofrimento em suas formas comumente conhecidas, como depressão, luto, conflitos internos, ansiedade, distúrbios, compulsão, dores psicossomáticas, fobias, dentre outros, possui especificidades, as quais só acessamos a partir da fala em análise. A psicoterapia assegura-nos um espaço de sigilo e de cuidado como importantes diretrizes para o tratamento.</Text>
              </Flex>
            </Section>
          </Box>
          <Box width={"55%"} position={'relative'} className="approach-section--photo">
          </Box>
        </Flex>
      </Box>
      <Box minHeight={"15em"} className="contact-section">
        <Flex>
          <Box px={'8'}>
            <Section>
              <Flex direction={'row'} gap={'9'}>
                <Box width={'50%'}>
                  <Flex direction={'column'} gap={'3'}>
                    <Heading size="8" className="logo">
                      Entre em contato
                    </Heading>
                    <Text>
                      Se desejar esclarecer dúvidas, agendar uma consulta ou obter mais informações, estou à disposição para ajudar.
                    </Text>
                  </Flex>
                </Box>
                <Box>
                  <Flex gap="6" align="center">
                    <Box>
                      <Flex gap={'4'} direction={'column'}>
                        <Card style={{ width: '4em', height: '4em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <FmdGoodOutlinedIcon />
                        </Card>
                        <Text as="p" size="3">
                          <Strong>Endereço</Strong> <br />
                          R. das Gaivotas - Imbuí, Salvador - BA, 41720-070
                        </Text>
                      </Flex>
                    </Box>
                    <Box>
                      <Flex gap={'4'} direction={'column'}>
                        <Card style={{ width: '4em', height: '4em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <CallOutlined />
                        </Card>
                        <Text as="p" size="3">
                          <Strong>Contato</Strong> <br />
                          +55 (71) 94535-3434 <br />
                          pedrovieiracontato@gmail.com
                        </Text>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Section>
          </Box>
        </Flex>
        <Box position={'relative'} className="contact-section--map"  style={{ background: "url('https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/google-maps-e1707316052388.png?w=1200&h=900&crop=1')", backgroundSize: 'cover'}} height={'25em'}>
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
