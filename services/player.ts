import axios from "axios";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export const getFeaturedGame = () => {
  const URL = 'players/landingpage';

  return axios.get(`${ROOT_API}/${API_VERSION}/${URL}`)
  .then(response => response.data.data)
  .catch(error => {
    console.error(error);
  });
  
}

export const getDetailVoucher = (id:string) => {
  const URL = `players/${id}/detail`;

  return axios.get(`${ROOT_API}/${API_VERSION}/${URL}`)
  .then(response => response.data.data)
  .catch(error => {
    console.error(error);
  });
}

export async function getGameCategory() {
  const URL = 'players/category';

  return axios.get(`${ROOT_API}/${API_VERSION}/${URL}`)
  .then(response => response.data.data)
  .catch(error => {
    console.error(error);
  });
}

// const axiosResponse = axios.get(`${ROOT_API}/${API_VERSION}/${URL}`).then(response => {
  //   response.data.data
  // });
  
  // const axiosResponse = response.data;
  

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  //     const axiosResponse = response.data;
  //     return axiosResponse.data;

  //     // setGameList(response.data.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }