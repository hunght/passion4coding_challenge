import axios from "axios";
import { BASE_URL } from "../URL";

export const signIn = async (username: string) => {
    const dataPost = {
        username,
        password: "123456",
        grant_type: "password",
        client_id: 'null',
        client_secret: 'null'
    };
    return new Promise<any>((resolve: any, reject: any) => {
        axios
            .post(`${BASE_URL}/auth/login`, dataPost)
            .then(response => {
                const { data } = response;
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}
export const signUp = async (username: string) => {
    const dataPost = {
        username,
        password: "123456",
        grant_type: "password",
        client_id: 'null',
        client_secret: 'null'
    };
    return new Promise<any>((resolve: any, reject: any) => {
        axios
            .post(`${BASE_URL}/auth/registerUser`, dataPost)
            .then((response: any) => {
                const { data } = response;

                resolve(data);
            })
            .catch((error: any) => {
                reject(error);
            });
    });
}