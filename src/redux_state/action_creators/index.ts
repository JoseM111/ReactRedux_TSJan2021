import {ActionType} from "../action_types"
import axios from "axios"
import {Dispatch} from "redux"
import {IAction} from "../actions"

/**|━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━|*/
export type DispatchIActionPromise = (dispatch: Dispatch<IAction>) => Promise<void>
/**|━━━━━━━━━━━━━━━━━━━━━ typealias ━━━━━━━━━━━━━━━━━━━━━|*/

export const searchRepositories = (term: string): DispatchIActionPromise => {
    //..........
    const url: string = 'https://registry.npmjs.org/-/v1/search'

    return async (dispatch: Dispatch<IAction>) => {
        //___________
        dispatch({
            //___________
            type: ActionType.SEARCH_REPOSITORIES
        })
        /// - END OF: dispatch

        await axiosGetRequest(url, term, dispatch)
    }
    /// - END OF: async
}
/// - END OF: searchRepositories

async function axiosGetRequest(url: string, term: string, dispatch: Dispatch<IAction>): Promise<void> {
    try {
        /**| ™- @GET: is used to request data
         *            from a specified resource. |*/
        const {data} = await axios.get(url, {
            //: -™ Gets our query string of our url
            params: {
                text: term
            }
        })
        /// - END OF: data

        const names = data.objects.map((result: any) => {
            //___________
            return result.package.name
        })
        /// - END OF: names
        /**| ™- dispatching a action |*/
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
            payload: names
        })
        /// - END OF: dispatch

    } catch (error) {
        //___________
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES_ERROR,
            payload: error.message
        })
    }
    /// - END OF: try-catch
}
/// - END OF: axiosGetRequest
