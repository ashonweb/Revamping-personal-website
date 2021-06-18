const style = theme => ({
  container:{
    // backgroundImage: `url(${dots})`,
    position:'relative',
    padding:'30px',
    // padding:'30px 125px',
    [theme.breakpoints.down('sm')]: {
      padding:'10px'
    },
   
    margin:"25px 0"
  },
  heading:{
    color:'black',
    fontFamily: 'Nunito,sans-serif',
    fontWeight:400,
    fontSize: '3rem',
    margin:'30px 0 10px 0',
    textAlign:'center'
  },
  contentcontainer:{
    
    display:'flex',gap:'10%',
    [theme.breakpoints.down('sm')]: {
      display:'block'
    }},
    row:{
      margin:"15px 0",
      display:'flex',
      flexWrap:'wrap',
      flexBasis:'55%'
    },
    col:{
      flex: '0 0 50%',
    maxWidth: "50%",
    },
    col1:{
      flex: '0 0 100%',
    maxWidth: "100%",
    },
    formcontrol:{
      width:'100%',
      border: "none",
    fontSize: "16px",
    height: "45px",
    paddingLeft: 0,
    paddingRight: 0,
    background: "transparent",
    borderBottom: "1px solid #43434d",
    borderRadius: 0,
    color: "#000000",
    '&:focus-visible':{
      color: '#000000',
    borderColor: '#96bb7c',
    boxShadow: "none",
    background: "transparent",
    outline:'none'
    },
    '&:focus':{
      color: '#000000',
    borderColor: '#96bb7c',
    boxShadow: "none",
    background: "transparent",
    },
    '&:active':{
      color: '#000000',
    borderColor: '#96bb7c',
    boxShadow: "none",
    background: "transparent",
    }
  },
  formgroup:{
    padding:'0 3px'
  },
  formcontroltextarea:{
    width:'100%',
    border: "none",
  fontSize: "16px",
  height: "80px",
  paddingLeft: 0,
  paddingRight: 0,
  background: "transparent",
  borderBottom: "1px solid #43434d",
  borderRadius: 0,
  color: "#000000",
  '&:focus-visible':{
    color: '#000000',
  borderColor: '#96bb7c',
  boxShadow: "none",
  background: "transparent",
  outline:'none'
  },
  '&:focus':{
    color: '#000000',
  borderColor: '#96bb7c',
  boxShadow: "none",
  background: "transparent",
  },
  '&:active':{
    color: '#000000',
  borderColor: '#96bb7c',
  boxShadow: "none",
  background: "transparent",
  }
  },
  message:{
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