import Axios from "axios";
import { Account } from "./account.api-model";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccount = (id : string) : Promise<Account> => 
    Axios.get<Account>(`${url}/${id}`).then((response) => response.data);
