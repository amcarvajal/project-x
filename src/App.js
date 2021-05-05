import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';
//Components
import Nav from "./components/Nav";
import Container from "./components/Container";
import Login from "./components/Login";
import Product from "./components/Product";
import Home from "./components/Home"
import Footer from './components/Footer';
import SignUp from './components/SignUp';

function App() {

  const title = ["Websites Themes", "Apps", "Icons & Buttons", "Designs"];


  return (
    <Router>
      <div >
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Container} title={title}/>
        {/* <Route path="/login" component={Login}/> */}
        <Login/>
        <Route path="/signUp" component={SignUp}/>
        <Route path="/singleProduct" exact component={Product} title={title}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
