import React from "react";
import { AppLayout } from "@/layout";
import { MovementListHeaderComponent } from "./components/movement-list-header.component";
import { MovementListAliasComponent } from "./components/movement-list-alias.component";
import { getAccount } from "./api";
import { AccountVm } from "./movement-list.vm";
import { useParams } from "react-router-dom";
import { mapAccountFromApiToVm } from "./movement-list.mapper";
import { MovementListTableComponent } from "./components";
import classes from "./movement-list.page.module.css";

export const MovementListPage: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const [accountData, setAccountData] = React.useState<AccountVm>();

  React.useEffect(() => {
    if (id) {
      getAccount(id).then((result) => {
        setAccountData(mapAccountFromApiToVm(result));
      });
    }
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <MovementListHeaderComponent balance={(accountData) ? accountData.balance : ''} />
        <MovementListAliasComponent
          alias={(accountData) ? accountData.alias : ''}
          account={(accountData) ? accountData.account : ''}
        />
        <MovementListTableComponent id={(id) ? id : ''} />
      </div>
    </AppLayout>
  );
};
