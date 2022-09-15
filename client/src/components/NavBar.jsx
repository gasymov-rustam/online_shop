import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils";
import { useUserContext } from "..";
import { observer } from "mobx-react-lite";

export const NavBar = observer(() => {
  const { user } = useUserContext();
  const history = useHistory();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to={SHOP_ROUTE}>Buy me!</NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button variant="outline-light" onClick={() => history.push(ADMIN_ROUTE)}>
              Admin Panel
            </Button>
            <Button
              variant="outline-light"
              className="ml-2"
              onClick={() => history.push(LOGIN_ROUTE)}
            >
              Exit
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button variant="outline-light" onClick={() => user.setIsAuth(true)}>
              Sign In!
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});
