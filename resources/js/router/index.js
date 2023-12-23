import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/mydraw/public/login",
            name: "login",
            component: () => import("../../views/Login.vue"),
        },
        {
            path: "/mydraw/public/mypage",
            name: "mypage",
            component: () => import("../../views/Mypage.vue"),
        },
        {
            path: "/mydraw/public/signup",
            name: "signup",
            component: () => import("../../views/Signup.vue"),
        },
        {
            path: "/mydraw/public/lookatemail",
            name: "lookatemail",
            component: () => import("../../views/lookatemail.vue"),
        },
        {
            path: "/mydraw/public/forgotPass",
            name: "forgotPass",
            component: () => import("../../views/forgotPass.vue"),
        },
        {
            path: "/mydraw/public/reset-password",
            name: "resetPass",
            component: () => import("../../views/resetPass.vue"),
        },
        {
            path: "/mydraw/public/memo",
            name: "memo",
            component: () => import("../../views/memo.vue"),
        },
    ],
});
export default router;
