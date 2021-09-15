import * as UsersActionCreators from "./users";
import * as TodosActionCreators from "./todos";

export const actionCreators = {
    ...UsersActionCreators,
    ...TodosActionCreators
}