import api from './api';

export const getHousesCall = async () => {
  try {
    const result = await api.get(
      `/properties/v2/list-for-rent?city=Miami&state_code=FL&limit=15&offset=0&sort=relevance`,
    );
    return result.data;
  } catch (error) {
    console.log({ error });
    return error;
  }
};
