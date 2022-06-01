import { createStore } from "vuex";

import servicesModule from './modules/services/index.js'
import requestsModule from './modules/requests/index.js'
import authModule from './modules/auth/index.js'

const store = createStore({
    modules: {
        services: servicesModule,
        requests: requestsModule,
        auth: authModule
    }  
});

export default store;