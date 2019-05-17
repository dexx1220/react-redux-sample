import React, { Component } from 'react';
import { TopNav } from '../common/components/topNav';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { character } = this.props
    return (
      <TopNav currentCharacter={character} />
    );
  }
}

const mapStateToProps = ({ characters }) => {
  return {
    character: characters.character
  }
}

export default connect(mapStateToProps)(App);
