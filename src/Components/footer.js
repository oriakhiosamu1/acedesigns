import React, { useState } from 'react'
import {send} from 'emailjs-com';
import { BsFillEnvelopeFill } from "react-icons/bs";
import {BsFillTelephoneFill} from "react-icons/bs";
import {BsFillFilePersonFill} from "react-icons/bs";
import './footer.css';
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
// import Shake from 'react-reveal/Shake';




const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-heading'>
        <div className='footer-div'>
            <div className='contact'>
                <ContactMe />
            </div>

            {/* <div className='contact'>
                <ContactCard />
            </div> */}

            <div>
                <EmailForm />
            </div>
        </div>

        <div className='end-message'>
            <EndMessage />
        </div>
      </div>
    </div>
  )
}



const ContactMe=()=>{
    return(
        <div>
            <div className='contact-info'>
                <h4>Contact Info</h4>
                <p>Fill up the form and I will get back to you within 24 hours</p>
            </div>
            <div className='contact-info-div'>

                <div className='user-id'>
                    <div className='react-icons'>
                        <p><BsFillFilePersonFill className='icon'/></p>
                    </div>
                    <div className='user-info'>
                        <p>Oriakhi Osamudiamen</p>
                    </div>
                </div>

                <div className='user-id'>
                    <div className=' react-icons'>
                        <p><BsFillEnvelopeFill className='icon'/></p>
                    </div>
                    <div className='user-info'>
                        <p><a href='mailto:oriakhiosamu1@gmail.com' target='_blank' className='link'>oriakhiosamu1@gmail.com</a></p>
                    </div>
                </div>

                <div className='user-id'>
                    <div className='react-icons'>
                        <p><BsFillTelephoneFill className='icon'/></p>
                    </div>
                    <div className='user-info'>
                        <p>+234 810 577 5687</p>
                    </div>
                </div>

                <div className='user-id'>
                    <div className='react-icons'>
                        <p><FaTwitterSquare className='icon'/></p>
                    </div>
                    <div className='user-info'>
                        <p><a href='https://twitter.com/@OEmmanuelOriak1' className='link' target='_blank'>@OEmmanuelOriak1</a></p>
                        {/* <p>@OEmmanuelOriak1</p> */}
                    </div>
                </div>

                <div className='user-id'>
                    <div className='react-icons'>
                        <p><FaFacebook className='icon'/></p>
                    </div>
                    <div className='user-info'>
                        <p><a href='https://facebook.com/O.EmmanuelOriakhi' target='_blank' className='link'>O.Emmanuel Oriakhi</a></p>
                    </div>
                </div>

                <div className='user-id'>
                    <div className='react-icons'>
                        <p><FaInstagramSquare className='icon'/></p>
                    </div>
                    <div className='user-info'>
                        <p><a href='https://instagram.com/O.EmmanuelOriakhi' target='_blank' className='link'>O.Emmanuel Oriakhi</a></p>
                    </div>
                </div>

            </div>

        </div>
    );
}



const EmailForm=()=>{
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [message, setMessage]=useState('');


    const handleName=(e)=>{
        setName(e.target.value);
    }

    const handleEmail=(e)=>{
        setEmail(e.target.value);
    }

    const handleMessage=(e)=>{
        setMessage(e.target.value);
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        send('service_m93gken', 'template_de3u7g2', {name, email, message}, 'WyOOPnGSvk_55VFpm')
          .then((result) => {
              console.log(result.text);
              alert('Mail sent successfully');
          }, (error) => {
              console.log(error.text);
              alert('Failed to send Mail');
          });
          setEmail('');
          setName('');
          setMessage('');
      };

    return(
        <div>
            {/* <Shake> */}
                <div>
                    <form onSubmit={sendEmail} className='emailForm'>
                        <input type='text' name='name' value={name} onChange={handleName} placeholder='Sender name...' required /><br/>
                        <input type='email' name='email' value={email} onChange={handleEmail} placeholder='example@gmail.com...' required /><br/>
                        <textarea name='message' value={message} onChange={handleMessage} placeholder='Your Message Here...' required /><br/>
                        <button className='submit' type='submit'>Send Mail</button>
                    </form>
                </div>
            {/* </Shake> */}
        </div>
    );
}


const EndMessage=()=>{
    return(
        <div className='salutation'>
            <small className="salute-msg">Thank you for visiting ACE DESIGNZ WEBSITE</small>
        </div>
    );
}


export default Footer
