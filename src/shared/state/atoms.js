import { atom } from 'recoil';

export const languageState = atom({
  key: 'languageState',
  default: 'lt',
});

export const isLoggedIn = atom({
  key: 'isLoggedIn',
  default: false,
});

export const userState = atom({
  key: 'userState',
  default: null,
});
