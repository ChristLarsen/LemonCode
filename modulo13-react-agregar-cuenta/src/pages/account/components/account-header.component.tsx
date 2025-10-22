import React from "react";
import classes from "../account.page.module.css";

export const AccountHeaderComponent: React.FC = () => {

  return (
    <>
        <div className={classes.headerContainer}>
          <h1>Cuenta Bancaria</h1>
        </div>
    </>
  );
};
