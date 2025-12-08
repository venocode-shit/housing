"use client";
import React, { useState } from "react";
import Image from "next/image";

// ========================
// FOOTER COMPONENT
// ========================
function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white text-slate-700">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900">About Editve</h3>
          <p className="mt-3 text-sm leading-relaxed">
          “Editve is a global rental application platform where property owners can list their homes, set application fees, and allow tenants to apply securely online.”
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
            <li><a href="/terms" className="hover:text-purple-600">Terms & Conditions</a></li>
            <li><a href="/privacypolicy" className="hover:text-purple-600">Privacy Policy</a></li>
            <li><a href="cookies-policy" className="hover:text-purple-600">Cookies</a></li>
            <li><a href="data-protection" className="hover:text-purple-600">Data Security</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} GlobalRent — All rights reserved.
      </div>
    </footer>
  );
}

// ========================
// MAIN APPLICATION PAGE
// ========================
export default function TenantApplicationPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    income: "",
    about: "",
    pets: "",
    livingWith: "",
    companyName: "",
    workingSince: "",
    creditScore: "",
    idProof: null as string | null,
  });

  const [idProofName, setIdProofName] = useState("");
  const [idProofSuccess, setIdProofSuccess] = useState(false);
  const [step, setStep] = useState<"form" | "thankyou">("form");
  const [paymentStatus, setPaymentStatus] =
    useState<null | "processing" | "success">(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 25 * 1024 * 1024) {
      alert("File size exceeds 25 MB. Please upload a smaller file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setForm({ ...form, idProof: reader.result as string });
      setIdProofName(file.name);
      setIdProofSuccess(true);
    };
    reader.readAsDataURL(file);
  };

  function submitTenantApplication(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const {
      name, phone, email, income, about, pets,
      livingWith, companyName, workingSince,
      creditScore, idProof,
    } = form;

    if (!name || !phone || !email || !income || !about || !pets ||
        !livingWith || !companyName || !workingSince || !creditScore || !idProof) {
      return alert("Please fill all fields and upload ID proof.");
    }

    setPaymentStatus("processing");

    setTimeout(() => {
      setPaymentStatus("success");

      setTimeout(() => {
        setStep("thankyou");
      }, 600);
    }, 2000);
  }

  if (step === "thankyou") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <Image src="/logo.svg" alt="Logo" width={55} height={55} />
        <h1 className="text-3xl font-bold mt-4">Thank You!</h1>
        <p className="text-slate-700 mt-2 max-w-md">
          Thank you for your application. The landlord will reach out to you
          within <b>2 days</b>.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-white text-slate-900 px-6 py-10">
        {/* Logo */}
        <div className="max-w-lg mx-auto mb-6 flex items-center gap-3">
          <Image src="/logo.svg" width={42} height={42} alt="Logo" />
          <a href="#" className="text-lg font-semibold text-purple-700 hover:underline">
            Application for Apartment
          </a>
        </div>

        {/* Main Form Card */}
        <div className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow border border-slate-100">
          <h2 className="text-2xl font-bold mb-2">Tenant Application</h2>
          <p className="text-slate-600 mb-6 text-sm">
            Please fill all details correctly before submitting your application.
          </p>

          <form onSubmit={submitTenantApplication} className="space-y-4">

            {/* NAME */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Full Legal Name</label>
              <input
                type="text"
                placeholder="Enter your legal full name"
                className="w-full border rounded-lg p-2"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            {/* PHONE */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Phone Number</label>
              <input
                type="text"
                placeholder="Where landlord can contact you"
                className="w-full border rounded-lg p-2"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                placeholder="For updates about your application"
                className="w-full border rounded-lg p-2"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            {/* INCOME */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">
                Current Monthly Income
              </label>
              <input
                type="text"
                placeholder="Example: $4500"
                className="w-full border rounded-lg p-2"
                value={form.income}
                onChange={(e) => setForm({ ...form, income: e.target.value })}
              />
            </div>

            {/* ABOUT */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">About Yourself</label>
              <textarea
                placeholder="Job, background, lifestyle"
                className="w-full border rounded-lg p-2 min-h-[90px]"
                value={form.about}
                onChange={(e) => setForm({ ...form, about: e.target.value })}
              />
            </div>

            {/* PETS */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Pets</label>
              <input
                type="text"
                placeholder="Yes/No + details"
                className="w-full border rounded-lg p-2"
                value={form.pets}
                onChange={(e) => setForm({ ...form, pets: e.target.value })}
              />
            </div>

            {/* LIVING WITH */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Living With</label>
              <input
                type="text"
                placeholder="Anyone living with you? Yes/No"
                className="w-full border rounded-lg p-2"
                value={form.livingWith}
                onChange={(e) => setForm({ ...form, livingWith: e.target.value })}
              />
            </div>

            {/* COMPANY */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Company Name</label>
              <input
                type="text"
                placeholder="Where do you work?"
                className="w-full border rounded-lg p-2"
                value={form.companyName}
                onChange={(e) => setForm({ ...form, companyName: e.target.value })}
              />
            </div>

            {/* WORKING SINCE */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Working Since</label>
              <input
                type="text"
                placeholder="How long have you been working here?"
                className="w-full border rounded-lg p-2"
                value={form.workingSince}
                onChange={(e) =>
                  setForm({ ...form, workingSince: e.target.value })
                }
              />
            </div>

            {/* CREDIT SCORE */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Credit Score</label>
              <input
                type="number"
                placeholder="Approximate number"
                className="w-full border rounded-lg p-2"
                value={form.creditScore}
                onChange={(e) =>
                  setForm({ ...form, creditScore: e.target.value })
                }
              />
            </div>

            {/* ID PROOF */}
            <div>
              <label className="text-sm font-medium mb-1">
                Upload ID Proof <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                accept="image/*,.pdf"
                className={`w-full border rounded-lg p-2 cursor-pointer ${
                  idProofSuccess ? "border-green-500" : "border-gray-300"
                }`}
                onChange={handleFileUpload}
              />

              {idProofName && (
                <p className="text-sm text-green-600 mt-1">
                  Uploaded: {idProofName}
                </p>
              )}

              <p className="text-xs text-slate-500 mt-1">
                Accepted formats: JPG, PNG, PDF. Max size 25 MB.
              </p>
            </div>

           {/* APPLICATION FEE */}
<div className="text-sm text-slate-600">Application Fee: $35</div>

{/* ONLY RAZORPAY BUTTON (MAIN BUTTON) */}
<a
  href="https://rzp.io/l/YOUR_PAYMENT_LINK"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full mt-3 py-3 rounded-2xl font-semibold shadow text-white text-center bg-black hover:bg-slate-800 transition-all duration-300 hover:scale-105"
>
  Pay Razorpay
</a>


              {/* APPLICATION FEE INFO + SECURITY NOTE */}
<div className="flex items-start gap-3 bg-purple-50 border border-purple-300 p-4 rounded-xl mb-4">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-7 h-7 text-purple-700 flex-shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6l7 4v2c0 5-3.5 9-7 10-3.5-1-7-5-7-10V10l7-4z"
    />
  </svg>

  <p className="text-sm text-slate-800 leading-relaxed">
    <b>Your application fee is securely held for verification purposes.</b><br />
    If the apartment is <b>not approved</b> or the deal does not finalize,  
    Editve Platform will process a <b>100% automatic refund within 4 days</b>  
    as per refund & consumer protection guidelines.
  </p>
</div>

          </form>
        </div>
      </div>
      
      {/* MERGED FOOTER */}
      <Footer />
    </>
  );
}
