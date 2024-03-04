import icons from './icons'
import { TbBoxModel, TbFileSearch, TbFileCode } from "react-icons/all";



export const skills = [
    { title: "Javascript", value: 3, date: 2022, icon: icons.javascript },
    { title: "Flutter", value: 4, date: 2020, icon: icons.flutter },
    { title: "Python", value: 3, date: 2019, icon: icons.python },
    { title: "JAVA", value: 2, date: 2022, icon: icons.java },
    { title: "Figma", value: 3, date: 2022, icon: icons.figma },
    { title: "HTML5", value: 4, date: 2022, icon: icons.html },
    { title: "CSS3", value: 4, date: 2022, icon: icons.css },
    { title: "GIT", value: 3, date: 2021, icon: icons.git },
    { title: "Trello", value: 3, date: 2022, icon: icons.trello },
    { title: "React", value: 2, date: 2023, icon: icons.react },
];

export const profileInformation = {
    nombre: "Brian Barquesi",
    edad: "25 Años",
    telefono: "+54 9 2622 316791",
    freelance: "Disponible",
    direccion: "Tunuyán, Mendoza - Argentina",
    estudios: "6 año/s",
};

export const lorem =
    "Lorem ipsum dolor sit amet consectetur, adipiscing elit venenatis ullamcorper porttitor cubilia, duis aliquam nunc urna. Facilisis eros quisque varius justo mollis fringilla turpis sodales, consequat platea fermentum suspendisse sollicitudin dignissim donec dictumst, odio sapien placerat vehicula rutrum habitasse volutpat. Semper pulvinar in rutrum per penatibus non lectus condimentum blandit, scelerisque sollicitudin faucibus aliquam placerat nec proin vitae maecenas vel, nisi luctus fermentum facilisi vivamus praesent vulputate a.";

export const services = [
    {
        title: "análisis de requisitos",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipiscing elit venenatis ullamcorper porttitor cubilia, duis aliquam nunc urna. Facilisis eros quisque varius justo mollis fringilla turpis sodales, consequat platea fermentum.",
        icon: TbFileSearch,
    },
    {
        title: "modelado de aplicaciones",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipiscing elit venenatis ullamcorper porttitor cubilia, duis aliquam nunc urna. Facilisis eros quisque varius justo mollis fringilla turpis sodales, consequat platea fermentum.",
        icon: TbBoxModel,
    },
    {
        title: "desarrollo de aplicaciones",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipiscing elit venenatis ullamcorper porttitor cubilia, duis aliquam nunc urna. Facilisis eros quisque varius justo mollis fringilla turpis sodales, consequat platea fermentum.",
        icon: TbFileCode,
    },
];

export const formation = [
    {
        link: "src/assets/img/LOGO_ONE.png",
        alt: "",
        year: 2020,
        title: "Cursos de programación Oracle Next Education",
        duration: "6 Meses",
        institution: "Alura",
    },
    {
        link: "src/assets/img/LOGO_UTN.png",
        alt: "",
        duration: "3 Meses",
        year: 2022,
        title: "Curso de desarrollo de videojuegos Inicial",
        institution: "UTN FRRE",
    },
    {
        link: "src/assets/img/LOGO_VERA.png",
        alt: "",
        duration: "3 Años",
        year: 2022,
        title: "Tecnicatura Superior en Desarrollo de Software",
        institution: "IES 9-010",
    },
    {
        link: "src/assets/img/LOGO_VERA.png",
        alt: "",
        duration: "3 Años",
        year: 2020,
        title: "Tecnicatura Superior en Computación y redes",
        institution: "IES 9-010",
    },
];
