import { useUserContext } from "../";
import { observer } from "mobx-react-lite";
import { Card, Row } from "react-bootstrap";

export const BrandBar = observer(() => {
  const { device } = useUserContext();

  return (
    <Row className="d-flex">
      {device.brands.map((brand) => (
        <Card
          style={{ cursor: "pointer" }}
          key={brand.id}
          className="p-3"
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? "danger" : "light"}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});
