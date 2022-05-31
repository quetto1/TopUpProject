// index js holds all the logic from other files togethere
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state() {
        return {
            requests: []
        };
    },
    mutations,
    actions,
    getters
}