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
    textAlign:'center',
    [theme.breakpoints.down('sm')]: {
      textAlign:'left'
    },
  },
  contentcontainer:{
    
    display:'flex',gap:'10%',
    [theme.breakpoints.down('sm')]: {
      display:'block'
    }},
  image:{
    zIndex:2,
    flexBasis:'30%',
    height:'50%',
    width:'25%',
    [theme.breakpoints.down('sm')]: {
      width:'100%',
      display:'none',
    }
   
  },
  exp:{
    flexBasis:'50%',
  },
  workexp:{
    textAlign:'left',
    color:'black',
    fontFamily: 'Nunito,sans-serif',
    fontWeight:400,
    fontSize: '2rem',
  },
  position_type:{
    display:'flex',
    justifyContent:'space-between'
  },
  position:{
    textAlign:'left',
    color:'black',
    fontFamily: 'Nunito,sans-serif',
    fontWeight:400,
    fontSize: '1rem',
  },
  type:{
    textTransform: 'uppercase',
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '.1rem',
    padding: '7px 20px',
    borderRadius: '30px',
    background: `rgba(150, 187, 124, 0.1)`,
    color: '#96bb7c',
  },
  otherdetails:{
    display:'flex',
    justifyContent:'space-between',
    [theme.breakpoints.down('sm')]: {
      display:'block'
    }
  },
  icon:{
    color:'grey',
    height:'5px',
    width:'5px'
  },
  company_place:{
    display: "flex",
    alignItems: 'flex-start',
    gap: '5px'
  }
  
  
})
export default style