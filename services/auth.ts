// import axios from "axios";

// const ROOT_API = process.env.NEXT_PUBLIC_API;
// const API_VERSION = 'api/v1';

// export const setSignup = (data:any) => {
//   const URL = 'auth/signup';

//   return axios.post(`${ROOT_API}/${API_VERSION}/${URL}`, data)
//   .then(response => response.data.data)
//   .catch(error => {
//     console.error(error);
//   });
  
// }

import axios from "axios";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export const setSignup = async (data:any) => {
  const URL = 'auth/signup';

  const response = await axios.post(`${ROOT_API}/${API_VERSION}/${URL}`, data).catch(err => err.response);

  console.log('api resp :', response);
  const axiosResponse = response.data

  if(axiosResponse.error === 1) {
    return axiosResponse;
  }

  return axiosResponse.data;
};