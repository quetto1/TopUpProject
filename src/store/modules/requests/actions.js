
export default {
  async contactService(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };
    // firebase hook.
   const response = await fetch(
      `https://web-development-project-8ae61-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.serviceId}.json`,
      { method: "POST",
        body: JSON.stringify(newRequest)
    }
    );

    const responseData = await response.json();

    // once firebase gets a new record in the database it gives it id by defualt
    // so here Im reffering to this newly crated id form the firebase and insidae .nmae object i can reach id
    // then i can assign and update id in newRequest object
    newRequest.id = responseData.name;
    
    // extra id for local stroage 
    newRequest.serviceId = payload.serviceId;

    context.commit("addRequest", newRequest);
  },

//   Fetch requests by using context Im able to reach userID from the global getters
 async fetchRequests(context){
    // id of the service for whoom user we want to fetch all the requests
    const serviceId = context.rootGetters.userId;
    // it fetches all the requests that can be found under certain serviceId in firesbae
    const response = await fetch(`https://web-development-project-8ae61-default-rtdb.europe-west1.firebasedatabase.app/requests/${serviceId}.json`)
    const responseData = await response.json(); 

    const requests = [];
    for (const key in responseData){
      const request = {
        id: key,
        serviceId: serviceId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message
      };
      requests.push(request);
    }
    // 1st name of mutation, 2nd name of vuex storage
context.commit('setRequests', requests)
console.log(requests);

  }
};
