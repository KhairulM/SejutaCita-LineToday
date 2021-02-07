import Axios from 'axios';

const backendURL = process.env.REACT_APP_BACKEND_URL;

const getAllData = async () => {
  return await Axios.get(`${backendURL}`).then(
    (response) => {
      if (response.status < 200 || response.status > 299) return null;
        return response.data.result;
    }
  ).catch(
    (error) => {
      console.log(error);
      return null;
    }
  );
}

const getDataByCategoryId = async (categoryId) => {
  return await Axios.get(`${backendURL}/${categoryId}`).then(
    (response) => {
      if (response.status < 200 || response.status > 299) return null;
        return response.data.result;
    }
  ).catch(
    (error) => {
      console.log(error);
      return null;
    }
  );
}

export {
  getAllData,
  getDataByCategoryId
};