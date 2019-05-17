import { charactersUrl } from '../constants'
import axios from 'axios';

export const getCharacters = () => {
  return axios.get(charactersUrl);
}
