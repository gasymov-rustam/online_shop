import { observer } from "mobx-react-lite";
import { Pagination } from "react-bootstrap";
import { useUserContext } from "../";

export const Pages = observer(() => {
  const { device } = useUserContext();

  const pageCount = Math.ceil(device.totalCount / device.limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <Pagination className="mt-3">
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          activeLabel=""
          active={device.page === page}
          onClick={() => device.setPage(page)}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
});
