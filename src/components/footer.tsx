function Footer() {
    return (
      <div className="bg-black text-white py-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Exclusive</h2>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="mb-4">Get 10% off your first order</p>
            <form className="relative w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 w-full bg-black text-white border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:border-white pr-16"
              />
              <button
                type="submit"
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-800"
              >
                ➤
              </button>
            </form>
          </div>
  
          {/* Support Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Support</h2>
            <ul className="space-y-2">
              <li>111 Bijoy Sarani, Dhaka,</li>
              <li>DH 1515, Bangladesh</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>
  
          {/* Account Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Account</h2>
            <ul className="space-y-2">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>
  
          {/* Quick Links Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
  
          {/* Download App Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Download App</h2>
            <p className="mb-4">Save $3 with App New User Only</p>
            <div className="flex items-start space-x-4">
              {/* QR Code */}
              <img
                src="Qrcode.png"
                alt="QR Code"
                className="h-20 w-20"
              />
              <div>
                {/* Google Play */}
                <img
                  src="google.png"
                  alt="Google Play"
                  className="h-110 w-40 "
                />
                {/* App Store */}
                <img
                  src="app.png"
                  alt="App Store"
                  className="h-110 w-40"
                />
              </div>
            </div>
  
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-gray-400">
                <img src="facebook.png" alt="Facebook" className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-400">
                <img src="twitter.png" alt="Twitter" className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-400">
                <img src="insta.png" alt="Instagram" className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-400">
                <img src="linkedin.png" alt="LinkedIn" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="text-center text-gray-400 mt-8">
          © Copyright Areeba 2024. All rights reserved
        </div>
      </div>
    );
  }
  
  export default Footer;