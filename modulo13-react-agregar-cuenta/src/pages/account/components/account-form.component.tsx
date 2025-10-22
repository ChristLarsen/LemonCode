import React from "react";
import {
  AccountVm,
  createEmptyAccountVm,
  AccountError,
  createEmptyAccountError,
} from "../account.vm";
import { validateForm } from "../validations";
import classes from "./account-form.component.module.css";

interface Props {
  onCreateAccount: (accountInfo: AccountVm) => void;
}

export const AccountFormComponent: React.FC<Props> = (props) => {
  const { onCreateAccount } = props;
  const [account, setAccount] = React.useState<AccountVm>(
    createEmptyAccountVm()
  );

  const [errors, setErrors] = React.useState<AccountError>(
    createEmptyAccountError()
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValidationResult = validateForm(account);
    setErrors(formValidationResult.errors);
    if (formValidationResult.succeeded) {
      onCreateAccount(account);
    }
  };

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    })
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label>Tipo de cuenta:</label>
            <select name="type" className={classes.large} 
              onChange={handleFieldChange}
            >
              <option value="">Seleccionar</option>
              <option value="id1">Cuenta Corriente</option>
              <option value="id2">Cuenta de Ahorro</option>
              <option value="id3">Cuenta de Nómina</option>
            </select>
            <p className={classes.error}>{errors.type}</p>
          </div>
          <div>
            <label>Alias:</label>
            <input name="name" className={classes.large} 
              onChange={handleFieldChange}
            />
            <p className={classes.error}>{errors.name}</p>
          </div>
        </div>
        <button className={classes.button} type="submit">
          GUARDAR
        </button>
      </form>
    </div>
  );
};
