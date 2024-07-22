import axios from 'axios';
import { apiBaseUrl } from './apiConfig';

export const api = axios.create({
  baseURL: apiBaseUrl,
});
