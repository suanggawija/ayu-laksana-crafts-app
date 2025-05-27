import Cookies from "js-cookie";

const setCookie = (token: string) => {
  Cookies.set("token", token, {
    expires: 1, // 1 day
    path: "/",
  });
};

export default setCookie;
