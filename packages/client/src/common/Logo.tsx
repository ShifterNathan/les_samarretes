import logo from "../assets/logo.jpg";
import { ILogoProps } from "../interfaces/Logo/ILogoProps";

const Logo = (props: ILogoProps) => {
  const { className } = props;
  return <img src={logo} alt="Les Samarretes logo" className={`border-none ${className}`} />;
};

export default Logo;
