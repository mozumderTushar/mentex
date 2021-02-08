import React from 'react';

const ExpertListTable = ({ expertList }) => {
  const deleteEvent = (id) => {
    console.log('id', id);
    fetch(`https://peaceful-lake-24732.herokuapp.com/deleteExpert/${id}`, {
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
            expertList.map((expert, index) =>
              <tr key={expert._id}>
                <th scope="row">{index + 1}</th>
                <td>{expert.email}</td>
                <td>{expert._id}</td>
                <td> <button type="button" onClick={() => deleteEvent(expert._id)} class="btn btn-danger">Remove</button></td>
              </tr>
            )
          }

        </tbody>
      </table>
    </div>
  );
};

export default ExpertListTable;