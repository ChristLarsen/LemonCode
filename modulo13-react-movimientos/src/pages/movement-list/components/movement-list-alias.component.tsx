import React from "react";
import classes from "./movement-list-alias.component.module.css";

interface Props {
  alias : string;
  account : string;
}

export const MovementListAliasComponent: React.FC<Props> = (props) => {
  
  const { alias, account }= props;
  
  return (
    <>
        <div className={classes.aliasContainer}>
            <div className={classes.bold}>
              {`Alias: ${alias}`}
            </div>
            <div className={classes.bold}>
              {`IBAN: ${account}`}
            </div>
        </div>
    </>
  );
};
