import React from 'react'

function Editrow({Cancelhandle,editlist,editrowchange}) {
  return (
        <tr>
            <td>
                <input type="text" placeholder='Enter a Name'   required="required" />
            </td>
            <td>
                <input type="text" placeholder='Enter a Name' name="fullname" value={editlist.fullname} required="required" onChange={editrowchange}/>
            </td>
            <td>
                <input type="text" placeholder='Enter a userid' name="userid" value={editlist.userid} required="required" onChange={editrowchange}/>
            </td>
            <td>
                <input type="text" placeholder='Enter a Product' name="product" required="required" value={editlist.product} onChange={editrowchange}/>
            </td>
            <td>
                <button>Save</button>
                <button onClick={Cancelhandle}>Cancel</button>
            </td>
        </tr>
  )
}

export default Editrow