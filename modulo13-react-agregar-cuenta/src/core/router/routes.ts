export const routesPrefixes = {
    accountList: "/account-list",
    transfer: "/transfer",
    movements: "/movements",
    newAccount: "/new-account"
};

export const appRoutes = {
    root : "/", 
    accountList : routesPrefixes.accountList,
    newAccount : "/new-account",
    movements : `${routesPrefixes.movements}/:id`,
    transfer : routesPrefixes.transfer,
    transferFromAccount : `${routesPrefixes.transfer}/:id`
};
