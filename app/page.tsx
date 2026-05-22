export default function UpiVendingMachineLandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Smart UPI Vending Machine
          </h1>

          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            A smart IoT-enabled vending machine that allows customers to
            scan a UPI QR code, make instant digital payments, and receive
            products automatically.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-2xl shadow-lg text-lg font-semibold hover:scale-105 transition">
              Instant UPI Payments
            </button>

            <button className="bg-black/20 border border-white px-8 py-3 rounded-2xl shadow-lg text-lg font-semibold hover:scale-105 transition">
              IoT Powered Automation
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                QR Based Payments
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Customers can scan a dynamic UPI QR code using Google Pay,
                PhonePe, Paytm, or any UPI application.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Instant Product Dispensing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Once payment is confirmed, the vending machine automatically
                dispenses the product using smart motor control.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Cloud Connected
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Built with Node.js and ESP32 for real-time communication,
                payment verification, and machine monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            About The Project
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            This project is designed to provide a simple, affordable, and
            reliable smart vending solution using UPI payments and IoT
            automation. The machine generates dynamic QR codes, verifies
            payments, and automatically dispenses products without manual
            intervention.
          </p>
        </div>
      </section>

      {/* Refund Policy */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Refund Policy
          </h2>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-gray-700 leading-relaxed">
            If payment is successfully completed but the product is not
            dispensed, customers may contact support for assistance and
            refund processing.
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Privacy Policy
          </h2>

          <div className="bg-gray-50 rounded-3xl shadow-lg p-8 text-gray-700 leading-relaxed">
            We do not store sensitive payment details. Transactions are
            securely processed through authorized UPI payment platforms.
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Contact Us
          </h2>

          <div className="space-y-4 text-lg">
            <p>
              Email: support@upivendingmachine.in
            </p>

            <p>
              Phone: +91 98765 43210
            </p>

            <p>
              Andhra Pradesh, India
            </p>
          </div>

          <div className="mt-10 text-sm text-gray-400">
            © 2026 Smart UPI Vending Machine. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}
