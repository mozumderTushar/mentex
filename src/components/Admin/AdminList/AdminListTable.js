import React from 'react';
import './AdminList.css'
const AdminListTable = ({ adminList }) => {
  const deleteEvent = (id) => {
    console.log('id', id);
    fetch(`https://peaceful-lake-24732.herokuapp.com/deleteAdmin/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(result => {
        if (result) {
          console.log(result)
        }
      })
  }
  return (
    <div className="table-responsive">
      <table class="table table-striped table-dark table__list">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Id</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            adminList.map((admin, index) =>
              <tr key={admin._id}>
                <th scope="row">{index + 1}</th>
                <td>{admin.email}</td>
                <td>{admin._id}</td>
                <td> <button type="button" onClick={() => deleteEvent(admin._id)} class="btn btn-danger">Remove</button></td>
              </tr>
            )
          }

        </tbody>
      </table>
      <div className="table__banner row mt-3 mb-5 ml-3">
            <h3 className="about-title">Get In Touch</h3>
            <p className="lead">“Anything that’s human is mentionable, and anything that is mentionable can be more manageable. When we can talk about our feelings, they become less overwhelming, less upsetting, and less scary.”</p>
            <p className="lead feel">Feel Free to contact with us...</p>
        </div>
        </div>
    
  );
};

export default AdminListTable;