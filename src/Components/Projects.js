import React from 'react';
import { makeStyles } from 'tss-react/mui';
import ProjectsStyle from '../Styles/ProjectsStyle';
import got from '../Assests/got.jpg';
import spacex from '../Assests/spacex.jpeg';
import falcon from '../Assests/falcon.jpeg';
import hacknews from '../Assests/hacker_news.png';
import wiki from '../Assests/wiki.jpeg';
import drums from '../Assests/drums.jpeg';
import diamond from '../Assests/diamond.jpeg';
import face from '../Assests/face.jpeg';
import calc from '../Assests/calc.jpeg';
import moodspace from '../Assests/moodspace.jpeg';

const useStyles = makeStyles()(ProjectsStyle);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const PROJECTS = [
  {
    title: 'MoodSpace',
    desc: 'A mood-based adventure finder for Karnataka. Discover curated experiences — from temple trails to beach escapes — filtered by how you\'re feeling today.',
    tags: ['React', 'Node.js', 'MongoDB'],
    live: 'https://mood-space-seven.vercel.app',
    github: 'https://github.com/ashonweb/MoodSpace',
    image: moodspace,
    emoji: '🎭',
    featured: true,
  },
  {
    title: 'Game of Thrones Wiki',
    desc: 'Character encyclopedia with search and filtering across the full GOT universe. Full-stack app with React frontend and Node.js backend.',
    tags: ['React', 'Node.js', 'MongoDB'],
    live: 'https://got-frontend-rosy.vercel.app',
    github: 'https://github.com/ashonweb/got_frontend',
    image: got,
  },
  {
    title: 'SpaceX Launch Tracker',
    desc: 'Real-time SpaceX launch data with filtering and detailed mission info using the SpaceX public API.',
    tags: ['React', 'REST API'],
    live: 'http://spacex_bmeghpal.surge.sh/#/',
    github: 'https://github.com/ashonweb/spacex',
    image: spacex,
  },
  {
    title: 'Face Detection App',
    desc: 'AI-powered face detection via Clarifai API. Upload any image URL to detect and highlight faces in real time.',
    tags: ['React', 'Clarifai AI', 'Node.js'],
    live: 'https://bmeghpal-face-detect.surge.sh/#/',
    github: 'https://github.com/ashonweb/FaceDetectionApp',
    image: face,
  },
  {
    title: 'Hacker News Clone',
    desc: 'Replica of Hacker News with live data from the official HN API, sorted by top/new/best stories.',
    tags: ['React', 'Hacker News API'],
    live: 'http://hacker-news-alt.surge.sh/#/',
    github: 'https://github.com/ashonweb/HackerNews',
    image: hacknews,
  },
  {
    title: 'Wikipedia Search',
    desc: 'Wikipedia search engine returning the top 10 results based on your query using the Wikipedia API.',
    tags: ['React', 'Wikipedia API'],
    live: 'https://wiki-bmeghpal-viwer.surge.sh/',
    github: 'https://github.com/ashonweb/Wikipedia-viewer-App',
    image: wiki,
  },
  {
    title: 'Finding Falcon',
    desc: 'Strategy game — find Queen Falcon hiding on one of many planets using the optimal combination of vehicles.',
    tags: ['React', 'API'],
    live: null,
    github: 'https://github.com/ashonweb/FindingFalcon',
    image: falcon,
  },
  {
    title: 'Drum Machine',
    desc: 'Interactive drum pad with keyboard support, multiple sound banks, and a volume slider.',
    tags: ['React', 'Web Audio'],
    live: 'https://drums_appliction.surge.sh',
    github: 'https://github.com/ashonweb/DrumMachine',
    image: drums,
  },
  {
    title: 'Diamond Search',
    desc: 'Search diamonds hidden in an 8×8 grid — a logic game with clean UI and state management.',
    tags: ['React', 'Game logic'],
    live: 'https://diamond-game.surge.sh/',
    github: 'https://github.com/ashonweb/Diamond-search-game',
    image: diamond,
  },
  {
    title: 'Calculator',
    desc: 'Fully functional calculator with keyboard input, operator precedence, and clean responsive UI.',
    tags: ['React', 'JavaScript'],
    live: 'https://calculator-bmeghpal.surge.sh/',
    github: 'https://github.com/ashonweb/Calculator',
    image: calc,
  },
];

const Projects = () => {
  const { classes } = useStyles();

  const featured = PROJECTS.find(p => p.featured);
  const rest = PROJECTS.filter(p => !p.featured);

  const CardLinks = ({ project }) => (
    <div className={classes.cardLinks}>
      {project.live && (
        <a href={project.live} target="_blank" rel="noreferrer" className={classes.cardLink}>
          <ExternalIcon /> Live Demo
        </a>
      )}
      <a href={project.github} target="_blank" rel="noreferrer" className={classes.cardLink}>
        <GitHubIcon /> GitHub
      </a>
    </div>
  );

  return (
    <section className={classes.section}>
      <div className={classes.topRow}>
        <div>
          <h2 className={classes.sectionTitle}>Things I've Built</h2>
        </div>
        <a href="https://github.com/ashonweb" target="_blank" rel="noreferrer" className={classes.viewAll}>
          View all on GitHub →
        </a>
      </div>

      <div className={classes.grid}>
        {/* Featured card */}
        <div className={`${classes.card} ${classes.cardFeatured}`}>
          {featured.image ? (
            <div className={classes.cardImgWrap}>
              <img src={featured.image} alt={featured.title} />
            </div>
          ) : (
            <div className={classes.cardImgPlaceholder}>
              {featured.emoji}
            </div>
          )}
          <div className={`${classes.cardBody} ${classes.cardBodyFeatured}`}>
            <div className={classes.cardTags}>
              {featured.tags.map(t => <span key={t} className={classes.cardTag}>{t}</span>)}
            </div>
            <div className={`${classes.cardTitle} ${classes.cardTitleFeatured}`}>{featured.title}</div>
            <p className={`${classes.cardDesc} ${classes.cardDescFeatured}`}>{featured.desc}</p>
            <CardLinks project={featured} />
          </div>
        </div>

        {/* Rest of projects */}
        {rest.map(project => (
          <div key={project.title} className={classes.card}>
            <img
              className={classes.cardImg}
              src={project.image}
              alt={project.title}
            />
            <div className={classes.cardBody}>
              <div className={classes.cardTags}>
                {project.tags.map(t => <span key={t} className={classes.cardTag}>{t}</span>)}
              </div>
              <div className={classes.cardTitle}>{project.title}</div>
              <p className={classes.cardDesc}>{project.desc}</p>
              <CardLinks project={project} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
