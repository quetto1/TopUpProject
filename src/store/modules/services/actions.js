export default {
  async addService(context, data) {
    const userId = context.rootGetters.userId;

    // taking values from the form and reasigned them to servcieData objeect
    const serviceData = {
      serviceTitle: data.title,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    //firebase request
    const response = await fetch(
      `https://web-development-project-8ae61-default-rtdb.europe-west1.firebasedatabase.app/services/${userId}.json`,
      {
        //specifies kind of request
        method: "PUT",
        //convert data to json format
        body: JSON.stringify(serviceData),
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      // error
    }

    //comiting mutation with transformed data
    context.commit("addService", {
      ...serviceData,
      id: userId,
    });
  },


  //responsible for load the services from firebase
  async loadServices(context) {
    const response = await fetch(
      `https://web-development-project-8ae61-default-rtdb.europe-west1.firebasedatabase.app/services.json`
    );
    const responseData = await response.json();
    if (!response.ok) {
      // ...
    }
    // data has to be transformed becuase it is tored as an object therfor is needed to store it in array instead to go through all services
    const services = [];

    for (const key in responseData) {
      const service = {
        id: key,
        serviceTitle: responseData[key].serviceTitle.val,
        firstName: responseData[key].firstName.val,
        lastName: responseData[key].lastName.val,
        description: responseData[key].description.val,
        hourlyRate: responseData[key].hourlyRate.val,
        areas: responseData[key].areas.val,
      };
      services.push(service);
    }
    context.commit('setServices', services)
    console.log(services);
  },
};
