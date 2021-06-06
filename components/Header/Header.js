import Button from "../AnimatedButton/Button";
import PrimaryHeading from "../Heading/PrimaryHeading";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo_box}>
        <img src="/logo-white.png" alt="Logo" className={classes.logo} />
      </div>
      <PrimaryHeading />
      <Button isPrimary text="Discover our products" url="#" />
    </header>
  );
};

export default Header;
