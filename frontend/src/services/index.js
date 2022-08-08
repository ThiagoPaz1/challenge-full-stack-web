import axios from 'axios';

export const getAllStudentsApi = async () => {
  const request = await axios.get('http://localhost:3001/student');
  const { data } = request;

  return data;
}