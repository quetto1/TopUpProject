export default {
    services(state) {
        return state.services;
    },
    hasServices(state) {
        return state.services && state.services.length > 0;
    },
    isService(state, getters, rootState, rootGetters){
        const services = getters.services;
        const userId = rootGetters.userId;
        return services.some(service => service.id === userId);
    }
};