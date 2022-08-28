import styles from './Users.module.scss';
import classNames from 'classnames';
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "./datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

   
function Users() {
     const cx =classNames.bind(styles)
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={cx("cellAction")}>
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className={cx("viewButton")}>View</div>
            </Link>
            <div
              className={cx("deleteButton")}
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
    return ( <div className={cx("datatable")}>
      <div className={cx("datatableTitle")}>
        Add New User
        <Link to="/users/new" className={cx("link")}>
          Add New
        </Link>
      </div>
      <DataGrid
        className={cx("datagrid")}
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}; );
}

export default Users;
