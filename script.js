// script.js
document.getElementById('qrForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var textInput = document.getElementById('textInput').value;
    var qrCodeContainer = document.getElementById('qrCode');
    var downloadBtn = document.getElementById('downloadBtn');
    var downloadLink = document.getElementById('downloadLink');

    // Clear previous QR code
    qrCodeContainer.innerHTML = '';

    if (textInput.trim() === '') {
        alert('Please enter some text or URL');
        return;
    }

    // Generate QR code
    var qrCode = new QRCode(qrCodeContainer, {
        text: textInput,
        width: 128,
        height: 128
    });

    // Show the download button
    downloadBtn.style.display = 'inline-block';

    // Add event listener to download button
    downloadBtn.onclick = function() {
        // Convert the QR code canvas to a data URL
        var canvas = qrCodeContainer.querySelector('canvas');
        var dataUrl = canvas.toDataURL('image/png');

        // Set the download link attributes
        downloadLink.href = dataUrl;
        downloadLink.download = 'qrcode.png';
        
        // Programmatically click the download link
        downloadLink.click();
    };
});
