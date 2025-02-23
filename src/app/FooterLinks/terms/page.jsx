import React from 'react';

const Terms = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-8 lg:px-36 font-inter">
      <h1 className="text-3xl font-kanit font-bold text-center mb-8 underline">Terms and Conditions</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 font-kanit">Acceptance of Terms</h2>
        <p className="text-gray-200 leading-relaxed">
          By accessing or using our website and services, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you may not use our website or services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 font-kanit">Use of Services</h2>
        <p className="text-gray-200 leading-relaxed">
          You agree to use our website and services only for lawful purposes and in accordance with these terms and conditions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 font-kanit">Intellectual Property</h2>
        <p className="text-gray-200 leading-relaxed">
          All content on our website, including text, graphics, logos, and images, is the property of Harmony Music Academy and is protected by copyright laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 font-kanit">Limitation of Liability</h2>
        <p className="text-gray-200 leading-relaxed">
          Harmony Music Academy shall not be liable for any damages arising out of or in connection with your use of our website or services.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 font-kanit">Changes to These Terms</h2>
        <p className="text-gray-200 leading-relaxed">
          We may update these terms and conditions from time to time. We will notify you of any changes by posting the new terms on our website.
        </p>
      </section>
    </div>
  );
};

export default Terms;