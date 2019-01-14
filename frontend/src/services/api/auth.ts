import axios from "axios";
import { BASE_URL } from "../URL";

export const signIn = async (email: string, password: string) => {
    const dataPost = {
        email,
        password
    };
    return new Promise<any>((resolve: any, reject: any) => {
        axios
            .post(`${BASE_URL}/sign-in`, dataPost)
            .then(response => {
                const { data: { data } } = response;
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}