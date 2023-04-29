import { atom } from 'recoil';

export const isLoggedIn = atom({
  key: 'isLoggedIn',
  default: false,
});

export const userState = atom({
  key: 'userState',
  default: null,
});
