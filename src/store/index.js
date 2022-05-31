import { createStore } from "vuex";

import servicesModule from './modules/services/index.js'
import requestsModule from './modules/requests/index.js'

const store = createStore({
    modules: {
        services: servicesModule,
        requests: requestsModule
    },
    state(){
        return{
            userId: 'c3'
        };
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
});

export default store;