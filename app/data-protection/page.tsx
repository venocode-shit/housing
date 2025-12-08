import Link from "next/link";

export default function DataProtectionPage() {
  return (
    <div className="min-h-screen px-6 py-12 bg-white text-slate-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Data Protection & Privacy Policy</h1>

        <p className="text-sm text-slate-600 mb-6">
          Last updated: <b>[2-11-2025]</b>
        </p>

        <section className="mb-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            Editve is committed to protecting your personal information and complying
            with all applicable U.S. privacy, consumer protection, and data security
            laws, including but not limited to:
            <br />
            <br />• California Consumer Privacy Act (CCPA)
            <br />• California Privacy Rights Act (CPRA)
            <br />• Fair Credit Reporting Act (FCRA)
            <br />• Federal Trade Commission (FTC) Security Guidelines
            <br />• State-specific housing and tenant-screening regulations
            <br />
            <br />
            This Data Protection Policy explains how we collect, use, share, store, and
            protect your information when you use our rental application and tenant
            screening platform.
          </p>
        </section>

        {/* What data we collect */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-2">
            We collect personal, financial, and application-related information to
            evaluate rental applications and comply with property-verification laws.
          </p>

          <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
            <li><b>Identity Information:</b> full name, date of birth, email, phone number, address history.</li>
            <li><b>Verification Documents:</b> ID cards, passports, SSN (if applicable), employment details, pay stubs, bank statements.</li>
            <li><b>Rental Application Data:</b> current landlord details, rental history, references.</li>
            <li><b>Usage Data:</b> device details, IP address, browser metadata, login logs.</li>
            <li><b>Payment Information:</b> only processed through secure third-party providers; we do not store card numbers.</li>
          </ul>
        </section>

        {/* How data is used */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-2">
            Your data is used only for legitimate business purposes, including:
          </p>

          <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
            <li>Verifying your identity and eligibility for rental approval</li>
            <li>Completing background and application checks (where allowed by law)</li>
            <li>Preventing fraud and unauthorized access</li>
            <li>Processing payments and application fees</li>
            <li>Communicating with property owners and management</li>
            <li>Complying with government or legal requirements</li>
            <li>Improving platform security and performance</li>
          </ul>
        </section>

        {/* How data is protected */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. How We Protect Your Data</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-2">
            We implement strong security measures consistent with U.S. federal and
            state regulations:
          </p>

          <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
            <li>HTTPS/TLS encryption for all data in transit</li>
            <li>Bank-grade encrypted document and data storage</li>
            <li>Multi-factor authentication for admin access</li>
            <li>Regular vulnerability scanning & threat monitoring</li>
            <li>Limited role-based access controls for employees</li>
            <li>Secure deletion and anonymization policies</li>
          </ul>
        </section>

        {/* Sharing policy */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. How Your Information Is Shared</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-2">
            We do <b>not</b> sell your personal information. Data is shared only with:
          </p>

          <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
            <li>Approved property owners or property managers</li>
            <li>Payment processors (for fees)</li>
            <li>Identity verification or screening partners (if required)</li>
            <li>Government authorities when legally obligated</li>
          </ul>
        </section>

        {/* Retention */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Data Retention</h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            We retain your data only for as long as necessary to fulfill rental
            application purposes, comply with legal requirements, and maintain
            accurate records.  
            Sensitive documents may be securely deleted upon request.
          </p>
        </section>

        {/* Your Rights */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Your Rights Under U.S. Law</h2>

          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            Depending on your state of residence (including California, Virginia,
            Colorado, Connecticut), you may have rights such as:
          </p>

          <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2 mb-4">
            <li>Right to access your data</li>
            <li>Right to correct inaccurate information</li>
            <li>Right to delete personal data</li>
            <li>Right to request what information is shared</li>
            <li>Right to opt-out of data selling (we do not sell data)</li>
          </ul>

          <p className="text-sm text-slate-700 leading-relaxed">
            To exercise any rights, contact us at:
            <br />
            <b>support@editve.com</b>
          </p>
        </section>

        {/* Final section */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">7. Contact & Support</h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            If you have questions about this Policy or how your data is handled,
            please contact our Data Protection Officer at:
            <br />
            <b>support@editve.com</b>
          </p>
        </section>

        <Link href="/" className="text-purple-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
