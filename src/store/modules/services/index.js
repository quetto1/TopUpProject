import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state() {
        return {
            services: [
                // {
                //   id: 'c1',
                //   serviceTitle: 'Programing/Development',
                //   firstName: 'Madison',
                //   lastName: 'Ivy',
                //   areas: ['business', 'development', 'other'],
                //   description:
                //     "Hi Im madiosn ill teach you whatever you want",
                //   hourlyRate: 30
                // },
                // {
                //   id: 'c2',
                //   serviceTitle: 'Programing/Development',
                //   firstName: 'Julie',
                //   lastName: 'Jones',
                //   areas: ['business', 'other'],
                //   description:
                //     'Hi Im madiosn ill teach you whatever you want',
                //   hourlyRate: 30
                // },
                // {
                //   id: 'c3',
                //   serviceTitle: 'Programing/Development',
                //   firstName: 'Julie',
                //   lastName: 'Jones',
                //   areas: ['development'],
                //   description:
                //     'Hi Im madiosn ill teach you whatever you want',
                //   hourlyRate: 30
                // }
              ]
        };
    },
    mutations,
    actions,
    getters
};