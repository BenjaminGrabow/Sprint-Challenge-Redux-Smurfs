import React, { Component } from 'react';
import './App.css';
import { fetch } from '../actions';
import { connect } from 'react-redux';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 

     }
  }
  
  componentDidMount = () => {
    this.fetchSmurfs();
  };

  fetchSmurfs = () => {
    this.props.fetch();
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        {this.props.smurfs.map(smurf => 
          <div key={smurf.id}>
            <p>{smurf.name}</p>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
          </div>)}
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { fetch })(App);