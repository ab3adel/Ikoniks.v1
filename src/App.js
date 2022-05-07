
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './i18n';
import './assets/scss/Style.css';
import './App.css';
import "./views/ContactUs/Loader.scss"
const Home = React.lazy(() => import('./views/homePage/homePage'));
const About3d = React.lazy(() => import('./views/About3d/About3d'));
function App() {
  const loading = (
    <div className='loaderCont'>
      <div class="loader">
        <div class="box"></div>
        <div class="box"></div>

      </div>
    </div>
  )
  return (
    <Router>
      <React.Suspense fallback={loading}>
        <Switch>

          {/* <Route exact path="/ExtremeCRM/:tel" name='ExtremeCRM' render={props => <ExtremeCRM {...props}/>} /> */}
          <Route path="/" exact component={Home} />
          <Route path="/About3D" component={About3d} />

        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
