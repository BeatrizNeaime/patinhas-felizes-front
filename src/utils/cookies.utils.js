import Cookies from "js-cookie";

export const CookiesUtils = {
  set: (name, value) => {
    Cookies.set(name, value, { expires: 30, path: "/" });
  },
  get: (name) => {
    return Cookies.get(name);
  },
}