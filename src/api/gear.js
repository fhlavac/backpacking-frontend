/* eslint-disable import/prefer-default-export */
import { API_SERVER_URL } from '../config/config';

export const fetchGearForCategory = (categoryId) => fetch(`${API_SERVER_URL}/gear/${categoryId}`)
  .then((res) => res.json())
  .then(
    (result) => result,
    (error) => {
      console.log('Error fetching gear:', error);
      return [];
    },
  );
