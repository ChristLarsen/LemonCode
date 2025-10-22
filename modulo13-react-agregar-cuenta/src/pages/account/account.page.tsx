import React from "react";
import { AppLayout } from "@/layout";
import { AccountVm } from "./account.vm";
import { AccountHeaderComponent } from "./components/account-header.component";
import { AccountFormComponent } from "./components/account-form.component";
import { mapAccountFromVmToApi } from "./account-mapper";
import { getAccountList, saveAccount } from "./api";
import classes from "./account.page.module.css";

export const AccountPage: React.FC = () => {
  const handlerCreateAccount = async (accountInfo: AccountVm) => {
    
    const accountList = await getAccountList();
    const exists = accountList.some(
      (account) => account.name === accountInfo.name
    );
    if (exists) {
      alert("El alias indicado ya existe.");
    } else {
      const account = mapAccountFromVmToApi(accountInfo);
      saveAccount(account).then((result) => {
        if (result) {
          alert("Nueva cuenta guardada con éxito.");
        } else {
          alert("Error al guardar la cuenta.");
        }
      });
    }
  };

  return (
    <AppLayout>
      <div className={classes.root}>
        <AccountHeaderComponent />
        <AccountFormComponent onCreateAccount={handlerCreateAccount} />
      </div>
    </AppLayout>
  );
};
