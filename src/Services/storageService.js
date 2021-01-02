export const storeUser = userData => {
  localStorage.setItem('userData', JSON.stringify(userData));
};

export const clearUser = () => {
  localStorage.removeItem('userData');
};
