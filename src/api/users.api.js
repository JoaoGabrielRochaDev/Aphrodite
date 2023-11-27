import api from "./api";

async function getMe() {
  const res = await api.get("/auth/user");
  console.log(res);
  return res.data;
}
async function login({ email, password }) {
  const res = await api.post("auth/login", {
    email,
    password,
  });
  return res.data;
}
async function register({ email, password, dateOfBirth, firstName, lastName }) {
  const response = await api.post("auth/register", {
    email,
    password,
    dateOfBirth,
    firstName,
    lastName,
  });

  return response.data;
}
const usersApi = { getMe, login, register };
export default usersApi;
