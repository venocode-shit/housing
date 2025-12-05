"use client";
import React, { useState } from "react";

export default function Page() {
  // 1️⃣ State hooks
  const [listings, setListings] = useState([
    {
      id: 1,
      title: "Cozy 1BHK in Lisbon",
      location: "Lisbon, Portugal",
      price: "$1,200 / month",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      owner: "david martin",
      appFee: 30
    },
    {
      id: 2,
      title: "Sunny Studio in Austin",
      location: "Austin, USA",
      price: "$1,600 / month",
      image:
        "https://c.pxhere.com/photos/93/67/interior_design_interior_home_design_interior_room_house_living_home_interior-1188771.jpg!d",
      owner: "Asha",
      appFee: 45
    },
    {
      id: 3,
      title: "Modern 2BHK in Tokyo",
      location: "Tokyo, Japan",
      price: "$1,900 / month",
      image:
        "https://c.pxhere.com/photos/27/cb/real_estate_property_estate_house_apartment_real_estate_sign_finance_residence-486232.jpg!d",
      owner: "Kenji",
      appFee: 50
    },
    {
      id: 18,
      title: "Elegant Apartment in Tokyo",
      location: "Tokyo, Japan",
      price: "$2,900 / month",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      owner: "Hiroshi",
      appFee: 60
    },
    {
      id: 4,
      title: "Beachfront Apartment in Miami",
      location: "Miami, USA",
      price: "$2,500 / month",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      owner: "Sophia",
      appFee: 45
    },
    {
      id: 5,
      title: "Charming Loft in Paris",
      location: "Paris, France",
      price: "$2,000 / month",
      image: "https://c.pxhere.com/photos/e4/02/real_estate_property_estate_house_apartment_real_estate_sign_finance_residence-486233.jpg!d",
      owner: "Pierre",
      appFee: 29
    },
    {
      id: 6,
      title: "Luxury Condo in Dubai",
      location: "Dubai, UAE",
      price: "$3,500 / month",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      owner: "Ali",
      appFee: 70
    },
    {
      id: 7,
      title: "Penthouse in New York",
      location: "New York, USA",
      price: "$5,000 / month",
      image: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1200&q=80",
      owner: "John",
      appFee: 110
    },
    {
      id: 8,
      title: "Modern Apartment in Berlin",
      location: "Berlin, Germany",
      price: "$1,800 / month",
      image: "https://c.pxhere.com/photos/66/8c/brick_house_yard_porch_architecture_building_city_architecture_design_structure-979977.jpg!d",
      owner: "Hans",
      appFee: 30
    },
    {
      id: 9,
      title: "Cozy Studio in Barcelona",
      location: "Barcelona, Spain",
      price: "$1,400 / month",
      image: "https://images.pexels.com/photos/29420338/pexels-photo-29420338.jpeg",
      owner: "Maria",
      appFee: 25
    },
    {
      id: 12,
      title: "Beach House in Sydney",
      location: "Sydney, Australia",
      price: "$3,800 / month",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      owner: "Emma",
      appFee: 60
    },
    {
      id: 17,
      title: "Seaside Apartment in Nice",
      location: "Nice, France",
      price: "$2,700 / month",
      image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      owner: "Sophie",
      appFee: 75
    },
  ]);

  const [newListing, setNewListing] = useState<{
    title: string;
    location: string;
    price: string;
    image: string;
    owner: string;
    ownerAddress: string;
    ownerID: string | null; // ✅ allow string or null
    appFee: number;
  }>({
    title: "",
    location: "",
    price: "",
    image: "",
    owner: "",
    ownerAddress: "",
    ownerID: null,
    appFee: 20,
  });
  
  const [applicant, setApplicant] = useState<{
    name: string;
    email: string;
    phone: string;
    message: string;
    applicantID: string | null; // ✅ allow string or null
  }>({
    name: "",
    email: "",
    phone: "",
    message: "",
    applicantID: null,
  });
  
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [showApply, setShowApply] = useState(false);
  const [activeListing, setActiveListing] = useState<any>(null);
  
  // 2️⃣ Functions
  function handleAddListing(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { title, location, price, owner, ownerAddress, appFee } = newListing;
    if (!title || !location || !price || !owner || !ownerAddress || !appFee) {
      return alert("Please fill all required fields.");
    }
    if (appFee < 20 || appFee > 50) {
      return alert("Application fee must be between $20 and $50");
    }
    const id = Date.now();
    setListings((s) => [{ ...newListing, id }, ...s]);
    setNewListing({
      title: "",
      location: "",
      price: "",
      image: "",
      owner: "",
      ownerAddress: "",
      ownerID: null,
      appFee: 20,
    });
    setShowAdd(false);
  }
  
  function openApply(listing: any) {
    setActiveListing(listing);
    setShowApply(true);
    setPaymentStatus(null);
    setApplicant({ name: "", email: "", phone: "", message: "", applicantID: null });
  }
  
  function submitApplication(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { name, email, phone, applicantID } = applicant;
    if (!name || !email || !phone || !applicantID) {
      return alert("Please fill all required fields and upload your ID.");
    }
    setPaymentStatus("processing");
    setTimeout(() => {
      setPaymentStatus("success");
      alert("Application submitted successfully!");
      setShowApply(false);
    }, 1500);
  }
  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: "owner" | "applicant") => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string; // ✅ type cast to string
      if (type === "owner") setNewListing({ ...newListing, ownerID: result });
      else setApplicant({ ...applicant, applicantID: result });
    };
    reader.readAsDataURL(file);
  };
  
  // 3️⃣ JSX
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center text-white font-bold">GR</div>
          <div>
            <h1 className="text-lg font-semibold">EditVe</h1>
            <p className="text-xs text-slate-500">List your house • Collect application fees • Worldwide</p>
          </div>
        </div>
        <nav className="flex items-center gap-3">
          <button
            onClick={() => setShowAdd(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl font-medium shadow-sm"
            style={{ background: "linear-gradient(90deg,#6b21a8,#8b5cf6)", color: "white" }}
          >
            List your property
          </button>
          <a href="#listings" className="px-4 py-2 text-sm rounded-2xl border border-slate-200">Browse listings</a>
        </nav>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 pb-28">
        <section className="flex flex-col-reverse lg:flex-row items-center gap-8 mt-6">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-extrabold">List your house worldwide — collect application fees with ease</h2>
            <p className="mt-4 text-slate-600">Create a listing, set an application fee, and receive tenant applications from anywhere. Tenants fill details and pay the application fee to apply.</p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setShowAdd(true)}
                className="px-6 py-3 rounded-2xl font-semibold shadow"
                style={{ background: "linear-gradient(90deg,#6b21a8,#8b5cf6)", color: "white" }}
              >
                Create Listing
              </button>
              <a href="#how" className="px-6 py-3 rounded-2xl border border-slate-200">How it works</a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              alt="Home hero"
              className="w-full rounded-2xl shadow-lg object-cover h-80"
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            />
          </div>
        </section>

        {/* Listings */}
        <section id="listings" className="mt-12">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">Recent Listings</h3>
            <p className="text-sm text-slate-500">Worldwide properties — updated by owners</p>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((l) => (
              <article key={l.id} className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                <img src={l.image} alt={l.title} className="w-full h-44 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold">{l.title}</h4>
                  <p className="text-sm text-slate-500">{l.location}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-sm font-medium">{l.price}</div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openApply(l)}
                        className="px-3 py-1 rounded-lg text-sm font-semibold"
                        style={{ background: "linear-gradient(90deg,#6b21a8,#8b5cf6)", color: "white" }}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t border-slate-200 bg-white text-slate-700">
          <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">About GlobalRent</h3>
              <p className="mt-3 text-sm leading-relaxed">
                GlobalRent is a worldwide rental platform where owners can list their properties, set application fees, and tenants can apply online.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Quick Links</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="#listings" className="hover:text-purple-600">Browse Listings</a></li>
                <li><a href="#how" className="hover:text-purple-600">How it Works</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Legal</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="/privacypolicy" className="hover:text-purple-600">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-purple-600">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} EditVe — All rights reserved.
          </div>
        </footer>
      </main>

      {/* Create Listing Modal */}
      {showAdd && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setShowAdd(false)}
              className="absolute top-3 right-3 text-slate-500 font-bold text-lg"
            >
              ×
            </button>
            <h3 className="text-xl font-semibold mb-4">Create New Listing</h3>
            <form onSubmit={handleAddListing} className="space-y-3">
              <input type="text" placeholder="Title" className="w-full border rounded-lg p-2" value={newListing.title} onChange={(e) => setNewListing({ ...newListing, title: e.target.value })} />
              <input type="text" placeholder="Location" className="w-full border rounded-lg p-2" value={newListing.location} onChange={(e) => setNewListing({ ...newListing, location: e.target.value })} />
              <input type="text" placeholder="Price" className="w-full border rounded-lg p-2" value={newListing.price} onChange={(e) => setNewListing({ ...newListing, price: e.target.value })} />
              <input type="text" placeholder="Image URL" className="w-full border rounded-lg p-2" value={newListing.image} onChange={(e) => setNewListing({ ...newListing, image: e.target.value })} />
              <input type="text" placeholder="Owner Name" className="w-full border rounded-lg p-2" value={newListing.owner} onChange={(e) => setNewListing({ ...newListing, owner: e.target.value })} />
              <input type="text" placeholder="Owner Address" className="w-full border rounded-lg p-2" value={newListing.ownerAddress} onChange={(e) => setNewListing({ ...newListing, ownerAddress: e.target.value })} />
              <input type="file" accept="image/*,.pdf" onChange={(e) => handleFileUpload(e, "owner")} className="w-full border rounded-lg p-2 mt-1" />
              <input type="number" min={20} max={50} value={newListing.appFee} onChange={(e) => setNewListing({ ...newListing, appFee: Number(e.target.value) })} className="w-full border rounded-lg p-2 mt-1" />
              <button type="submit" className="w-full py-2 rounded-2xl font-semibold shadow text-white" style={{ background: "linear-gradient(90deg,#6b21a8,#8b5cf6)" }}>Add Listing</button>
            </form>
          </div>
        </div>
      )}

      {/* Apply Modal */}
      {showApply && activeListing && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative overflow-y-auto max-h-[90vh]">
            <button onClick={() => setShowApply(false)} className="absolute top-3 right-3 text-slate-500 font-bold text-lg">×</button>
            <h3 className="text-xl font-semibold mb-4">Apply for {activeListing.title}</h3>
            <form onSubmit={submitApplication} className="space-y-3">
              <input type="text" placeholder="Your Name" className="w-full border rounded-lg p-2" value={applicant.name} onChange={(e) => setApplicant({ ...applicant, name: e.target.value })} />
              <input type="email" placeholder="Email" className="w-full border rounded-lg p-2" value={applicant.email} onChange={(e) => setApplicant({ ...applicant, email: e.target.value })} />
              <input type="text" placeholder="Phone" className="w-full border rounded-lg p-2" value={applicant.phone} onChange={(e) => setApplicant({ ...applicant, phone: e.target.value })} />
              <textarea placeholder="Message (optional)" className="w-full border rounded-lg p-2" value={applicant.message} onChange={(e) => setApplicant({ ...applicant, message: e.target.value })} />
              <input type="file" accept="image/*,.pdf" onChange={(e) => handleFileUpload(e, "applicant")} className="w-full border rounded-lg p-2 mt-1" />
              <div className="text-sm text-slate-600">Application Fee: ${activeListing.appFee}</div>
              <button type="submit" className="w-full py-2 rounded-2xl font-semibold shadow text-white" style={{ background: "linear-gradient(90deg,#6b21a8,#8b5cf6)" }}>
                {paymentStatus === "processing" ? "Processing..." : paymentStatus === "success" ? "Payment Successful!" : `Pay $${activeListing.appFee} & Apply`}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}