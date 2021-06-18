import './App.css';
import LogoLinksComponent from './Components/LogoLinksComponent'

function App() {
  return (
    <div className="App">
      {/* <Route path='/' render={() => <Routes />} */}

      <LogoLinksComponent/>
      {/* <AboutMeComponent/> */}
    </div>
  );
}

// const Routes = () => {
//   return (
//     <Switch>
      
//           <Route exact path='/houses' component={NobleHouses} />
//           <Route exact path='/houses/stark' component={MainHouses} />

//           exact path={["/add-client", "/edit-client"]}


//     </Switch>
//   );
// }
export default App;
