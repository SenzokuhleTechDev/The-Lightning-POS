const socket = io();

socket.on('connect', () => {
    console.log('Customer Display connected to server!');
    document.getElementById('payment-status').innerText = 'Ready. Waiting for cashier...';
});


socket.on('connect', () => {
    document.getElementById('payment-status').innerText = 'Ready. Waiting for cashier...';
});

// Listen for the 'cfd_update' broadcast from the server
socket.on('cfd_update', (data) => {
    // Update the massive ZAR text on the screen
    document.getElementById('zar-amount').innerText = `R ${parseFloat(data.amountZar).toFixed(2)}`;
    document.getElementById('payment-status').innerText = 'Calculating Sats & Generating Invoice...';
    
    // (Later we will add the logic here to fetch the real-time Bitcoin price and show the QR code)
});

// Listen for the 'cfd_update' broadcast from the server
socket.on('cfd_update', (data) => {
    // 1. Update the massive ZAR text on the screen
    document.getElementById('zar-amount').innerText = `R ${parseFloat(data.amountZar).toFixed(2)}`;
    document.getElementById('payment-status').innerText = 'Scan with any Lightning Wallet to pay ⚡';
    
    // 2. Create a dummy Lightning invoice string for testing
    // (Later, this will be the real 'lnbc...' string from your backend)
    const testInvoice = `lightning:TestingKasiPayForAmount${data.amountZar}`;
    
    // 3. Use a free API to instantly generate a QR code image from that string
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(testInvoice)}`;
    
    // 4. Swap out the broken image source for the shiny new QR code!
    document.getElementById('qr-code').src = qrApiUrl;
});