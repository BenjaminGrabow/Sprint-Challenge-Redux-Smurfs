import React, { Component } from 'react';
import Smurf from './Smurf';
import Smurfs from './Smurfs';
import './App.css';
import { connect } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentDidUpdate = () => {
    console.log(this.props.smurfs)
  }
  render() { 
    return ( 
      <div>
      <NavLink to="/">Smurfs</NavLink>
      {this.props.smurfs.map(smurf => {
        return <NavLink
        key={smurf.id}
         to={`/${smurf.name}`} >{smurf.name}</NavLink>
      })}
      {this.props.smurfs.map(smurf => {
        return <Route
        key={smurf.id}
       path={`/${smurf.name}`}
        render={() => <Smurf {...this.props} smurf={smurf} />}
        />
      })}
      <Route path="/" component={Smurfs} />
    </div>
     );
  }
}
 
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
  }
};

export default connect(mapStateToProps)(App);