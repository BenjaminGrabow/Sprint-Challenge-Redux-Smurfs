import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addRating } from '../actions/index';


const StyledDiv = styled.div`

.ratings {
        display: flex;
        
}

.rating-pic {
        width: 10%;
        height: 4rem;
        border-radius: 50%
}
`;

class Smurf extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        rating: ''
                }
        }

        handleChange = (e) => {
                this.setState({
                        [e.target.name]: e.target.value
                });
        };

        addRating = (id) => {
                this.props.addRating(id, this.state.rating);

                this.setState({
                        rating: ''
                });
        };

        render() {
                return (
                        <StyledDiv>
                                <h1>{this.props.smurf.name}</h1>
                                <p>{this.props.smurf.age}</p>
                                <p>{this.props.smurf.height}</p>
                                {this.props.smurf.messages.map(message =>
                                        <div
                                         key={this.props.smurf.id}
                                         className="ratings">
                                                <img 
                                                src={message.img}
                                                 alt={this.props.id}
                                                 className="rating-pic" />
                                                <p>{message.message}</p>
                                        </div>)}
                                <button onClick={() => this.addRating(this.props.smurf.id)} >Add</button>
                                <input value={this.state.rating}
                                onChange={this.handleChange}
                                name="rating" />
                                <Link to="/">Back</Link>
                        </StyledDiv>
                );
        }
}

export default connect(null, { addRating })(Smurf);