import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state() {
        return {
            services: [
                {
                  id: 'c1',
                  serviceTitle: 'Programing/Development',
                  firstName: 'Madison',
                  lastName: 'Ivy',
                  areas: ['frontend', 'backend', 'career'],
                  description:
                    "Hi Im madiosn ill teach you whatever you want",
                  hourlyRate: 30
                },
                {
                  id: 'c2',
                  serviceTitle: 'Programing/Development',
                  firstName: 'Julie',
                  lastName: 'Jones',
                  areas: ['frontend', 'career'],
                  description:
                    'Hi Im madiosn ill teach you whatever you want',
                  hourlyRate: 30
                }
              ]
        };
    },
    mutations,
    actions,
    getters
};