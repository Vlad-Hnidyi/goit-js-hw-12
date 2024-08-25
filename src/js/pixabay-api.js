import axios from 'axios';

export const fetchByUserKey = (userKey, page) => {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: '45511756-f868b950a5b29611a8f235e23',
      q: `${userKey.trim()}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page,
    },
  });
};
