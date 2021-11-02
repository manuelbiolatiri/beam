import axios from "axios";

const axiosRequest = (requestType, appendUrl, payload) => {

  const baseUrl = `http://localhost:3000`;
  const requestUrl = `${baseUrl}${appendUrl}`;

  let config;

    config = {
      headers: {
        "Content-type": "Application/json",
      },
    };

  const axiosGet = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(requestUrl)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const axiosPost = () => {
    return new Promise((resolve, reject) => {
      axios
        .post(requestUrl, payload, config)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };

  const axiosPut = () => {
    return new Promise((resolve, reject) => {
      axios
        .put(requestUrl, payload, config)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  switch (requestType.toLowerCase()) {
    case "post":
      return axiosPost();

    case "get":
      return axiosGet();

    case "put":
      return axiosPut();

    default:
      break;
  }
};

export default axiosRequest;
