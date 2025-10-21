export interface AccountVm {
    account : string;
    balance : string;
    alias : string;
};

export interface MovementVm {
    date : Date;
    valueDate : Date;
    description : string;
    amount : string;
    availableBalance : string;
};

export const createEmptyAccountData = () : AccountVm => ({
    account : "",
    balance : "",
    alias : ""
});
