import { lazy } from "react";
import Error_URL from "../../errorPage/Error_URL";
import ProductPage from "../../shop/view-product-page/ViewProductPage";

const Home = lazy(() => import("../../home/Home"));
const About = lazy(() => import("../../about/About"));
const Contact = lazy(() => import("../../contact/Contact"));
const Shop = lazy(() => import("../../shop/Shop"));
const Blog = lazy(() => import("../../home/blog/Blog"));

let id = 0;

export const navMenuLists = [
  {
    id: id++,
    navName: "Home",
    path: "/",
    component: <Home />,
  },
  {
    id: id++,
    navName: "Shop",
    path: "/shop",
    component: <Shop />,
  },
  {
    id: id++,
    navName: "ViewProduct",
    path: "/shop/:publicId",
    component: <Shop />,
  },
  {
    id: id++,
    navName: "About",
    path: "/about",
    component: <About />,
  },
  {
    id: id++,
    navName: "Contact",
    path: "/contact",
    component: <Contact />,
  },
  {
    id: id++,
    navName: "Blog",
    path: "/blog",
    component: <Blog />,
  },
  {
    id: id++,
    navName: "Product-Page",
    path: "/product-page",
    component: <ProductPage />,
  },
  {
    id: id++,
    navName: "Error-URL",
    path: "*",
    component: <Error_URL />,
  },
];
