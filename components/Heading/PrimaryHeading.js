import classes from "./PrimaryHeading.module.css";

const PrimaryHeading = ({ headingName }) => {
  return (
    <h1 className={classes.heading_primary}>
      <span className={classes.main}>Thiasil</span>
      <span className={classes.sub}>individually oxy-gas fired labware</span>
    </h1>
  );
};

export default PrimaryHeading;
