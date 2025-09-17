export interface AccountData {
    account : string;
    balance : string;
    alias : string;
};

export const createEmptyAccountData = () : AccountData => ({
    account : "",
    balance : "",
    alias : ""
});
