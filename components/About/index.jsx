import Image from "next/image";
import meJPG from "/public/images/me.jpg";
import javascriptSVG from "/public/svg/javascript.svg";
import reactSVG from "/public/svg/react.svg";

const About = () => {
  return (
    <div className="aboutContainer">
      <h2>Acerca de mi</h2>
      <div className="aboutMe">
        <Image src={meJPG} width={400} height={400} layout="intrinsic" />
        <div className="aboutMeText">
          <p>
            Mi nombre completo es Kevin Hernan Sommi, tengo 25 años y
            actualmente vivo en la ciudad de <br />
            📍 La Plata, Buenos Aires, Argentina.
            <br />
            <br />
            En el año 2018 realicé un curso de Maquetado Web en Educacion IT 💻.
            Después de un tiempo, a mediados del 2021 tengo la oportunidad de
            retomar mis estudios de manera autodidacta realizando varios cursos
            y practicas de manera totalmente independiente enfocandome en
            Desarrollo Front-End.
            <br />
            <br />
            Ampliando aún mis conocimientos en{" "}
            <Image src={javascriptSVG} width={20} height={20} />
            JavaScript y <Image src={reactSVG} width={20} height={20} /> React
            me encuentro en busqueda de mi primera experiencia laboral en el
            mundo de la programación y el desarrollo web. Sin mucho más que
            agregar, gracias por leerme y tomarte el tiempo de revisar mi
            Portfolio!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
