import { ACCOUNT_LIST } from "./database.mjs";

export const accountDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.push(account);
    console.log("Contenu de la BDD :", ACCOUNT_LIST);
  },
  retrieveAccountList() {
    return ACCOUNT_LIST.map(({ id, lastName, firstName }) => ({ id, lastName, firstName }));
  },
  updateAccount(account) {
    const index = ACCOUNT_LIST.findIndex((a) => a.id === account.id);
    ACCOUNT_LIST[index] = account;
    console.log("Contenu de la BDD aprés la mide à jour :", ACCOUNT_LIST);
  },
  retrieveAccount(id) {
    const account =  ACCOUNT_LIST.find((a) => a.id === id);

    if(!account) {
      return null;
    }
    return {
      id: account.id,
      name: `${account.lastName} ${account.firstName}`,
      creationDate: account.creationDate,
    };
  },
};