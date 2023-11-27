import api from "./api";

async function CreateSubject({ name }) {
  const res = await api.post("/subjects/createSubject", { name });

  return res.data;
}
async function getSubjects() {
  const res = await api.get("/subjects");

  return res.data;
}
const subjectsApi = { CreateSubject, getSubjects };
export default subjectsApi;
