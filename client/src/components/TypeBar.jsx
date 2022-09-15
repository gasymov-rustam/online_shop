import { observer } from "mobx-react-lite";
import { useUserContext } from "../";
import { ListGroup } from "react-bootstrap";

export const TypeBar = observer(() => {
  const { device } = useUserContext();

  return (
    <ListGroup>
      {device.types.map((type) => (
        <ListGroup.Item
          style={{ cursor: "pointer" }}
          active={type.id === device.selectedType.id}
          onClick={() => device.setSelectedType(type)}
          key={type.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});
