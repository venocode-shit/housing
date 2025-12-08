"use client";

// Reusable Footer Component for GlobalRent
// Clean white layout + subtle borders + professional sections
// Import in home page: import Footer from "@/components/footer";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white text-slate-700">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10">

        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900">About GlobalRent</h3>
          <p className="mt-3 text-sm leading-relaxed">
            GlobalRent ek worldwide rental application platform hai jaha owners apne ghar list
            kar sakte hain, application fee set kar sakte hain, aur tenants online apply kar sakte hain.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#listings" className="hover:text-purple-600">Browse Listings</a></li>
            <li><a href="#how" className="hover:text-purple-600">How it Works</a></li>
            <li><a href="#" className="hover:text-purple-600">Pricing</a></li>
            <li><a href="#" className="hover:text-purple-600">Support</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Legal</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-purple-600">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-purple-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-purple-600">Cookies</a></li>
            <li><a href="#" className="hover:text-purple-600">Data Security</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom note */}
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} GlobalRent — All rights reserved.
      </div>
    </footer>
  );
}