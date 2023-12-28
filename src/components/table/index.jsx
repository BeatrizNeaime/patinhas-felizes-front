import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { usePagination } from "@table-library/react-table-library/pagination";
import { ButtonSmall, Column, Row } from "../../styles/sharedStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../styles/icons";
import { StyledPagination } from "./components/style";

const Table = ({ data, columns }) => {
  const d = { nodes: data };

  const theme = useTheme([
    getTheme(),
    {
      HeaderRow: `
      padding: 6px 12px;
      border: none;
    `,
      Row: `
        cursor: pointer;
        &:nth-of-type(even) { 
          background-color: rgba(211,211,211,0.2);
        }
    `,
    },
  ]);

  function onPaginationChange(action, state) {
    console.log(action, state);
  }

  const pagination = usePagination(data, {
    state: {
      page: 0,
      size: 10,
    },
    onChange: onPaginationChange,
  });

  return (
    <Column
      style={{
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "1rem",
      }}
    >
      <CompactTable
        columns={columns}
        data={d}
        theme={theme}
        pagination={pagination}
        style={{ width: "100%" }}
      />
      <Row
        style={{
          justifyContent: "flex-start",
          gap: "1rem",
          flexDirection: "row",
        }}
      >
        <ButtonSmall onClick={pagination.onPrevPage}>
          <FontAwesomeIcon icon={icons.back} />
        </ButtonSmall>
        {pagination.state.getPages(d.nodes).map((page, index) => (
          <StyledPagination
            key={index}
            style={{
              fontWeight: pagination.state.page === index ? "bold" : "normal",
            }}
          >
            {index + 1}
          </StyledPagination>
        ))}
        <ButtonSmall onClick={pagination.onNextPage}>
          <FontAwesomeIcon
            icon={icons.back}
            style={{ transform: "rotate(180deg)" }}
          />
        </ButtonSmall>
      </Row>
    </Column>
  );
};

export default Table;
