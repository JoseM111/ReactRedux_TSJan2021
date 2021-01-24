import {IAction} from "../actions"
import {ActionType} from "../action_types"

const reducer = (state: IRepositoriesState, action: IAction): IRepositoriesState => {
    //..........
    switch (action.type) {
        //___________
        case ActionType.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: [] }
            //___________
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return { loading: false, error: null, data: action.payload ?? [''] }
            //___________
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return { loading: false, error: action.payload ?? '', data: [] }
            //___________
        default: return state
    }
}
/// - END OF: reducer
export default reducer

// #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**|━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━|*/
type StateError = string | null
/**|━━━━━━━━━━━━━━━━━━━━━ typealias ━━━━━━━━━━━━━━━━━━━━━|*/

// section interface RepositoriesState
export interface IRepositoriesState {
    //: - ©Global-PROPERTIES
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/
    loading: boolean
    error: StateError
    data: string[]
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/
}
// #™━━━━━━━━━━━━━━━━━━|END
