const style = theme => ({
  section: {
    padding: '100px 72px',
    backgroundColor: '#0a0e1a',
    [theme.breakpoints.down('md')]: { padding: '80px 24px' },
  },
  topRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 48,
    [theme.breakpoints.down('sm')]: { flexDirection: 'column', alignItems: 'flex-start', gap: 16 },
  },
  sectionLabel: {
    fontFamily: '"Fira Code", monospace',
    fontSize: 12,
    color: '#4f8ef7',
    display: 'block',
    marginBottom: 10,
    letterSpacing: '0.04em',
  },
  sectionTitle: {
    fontSize: 'clamp(34px, 4vw, 52px)',
    fontWeight: 800,
    color: '#f1f5f9',
    letterSpacing: '-1.5px',
    lineHeight: 1.05,
  },
  viewAll: {
    fontSize: 13,
    fontWeight: 600,
    color: '#4f8ef7',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    flexShrink: 0,
    transition: 'gap 0.2s',
    '&:hover': { gap: 9 },
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 20,
    [theme.breakpoints.down('md')]: { gridTemplateColumns: 'repeat(2, 1fr)' },
    [theme.breakpoints.down('sm')]: { gridTemplateColumns: '1fr' },
  },

  /* card base */
  card: {
    background: '#0f1626',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: 14,
    overflow: 'hidden',
    transition: 'border-color 0.25s, transform 0.2s, box-shadow 0.25s',
    cursor: 'pointer',
    '&:hover': {
      borderColor: 'rgba(79,142,247,0.35)',
      transform: 'translateY(-4px)',
      boxShadow: '0 16px 48px rgba(0,0,0,0.35)',
    },
  },

  /* featured card spans 2 cols */
  cardFeatured: {
    gridColumn: 'span 2',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    [theme.breakpoints.down('md')]: {
      gridColumn: 'span 1',
      gridTemplateColumns: '1fr',
    },
  },

  cardImg: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
    display: 'block',
    filter: 'brightness(0.8) saturate(0.8)',
    transition: 'filter 0.35s',
    '$card:hover &': { filter: 'brightness(1) saturate(1)' },
  },
  cardImgFeatured: {
    height: '100%',
    minHeight: 240,
    [theme.breakpoints.down('md')]: { height: 200, minHeight: 'unset' },
  },

  /* gradient placeholder for projects without images */
  cardImgPlaceholder: {
    width: '100%',
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 32,
    background: 'linear-gradient(135deg, #1a2744 0%, #0f1e3d 100%)',
    flexShrink: 0,
  },

  cardBody: {
    padding: '20px 22px 22px',
    display: 'flex',
    flexDirection: 'column',
  },
  cardBodyFeatured: {
    justifyContent: 'center',
    padding: '28px 32px',
  },
  cardTags: {
    display: 'flex',
    gap: 7,
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  cardTag: {
    fontFamily: '"Fira Code", monospace',
    fontSize: 10,
    color: '#64ffda',
    background: 'rgba(100,255,218,0.07)',
    padding: '2px 9px',
    borderRadius: 4,
    letterSpacing: '0.02em',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: '#f1f5f9',
    marginBottom: 8,
  },
  cardTitleFeatured: {
    fontSize: 20,
    marginBottom: 12,
  },
  cardDesc: {
    fontSize: 13,
    color: '#4b5977',
    lineHeight: 1.65,
    marginBottom: 18,
    flex: 1,
  },
  cardDescFeatured: {
    fontSize: 14,
    marginBottom: 24,
  },
  cardLinks: {
    display: 'flex',
    gap: 14,
  },
  cardLink: {
    fontSize: 12,
    fontWeight: 600,
    color: '#4f8ef7',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    transition: 'opacity 0.2s',
    '& svg': { width: 12, height: 12, flexShrink: 0 },
    '&:hover': { opacity: 0.65 },
  },
});

export default style;
