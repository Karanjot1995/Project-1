import React, {Component} from 'react';
import Navigation from './components/Navigation';
import {navdata} from './components/actions/action'
import { connect } from 'react-redux';
import Axios from 'axios';
import { Switch, Route, NavLink, withRouter } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import FormData from './components/FormData';

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from 'jquery'

class App extends Component {

  state = {
    winWid: window.innerWidth,
    isOpen: false,
  };

  componentDidMount(){
    window.addEventListener("resize", this.windowWidth.bind(this));

    Axios.get('https://api.gyftr.net/smartbuyapi/hdfc/api/v1/home/categories')
      .then(response => {
        this.props.dispatch(navdata(response.data))
      })

      console.log(this.props.history.location)
  }




  windowWidth() {
    this.setState({
      winWid: window.innerWidth,
      // menuVisible:false,
    });
  }

  toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    let toggleBtn = document.getElementById("nav-toggler");
    if (sidebar.style.display == "none") {
      sidebar.style.display = "block";
      sidebar.classList.add("collapsible");
      toggleBtn.classList.add("open-close");

      this.setState({
        isOpen: true,
      });
    } else {
      sidebar.style.display = "none";
      sidebar.classList.remove("collapsible");
      toggleBtn.classList.remove("open-close");
      this.setState({
        isOpen: false,
      });
    }
  }



  render(){
    return (
      <div className="App">
        {/* <Navigation/> */}
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target" id="ftco-navbar">
          <div className="container">
            <a className="navbar-brand" href="index.html">Meet<span>Up.</span></a>
            {/* <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="oi oi-menu"></span> Menu
	          </button> */}

            <div className="d-flex" id="ftco-nav">
              <ul className="navbar-nav nav ml-auto">
                <li className="nav-item"><NavLink to="/" className="nav-link home">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/contact" className="nav-link contact">Contact</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
        {this.state.winWid < 992 ? (
          <button
            onClick={() => this.toggleSidebar()}
            style={{ position: "fixed", top: "25px", zIndex: 1000 }}
            id="nav-toggler"
          >
            {/* <img src={this.state.isOpen?"./images/close.png":"./images/menu.png"} height="30px"/> */}

            <FontAwesomeIcon
              icon={this.state.isOpen ? faTimes : faBars}
              style={{ height: "25px", width: "25px" }}
            />
          </button>
        ) : (
            ""
          )}
        <div style={{'position':'fixed','top':'75px', 'left':0,right:0,'z-index':'999'}}>
          <Navigation />

        </div>

        <Switch>
          <Route exact path="/" render={()=><Home/>}/>
          <Route exact path="/contact" render={() => <Contact />} />
          {this.props.formdata ? <Route exact path="/form-data" render={() => <FormData />} />:''}

        </Switch>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    navdata: state.navdata,
    formdata: state.formdata
  }
}

export default connect(mapStateToProps)(withRouter(App));