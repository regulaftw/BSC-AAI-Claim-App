import logo from './logo.svg';
import './App.css';

//React Stuff
import React, { Component } from 'react';

//Local Imports
import Background from './components/scripts/hero/background';
import Title from './components/scripts/hero/title';
import Navbar from './components/scripts/navbar/navbar';
import Banner from './components/scripts/banner/banner';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      web3 : null,
      pageLoad : false,
      UserWalletAddress : null
    }
    this.web3HandleChange = this.web3HandleChange.bind(this)
    this.accountAddressChange = this.accountAddressChange.bind(this)
  }

  web3HandleChange = (_web3) => {
    this.setState({web3 : _web3});
    this.setState({pageLoad : true})
  }

  accountAddressChange = (_address) => {
    this.setState({UserWalletAddress : _address})
  }

  render() {

    const {pageLoad} = this.state;

    console.log(this.state)

    return (
      <div>
        <Background/>
        <Navbar handler={this.web3HandleChange} accountHandler={this.accountAddressChange}/>
        <Title/>
        {pageLoad ? <Banner _props={this.state}/> : null}  {/* Conditional rendering based on web3 state */}
      </div>
    );
  }
}

export default App;
