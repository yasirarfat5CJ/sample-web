// src/components/Home.jsx
// src/components/Home.jsx
import './Home.css';
import profile from '../assets/profile.jpg';

function Home() {
  return (
    <div className="home-wrapper">
      <div className="card-container">
        {/* Profile Card */}
        <div className="card card-left">
          <img src={profile} alt="Profile" className="circle-img" />
          <h2 className="name">Yasir Arfat</h2>
          <p className="role">B.Tech student by degree, cricketer by heart, coder by compulsion.
Weekdays I debug code, weekends I knock sixes.
Still waiting for a compiler that doesn’t judge me.</p>
        </div>

        {/* Details Card */}
        <div className="card card-right">
          <h3 className="details-title">Profile Details</h3>
          <p><strong>Name:</strong> Yasir Arfat</p>
         
          <p><strong>Mobile:</strong> +91 8125961792</p>
          <p><strong>Email:</strong> yasir.arfat.cse@gmail.com</p>
          <p><strong>Address:</strong> Hyderabad, India</p>
          <p className="credit">Made with ❤️ by Yasir</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
