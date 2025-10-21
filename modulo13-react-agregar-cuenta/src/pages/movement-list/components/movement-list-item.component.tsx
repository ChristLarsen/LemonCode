import React from "react";
import { MovementVm } from "../movement-list.vm";
import classes from "./movement-list-items.component.module.css";

interface Props {
  movementItem: MovementVm;
}

export const MovementListItemComponent: React.FC<Props> = (props) => {
  const { movementItem } = props;

  return (
    <div className={classes.row}>
      <span className={classes.dataCell}>{movementItem.date.toLocaleDateString()}</span>
      <span className={classes.dataCell}>{movementItem.date.toLocaleDateString()}</span>
      <span className={classes.dataCell}>{movementItem.description}</span>
      <span
        className={
          Number(movementItem.amount) > 0
            ? `${classes.dataCell} ${classes.alignRight} ${classes.bold}`
            : `${classes.dataCell} ${classes.alignRight} ${classes.boldRed}`
        }
      >{movementItem.amount} €</span>
      <span
        className={
          Number(movementItem.availableBalance) > 0
            ? `${classes.dataCell} ${classes.alignRight} ${classes.bold}`
            : `${classes.dataCell} ${classes.alignRight} ${classes.boldRed}`
        }
      >{movementItem.availableBalance} €</span>
    </div>
  );
};
