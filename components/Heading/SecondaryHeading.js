import classes from "./SecondaryHeading.module.css";

const SecondaryHeading = ({ heading }) => {
  return (
    <div className={classes.u_center_text}>
      <h2 className={classes.heading_secondary}>{heading}</h2>
    </div>
  );
};

export default SecondaryHeading;
