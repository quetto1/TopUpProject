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
      pictureLink: data.pictureLink,
    };
    const token = context.rootGetters.token;
    //firebase request
    const response = await fetch(
      `https://web-development-project-8ae61-default-rtdb.europe-west1.firebasedatabase.app/services/${userId}.json?auth=` + token,
      {
        //specifies kind of request
        method: "PUT",
        //convert data to json format
        body: JSON.stringify(serviceData),
      }
    );

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
 
    // fetched services are stored in the service array
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
        pictureLink: responseData[key].pictureLink ? responseData[key].pictureLink.val : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019'
      };
      services.push(service);
    }
    context.commit('setServices', services)
    console.log(services);
  },
};
