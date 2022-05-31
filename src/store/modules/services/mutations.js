export default {
    addService(state, payload){
        state.services.push(payload)
    },
    //
    setServices(state, payload){
        state.services = payload;
    }
};