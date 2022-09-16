import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils";
import { useUserContext } from "..";
import { observer } from "mobx-react-lite";

export const NavBar = observer(() => {
  const { user } = useUserContext();
  const history = useHistory();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem("token");
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to={SHOP_ROUTE}>Buy me!</NavLink>
        {user.isAuth ? (
          <Nav className="ms-auto" style={{ color: "white" }}>
            <Button variant="outline-light" onClick={() => history.push(ADMIN_ROUTE)}>
              Admin Panel
            </Button>
            <Button variant="outline-light" onClick={logOut} className="ms-2">
              Exit
            </Button>
          </Nav>
        ) : (
          <Nav className="ms-auto" style={{ color: "white" }}>
            <Button variant="outline-light" onClick={() => history.push(LOGIN_ROUTE)}>
              Authorization
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});
