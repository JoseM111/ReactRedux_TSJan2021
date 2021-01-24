import {ActionType} from "../action_types"

/**|━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━|*/
export type IAction =
    ISearchRepoAction
    | ISearchRepoSuccessAction
    | ISearchRepoErrorAction
/**|━━━━━━━━━━━━━━━━━━━━━ typealias ━━━━━━━━━━━━━━━━━━━━━|*/

    // section interface SearchRepoAction
export interface ISearchRepoAction {
    //: - ©Global-PROPERTIES
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/
    type: ActionType.SEARCH_REPOSITORIES

    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/
}
// #™━━━━━━━━━━━━━━━━━━|END

// section interface SearchRepoSuccessAction
export interface ISearchRepoSuccessAction {
    //: - ©Global-PROPERTIES
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS
    payload: string[]
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/
}
// #™━━━━━━━━━━━━━━━━━━|END

// section interface SearchRepoErrorAction
export interface ISearchRepoErrorAction {
    //: - ©Global-PROPERTIES
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/
    type: ActionType.SEARCH_REPOSITORIES_ERROR
    payload: string
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/
}
// #™━━━━━━━━━━━━━━━━━━|END
