import { React } from "react";
import one from "./assets/img/LOGO_ONE.png";
import vera from "./assets/img/LOGO_VERA.png";
import utn from "./assets/img/LOGO_UTN.png";
import alurageek from "./assets/img/alura-geek-desktop.png";
import NavBar from "./components/cards/NavBar";
import MainSection from "./components/MainSection";
import AboutMeSection from "./components/AboutMeSection";
import aboutMeImg from './assets/img/about-me.png'
import ServicesSection from "./components/ServicesSection";
import ToolsSection from "./components/ToolsSection";


function App() {
  return (
    <div style={{ background: "#000" }}>
      <NavBar />
      <MainSection />
      <AboutMeSection img={aboutMeImg}/>
      <ServicesSection/>
      <ToolsSection />
      {/*<ContactSection/> */}
    </div>
  );
}

export default App;

{
  /* <h1 style={{color: 'white', fontSize: 30,}}>Hello React</h1>
      <TagSection data={{title:'Sobre mi', subtitle:'Descubre'}}/>
      <DownloadButton content='Descargar CV'/>
      <NavBarContactButton content='Contacto ▼'/>
      <ServiceCard data={{icon: FaRegFileCode, title:'Analisis de requisitos',description: 'Lorem ipsum dolor sit amet consectetur, adipiscing elit venenatis ullamcorper porttitor cubilia, duis aliquam nunc urna. Facilisis eros quisque varius justo mollis fringilla turpis sodales, consequat platea fermentum. '}}/>
      <SkillsCard title={"React"} value= {3} date={2019}/>
      <CircleSocialIcon Icon={FaLinkedinIn} title={'LinkedIn'}/>
      <FormationCard source={{link: one, alt: '', year: 2020, title: 'Cursos de programación Oracle Next Education', duration:'6 Meses', institution: 'Alura'}}/>
      <FormationCard source={{link: utn, alt: '',duration:'3 Meses', year: 2022, title: 'Curso de desarrollo de videojuegos Inicial', institution: 'UTN FRRE'}}/>
      <FormationCard source={{link: vera, alt: '',duration:'3 Años', year: 2022, title: 'Tecnicatura Superior en Desarrollo de Software', institution: 'IES 9-010'}}/>
      <FormationCard source={{link: vera, alt: '', duration:'3 Años', year: 2020, title: 'Tecnicatura Superior en Computación y redes', institution: 'IES 9-010'}}/>

      <ProjectsCard link={'https://github.com/briobarbtech/alura-geek'} alt={''} img={alurageek} title={'AluraGeek'}/>
 */
}
