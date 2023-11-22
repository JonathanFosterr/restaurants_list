import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const apiCall = async (method, endpoint, data) => {
  const url = apiUrl + endpoint;

  try {
    const response = await axios({
      method,
      url,
      data,
    });

    return response?.data;
  } catch (error) {
    console.error(`Error ${method} ${url}:`, error);
    throw error;
  }
};

export const get = (endpoint) => apiCall("get", endpoint);

export const post = (endpoint, data) => apiCall("post", endpoint, data);

export const put = (endpoint, data) => apiCall("put", endpoint, data);

export const remove = (endpoint) => apiCall("delete", endpoint);
