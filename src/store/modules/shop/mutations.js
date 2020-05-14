import {GETNAVLIST,GETWORTHYLISTFIRST} from "@/store/mutation_types"
export default {
    [GETNAVLIST](state,navListData){
        state.navListData = navListData
    },
    [GETWORTHYLISTFIRST](state,worthyListFirst){
        state.worthyListFirst = worthyListFirst
    },
}