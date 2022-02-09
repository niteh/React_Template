import React from 'react'
import DataTable from 'react-data-table-component';
import { columns, data } from "./data";




const Table = () => {
    const tableData = {
        columns,
        data
      };

    

    return (
        <>
         <div >
         <DataTable
		title=""
		columns={columns}
		data={data}
		
		pagination
	
		dense
	/>
        </div>
     
        </>
    )
}

export default Table
