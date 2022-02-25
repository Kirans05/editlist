import React from 'react'

function Tabledata({item,index,handleDelete,handleEdit}) {
  return (
    <tr>
        <td>{index}</td>
        <td>{item.fullname}</td>
        <td>{item.userid}</td>
        <td>{item.product}</td>
        <td>
            <button onClick={(event)=>handleEdit(event,item)}>Edit</button>
            <button onClick={(event)=>handleDelete(event,item.id)}>Delete</button>
        </td>
    </tr>
    )
}

export default Tabledata