import './Parkings.css'
import ansal_img from '../Assets/ansal.png'
import expo_img from '../Assets/expo-mart.png'
import its_img from '../Assets/its_park.png'
import garage_img from '../Assets/garage.jpeg'
import star1_img from '../Assets/star(1).png'
import star2_img from '../Assets/star(2).png'
import star4_img from '../Assets/star(4).png'

const AllParking = ({CloseParking}) => {
  return (
  <>
    <div className="modal-wrapper"></div>
    <div className="modal-container">
      <div className="pop">
      <button className="button" onClick={CloseParking}>close</button>
      <div className="parking-card">
      <div className='card-element'>
                <h2 className='card-heading'>Nearby parking spaces.</h2>

            <div className="cards">
                <div className="card1 hovering">
                    <img src={ansal_img} height='100px' width='100%'></img>
                    <h5>ANSAL PLAZA MALL SHOPPING COMPLEX, Pari Chowk, Greater Noida, Uttar Pradesh</h5>
                    <img src={star4_img} height='13px' width='60px' id='rating'></img>
                    <h6>Tier 2</h6>
                    <h6>Available during: 9 AM - 10 PM</h6>
                    <button className="button">Rent</button>
                </div>
                <div className="card2 hovering">
                  <img src={expo_img} height='100px' width='100%'></img>
                    <h5>India Expo Mart Cir, Knowledge Park II, Greater Noida, Uttar Pradesh 201310</h5>
                    <img src={star2_img} height='13px' width='60px' id='rating'></img>
                    <h6>Tier 3</h6>
                    <h6>Available during: 9 AM - 10 PM</h6>
                    <button className="button">Rent</button>
                </div>
                <div className="card3 hovering">
                    <img src={its_img} height='100px' width='100%'></img>
                    <h5>ITS Parking, Knowledge Park III, Ruhallapur, Greater Noida, Uttar Pradesh 201310</h5>
                    <img src={star1_img} height='13px' width='60px' id='rating'></img>
                    <h6>Tier 3</h6>
                    <h6>Available during: 9 AM - 10 PM</h6>
                    <button className="button">Rent</button>
                </div>
                <div className="card4 hovering">
                    <img src={garage_img} height='100px' width='100%'></img>
                    <h5>APJ Abdul Kalam Rd, Knowledge Park III, Greater Noida, Uttar Pradesh 201310</h5>
                    <img src={star4_img} height='13px' width='60px' id='rating'></img>
                    <h6>Tier 2</h6>
                    <h6>Available during: 9 AM - 10 PM</h6>
                    <button className="button">Rent</button>
                </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  </>
  );
};

export default AllParking