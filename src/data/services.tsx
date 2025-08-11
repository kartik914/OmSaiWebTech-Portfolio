import { ReactNode } from "react";
import { FaCode, FaMobileScreen, FaRegCircleCheck } from "react-icons/fa6";
import { FiPieChart } from "react-icons/fi";
import { TbDeviceGamepad2 } from "react-icons/tb";

export type Services = {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
};
const services: Services[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Crafting responsive, user-friendly websites for your business with modern technologies.",
    icon: <FaCode />,
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Building native and cross-platform mobile applications with a focus on performance and user experience.",
    icon: <FaMobileScreen />,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Promoting your brand and products through effective digital marketing strategies.",
    icon: <FiPieChart />,
  },
  {
    id: "software-testing",
    title: "Software Testing",
    description: "Ensuring the quality and reliability of your software through comprehensive testing services.",
    icon: <FaRegCircleCheck />,
  },
  {
    id: "game-development",
    title: "Game Development",
    description: "Creating engaging and immersive games for various platforms with cutting-edge technology.",
    icon: <TbDeviceGamepad2 />,
  },
  {
    id: "meta-business-suite-google-my-business-optimization",
    title: "Meta Business Suite & Google My Business Optimization",
    description: "Optimizing your business presence on Meta and Google platforms for better visibility and engagement.",
    icon: <FiPieChart />,
  }
];
export default services;
