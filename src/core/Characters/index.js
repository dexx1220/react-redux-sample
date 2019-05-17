import React, { Component } from 'react';
import { getCharacters } from '../../common/api';
import { getCharacter } from './actions';
import { connect } from 'react-redux';
import './styles.css';


const Card = ({ data, handleClick }) => (
  <div className="card-character" onClick={handleClick}>
    <img src={data.image} />
    <p>Name: {data.name}</p>
    <p>Status: {data.status}</p>
    <p>Species: {data.species}</p>
    <p>Gender: {data.gender}</p>
  </div>
)

class Characters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    getCharacters()
      .then((res) => {
        this.setState({
          characters: res.data.results
        })
      });
  }

  render() {
    const { characters } = this.state
    return (
      <div>
        <h1>Rick and Morty Characters</h1>
        {!!characters.length && characters.map((c) => {
          return <Card data={c} handleClick={() => this.props.getCharacter(c.id)} />
        })}
      </div>
    );
  }
}


export default connect(null, { getCharacter })(Characters);