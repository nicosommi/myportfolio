import Image from "next/image";

const SkillCard = ({ title, img }) => {
  return (
    <div className="cardSingleContainer">
      <Image src={img} width={60} height={60} className="cardSingleImage" />
      <h3 className="cardSingleTitle">{title}</h3>
    </div>
  );
};

export default SkillCard;
