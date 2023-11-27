import api from "./api";

async function uploadFile({ data }) {
  await api.post("/files/upload", data);
}
const filesApi = {
  uploadFile,
};
export default filesApi;
