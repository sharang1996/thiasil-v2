import SecondaryHeading from "../Heading/SecondaryHeading";
import TertiaryHeading from "../Heading/TertiaryHeading";
import classes from "./About.module.css";

const About = () => {
  return (
    <section className={classes.about}>
      <SecondaryHeading heading="HI-TECH RANGE FOR EVERY APPLICATION" />
      <div className={classes.outer}>
        <div className={classes.description}>
          <TertiaryHeading heading="QUALITY RIVALLING INTERNATIONAL STANDARDS" />
          <p className={classes.paragraph}>
            Thiasil Fused Silica Laboritory Wares are manufactured from
            indigenous raw material using a unique process developed in India.
            Since its inception Thiasil has always endeavored to perform at
            elevated levels of capability, owing to sound research development
            and timely upgradation of technology undertaken by us.
          </p>
          <TertiaryHeading heading="RIGOROUSLY TESTED AND WIDELY USED" />
          <p className={classes.paragraph}>
            Thiasil products have been tested and are used by several leading
            research institutions, quality control laboritories, industrial
            testing and analytical laboritories all over India. Each product is
            individually oxy-gas fired and rigorously tested, consequently
            resulting in slight variation in shape but ensuring high purity and
            performance.
          </p>
          <a href="#" className={classes.btn_text}>
            Learn more &rarr;
          </a>
        </div>
        <div className={classes.mosiac}>
          <img
            srcSet="/assets/img/thia-1.jpg 300w, /assets/img/thia-1-large.jpg 1000w"
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
            alt="Photo 1"
            className={`${classes.mosiac__photo} ${classes.mosiac__photo__p1}`}
            src="img/nat-1-large.jpg"
          />

          <img
            srcSet="/assets/img/thia-2.jpg 300w, /assets/img/thia-2-large.jpg 1000w"
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
            alt="Photo 2"
            className={`${classes.mosiac__photo} ${classes.mosiac__photo__p2}`}
            src="img/nat-2-large.jpg"
          />

          <img
            srcSet="/assets/img/thia-3.jpg 300w, /assets/img/thia-3-large.jpg 1000w"
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
            alt="Photo 3"
            className={`${classes.mosiac__photo} ${classes.mosiac__photo__p3}`}
            src="img/nat-3-large.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
