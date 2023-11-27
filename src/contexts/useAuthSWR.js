import useSWR from "swr";
import { useAuth } from "../api/AuthContext";
import api from "../api/api";

const useAuthSWR = (uri, data) => {
  const { isAuthenticated } = useAuth();

  return useSWR(() => (isAuthenticated ? [uri, data] : null), axiosFetcher);
};

const axiosFetcher = async (uri, data) => {
  try {
    const res = await api.get(uri, { params: data });
    return res.data;
  } catch (error) {
    throw {
      statusCode: error.request.status,
      data: error.request.data,
    };
  }
};

export default useAuthSWR;
