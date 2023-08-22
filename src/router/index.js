import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Padre",
    children: [
      {
        path: "/",
        name: "Madre",
        component: () => import("@/pages/AppWrapper.vue"),
        children: [
          {
            path: "/",
            name: "Main",
            component: () => import("@/views/MainView.vue"),
          },
          {
            path: "/home",
            name: "Home",
            component: () => import("@/views/HomeView.vue"),
          },
          {
            path: "/about",
            name: "About",
            component: () => import("@/views/SobreNosotrosView.vue"),
          },
          {
            path: "/convocatorias",
            name: "Convocatorias",
            component: () =>
              import("@/views/Convocatorias/ConvocatoriasView.vue"),
          },
          {
            path: "/detalleConvocatoria",
            name: "DetalleConvocatoria",
            component: () =>
              import("@/views/Convocatorias/DetalleConvocatoria.vue"),
          },
          {
            path: "/cursos",
            name: "Cursos",
            component: () => import("@/views/Cursos/CursosView.vue"),
          },
          {
            path: "/detalleCurso",
            name: "DetalleCurso",
            component: () => import("@/views/Cursos/DetalleCurso.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "ErrorPath",
    component: () => import("@/pages/ErrorPath.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
