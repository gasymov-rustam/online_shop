import { Row, Container, Col } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { BrandBar, DeviceList, Pages, TypeBar } from "../components";
import { useUserContext } from "../";
import { useEffect } from "react";
import { fetchBrands, fetchDevices, fetchTypes } from "../http";

export const Shop = observer(() => {
  const { device } = useUserContext();

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
    fetchDevices(null, null, 1, 2).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, [device]);

  useEffect(() => {
    fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 2).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, [device.page, device.selectedType, device.selectedBrand]);

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});
