import css from "./Container.module.css";

const Container = ({ className = "", children }) => {
  return (
    <div className={[css.container, className].join(" ").trim()}>
      {children}
    </div>
  );
};

export default Container;
