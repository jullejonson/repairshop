// Initialize the homepage slider (carousel) with the specified interval
$(document).ready(function () {
    $('#homepageSlider').carousel({
        interval: 9000, // 9 seconds between slide transitions
        ride: 'carousel'
    });
});

// Function to check if cookies have been accepted
function checkCookieConsent() {
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookieConsent').style.display = 'block';
    }
}

// Function to accept cookies
document.getElementById('acceptCookies').addEventListener('click', function () {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookieConsent').style.display = 'none';
});

// Check for cookie consent on page load
window.onload = function() {
    checkCookieConsent();
};