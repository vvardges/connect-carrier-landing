import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "header.home",
    path: "/",
    newTab: false,
  },{
    id: 2,
    title: "header.about",
    path: "/#about",
    newTab: false,
  },{
    id: 3,
    title: "header.media",
    path: "/media",
    newTab: false,
  },{
    id: 4,
    title: "header.contact",
    path: "/#contact",
    newTab: false,
  },{
    id: 5,
    title: "header.howToRegister",
    path: "/register",
    newTab: false,
  },{
    id: 6,
    title: "header.login",
    path: "/app/auth/login",
    newTab: false,
  },{
    id: 7,
    title: "header.register",
    path: "/app/auth/register",
    newTab: false,
  },
];

export default menuData;