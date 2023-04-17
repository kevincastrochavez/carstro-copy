import React, { useState } from 'react';
import Button from '../components/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PhoneIcon from '@mui/icons-material/Phone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { useEffect } from 'react';

function SaleRepresentativeCard({
  id,
  name,
  location,
  lat,
  lng,
  image,
  email,
  hours,
  phone,
  address,
}) {
  const [saleCardOpen, setSaleCarOpen] = useState(false);
  const [modalWindowOpen, setModalWindowOpen] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [deviceWidth, setDeviceWidth] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setDeviceWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener('resize', () => {
        console.log('Event listener for the window was removed');
      });
    };
  }, []);

  return (
    <>
      <li
        className='saleRepresentativeCard_li'
        onClick={() => setSaleCarOpen(!saleCardOpen)}
      >
        {!saleCardOpen && (
          <div className='li_div--locationContainer'>
            {deviceWidth <= 990 && (
              <>
                <span className='saleRepresentativeCard_horizontalLocation'>
                  <LocationOnIcon className='saleRepresentativeCard_li_location' />

                  <p className='saleRepresentativeCard_li_p'>{location}</p>
                </span>
                <ExpandMoreIcon className='saleRepresentativeCard_li_arrow' />
              </>
            )}
          </div>
        )}
        {(saleCardOpen || deviceWidth >= 990) && (
          <div id={id}>
            <div className='saleRCardSeparator'>
              <div className='saleRepresentativeCard_div'>
                <div className='saleRepresentativeCard_div--picturesContainer'>
                  <img
                    className='saleRepresentativeCard_div_img'
                    src={image}
                    alt={id}
                  ></img>
                </div>
                <div className='saleRepresentativeCard_div--locationsContainer'>
                  <h4 className='saleRepresentativeCard_div_img_h4'>{name}</h4>
                  <ul className='saleRepresentativeCard_ul'>
                    <div>
                      <li className='saleRepresentativeCard_ul_li'>
                        <LocationOnIcon className='li_icon' />
                        {location}
                      </li>
                      <li className='saleRepresentativeCard_ul_li'>
                        <MailIcon className='li_icon' />
                        {email}
                      </li>
                    </div>
                    <div>
                      <li className='saleRepresentativeCard_ul_li'>
                        <WatchLaterIcon className='li_icon' />
                        {hours}
                      </li>
                      <li className='saleRepresentativeCard_ul_li'>
                        <PhoneIcon className='li_icon' />
                        {phone}
                      </li>
                    </div>
                  </ul>
                </div>
              </div>

              <div className='saleRepresentativeCard_div--button'>
                <Button
                  onClick={() => setModalWindowOpen(!modalWindowOpen)}
                  text='Contact Dealer'
                  className='btn_green'
                />
              </div>
            </div>
          </div>
        )}
      </li>

      {modalWindowOpen && (
        <>
          <div
            onClick={() => setModalWindowOpen(false)}
            className='modalWindow_overlay'
          ></div>

          <form className='modalWindow_form' action=''>
            <div className='modalWindow_title'>
              <div className='form_div-closeContainer'>
                <CloseIcon
                  onClick={() => setModalWindowOpen(!modalWindowOpen)}
                />
              </div>
              <h1 className='modalWindow_form_h1'>Contact Dealer</h1>
            </div>
            <h4 className='modalWindow_form_h4'>{name}</h4>
            <p className='modalWindow_form_p--location'>{location}</p>
            <p className='modalWindow_form_p--address'>{address}</p>
            <p className='modalWindow_form_p--contatInformation'>
              Contact information
            </p>
            <input
              className='modalWindow_form_input'
              type='text'
              placeholder='Name'
            />
            <input
              className='modalWindow_form_input'
              type='text'
              placeholder='Last Name'
            />
            <input
              className='modalWindow_form_input'
              type='text'
              placeholder='Email'
            />
            <div className='modalWindow_form_div'>
              <h4 className='form_div_h4'>Special Requirements</h4>
              <div>
                <input
                  className='form_div_checkBox'
                  type='checkbox'
                  name='spanish_representative'
                />
                <label htmlFor='spanish_representative'>
                  Spanish-speaker representative
                </label>
              </div>
              <div>
                <input
                  className='form_div_checkBox'
                  type='checkbox'
                  name='test_drvie'
                />
                <label htmlFor='test_drvie'>Schedule a testdrive</label>
              </div>
              <div>
                <input
                  className='form_div_checkBox'
                  type='checkbox'
                  name='trade_in'
                />
                <label htmlFor='test_drvie'> Trade in a Vehicle</label>
              </div>
              <div id='form_div_div--comment-container'>
                <label className='form_div_label--comment' htmlFor='comment'>
                  Add a comment
                </label>
                <textarea name='comment' id='comment' rows='10'></textarea>
                <Button
                  text='Contact Dealer'
                  className='btn_green modalWindow_button'
                  onClick={() => (
                    setModalWindowOpen(!modalWindowOpen),
                    setConfirmationModalOpen(!confirmationModalOpen),
                    setTimeout(() => {
                      setConfirmationModalOpen(confirmationModalOpen);
                    }, 3000),
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  )}
                />
              </div>
            </div>
          </form>
        </>
      )}

      {confirmationModalOpen && (
        <div className='modal_confirmation'>
          <CheckCircleIcon /> <p>Message sent</p>
        </div>
      )}
    </>
  );
}

export default SaleRepresentativeCard;
