import apisauce from "apisauce";
import envConfig from './config';

import productsApi from './api/products';

const create = (baseURL = envConfig.API_URL) => {
  const api = apisauce.create({
    baseURL,
    timeout: 30000,
  });

  const login = (body, config) => api.post("/login", body, config);

  // ------
  // Interface
  // ------
  return {
    ...api,
    ...productsApi(api),
  };
};

export default {
  create,
};
