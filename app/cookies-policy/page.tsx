import Link from "next/link";

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen px-6 py-12 bg-white text-slate-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Cookies Policy</h1>

        <p className="text-sm text-slate-600 mb-6">
          Last updated: <b>[2-11-2025]</b>
        </p>

        {/* Intro */}
        <section className="mb-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            This Cookies Policy explains how Editve uses cookies and similar
            technologies to provide, protect, and improve your experience on our
            platform. Cookies help us ensure secure logins, personalize your
            preferences, analyze performance, and comply with U.S. privacy laws.
            By using our website, you consent to our use of cookies in
            accordance with this policy.
          </p>
        </section>

        {/* What are cookies */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. What Are Cookies?</h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            Cookies are small text files stored on your device by your browser.
            They allow websites to remember your actions, preferences, and login
            information. Cookies may be set directly by Editve or by trusted
            third-party service providers we work with.
          </p>
        </section>

        {/* Why we use cookies */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Why We Use Cookies</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-2">
            We use cookies to:
          </p>

          <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
            <li>Ensure the platform functions correctly</li>
            <li>Keep your account secure and verify sessions</li>
            <li>Save your language or display preferences</li>
            <li>Analyze website traffic and improve performance</li>
            <li>Store rental application progress</li>
            <li>Provide a smoother, faster user experience</li>
          </ul>
        </section>

        {/* Types of cookies */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Types of Cookies We Use</h2>

          <h3 className="font-semibold text-sm mt-4">A. Essential Cookies</h3>
          <p className="text-sm text-slate-700 leading-relaxed mb-2">
            Required for core features such as login, account security,
            application submission, and preventing fraudulent activity. These
            cookies cannot be disabled.
          </p>

          <h3 className="font-semibold text-sm mt-4">B. Performance & Analytics Cookies</h3>
          <p className="text-sm text-slate-700 leading-relaxed mb-2">
            Used to measure usage patterns, load times, errors, and improve platform
            performance. Example: Google Analytics or similar tools.
          </p>

          <h3 className="font-semibold text-sm mt-4">C. Preference Cookies</h3>
          <p className="text-sm text-slate-700 leading-relaxed mb-2">
            Store your language settings, theme preference, and other customizations
            to make your experience consistent.
          </p>

          <h3 className="font-semibold text-sm mt-4">D. Security Cookies</h3>
          <p className="text-sm text-slate-700 leading-relaxed">
            Help detect unauthorized logins, prevent abuse, and secure your account
            from suspicious activity.
          </p>
        </section>

        {/* Third-party cookies */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Third-Party Cookies</h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            Some cookies may be set by third-party service providers that assist us with:
          </p>

          <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2 mt-2">
            <li>Analytics and performance tracking</li>
            <li>Identity verification and fraud prevention</li>
            <li>Secure payment processing</li>
            <li>Error tracking or crash reporting</li>
          </ul>

          <p className="text-sm text-slate-700 leading-relaxed mt-2">
            These third parties follow their own privacy and cookie policies.
            We only work with reputable service providers who comply with U.S.
            privacy laws and security standards.
          </p>
        </section>

        {/* Managing cookies */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Managing & Disabling Cookies</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            You can manage or disable cookies from your browser settings at any
            time. Most browsers allow you to:
          </p>

          <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
            <li>Block all cookies</li>
            <li>Block third-party cookies only</li>
            <li>Clear cookies automatically when closing browser</li>
            <li>Receive alerts before cookies are saved</li>
          </ul>

          <p className="text-sm text-slate-700 leading-relaxed mt-3">
            Please note: disabling essential cookies may prevent you from logging
            in, submitting applications, or using important features of the Editve
            platform.
          </p>
        </section>

        {/* Updates */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">6. Updates</h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            We may update this Cookies Policy to reflect changes in legal
            requirements, technology, or our services. Updates will be posted on
            this page with a revised “Last Updated” date. Continued use of the
            platform confirms your acceptance of the updated policy.
          </p>
        </section>

        <Link href="/" className="text-purple-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
