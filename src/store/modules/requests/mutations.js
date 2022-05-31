export default {
    // function responsbile for reciving the new data (payload) and pushing it into requets store
    addRequest(state, payload){
        state.requests.push(payload)
    },
    setRequests(state, payload){
        state.requests = payload;
    }
}