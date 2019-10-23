import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      "Content-Type": "application/json",
      authorization: `${token}`
    },
    baseURL: "https://lenders-app.herokuapp.com"
  });
};
export default axiosWithAuth;
