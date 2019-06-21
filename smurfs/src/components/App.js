import React, { Component } from 'react';
import './App.css';
import { fetch, update, deleter, add } from '../actions';
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
      name: '',
      age: '',
      height: ''
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

  deletIt = (id) => {
    this.props.deleter(id);
  };

  updateIt = (id) => {
    this.props.update(id, this.state.name, this.state.age, this.state.height);

    this.setState({
      name: '',
      height: '',
      age: '',
    });
  };

  adder = () => {
    this.props.add(this.state.name, this.state.age, this.state.height);
    
    this.setState({
      name: '',
      height: '',
      age: '',
    });
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
            <button onClick={() => this.props.deleter(smurf.id)}>X</button>
            <button onClick={() => this.updateIt(smurf.id)}>Update</button>
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
          <button onClick={() => this.adder()}>ADD</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { fetch, update, deleter, add })(App);