import { Switch, Route, Redirect } from "react-router-dom";
import { useUserContext } from "../";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils";

export const AppRouter = () => {
  const { user } = useUserContext();

  return (
    <Switch>
      {user?.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}

      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}

      <Redirect to={SHOP_ROUTE} />
    </Switch>
  );
};
