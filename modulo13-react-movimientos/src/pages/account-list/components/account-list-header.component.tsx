import React from "react";
import classes from "../account-list.page.module.css";

export const AccountListHeaderComponent: React.FC = () => {
  return (
    <>
        <div className={classes.headerContainer}>
          <h1>Mis cuentas</h1>
          <button>AGREGAR NUEVA CUENTA</button>
        </div>
    </>
  );
};
