import React from "react";
import classes from "../account-list.page.module.css";
import { generatePath, useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";

export const AccountListHeaderComponent: React.FC = () => {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(generatePath(appRoutes.account));
  };

  return (
    <>
        <div className={classes.headerContainer}>
          <h1>Mis cuentas</h1>
          <button type="button" onClick={handleNavigate}>AGREGAR NUEVA CUENTA</button>
        </div>
    </>
  );
};
