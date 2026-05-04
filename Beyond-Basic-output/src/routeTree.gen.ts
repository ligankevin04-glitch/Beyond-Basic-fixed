// This file replaces the auto-generated routeTree.gen.ts from TanStack Start.
// It manually wires up all routes for a standard client-side Vite SPA.

import { Route as rootRoute } from "./routes/__root";
import { Route as IndexRoute } from "./routes/index";
import { Route as ShopIndexRoute } from "./routes/shop.index";
import { Route as ShopCategoryRoute } from "./routes/shop.$category";
import { Route as ProductRoute } from "./routes/product.$id";
import { Route as CartRoute } from "./routes/cart";
import { Route as CheckoutRoute } from "./routes/checkout";
import { Route as LoginRoute } from "./routes/login";
import { Route as SignupRoute } from "./routes/signup";
import { Route as ForgotRoute } from "./routes/forgot";

const routeTree = rootRoute.addChildren([
  IndexRoute,
  ShopIndexRoute,
  ShopCategoryRoute,
  ProductRoute,
  CartRoute,
  CheckoutRoute,
  LoginRoute,
  SignupRoute,
  ForgotRoute,
]);

export { routeTree };
