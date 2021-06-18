const style = theme => ({
  container:{
    // backgroundImage: `url(${dots})`,
    position:'relative',
    display:'flex',
    padding:'30px',
    justifyContent:'center',
    // padding:'30px 125px',
    [theme.breakpoints.down('sm')]: {
      padding:'10px',
      display:'block'
    },
    margin:"25px 0"
  },
  dotimage :{
    position:'absolute',
    top:'0%',
    left:'50%',
    height:'300px',
    width:'300px',
    marginLeft: '-150px',
    [theme.breakpoints.down('sm')]: {
      
      display:'none'
    },
  },
  content:{
zIndex:2,
display:'flex',
margin:'30px 0'
  },
  image:{
    zIndex:2,
    flexBasis:'50%',
    height:'50%',
    width:'50%',
    [theme.breakpoints.down('sm')]: {
      width:'100%'
    }
   
  },
  mybio:{
    zIndex:2,
    height: '50%',
    flexBasis:'50%',
    // margin: '2% 0 0 5%',
    [theme.breakpoints.up('md')]: {
    margin: '3% 0 0 11%',
  },
    [theme.breakpoints.up('lg')]: {
    margin: '3% 0 0 7%',
  },
    [theme.breakpoints.up('xl')]: {
    margin: '3% 0 0 5%',
  },
   
    
  },
  heading:{
    color:'black',
    fontFamily: 'Nunito,sans-serif',
    fontWeight:400,
    fontSize: '3rem',
    margin:'0px 0 10px 0'
  },
  aboutme:{
    marginBottom:'1rem'
  },
  hireme:{
    color:'white',
    background: "#96bb7c",
    paddingTop: "15px",
    paddingBottom: "15px",
    paddingLeft: "30px",
    paddingRight: "30px",
    borderRadius: "30px",
    fontSize: "11px",
    textTransform: "uppercase",
    fontWeight: 700,
    letterSpacing: ".05rem"
  }
})
export default style