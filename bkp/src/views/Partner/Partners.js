import React, { Component, useState, useEffect } from "react";
import { CDataTable, CCard, CPagination } from "@coreui/react";

import usersData from './UsersData'

class Partners extends Component {

  render() {

    const userList = usersData.filter((user) => user.id < 10)

    return (
      <CCard className="p-5">
            <CDataTable
              items={userList}
              fields={["username", "registered", "role", "status"]}
              loading={loading}
              hover
              cleaner
              columnFilter={{ external: true }}
              columnFilterValue={columnFilterValue}
              onColumnFilterChange={setColumnFilterValue}
              tableFilter={{ external: true }}
              tableFilterValue={tableFilterValue}
              onTableFilterChange={setTableFilterValue}
              sorter
              sorterValue={sorterValue}
              onSorterValueChange={setSorterValue}
              itemsPerPageSelect={{ external: true }}
              itemsPerPage={itemsPerPage}
              onPaginationChange={setItemsPerPage}
            />
            <CPagination
              pages={pages}
              activePage={page}
              onActivePageChange={setPage}
              className={pages < 2 ? "d-none" : ""}
            />
          </CCard>
    )
  }
}

export default Partners;
