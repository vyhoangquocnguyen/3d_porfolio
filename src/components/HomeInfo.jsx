import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center ">{text}</p>
      <Link className="neo-brutalism-white neo-btn" to={link}>
        {btnText}
        <img src={arrow} alt="arrow" className="w-3 h-3 object-contain" />
      </Link>
    </div>
  );
};

const renderConter = {
  1: (
    <h1 className="sm:text-xl sm:leading-slug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Alex</span>
      <br />A Software Engineer
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with React.js, Next.js, Node.js, Express.js, MongoDB, and more."
      link="/about"
      btnText="About"
    />
  ),
  3: <InfoBox text="Visit my projects overview to see my work." link="/projects" btnText="Projects" />,
  4: <InfoBox text="Need to get in touch? Send me a message." link="/contact" btnText="Contact Me" />,
};

const HomeInfo = ({ currentStage }) => {
  return renderConter[currentStage] || null;
};

export default HomeInfo;
