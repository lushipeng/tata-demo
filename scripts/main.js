const btn = document.querySelector('button');
const worker = new Worker('worker.js');

btn.addEventListener('click', function() {
    worker.postMessage('Go!');
    let pElem = document.createElement('p');
    pElem.textContent = 'This is a mewly-added paragraph.';
    document.body.appendChild(pElem);
});

worker.onmessage = function(e) {
    console.log(e.data);
};