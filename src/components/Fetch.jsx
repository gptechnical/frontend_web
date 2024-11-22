import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'


function Fetch() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = () => {
    fetch('http://localhost:5000/fetch')
      .then(response => response.json())
      .then((json) => {
        console.log(json)
        setUserData(json)
      })
      .catch(() => {
        console.log("Network call error")
      })
  }
  const deleted = async (id) => {
    const result = await fetch(`http://localhost:5000/delete/${id}`, {
      method: 'DELETE',
    });
    if (result) {
      fetchData();
    }

  }
  return (
    <>
      <div className='container my-2' style={{paddingTop: "100px"}}>
        <div className='row'>
          <div className='col-sm-10 col-md-10 mx-auto'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  userData.length > 0 ? userData.map((val, i) =>
                    <tr key={i}>
                      <th>{i + 1}</th>
                      <td>{val.name}</td>
                      <td>{val.email}</td>
                      <td>{val.mobile}</td>
                      <td>{val.address}</td>
                      <td>
                        <button onClick={() => deleted(val._id)}><i className="btn bi bi-trash"></i></button>
                        <Link to={"/update/" + val._id}><button><i className="btn bi bi-pencil"></i></button></Link>
                      </td>
                    </tr>
                  )
                    :
                    <tr><td align='center' colSpan={6}>No Data Found</td></tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  )
}

export default Fetch