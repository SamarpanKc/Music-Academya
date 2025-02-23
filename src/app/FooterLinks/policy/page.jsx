import React from 'react';

const Policy = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-8 lg:px-36 font-inter">
      <h1 className="text-3xl font-kanit font-bold text-center mb-8 underline">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 font-kanit">Introduction</h2>
        <p className="text-gray-200 leading-relaxed">
          Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information when you use our website and services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 font-kanit">Information We Collect</h2>
        <p className="text-gray-200 leading-relaxed">
          We may collect the following types of information:
        </p>
        <ul className="list-disc list-inside text-gray-200 leading-relaxed">
          <li>Personal Information: Name, email address, phone number, etc.</li>
          <li>Usage Data: Information about how you use our website and services.</li>
          <li>Cookies: Small files stored on your device to track your preferences.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 font-kanit">How We Use Your Information</h2>
        <p className="text-gray-200 leading-relaxed">
          We may use your information for the following purposes:
        </p>
        <ul className="list-disc list-inside text-gray-200 leading-relaxed">
          <li>To provide and maintain our services.</li>
          <li>To communicate with you.</li>
          <li>To improve our website and services.</li>
          <li>To personalize your experience.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 font-kanit">Data Security</h2>
        <p className="text-gray-200 leading-relaxed">
          We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 font-kanit">Changes to This Policy</h2>
        <p className="text-gray-200 leading-relaxed">
          We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on our website.
        </p>
      </section>
    </div>
  );
};

export default Policy;