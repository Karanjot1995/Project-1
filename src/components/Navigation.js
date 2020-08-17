import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom';
import Axios from 'axios';

class Navigation extends Component {
  // constructor(props) {
  //   super(props);
    
   
  // }
  state = {
    winWid: window.innerWidth,
  };


  componentDidMount() {
    window.addEventListener("resize", this.windowWidth.bind(this));
    if (window.innerWidth < 992) {
      this.setState({
        menuVisible: false,
      });
    }
    window.addEventListener("mousedown", this.handleClickOutside);
  }

  windowWidth() {
    this.setState({
      winWid: window.innerWidth,
      // menuVisible:false,
    });
  }

  dropdown() {
    const drpdwn = document.getElementById("drpdwn");
    const dropdown = document.getElementById("dropdown-content");
    if (dropdown.classList.contains("d-none")) {
      dropdown.classList.remove("d-none");
      drpdwn.classList.add("active");
    } else {
      drpdwn.classList.remove("active");
      dropdown.classList.add("d-none");
    }
  }


  render() {
    console.log(this.props.navdata)

    if (this.props.navdata && this.props.navdata.code == 200){
      return (
        <div className="nav-container"
          id="sidebar"
          style={
            this.state.winWid > 992 ? { display: "block", width:"100%" } : { display: "none" }
          }>
          {/* <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target" id="ftco-navbar">
            <div className="container">
              <a className="navbar-brand" href="index.html">Meet<span>Up.</span></a>
              <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="oi oi-menu"></span> Menu
	          </button>

              <div className="collapse navbar-collapse" id="ftco-nav">
                <ul class="navbar-nav ">
                  {this.props.navdata.data.map(data =>
                    <li class="nav-item main-nav ">
                      <a class="nav-link text-dark text-center" href="#" rel="noreferrer" data-toggle="modal" data-target="#exitPopup">
                        <img src={data.icon_url} alt="Flipkart" class="menu-icon-new  mt-1 lazyloaded" />
                        <p class="menu-name">{data.name}</p>
                      </a>
                    </li>

                  )}

                </ul>
              </div>
            </div>
          </nav> */}
          
          <nav class="row navbar navbar-expand-lg navbar-white text-dark bg-white bg-header-m">
            <div class="collapse navbar-collapse container p0 justify-content-around" style={{ "height": "76px" }}>
              <ul class="navbar-nav ">
                {this.props.navdata.data.map(data => 
                  <li class="nav-item main-nav ">
                    <a class="nav-link text-dark text-center" href="#" rel="noreferrer" data-toggle="modal" data-target="#exitPopup">
                      <img src={data.icon_url} alt="Flipkart" class="menu-icon-new  mt-1 lazyloaded" />
                  <p class="menu-name">{data.name}</p>
                    </a>
                  </li>
                  
                )}
                
              </ul>
            </div>
          </nav>
        </div>
      );
    }else{
      return ''
    }
  }
}



function mapStateToProps(state) {
  return {
    navdata: state.navdata
  }
}

export default connect(mapStateToProps)(Navigation);