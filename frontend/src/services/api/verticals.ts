import axios from "axios";
import { BASE_URL } from "../URL";

export const getVerticals = async () => {
    const token = "";
    return new Promise<any>((resolve: any, reject: any) => {
        axios
            .get(`${BASE_URL}/api/verticals`, {
                headers: {
                    Authorization: `Bearer ${token}`
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