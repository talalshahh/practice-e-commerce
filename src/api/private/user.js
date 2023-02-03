import api from '../privateConfig';

const endpoint = '/user';

export const profileCreationORLoadUrl = async () => {
  try {
    let url = endpoint + '/register';
    let response = await api.post(url);
    return response;
  } catch (error) {
    console.log(error, 'err');
  }
};
export const handleUserProfileUrl = async () => {
  try {
    let url = endpoint + '/login';
    let response = await api.get(url);
    return response;
  } catch (error) {
    console.log(error, 'err');
  }
};
