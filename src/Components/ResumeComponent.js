import React from 'react';
import { makeStyles } from 'tss-react/mui';
import ResumeComponentStyle from '../Styles/ResumeComponentStyle';

const useStyles = makeStyles()(ResumeComponentStyle);

const EXPERIENCE = [
  {
    date: 'Aug 2021 — Present',
    title: 'Senior Frontend Engineer',
    badge: 'Software Engineer II',
    org: 'Deloitte Consulting · Bangalore',
    desc: 'Leading frontend development across multiple client-facing platforms. Building scalable micro-frontend architectures using React, Next.js, TypeScript, and Tailwind CSS. Delivered performance-optimized applications with analytics integration, AEM content management, and full test coverage using Jest and RTL.',
  },
  {
    date: 'Feb 2020 — Jul 2021',
    title: 'Frontend Engineer',
    badge: 'Business Intelligence Analyst',
    org: 'Dell Technologies · Bangalore',
    desc: 'Worked as a full-stack developer on 3 end-to-end web applications used by Dell\'s global partner network. Built frontends with React and Material UI, authored backend APIs with Node.js, and managed the full lifecycle — development, multi-environment testing, Windows server deployment, and maintenance.',
  },
  {
    date: 'Nov 2015 — Jan 2020',
    title: 'Software Engineer',
    badge: 'System Engineer',
    org: 'Tata Consultancy Services · Bangalore',
    desc: 'Worked across 4 projects in multiple capacities: Frontend Developer on 2 platforms (React, GraphQL), Support Engineer maintaining 99.94% SLA uptime, and ASE Trainee building an Amex online payment portal (Java, Oracle DB). Took initiative to redesign a client portal\'s UX.',
  },
];

const EDUCATION = [
  {
    date: 'Sep 2011 — May 2015',
    title: 'B.E. in Computer Science',
    org: 'SJCE, Mysore',
    desc: 'Graduated with distinction. Final year project on machine learning-based image classification.',
  },
  {
    date: 'Jun 2009 — May 2011',
    title: 'PUC (PCME)',
    org: 'St. Aloysius College, Mangalore',
    desc: 'Science stream with focus on Physics, Chemistry, Mathematics, and Electronics.',
  },
  {
    date: 'Jun 2008 — May 2009',
    title: 'SSLC',
    org: 'GJCS, Kudremukh',
    desc: 'Mathematics, Science, and Social Studies.',
  },
];

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const ResumeComponent = () => {
  const { classes } = useStyles();

  return (
    <section className={classes.section}>
      <div className={classes.headerRow}>
        <div>
          <h2 className={classes.sectionTitle}>Resume</h2>
        </div>
        <a href="/resume.pdf" className={classes.cvBtn} target="_blank" rel="noreferrer">
          <DownloadIcon /> Download CV
        </a>
      </div>

      <div className={classes.grid}>
        <div>
          <h3 className={classes.groupTitle}>Work Experience</h3>
          {EXPERIENCE.map((item, i) => (
            <div key={i} className={classes.item}>
              <div className={classes.itemDate}>{item.date}</div>
              <div className={classes.itemTitle}>
                {item.title}
                {item.badge && <span className={classes.itemBadge}>{item.badge}</span>}
              </div>
              <div className={classes.itemOrg}>{item.org}</div>
              <p className={classes.itemDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className={classes.groupTitle}>Education</h3>
          {EDUCATION.map((item, i) => (
            <div key={i} className={classes.item}>
              <div className={classes.itemDate}>{item.date}</div>
              <div className={classes.itemTitle}>{item.title}</div>
              <div className={classes.itemOrg}>{item.org}</div>
              <p className={classes.itemDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeComponent;
