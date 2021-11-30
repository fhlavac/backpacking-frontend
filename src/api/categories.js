/* eslint-disable import/prefer-default-export */
import { API_SERVER_URL } from '../config/config';

export const fetchCategories = () => fetch(`${API_SERVER_URL}/categories`)
  .then((res) => res.json())
  .then(
    (result) => result,
    (error) => {
      console.log('Error fetching categories:', error);
      return [];
    },
  );
