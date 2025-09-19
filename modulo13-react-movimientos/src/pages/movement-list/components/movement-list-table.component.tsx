import React from "react";
import classes from "./movement-list-table.component.module.css";
import { MovementListItemComponent } from "./movement-list-item.component";
import { getMovements } from "../api";
import { mapMovementFromApiToVm } from "../movement-list.mapper";
import { MovementVm } from "../movement-list.vm";

interface Props {
  id: string;
}

export const MovementListTableComponent: React.FC<Props> = (props) => {
  const [movementList, setMovementList] = React.useState<MovementVm[]>([]);
  const { id } = props;

  React.useEffect(() => {
    getMovements(id).then(result => setMovementList(mapMovementFromApiToVm(result)))
  }, []);


  return (
    <>
      <div className={classes.gridContainer}>
        <div className={classes.gridTable}>
          <div className={classes.headerTable}>
            <span className={classes.headerCell}>FECHA</span>
            <span className={classes.headerCell}>FECHA VALOR</span>
            <span className={classes.headerCell}>DESCRIPCIÓN</span>
            <span className={classes.headerCell}>IMPORTE</span>
            <span className={classes.headerCell}>SALDO DISPONIBLE</span>
          </div>
        </div>
        {movementList.map((movement) => (
          <MovementListItemComponent movementItem={movement} />
        ))}
      </div>
    </>
  );
};
