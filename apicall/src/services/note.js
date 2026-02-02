import axios from "axios";

// const baseUrl = "http://localhost:3001/notes";
const baseUrl = import.meta.env.VITE_URL;

const getAll = async() => {
  const response = await axios.get(baseUrl);
    return response.data;
};
const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

const deleteContent = async(id)=>{
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
}
const update = async (id, data) => {
  const response = await axios.put(`${baseUrl}/${id}`, data);
  return response.data;
};

export default { getAll, create, deleteContent, update };