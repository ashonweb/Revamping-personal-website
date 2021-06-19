import './App.css';
import LogoLinksComponent from './Components/LogoLinksComponent';
import FooterComponent from './Components/Footer'

function App() {
  return (

    <div className="App">
        {  console.log(`https://formspree.io/f/${process.env.REACT_APP_NOT_SECRET_CODE}`,`${process.env.NODE_ENV}`,"dsdsf")}

      {/* <Route path='/' render={() => <Routes />} */}

      <LogoLinksComponent/>
      <FooterComponent/>
      {/* <AboutMeComponent/> */}
    </div>

  );
}


export default App;
