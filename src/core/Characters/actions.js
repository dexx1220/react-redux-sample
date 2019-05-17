import { charactersUrl } from '../../common/constants'
import axios from 'axios'

const baseUrl = 'https://rickandmortyapi.com/api/character'

const fetchedCharacter = (character) => {
  return {
    type: 'CHARACTER.SUCCESS',
    payload: character
  }
}

const fetchCharacterFailure = (error) => {
  return {
    type: 'CHARACTER.FAILURE',
    error
  }
}

export const getCharacter = (id) => dispatch => {
  return axios.get(`${baseUrl}/${id}`)
    .then(res => {
      dispatch(fetchedCharacter(res.data))
    })
    .catch(err => {
      dispatch(fetchCharacterFailure(err))
    })
}

export const getCharacters = () => {
  return axios.get(charactersUrl);
}
