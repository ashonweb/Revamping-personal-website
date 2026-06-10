import './App.css';
import LogoLinksComponent from './Components/LogoLinksComponent';
import FooterComponent from './Components/Footer'

function App() {
  return (

    <div className="App">
          {/* <Route path='/' render={() => <Routes />} */}

      <LogoLinksComponent/>
      <FooterComponent/>
      {/* <AboutMeComponent/> */}
    </div>

  );
}


export default App;
