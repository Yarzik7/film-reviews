import Section from "./Section/Section";
import Container from "./Container/Container";
// import css from "./SectionWithContainer.module.css";

const SectionWithContainer = ({ children }) => {
  return (
    <Section>
      <Container>{children}</Container>
    </Section>
  );
};

export default SectionWithContainer;
