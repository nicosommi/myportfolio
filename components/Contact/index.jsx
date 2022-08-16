import contactSVG from "/public/svg/contact.svg";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="formContainer">
        <h2>Contacto</h2>
        <form action="/send-data-here" method="post" className="formContainer">
          <label htmlFor="name">Nombre y apellido</label>
          <input type="text" id="name" name="name" required />
          <span></span>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" required />
          <span></span>
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" required />
          <span></span>
          <button type="submit">Enviar!</button>
        </form>
      </div>
      <Image src={contactSVG} />
    </div>
  );
};

export default Contact;
