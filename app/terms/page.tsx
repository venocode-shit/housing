// app/terms/page.tsx (Next.js page)
"use client";

import React from "react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-purple-600 mb-8 text-center">
          Terms and Conditions
        </h1>

        {/* Effective Date */}
        <p className="mb-6">
          <strong>Effective Date:</strong> [27-11-2025]
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
          1. Acceptance of Terms
        </h2>
        <p className="mb-4">
          By using [Platform Name], you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the platform.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
          2. Platform Service
        </h2>
        <p className="mb-4">
          [Editve] provides a platform-as-a-service (PaaS) to allow homeowners to list their properties and tenants to submit applications. We do not act as a landlord, property manager, or legal representative.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
          3. Application Fees
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>All application fees collected via the platform are non-refundable.</li>
          <li>The platform retains the application fee entirely as a service fee.</li>
          <li>Homeowners do not receive the application fee under any circumstances.</li>
          <li>The application fee does not guarantee tenancy or property rental.</li>
        </ul>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
          4. User Responsibilities
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Users must provide accurate and complete information for property listings.</li>
          <li>Users must comply with all local laws regarding rental properties and tenancy agreements.</li>
          <li>The platform is not responsible for verifying the authenticity of listings or user identities.</li>
        </ul>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
          5. Limitation of Liability
        </h2>
        <p className="mb-4">
          The platform is provided "as-is" and "as available". We are not liable for any disputes, losses, damages, or claims arising from property listings, tenancy agreements, or application fees.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
          6. Indemnification
        </h2>
        <p className="mb-4">
          Users agree to indemnify and hold harmless [Platform Name] from any claims, losses, or liabilities arising from their use of the platform or violation of laws.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
          7. Termination
        </h2>
        <p className="mb-4">
          We may suspend or terminate access to users violating these Terms. Termination does not affect any application fees collected.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
          8. Modifications
        </h2>
        <p className="mb-4">
          We may modify these Terms at any time. Continued use of the platform after changes constitutes acceptance of the updated Terms.
        </p>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
          9. Governing Law
        </h2>
        <p className="mb-4">
          These Terms are governed by the laws of [Insert Jurisdiction]. Users agree to the exclusive jurisdiction of the courts in [Insert City/Country].
        </p>

        {/* Section 10 */}
        <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
          10. Contact
        </h2>
        <p className="mb-4">
          For questions regarding these Terms, please contact:
        </p>
        <p>
          <strong>Email:</strong> [venocodeinc@gmail.com] <br />
          
        </p>
      </div>
    </div>
  );
}
