"use client";
import React, { useState } from "react";
import Image from "next/image";

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

  const [idProofName, setIdProofName] = useState(""); // store file name
  const [idProofSuccess, setIdProofSuccess] = useState(false); // upload success flag
  const [step, setStep] = useState<"form" | "thankyou">("form");
  const [paymentStatus, setPaymentStatus] =
    useState<null | "processing" | "success">(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 25 * 1024 * 1024) { // 25 MB limit
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
      name,
      phone,
      email,
      income,
      about,
      pets,
      livingWith,
      companyName,
      workingSince,
      creditScore,
      idProof,
    } = form;

    if (
      !name ||
      !phone ||
      !email ||
      !income ||
      !about ||
      !pets ||
      !livingWith ||
      !companyName ||
      !workingSince ||
      !creditScore ||
      !idProof
    ) {
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
    <div className="min-h-screen bg-white text-slate-900 px-6 py-10">
      {/* ==== TOP LOGO + LINK ==== */}
      <div className="max-w-lg mx-auto mb-6 flex items-center gap-3">
        <Image src="/logo.svg" width={42} height={42} alt="Logo" />
        <a
          href="#"
          className="text-lg font-semibold text-purple-700 hover:underline"
        >
          Application for Apartment
        </a>
      </div>

      {/* ==== FORM CARD ==== */}
      <div className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow border border-slate-100">
        <h2 className="text-2xl font-bold mb-2">Tenant Application</h2>
        <p className="text-slate-600 mb-6 text-sm">
          Please fill all details correctly before submitting your application.
        </p>

        <form onSubmit={submitTenantApplication} className="space-y-4">

          {/* Full Name */}
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

          {/* Phone */}
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

          {/* Email */}
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

          {/* Income */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Current Monthly Income</label>
            <input
              type="text"
              placeholder="Example: $4500"
              className="w-full border rounded-lg p-2"
              value={form.income}
              onChange={(e) => setForm({ ...form, income: e.target.value })}
            />
          </div>

          {/* About */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">About Yourself</label>
            <textarea
              placeholder="Job, background, lifestyle"
              className="w-full border rounded-lg p-2 min-h-[90px]"
              value={form.about}
              onChange={(e) => setForm({ ...form, about: e.target.value })}
            />
          </div>

          {/* Pets */}
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

          {/* Living With */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Living With</label>
            <input
              type="text"
              placeholder="Anyone living with you? Yes/No"
              className="w-full border rounded-lg p-2"
              value={form.livingWith}
              onChange={(e) =>
                setForm({ ...form, livingWith: e.target.value })
              }
            />
          </div>

          {/* Company Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Company Name</label>
            <input
              type="text"
              placeholder="Where do you work?"
              className="w-full border rounded-lg p-2"
              value={form.companyName}
              onChange={(e) =>
                setForm({ ...form, companyName: e.target.value })
              }
            />
          </div>

          {/* Working Since */}
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

          {/* Credit Score */}
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

          {/* ID Proof */}
          <div className="w-full flex flex-col">
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
              <p className="text-sm text-green-600 mt-1">Uploaded: {idProofName}</p>
            )}
            <p className="text-xs text-slate-500 mt-1">
              Accepted formats: JPG, PNG, PDF. Max size 25 MB. Please upload a valid ID proof (Passport, Driving’s License, or National ID).
            </p>
          </div>
          {/* Application Fee */}
          <div className="text-sm text-slate-600">Application Fee: $35</div>

          <button
            type="submit"
            className="w-full py-3 rounded-2xl font-semibold shadow text-white"
            style={{
              background: "linear-gradient(90deg,#6b21a8,#8b5cf6)",
            }}
          >
            {paymentStatus === "processing"
              ? "Processing..."
              : "Pay Application Fee"}
          </button>

          <a
            href="#CID-LINK-HERE"
            className="block text-center text-purple-600 underline text-sm mt-2"
          >
           continue o agree privacy policy terms and condition.
          </a>
        </form>
      </div>
    </div>
  );
}
