// Auto-dialer function that triggers when the page loads
function autoDial() {
    var phoneNumber = "+18008919140"; // PayPal customer service number (USA)
    var dialerLink = "tel:" + phoneNumber; // Generates a phone dialer link

    // Check if the browser supports 'tel:' links (only works on mobile or compatible systems)
    if (window.location.protocol !== 'tel:') {
        window.location.href = dialerLink;  // Opens the dialer on mobile or compatible systems
    } else {
        alert("Your browser does not support automatic dialing.");
    }
}

// Trigger auto-dialer on page load
window.onload = autoDial;
