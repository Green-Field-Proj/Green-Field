import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Exclusive</h3>
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
            <div className="subscribe-container">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-white p-2"
              />
              <button className="bg-white text-black p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li>111 Bijoy sarani, Dhaka,</li>
              <li>DH 1515, Bangladesh.</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Account</h3>
            <ul>
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Quick Link</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Download App</h3>
            <p>Save $3 with App New User Only</p>
            <div className="app-stores">
              <img
                src="/path-to-qr-code.png"
                alt="QR Code"
                className="w-24 h-24"
              />
              <div className="flex flex-col space-y-2">
                <img
                  src="/path-to-google-play.png"
                  alt="Google Play"
                  className="h-10"
                />
                <img
                  src="/path-to-app-store.png"
                  alt="App Store"
                  className="h-10"
                />
              </div>
            </div>
            <div className="social-icons">
              <img
                src="/path-to-facebook-icon.png"
                alt="Facebook"
                className="w-6 h-6"
              />
              <img
                src="/path-to-twitter-icon.png"
                alt="Twitter"
                className="w-6 h-6"
              />
              <img
                src="/path-to-instagram-icon.png"
                alt="Instagram"
                className="w-6 h-6"
              />
              <img
                src="/path-to-linkedin-icon.png"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
