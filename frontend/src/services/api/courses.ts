import axios from "axios";
import { BASE_URL } from "../URL";

export const getCourses = async () => {
    //@ts-ignore
    const oauth = await JSON.parse(localStorage.getItem('oauth'));

    const {
        access_token
    } = oauth;
    return new Promise<any>((resolve: any, reject: any) => {
        axios
            .get(`${BASE_URL}/api/courses`, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            })
            .then(response => {
                const { data: { data } } = response;
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}