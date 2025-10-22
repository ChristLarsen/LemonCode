import Axios from "axios";
import { Account } from "./account.api-model";

const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const saveAccount = (account: Account): Promise<boolean> =>
    Axios.post<boolean>(urlAccount, account).then(({ data }) => data);
    Axios.get<Account[]>(urlAccount).then(({ data }) => data);

export const getAccountList = (): Promise<Account[]> =>
    Axios.get<Account[]>(urlAccount).then(({ data }) => data);
