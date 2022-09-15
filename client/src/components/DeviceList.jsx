import { useUserContext } from "../";
import { observer } from "mobx-react-lite";
import { Row } from "react-bootstrap";
import { DeviceItem } from "./DeviceItem";

export const DeviceList = observer(() => {
  const { device } = useUserContext();

  return (
    <Row className="d-flex">
      {device.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Row>
  );
});
