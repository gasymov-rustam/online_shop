import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { useUserContext } from ".";
import { AppRouter, NavBar } from "./components";
import { check } from "./http";

export const App = observer(() => {
  const { user } = useUserContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(data);
        user.setIsAuth(true);
      })
      .catch((error) => console.warn(error))
      .finally(() => setLoading(false));
  }, [user]);

  if (loading) {
    return <Spinner animation="grow" />;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});
