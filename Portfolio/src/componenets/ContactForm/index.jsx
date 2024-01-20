import React, { useState } from 'react';
import './styles.css';

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
    console.log('Form Data:', formData);
    closeEnvelope();
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
    <div className="envelope" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={openEnvelope}>
      <div className={`cover top ${envelopeState}`} style={{ zIndex: zIndexState.cover }}></div>
      <div className="cover bottom right" style={{ zIndex: zIndexState.cover }}></div>
      <div className="cover left" style={{ zIndex: zIndexState.cover }}></div>
      <div
        className={`letter ${letterAnimation}`}
        onAnimationEnd={onPullAnimationEnd}
        style={{ zIndex: zIndexState.letter }}
      >
        <h2>Let's Get in Touch!</h2>
        <form onSubmit={handleSubmit}>
          <p>
            <textarea rows="1" cols="35" name="contactName" placeholder="Name..." value={formData.contactName} onChange={handleChange}></textarea>
            <br />
            <textarea rows="1" cols="35" name="contactPhoneNumber" placeholder="Phone..." value={formData.contactPhoneNumber} onChange={handleChange}></textarea>
            <br />
            <textarea rows="1" cols="35" name="contactEmail" placeholder="E-Mail..." value={formData.contactEmail} onChange={handleChange}></textarea>
            <br />
            <textarea rows="2" cols="35" name="contactMessage" placeholder="Message..." value={formData.contactMessage} onChange={handleChange}></textarea>
          </p>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}
