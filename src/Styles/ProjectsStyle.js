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
  projects:{
    display:'flex'
  }
})
export default style