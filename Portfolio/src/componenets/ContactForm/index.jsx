import './styles.css'

// Interactive Envelope Code from this article: https://medium.com/web-for-you/how-to-make-a-interactive-envelope-9df970614eea

// 'use strict';
// (function() {
//     const envelope = document.getElementById('envelope');
//     const envelopeTop = document.getElementById('envelopeTop');
//     const letter = document.getElementById('contact');
//     const left = document.getElementById('left');
//     const bottomRight = document.getElementById('bottom-right');
// })();

// envelopeTop.classList.add("close");

// envelope.addEventListener('mouseover',openEnvelopeOnHover);
// envelope.addEventListener('mouseout',closeEnvelopeOnHover);

// function openEnvelopeOnHover() {
//     envelopeTop.classList.remove("close");
//     envelopeTop.classList.add("open");
//     pullOutPartial();
// }

// function pullOutPartial() {
//     letter.classList.remove("in");
//     letter.classList.add("out-partial");
// }

// function closeEnvelopeOnHover() {
//     if(flag===1) {
//         putIn();
//         envelopeTop.classList.remove("open");
//         envelopeTop.classList.add("close");
//     }
//     else {
//         envelope.removeEventListner('mouseout',closeEnvelopeOnHover);
//     }
// }

// function putIn() {
//     letter.classList.remove("out-partial");
//     letter.classList.add("in");
// }

export default function Skills() {

    return (
        <>
            <div className="container">
                <div className="envelope" id="envelope">
                    <div className="cover top" id="envelopeTop"></div>
                    <div className="cover bottom right" id="bottom-right"></div>
                    <div className="cover left" id="left"></div>
                    <div className="letter" id="contact"></div>
                </div>
            </div>
        </>
    )
}


