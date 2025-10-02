import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },{
    id: 2,
    title: "About",
    path: "/#about",
    newTab: false,
  },{
    id: 3,
    title: "Media",
    path: "/media",
    newTab: false,
  },{
    id: 4,
    title: "Contact",
    path: "/#contact",
    newTab: false,
  },{
    id: 5,
    title: "How To Register",
    path: "/register",
    newTab: false,
  },{
    id: 6,
    title: "Login",
    path: "/app/auth/login",
    newTab: false,
  },{
    id: 7,
    title: "Register",
    path: "/app/auth/register",
    newTab: false,
  },
];
export default menuData;
