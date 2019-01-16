import axios from "axios";
import { BASE_URL } from "../URL";

export const signIn = async (username: string, password: string) => {
    const dataPost = {
        username,
        password,
        client_id: 'dummy-client-id',
        client_secret: 'dummy-client-secret',
        grant_type: "client_credentials"
    };
    return new Promise<any>((resolve: any, reject: any) => {
        axios
            .post(`${BASE_URL}/oauth/token`, dataPost)
            .then(response => {
                const { data } = response;
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}