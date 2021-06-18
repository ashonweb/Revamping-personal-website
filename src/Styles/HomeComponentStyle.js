import image from '../Assests/background.jpeg';

const style = theme => ({
  container: {
    backgroundImage: `url(${image})`,
    minHeight: "100vh",
    filter: "blur(4px)"
  },
  maincontentstartshere: {
    position: "absolute",
  },

  authorname:{
    // backgroundColor: `rgb(0,0,0)`,/* Fallback color */
    // backgroundColor: `rgba(0,0,0, 0.4)`, /* Black w/opacity/see-through */
    fontWeight: "bold",
    // border: "3px solid #f1f1f1",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: `translate(${'-50%, -50%'})`,
    zIndex: 2,
    textAlign: "center",
    color:"white",
    fontSize:'50px',
    lineHeight:1,
    width:'80%',

  },
  name:{
    fontSize:'50px',
    fontWeight:900,
    fontFamily:'Nunito,sans-serif'
  },
  role:{
    fontSize:'45px',
    fontWeight:900,
    fontFamily:'Nunito,sans-serif'
  },

  
  
})
export default style