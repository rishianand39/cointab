import React from 'react'
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'gender', headerName: 'Gender', width: 130 },
  { field:  "lastName", headerName: 'Last name', width: 130 },
  {field:"fullName", headerName: 'Full name', width:160}
];

const Users = () => {
  let users=JSON.parse(localStorage.getItem('users'));

  const rows=[]
  users.map((user,index)=>{
    rows.push({
      id:index+1,
      firstName:user.name.first,
      lastName:user.name.last,
      gender:user.gender,
      fullName:`${user.name.first} ${user.name.last}`
    })
  })
  return (
    <div>
      <h1>Page 2</h1>
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
    </div>
  )
}

export default Users