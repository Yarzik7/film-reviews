import Image from "next/image";
import logo from "../../../public/images/film-reviews-logo.webp";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <a href="/" className={css.logoLink}>
      <Image src={logo} alt="logo" className={css.logoImg} />
    </a>
  );
};

export default Logo;
