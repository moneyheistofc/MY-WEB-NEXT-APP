export default function PersonalInfo() {
  return (
    <section className="personal-info">
      <h2 className="info-title">Personal Information</h2>
      <div className="info-grid">
        <div className="info-item">
          <i className="fas fa-user"></i>
          <div className="info-content">
            <strong>Name:</strong>
            <span>H.M. NIPUN DHANUJAYA</span>
          </div>
        </div>
        <div className="info-item">
          <i className="fas fa-birthday-cake"></i>
          <div className="info-content">
            <strong>Age:</strong>
            <span>18</span>
          </div>
        </div>
        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i>
          <div className="info-content">
            <strong>From:</strong>
            <span>Sri Lanka</span>
          </div>
        </div>
        <div className="info-item">
          <i className="fas fa-phone"></i>
          <div className="info-content">
            <strong>Contact:</strong>
            <a href="https://wa.me/+94757255903" target="_blank">+94 75 725 5903</a>
          </div>
        </div>
      </div>
    </section>
  );
}
