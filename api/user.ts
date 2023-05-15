import { api } from ".";
import { UserCreate } from "../types/user";

export const subscribe = (data: UserCreate) => api.post(`/v1/users`, data);