import {GETNAVLIST} from "@/store/mutation_types"
export default {
    [GETNAVLIST](state,navListData){
        state.navListData = navListData
    },
}