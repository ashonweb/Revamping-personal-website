import React from 'react';
import { makeStyles } from 'tss-react/mui';
import AboutMeComponentStyle from '../Styles/AboutMeComponentStyle';
import dp from '../Assests/dp.jpg';

const useStyles = makeStyles()(AboutMeComponentStyle);

const CORE = ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Material UI', 'Jest / RTL', 'REST APIs', 'Git', 'Redux', 'MongoDB', 'Micro-frontends', 'Styled Components', 'SCSS/SASS', 'Performance Optimization'];
const FAMILIAR = ['Next.js', 'GraphQL', 'JavaScript', 'SQL', 'TFS', 'AWS', 'CI/CD', 'Docker', 'Express', 'Axios', 'Figma', 'Jira', 'GitHub Actions', 'Vercel', 'AI Integration'];

const AboutMeComponent = () => {
  const { classes } = useStyles();

  return (
    <section className={classes.section}>
      <h2 className={classes.sectionTitle}>About Me</h2>

      <div className={classes.statsStrip}>
        <div>
          <div className={classes.statNum}>8<span>+</span></div>
          <div className={classes.statLabel}>Years of experience</div>
        </div>
        <div>
          <div className={classes.statNum}>10<span>+</span></div>
          <div className={classes.statLabel}>Personal projects</div>
        </div>
        <div>
          <div className={classes.statNum}>7<span>+</span></div>
          <div className={classes.statLabel}>Professional projects</div>
        </div>
        <div>
          <div className={classes.statNum}>3</div>
          <div className={classes.statLabel}>Companies</div>
        </div>
        <div>
          <div className={classes.statNum}>∞</div>
          <div className={classes.statLabel}>Coffee consumed</div>
        </div>
      </div>

      <div className={classes.grid}>
        <div className={classes.photoWrap}>
          <img src={dp} alt="Bhagyashree Meghpal" className={classes.photo} />
          <div className={classes.photoBorder} />
          <div className={classes.photoGlow} />
        </div>

        <div className={classes.textContent}>
          <h3 className={classes.heading3}>I build products people love to use.</h3>
          <p className={classes.para}>
            I'm a Senior Frontend Engineer with 8+ years of experience turning complex problems
            into clean, intuitive web experiences. I specialize in <strong>React</strong> and the
            modern JavaScript ecosystem, with a strong eye for performance and detail.
          </p>
          <p className={classes.para}>
            Currently at <strong>Deloitte</strong> as a Software Engineer II, and previously at{' '}
            <strong>Dell Technologies</strong> and <strong>TCS</strong>, where I shipped
            production-grade features used daily by thousands of users.
          </p>
          <p className={classes.para}>
            I care about the details that make products feel right — fast load times, accessible
            interfaces, and code that's easy for teammates to read and extend.
          </p>

          <div className={classes.chips}>
            {CORE.map(chip => (
              <span key={chip} className={classes.chip}>{chip}</span>
            ))}
            {FAMILIAR.map(chip => (
              <span key={chip} className={classes.chipSecondary}>{chip}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeComponent;
