import React, { Component } from 'react';
import { fetch, update, deleter, add } from '../actions';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledDiv = styled.div`
text-align: center;

.smurfs {
background: #C6FFDD;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #f7797d, #FBD786, #C6FFDD); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
border-radius: 50%;
width: 50%;
margin-left: 17rem;
}

.off {
        display:none;
}

`;
class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      input: 'off',
      nameUpdate: '',
      ageUpdate: '',
      emailUpdate: ''
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

  showInput = () => {
    this.setState({
      input: 'on'
    });
  };

  updateIt = (id) => {
    this.props.update(id, this.state.nameUpdate, this.state.ageUpdate, this.state.emailUpdate);


    this.setState({
      nameUpdate: '',
      ageUpdate: '',
      emailUpdate: '',
      input: 'off'
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
    if (this.props.loading) {
      return (
        <StyledDiv>
          Loading...
        </StyledDiv>
      );
    }

    if (this.props.error) {
      return (
        <StyledDiv>
          <div>Argh! This failed rather miserably. {this.props.error}</div>
        </StyledDiv>
      );
    }
    return (
      <StyledDiv>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        {this.props.smurfs.map(smurf =>
          <div
            className='smurfs'
            key={smurf.id}>
         <p>{smurf.name}</p>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
            <button
              onClick={() => this.props.deleter(smurf.id)}>
              X
               </button>
            <button
              onClick={this.showInput}>
              Update
               </button>
            <div
              className={this.state.input === 'off' ? 'off' : null}>
              <input
                onChange={this.handleInputChange}
                name="nameUpdate"
                type="text"
                value={this.state.nameUpdate} />
              <input
                onChange={this.handleInputChange}
                name="ageUpdate"
                type="number"
                value={this.state.ageUpdate} />
              <input
                onChange={this.handleInputChange}
                name="emailUpdate"
                type="text"
                value={this.state.emailUpdate} />
              <button onClick={() =>
                this.updateIt(smurf.id)}>
                update
                                                                   </button>
            </div>
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
        <button onClick={this.adder}>ADD</button>
      </StyledDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    loading: state.loading,
    error: state.error
  }
};

export default connect(mapStateToProps, { fetch, update, deleter, add })(Smurfs);