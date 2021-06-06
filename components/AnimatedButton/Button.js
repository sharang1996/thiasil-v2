import Link from "next/link";
import classes from "./Button.module.css";

const Button = ({ isPrimary, text, url }) => {
  return (
    <Link href={url}>
      <a
        className={`${classes.btn} ${
          isPrimary ? classes.btn_primary : classes.btn_secondary
        }`}
      >
        {text}
      </a>
    </Link>
  );
};

export default Button;
