import { Row, Container, Col } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { BrandBar, DeviceList, TypeBar } from "../components";
import { useUserContext } from "../";

export const Shop = observer(() => {
  const { device } = useUserContext();

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          {/* <Pages /> */}
        </Col>
      </Row>
    </Container>
  );
});
