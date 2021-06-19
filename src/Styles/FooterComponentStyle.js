const style = theme => ({
  container:{
    // backgroundImage: `url(${dots})`,
    position:'relative',
    // padding:'30px 125px',
    background: "#efefef",
    fontSize: "15px",
    color: "#888",
    
    justifyContent:"space-between",
    [theme.breakpoints.down('sm')]: {
      display:'block'
    },
   
  },
  container_main:{
    // backgroundImage: `url(${dots})`,
    position:'relative',
    // padding:'30px 125px',
    background: "#efefef",
    fontSize: "15px",
    color: "#888",
    padding: "70px 30px",
    display:'flex',
    justifyContent:"space-between",
    [theme.breakpoints.down('sm')]: {
      display:'block'
    },
   
  },
  heading:{
    color:'black',
    fontFamily: 'Nunito,sans-serif',
    fontSize: '1rem',
    margin:'0px 0 30px 0',
    textAlign:'left',
    [theme.breakpoints.down('sm')]: {
      textAlign:'left'
    },
  },
  about:{
    flexBasis:'30%',
    
  },
  skills:{
    flexBasis:'0%',
    [theme.breakpoints.down('sm')]: {
      textAlign:'center',
      margin:'20px 0'
    },
    
  },
  contact:{
    flexBasis:'20%',
    [theme.breakpoints.down('sm')]: {
      textAlign:'center'
    },
  },
  refrenceconnect :{
    marginRight: "10px",
    display: "inline-block",
    width: "30px",
    height: "30px",
    position: "relative",
    background: "#777",
    borderRadius: "50%",
    color: "#ffffff",
    '&:hover':{
      background: "#96bb7c !important",

    }
  },
  icons:{
    margin: "0 auto",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%) `,
    '&:hover':{
      color: "white",

    }
  },
  list:{
    listStyleType:'none',
    padding:'0',
    [theme.breakpoints.down('sm')]: {
      textAlign:'left'
    },
  }
  
})
export default style