import Logo from "../Logo/Logo";
import Container from "../SectionWithContainer/Container/Container";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <Logo />
      </Container>
    </header>
  );
};

export default Header;
