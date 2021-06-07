import classes from "./PrimaryHeading.module.css";

const PrimaryHeading = ({ heading, subheading }) => {
  return (
    <h1 className={classes.heading_primary}>
      <span className={classes.main}>{heading}</span>
      <span className={classes.sub}>{subheading}</span>
    </h1>
  );
};

export default PrimaryHeading;
