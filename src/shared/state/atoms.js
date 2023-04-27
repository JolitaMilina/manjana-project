import { atom } from 'recoil';

export const isLoggedIn = atom({
  key: 'isLoggedIn',
  default: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
});

export const userState = atom({
  key: 'userState',
  default: null,
});
