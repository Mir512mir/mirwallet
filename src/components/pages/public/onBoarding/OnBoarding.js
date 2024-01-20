
import { Link } from "react-router-dom";
import ilustration1 from "./../../../../assets/illustration11.png";
import ilustration2 from "./../../../../assets/illustration22.png";
import ilustration3 from "./../../../../assets/Wallet-rafiki33.png";
import './onBoarding.scss';
import PrimaryBtn from "../../../designComponents/PrimaryBtn";

function OnBoarding(props) {
  const images = [
    {
      label: 'Add all accounts & manage',
      bio: 'You can add all accounts in one place and use it to send and request.',
      imgPath: ilustration1,
    },
    {
      label: 'Track your activity',
      bio: 'You can track your income, expenses activities and all statistics.',
      imgPath: ilustration2,
    },
    {
      label: 'Send & request payments',
      bio: 'You can send or recieve any payments from yous accounts.',
      imgPath: ilustration3,
    },

  ];

  return (
    <div className="container" id="carousel-onboarding">
      <div className="row">
        <div className="col-lg-6 carousel-data">
          <div id="carouselExampleDark" className="carousel carousel-dark slide h-100 w-100" data-bs-ride="carousel">
            <div className="carousel-inner" >
              {images.map((image, index) => (
                <div key={index} className={`carousel-item h-100 ${index === 0 ? 'active' : ''}`} data-bs-interval="false">
                  <img src={image.imgPath} className="d-block w-100" alt={`Slide ${index + 1}`} />
                  <div className="carousel-content" >
                    <h5 className="img_label">{image.label}</h5>
                    <p className="img_bio">{image.bio}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-indicators">
              {images.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to={index}
                  className={index === 0 ? 'active' : ''}
                  aria-current={index === 0}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-5 text-center">
        <div className="col">
          <div className="carousel-button" >
            <Link to="/mirWallet">
              <PrimaryBtn text={"Get Started"}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );


}

export default OnBoarding;