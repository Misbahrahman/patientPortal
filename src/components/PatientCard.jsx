const PatientCard = ({patient}) => {
    return (
        <div className="patient-card" key={patient.id}>
            <div className="patient-header">
              <h3>{patient.firstname || patient.firstName} {patient.lastname || patient.lastName}</h3>
            </div>
            <div className="patient-details">
              <p><span className="label">Date of Birth:</span> {patient.dateofbirth || patient.dateOfBirth}</p>
              <p><span className="label">Gender:</span> {patient.gender}</p>
              <p><span className="label">Contact:</span> {patient.contactnumber || patient.contactNumber}</p>
              <p><span className="label">Email:</span> {patient.email}</p>
            </div>
          </div> 
    )
}

export default PatientCard;