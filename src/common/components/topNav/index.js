import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css';

export const TopNav = ({ currentCharacter }) => (
  <div className="topNav">
    <Link to="/characters">Characters</Link>
    <Link to="/locations">Locations</Link>
    <Link to="/episodes">Episodes</Link>
    {currentCharacter.name &&
      <p>Current Character: {currentCharacter.name}</p>
    }
  </div>
)
