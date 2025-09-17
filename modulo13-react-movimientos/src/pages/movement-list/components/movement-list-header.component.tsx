import React from "react";
import classes from "../movement-list.page.module.css";

interface Props {
  balance : string;
};

export const MovementListHeaderComponent: React.FC<Props> = (props) => {

  const { balance } = props;

  return (
    <>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
          <div>
            <div className={classes.headerContainerSaldo}>SALDO DISPONIBLE</div>
            <div className={classes.headerContainerSaldoImporte}>
              <p>{balance} €</p>
            </div>
          </div>
        </div>
    </>
  );
};
