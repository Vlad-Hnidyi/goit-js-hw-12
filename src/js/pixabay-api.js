export const fetchByUserKey = userKey => {
  const searchParams = new URLSearchParams({
    key: '45511756-f868b950a5b29611a8f235e23',
    q: `${userKey.trim()}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`);
};
