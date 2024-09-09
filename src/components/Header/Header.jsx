import Container from "../SectionWithContainer/Container/Container";
import Logo from "../Logo/Logo";

import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <Container className={css.headerContainer}>
        <Logo />
      </Container>
    </header>
  );
};

export default Header;
