const style = theme => ({
  footer: {
    padding: '24px 72px',
    borderTop: '1px solid rgba(255,255,255,0.07)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0a0e1a',
    [theme.breakpoints.down('md')]: { padding: '24px' },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 12,
      textAlign: 'center',
    },
  },
  copy: {
    fontSize: 12,
    color: '#4b5977',
    '& span': { color: '#4f8ef7' },
  },
  backToTop: {
    fontSize: 12,
    color: '#4b5977',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    transition: 'color 0.2s',
    '& svg': { width: 13, height: 13 },
    '&:hover': { color: '#f1f5f9' },
  },
});

export default style;
