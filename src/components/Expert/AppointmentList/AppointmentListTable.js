import React from 'react';

const AppointmentListTable = ({ appointmentList }) => {
  console.log(appointmentList);
  return (
    <div className="table-responsive">
      <table class="table table-striped table-dark table__list">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Disease</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Weight</th>
            <th scope="col">Details</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            appointmentList.map((appointment, index) =>
              <tr key={appointment._id}>
                <th scope="row">{index + 1}</th>
                <td>{appointment.service}</td>
                <td>{appointment.name}</td>
                <td>{appointment.age}</td>
                <td>{appointment.weight}</td>
                <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title  text-dark" id="exampleModalLongTitle">Details</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body text-dark">
                        {appointment.details}
                      </div>
                    </div>
                  </div>
                </div>
                {
                  appointment.details.length > 100 ? <td>{appointment.details.substring(0, 100)}
                    <a data-toggle="modal" data-target="#exampleModalLong" className="ml-2" style={{ color: '#5F81C8', cursor: 'pointer' }}>
                      See More
                    </a>
                  </td>
                    :
                    <td>{appointment.details}</td>
                }
                <td> <button type="button" class="btn btn-success">prescription</button></td>
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

export default AppointmentListTable;