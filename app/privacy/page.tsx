// app/privacy-policy.tsx (Next.js page)
"use client";

import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-purple-600 mb-8 text-center">
          Privacy Policy & Terms and Conditions
        </h1>

        {/* Effective Date */}
        <p className="mb-6">
          <strong>Effective Date:</strong> [Insert Date]
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
          1. Introduction
        </h2>
        <p className="mb-4">
          Welcome to <strong>[Platform Name]</strong> (“we”, “our”, “us”). Our platform provides a service that allows homeowners to list their houses for potential tenants. By using our platform, you agree to comply with and be bound by the following Privacy Policy and Terms and Conditions. These policies apply to all users, homeowners, tenants, and visitors accessing our services.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
          2. Services Overview
        </h2>
        <p className="mb-4">
          [Platform Name] acts solely as a <strong>platform-as-a-service (PaaS)</strong> that enables homeowners to list their properties and tenants to submit applications. We <strong>do not act as a real estate agent, property manager, landlord, or legal representative</strong>. All legal responsibilities related to property rental, tenancy agreements, disputes, or compliance with local housing laws rest solely with the homeowners and tenants.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
          3. Application Fee Policy
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Any <strong>application fee collected</strong> through our platform is <strong>non-refundable</strong>.</li>
          <li>The application fee is <strong>retained entirely by the platform</strong> as a service fee.</li>
          <li>Homeowners <strong>do not receive</strong> the application fee under any circumstances.</li>
          <li>The application fee is collected only to facilitate the tenant application process and does <strong>not guarantee</strong> tenancy or property rental.</li>
          <li>Any disputes or claims regarding the application fee shall <strong>not involve the platform</strong>.</li>
        </ul>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
          4. User Responsibilities
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Homeowners must provide <strong>accurate, current, and complete information</strong> about the property listed.</li>
          <li>Users agree to comply with <strong>all local laws and regulations</strong> concerning rental properties, tenancy agreements, and property management.</li>
          <li>Users acknowledge that the platform is <strong>not responsible</strong> for verifying the authenticity of listings or user identities.</li>
          <li>Users are solely responsible for <strong>any legal or financial transactions</strong> related to property rental.</li>
        </ul>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
          5. Privacy Policy
        </h2>
        <p className="mb-4">
          We value your privacy and are committed to protecting your personal information. By using our platform, you agree to the following:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Information Collection:</strong> Personal information such as name, contact details, government ID (if required), and payment information may be collected to process listings and applications. Usage data and technical information such as IP address, browser type, and device information may also be collected.
          </li>
          <li>
            <strong>Use of Information:</strong> To facilitate property listings and tenant applications, process and manage application fees, improve platform services, and provide customer support.
          </li>
          <li>
            <strong>Information Sharing:</strong> We do not sell personal information to third parties. Information may be shared with payment processors to process fees. Legal compliance may require disclosure of information.
          </li>
          <li>
            <strong>Data Security:</strong> We implement reasonable technical and administrative measures to protect personal data. Absolute security of information transmitted via the internet cannot be guaranteed.
          </li>
          <li>
            <strong>Cookies & Tracking:</strong> The platform may use cookies or tracking technologies to enhance user experience and analyze traffic.
          </li>
        </ul>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
          6. Limitation of Liability
        </h2>
        <p className="mb-4">
          The platform is provided <strong>“as-is” and “as available”</strong> without warranties. We are not liable for any disputes, losses, damages, or claims arising from property listings, tenancy agreements, application fees, misrepresentation, or errors. Users agree that the platform is not responsible for any legal, financial, or contractual obligations between homeowners and tenants.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
          7. Indemnification
        </h2>
        <p className="mb-4">
          Users agree to indemnify, defend, and hold harmless [Platform Name], its officers, employees, and affiliates from any claims, losses, damages, liabilities, or expenses arising from their use of the platform, property listings, application fee disputes, or violation of laws.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
          8. Termination of Access
        </h2>
        <p className="mb-4">
          We reserve the right to suspend or terminate access to the platform for users violating these terms. Termination does not affect any application fees collected, which remain non-refundable.
        </p>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
          9. Modifications
        </h2>
        <p className="mb-4">
          We may update or modify these Terms & Privacy Policy at any time. Users are encouraged to review the latest version regularly. Continued use of the platform after modifications constitutes acceptance of the updated terms.
        </p>

        {/* Section 10 */}
        <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
          10. Governing Law
        </h2>
        <p className="mb-4">
          These terms are governed by the laws of [India/United State]. Users agree to exclusive jurisdiction and venue in the courts located within [ludhiana/INDIA] for any disputes arising from the platform.
        </p>

        {/* Section 11 */}
        <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
          11. Contact Us
        </h2>
        <p className="mb-4">
          If you have any questions regarding this Privacy Policy or Terms and Conditions, please contact:
        </p>
        <p>
          <strong>Email:</strong> [venocodeinc@gmail.com] <br />
         
        </p>
      </div>
    </div>
  );
}
