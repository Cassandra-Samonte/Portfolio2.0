// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
// import './styles.css';

// emailjs.init('jbL-NLNwkF4O3b0sa'); 

// export default function ContactForm() {
//     const handleSubmit = (event) => {
//     event.preventDefault();
//     emailjs.sendForm('service_5ljtrp7', 'template_olt2plb', event.target, 'jbL-NLNwkF4O3b0sa')
//         .then((result) => {
//         console.log('Email sent:', result.text);
//         }, (error) => {
//         console.log('Send error:', error.text);
//         });
//     };

//     const [envelopeState, setEnvelopeState] = useState('close');
//     const [letterAnimation, setLetterAnimation] = useState('');
//     const [formData, setFormData] = useState({
//         contactName: '',
//         contactPhoneNumber: '',
//         contactEmail: '',
//         contactMessage: ''
//     });
//     const [zIndexState, setZIndexState] = useState({
//         cover: 5,
//         letter: 3
//     });

//     const handleMouseOver = () => {
//         if (letterAnimation === '') {
//         setEnvelopeState('open');
//         setZIndexState({ ...zIndexState, letter: 20 });
//         }
//     };

//     const handleMouseOut = () => {
//         if (letterAnimation === '') {
//         setEnvelopeState('close');
//         setZIndexState({ ...zIndexState, letter: 3 });
//         }
//     };

//     const openEnvelope = () => {
//         if (letterAnimation === '') {
//         setLetterAnimation('pull');
//         setZIndexState({ cover: 0, letter: 20 });
//         setEnvelopeState('open'); 
//         }
//     };

//     const handleChange = (event) => {
//         setFormData({ ...formData, [event.target.name]: event.target.value });
//     };

//     const closeEnvelope = () => {
//         setLetterAnimation('');
//         setEnvelopeState('close'); 
//         setZIndexState({ cover: 5, letter: 3 });
//     };

//     const onPullAnimationEnd = () => {
//         if (letterAnimation === 'pull') {
//         setLetterAnimation('put');
//         } else if (letterAnimation === 'put') {
//         setLetterAnimation('final');
//         }
//     };

//     return (
//         <div className="envelope" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={openEnvelope}>
//         <div className={`cover top ${envelopeState}`} style={{ zIndex: zIndexState.cover }}></div>
//         <div className="cover bottom right" style={{ zIndex: zIndexState.cover }}></div>
//         <div className="cover left" style={{ zIndex: zIndexState.cover }}></div>
//         <div
//             className={`letter ${letterAnimation}`}
//             onAnimationEnd={onPullAnimationEnd}
//             style={{ zIndex: zIndexState.letter }}
//         >
//             <h2>Let's Get in Touch!</h2>
//             <form onSubmit={handleSubmit}>
//             <p>
//                 <textarea rows="1" cols="35" name="contactName" placeholder="Name..." value={formData.contactName} onChange={handleChange}></textarea>
//                 <br />
//                 <textarea rows="1" cols="35" name="contactPhoneNumber" placeholder="Phone..." value={formData.contactPhoneNumber} onChange={handleChange}></textarea>
//                 <br />
//                 <textarea rows="1" cols="35" name="contactEmail" placeholder="E-Mail..." value={formData.contactEmail} onChange={handleChange}></textarea>
//                 <br />
//                 <textarea rows="2" cols="35" name="contactMessage" placeholder="Message..." value={formData.contactMessage} onChange={handleChange}></textarea>
//             </p>
//             <button type="submit" className="submit-button">Submit</button>
//             </form>
//         </div>
//         </div>
//     );
// }

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './styles.css';

emailjs.init('jbL-NLNwkF4O3b0sa'); 

export default function ContactForm() {
  const [envelopeState, setEnvelopeState] = useState('close');
  const [letterAnimation, setLetterAnimation] = useState('');
  const [formData, setFormData] = useState({
    contactName: '',
    contactPhoneNumber: '',
    contactEmail: '',
    contactMessage: ''
  });
  const [zIndexState, setZIndexState] = useState({
    cover: 5,
    letter: 3
  });
  const [showMessage, setShowMessage] = useState(false);

  const handleMouseOver = () => {
    if (letterAnimation === '') {
      setEnvelopeState('open');
      setZIndexState({ ...zIndexState, letter: 20 });
    }
  };

  const handleMouseOut = () => {
    if (letterAnimation === '') {
      setEnvelopeState('close');
      setZIndexState({ ...zIndexState, letter: 3 });
    }
  };

  const openEnvelope = () => {
    if (letterAnimation === '') {
      setLetterAnimation('pull');
      setZIndexState({ cover: 0, letter: 20 });
      setEnvelopeState('open');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_5ljtrp7', 'template_olt2plb', event.target, 'jbL-NLNwkF4O3b0sa')
      .then((result) => {
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 5000);
        closeEnvelope();
      }, (error) => {
        console.log('Send error:', error.text);
      });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const closeEnvelope = () => {
    setLetterAnimation('');
    setEnvelopeState('close');
    setZIndexState({ cover: 5, letter: 3 });
  };

  const onPullAnimationEnd = () => {
    if (letterAnimation === 'pull') {
      setLetterAnimation('put');
    } else if (letterAnimation === 'put') {
      setLetterAnimation('final');
    }
  };

  return (
    <>
    <h1 className="titlesection">Contact Me</h1>
    <div className="envelope" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={openEnvelope}>
      <div className={`cover top ${envelopeState}`} style={{ zIndex: zIndexState.cover }}></div>
      <div className="cover bottom right" style={{ zIndex: zIndexState.cover }}></div>
      <div className="cover left" style={{ zIndex: zIndexState.cover }}></div>
      <div
        className={`letter ${letterAnimation}`}
        onAnimationEnd={onPullAnimationEnd}
        style={{ zIndex: zIndexState.letter }}
      >
        <h2 className="formtext">Let's Get in Touch!</h2>
        {showMessage && <div className="email-sent-message">Email Sent!</div>}
        <form onSubmit={handleSubmit}>
          <p className="formtext">
            <textarea rows="1" cols="35" name="contactName" placeholder="Name..." value={formData.contactName} onChange={handleChange}></textarea>
            <br />
            <textarea rows="1" cols="35" name="contactPhoneNumber" placeholder="Phone..." value={formData.contactPhoneNumber} onChange={handleChange}></textarea>
            <br />
            <textarea rows="1" cols="35" name="contactEmail" placeholder="E-Mail..." value={formData.contactEmail} onChange={handleChange}></textarea>
            <br />
            <textarea rows="2" cols="35" name="contactMessage" placeholder="Message..." value={formData.contactMessage} onChange={handleChange}></textarea>
          </p>
          <button type="submit" className="formtext submit-button">Submit</button>
        </form>
      </div>
    </div>
    </>
  );
}
