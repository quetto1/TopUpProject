
export default {
    getAllRequests(state,_, _2, rootGetters){
        const serviceId = rootGetters.userId;
        return state.requests.filter(message => message.serviceId === serviceId);
    },
    hasRequest(_, getters){
        return getters.requests && getters.requests.length > 0;
    }
}