import classes from "./TertiaryHeading.module.css";

const TertiaryHeading = ({ heading }) => {
  return (
    <div className={classes.u_margin_bottom_small}>
      <h2 className={classes.heading_tertiary}>{heading}</h2>
    </div>
  );
};

export default TertiaryHeading;
