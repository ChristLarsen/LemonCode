import * as apiModel from "./api";
import * as viewModel from "./account.vm";

export const mapAccountFromApiToVm = ( account: apiModel.Account ): viewModel.AccountVm => ({
    type: account.type,
    name: account.name
});

export const mapAccountFromVmToApi = ( account: viewModel.AccountVm ): apiModel.Account => ({
    type: account.type,
    name: account.name
});
