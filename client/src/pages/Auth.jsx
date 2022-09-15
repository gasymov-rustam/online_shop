import { useState } from "react";
import { Card, Button, Row, Container, Form } from "react-bootstrap";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils";
import { observer } from "mobx-react-lite";
import { useUserContext } from "..";

export const Auth = () => {
  const { user } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const history = useHistory();
  const isLogin = location.pathname === LOGIN_ROUTE;

  // const click = async () => {
  //   try {
  //     let data;
  //     if (isLogin) {
  //       data = await login(email, password);
  //     } else {
  //       data = await registration(email, password);
  //     }
  //     user.setUser(user);
  //     user.setIsAuth(true);
  //     history.push(SHOP_ROUTE);
  //   } catch (e) {
  //     alert(e.response.data.message);
  //   }
  // };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Enter your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                Don`t have account? <NavLink to={REGISTRATION_ROUTE}>Sign up!</NavLink>
              </div>
            ) : (
              <div>
                Do you have account? <NavLink to={LOGIN_ROUTE}>Sign In!</NavLink>
              </div>
            )}
            <Button variant="outline-success">{isLogin ? "Sign In" : "Sign Up"}</Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};
