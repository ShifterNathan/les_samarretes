import logo from "../assets/logo.jpg";
import { ILogoProps } from "../interfaces/Logo/ILogoProps";

const Logo = (props: ILogoProps) => {
  const { className } = props;
  return <img src={logo} alt="Les Samarretes logo" className={className} />;
};

export default Logo;
