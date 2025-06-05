import './qrcode.css'
import qr_detail_img from '../Assets/detail.png'

const QRcode_fun  = ({CloseQrcode}) => {

    // Function to handle button click
    const handleCallClick = () => {
        alert('Notification has been send to the owner.');

    };
  
    return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
            <div className="qr-main">
                <button className="button" onClick={CloseQrcode}>close</button>
                <div className="qr-card">
                    <img src={qr_detail_img} height='230px' width='100%' className='qr' alt="QR Code"></img>
                    <h5>Customer Care</h5>
                    <button className="button qr-btn-design" onClick={handleCallClick}>NOTIFY</button>
                </div>
            </div>
        </div>
    </>
    );
};

export default QRcode_fun
