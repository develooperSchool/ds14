import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';

function UserProfile() {
  return (
    <div className="container my-5">
    <div className="card">
     
     
      <div className="card-body">
        <h5 className="card-title">Rahul Rindhe</h5>
        <p className="card-text">Web Developer</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Email:</strong> rahul@12.com</li>
          <li className="list-group-item"><strong>Location:</strong> Buldana, Maharastra</li>
          <li className="list-group-item"><strong>Skills:</strong> HTML, CSS, JavaScript</li>
        </ul>
      </div>
    </div>
  </div>

    
  );
}

export default UserProfile;
