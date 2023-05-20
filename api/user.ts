import { api } from ".";
import { UserCreate } from "../types/user";

export const subscribe = (data: UserCreate) => api.post(`/v1/users`, data);
export const getUser = async(id: number | string) => await api.get(`/v1/users/${id}`);