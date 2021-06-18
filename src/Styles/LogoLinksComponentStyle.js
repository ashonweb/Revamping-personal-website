
const drawerWidth = 300;

const style = theme => ({

  logo_links: {
    // backgroundColor: `rgb(0,0,0)`,/* Fallback color */
    backgroundColor: `rgba(0,0,0, 0)`, /* Black w/opacity/see-through */
    fontWeight: "bold",
    // border: "3px solid #f1f1f1",
    position: "absolute",
    top: "1%",
    left: "0%",
    zIndex: 1,
    color: "white",
    display: 'flex',
    width: '100%'
  },
  logosection: {
    flexBasis: '25%',
    display: "inherit",
    justifyContent: "center",
    alignItems: 'center'

  },
  linksection: {
    display: "inherit",
    justifyContent: "center",
    alignItems: 'center',
    flexBasis: '75%'
  },
  logo: {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 900,
    fontFamily: 'Nunito,sans-serif',
    border: '2px solid white',
    padding: '5px',
    color: 'white',
    textDecoration: 'none'

  },
  logofixed: {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 900,
    fontFamily: 'Nunito,sans-serif',
    border: '2px solid black',
    padding: '5px',
    color: 'black',
    textDecoration: 'none'

  },
  desktop: {
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      display: 'none !important',
    },
  },
  mobile: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block !important',
    },
  },
  links: {
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: 900,
    fontFamily: 'Nunito,sans-serif',
    padding: '0 45px',
    color: 'rgba(255, 255, 255, 0.5)',
    textDecoration: 'none',
    '&:hover': {
      color: 'white'
    },


  },
  linksfixed: {
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: 900,
    fontFamily: 'Nunito,sans-serif',
    padding: '0 45px',
    color: 'black',
    textDecoration: 'none',
    '&:hover': {
      color: '#96bb7c'

    },

  },
  mobilelinks: {
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: 900,
    fontFamily: 'Nunito,sans-serif',
    padding: '5px 20px',
    color: '#000000',
    textDecoration: 'none',
    '&:hover': {
      color: '#96bb7c'
    },

  },
  iconbutton: {
    marginRight: '0px'
  },
  menuiconbutton: {
    fontSize: '45px',
  },

  active: {
    color: 'white'
  },
  activefixed: {
    color: '#96bb7c'
  },
  mobileactive: {
    color: '#000000'
  },


  drawer: {
    width: drawerWidth,
    flexShrink: 0,

  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },

})
export default style