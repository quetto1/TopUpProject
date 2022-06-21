import { createRouter, createWebHistory } from "vue-router";

import ServiceDetail from "./pages/services/ServiceDetail.vue";
import ServicesList from "./pages/services/ServicesList.vue";
import ServiceRegistration from "./pages/services/ServiceRegistration.vue";
import ContactService from "./pages/requests/ContactService.vue";
import NotFound from "./pages/requests/NotFound.vue";
import ReqRecived from "./pages/requests/ReqRecived.vue";
import UserAuth from "./pages/authentication/UserAuth.vue"


//routes set up
const router = createRouter({
  // history lets the browser now what was the last page (route) it allows user to go back on th page
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/services" },
    { path: "/services", component: ServicesList },
    {
      path: "/services/:id",
      component: ServiceDetail,
      props: true, // allows to call the page by id via props
      children: [
        { path: "contact", component: ContactService }, //services/id/contact
      ]
    },
    { path: "/register", component: ServiceRegistration },
    { path: "/requests", component: ReqRecived },
    { path: "/auth", component: UserAuth },
    //route for invalid path
    { path: "/:notFound(.*)", component: NotFound }
  ]
});

export default router;
