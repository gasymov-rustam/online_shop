import { SHOP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, DEVICE_ROUTE } from "../utils";
import { Shop, Auth, DevicePage } from "../pages";

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: DEVICE_ROUTE + "/:id",
    Component: DevicePage,
  },
];
