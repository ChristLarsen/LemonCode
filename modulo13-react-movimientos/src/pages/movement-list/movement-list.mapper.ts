import * as apiModel from "./api/account.api-model";
import * as viewModel from "./movement-list.vm";

export const mapAccountFromApiToVm = (account: apiModel.Account): viewModel.AccountData => {

    const accountData : viewModel.AccountData = {
        account : account.iban,
        alias : account.name,
        balance : account.balance.toString()
    };

    return accountData;
};
