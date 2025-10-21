import * as apiModelAccount from "./api/account.api-model";
import * as apiModelMovement from "./api/movement-list.api-model";
import * as viewModel from "./movement-list.vm";

// Mapper Account de API a Vm
export const mapAccountFromApiToVm = (account: apiModelAccount.Account): viewModel.AccountVm => {

  const accountData: viewModel.AccountVm = {
    account: account.iban,
    alias: account.name,
    balance: account.balance.toString(),
  };

  return accountData;
};

// Mapper Movement de API (array) a Vm (array)
export const mapMovementFromApiToVm = (movements: apiModelMovement.Movement[]): viewModel.MovementVm[] => {

  return movements.map((movement) => ({
    date: new Date(movement.transaction),
    valueDate: new Date(movement.realTransaction),
    description: movement.description,
    amount: movement.amount.toString(),
    availableBalance: movement.balance.toString(),
  }));

};
