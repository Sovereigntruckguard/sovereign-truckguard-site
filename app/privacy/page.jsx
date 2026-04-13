import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Sovereign TruckGuard',
  description: 'Privacy Policy and SMS Terms of Service for Sovereign TruckGuard LLC.',
};

const PrivacyPolicy = () => {
  const lastUpdated = "April 13, 2026";
  const companyName = "Sovereign TruckGuard LLC";
  const websiteUrl = "sovereigntruckguard.com";

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-slate-800 font-sans">
      <h1 className="text-4xl font-bold mb-4 text-slate-900">Privacy Policy</h1>
      <p className="text-sm text-slate-500 mb-8">Last Updated: {lastUpdated}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900">1. Introduction</h2>
        <p className="mb-4 leading-relaxed">
          At <strong>{companyName}</strong> ("we," "our," or "us"), we value your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website, use our services, or communicate with us via SMS.
        </p>
      </section>

      <section className="mb-8 border-l-4 border-blue-600 bg-blue-50 p-6 rounded-r-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900 text-slate-900">2. SMS Privacy Disclosure (A2P Compliance)</h2>
        <p className="mb-4 leading-relaxed font-medium">
          <strong>Information Sharing for SMS:</strong>
        </p>
        <p className="mb-4 leading-relaxed italic">
          "Mobile information will not be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties."
        </p>
        <p className="leading-relaxed">
          No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900">3. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4 leading-relaxed">
          <li><strong>Personal Identifiers:</strong> Name, email address, phone number, and physical address.</li>
          <li><strong>Business Information:</strong> MC/DOT numbers, insurance details, and fleet data.</li>
          <li><strong>Communication Data:</strong> Records of your interactions with our agents via phone, email, or SMS.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900">4. How We Use Your Information</h2>
        <p className="mb-4 leading-relaxed">We use the collected information to:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 leading-relaxed">
          <li>Provide insurance orchestration and business activation services.</li>
          <li>Process your insurance quotes and binders.</li>
          <li>Send operational updates and marketing communications (only if opted-in).</li>
          <li>Improve our Arcanum AI cognitive engine performance.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900">5. SMS Terms & Conditions</h2>
        <p className="mb-4 leading-relaxed">
          By providing your phone number, you consent to receive SMS messages from {companyName}.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4 leading-relaxed">
          <li><strong>Frequency:</strong> Message frequency varies based on your interaction with our services.</li>
          <li><strong>Opt-Out:</strong> You can cancel the SMS service at any time. Just text "STOP" to our number. After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed.</li>
          <li><strong>Help:</strong> If you are experiencing issues with the messaging program you can reply with the keyword "HELP" for more assistance.</li>
          <li><strong>Rates:</strong> Message and data rates may apply for any messages sent to you from us and to us from you.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900">6. Data Protection</h2>
        <p className="leading-relaxed">
          We implement industry-standard security measures, including encryption and secure cloud infrastructure (Azure/Google Cloud), to protect your data from unauthorized access or disclosure.
        </p>
      </section>

      <section className="mb-8 border-t pt-8">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900">7. Contact Us</h2>
        <p className="leading-relaxed">
          If you have questions about this Privacy Policy, please contact us at:<br />
          <strong>Email:</strong> info@sovereigntruckguard.com<br />
          <strong>Address:</strong> Spencer, Wyoming, USA.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;