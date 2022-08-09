import axios from 'axios';

export const getAllStudentsApi = async () => {
  const request = await axios.get('http://localhost:3001/student');
  const { data } = request;

  return data;
}

export const newStudentdApi = async (body) => {
  return await axios({
    method: "post",
    url: 'http://localhost:3001/student/new',
    data: body,
  }); 
}

export const editStudentdApi = async (id, body) => {
  return await axios({
    method: "put",
    url: `http://localhost:3001/student/edit/${id}`,
    data: body,
  }); 
}

export const deleteStudentApi = async (id) => {
  return await axios.delete(`http://localhost:3001/student/delete/${id}`);
}