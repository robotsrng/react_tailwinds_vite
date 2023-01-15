import { TUser } from "src/features/types";
import api from "src/data-fetching/api";


export function postLogin(values: Partial<TUser>) {
    return api.post<TUser>('/auth/login', values).then((response) => response.data);
}
export function postSignup(values: Partial<TUser>) {
    return api.post('/auth/signup', values).then((response) => response.data);
}
export function postLogout() {
    return api.post('/auth/logout').then((response) => response.data);
}


export function getCurrentUser() {
    return api.get<TUser>('/auth/current-user').then((response) => response.data);
}