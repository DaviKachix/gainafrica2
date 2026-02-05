"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { registerUser } from "@/convex/register"; 
import { convex } from "@/convex/client";


// Professions relative to Adventist Ministry
const professionsList = [
  "Pastor / Minister",
  "Chaplain",
  "Evangelist / Bible Worker",
  "Theology Lecturer / Religious Educator",

  "Teacher / Educator",
  "School Administrator",

  "Youth Leader / Youth Ministries Coordinator",
  "Children’s Ministries Leader",

  "Music Minister / Worship Leader",
  "Choir Director / Musician",

  "Media & Communications Specialist",
  "Journalist / Content Creator",
  "Graphic Designer / Multimedia Specialist",

  "Health Worker (Doctor / Nurse / Clinical Officer)",
  "Public Health Professional",

  "IT Specialist / Software Developer",
  "Data Analyst / ICT Officer",

  "Administrative Officer",
  "Finance / Accounts Officer",
  "Human Resource Officer",

  "Project Manager / Program Officer",
  "NGO / Development Practitioner",

  "Student",
  "Volunteer / Mission Worker",

  "Entrepreneur / Business Owner",
  "Consultant",

  "Other",
];


// African countries dropdown
const africanCountries = [
  "Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi",
  "South Africa", "Nigeria", "Ghana", "Ethiopia", "Somalia", "Egypt", "Morocco", "Other"
];

export default function RegisterPage() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    nationality: "",
    africanCountry: "",
    nonAfricanCountry: "",
    profession: "",
    organization: "",
    phone: "",
    foodPreference: "",
    ageGroup: "",
    otherInfo: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Step validation
  const validateStep = () => {
    const newErrors: Record<string, string> = {};
    if (step === 1 && !formData.email) newErrors.email = "Email is required.";

    if (step === 2) {
      if (!formData.firstName) newErrors.firstName = "First name is required.";
      if (!formData.lastName) newErrors.lastName = "Last name is required.";
      if (!formData.gender) newErrors.gender = "Gender is required.";
      if (!formData.nationality) newErrors.nationality = "Nationality is required.";
      if (formData.nationality === "africa" && !formData.africanCountry) newErrors.africanCountry = "Country is required.";
      if (formData.nationality === "non-africa" && !formData.nonAfricanCountry) newErrors.nonAfricanCountry = "Country is required.";
    }

    if (step === 3) {
      if (!formData.phone) newErrors.phone = "Phone number is required.";
      if (!formData.profession) newErrors.profession = "Profession is required.";
      if (!formData.organization) newErrors.organization = "Organization is required.";
    }

    if (step === 4) {
      if (!formData.foodPreference) newErrors.foodPreference = "Food preference is required.";
      if (!formData.ageGroup) newErrors.ageGroup = "Age group is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

 const submitForm = async () => {
  // Validate the current step
  if (!validateStep()) return;

  setLoading(true);

  try {
    // Call the remote Convex mutation via client
    await convex.mutation("registerUser", {
      email: formData.email,
      firstName: formData.firstName,
      middleName: formData.middleName,
      lastName: formData.lastName,
      gender: formData.gender,
      nationality: formData.nationality,
      africanCountry: formData.nationality === "africa" ? formData.africanCountry : undefined,
      nonAfricanCountry: formData.nationality === "non-africa" ? formData.nonAfricanCountry : undefined,
      profession: formData.profession,
      organization: formData.organization,
      phone: formData.phone,
      foodPreference: formData.foodPreference,
      ageGroup: formData.ageGroup,
      otherInfo: formData.otherInfo || undefined,
    });

    // Redirect to thank-you page
    router.push("/thank-you");
  } catch (error: any) {
    console.error("Convex submission error:", error);
    alert(error.message || "Submission failed. Please try again.");
    setLoading(false);
  }
};




  const stepVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <SiteHeader />

      <main className="flex-1 pt-20 pb-16">
        <section className="py-16 bg-white shadow-sm">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Register for GAiN Africa</h1>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
              Fill in your details step by step to secure your spot at the GAiN Africa conference.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 bg-white shadow-xl rounded-3xl p-8">

            {/* Progress Bar */}
            <div className="flex justify-between mb-8">
              {[1, 2, 3, 4].map(s => (
                <div key={s} className={`flex-1 h-2 rounded-full mx-1 transition-all ${step >= s ? "bg-yellow-500" : "bg-gray-300"}`} />
              ))}
            </div>

            <AnimatePresence exitBeforeEnter>
              {/* Step 1: Email */}
              {step === 1 && (
                <motion.div key="step1" variants={stepVariants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.4 }} className="flex flex-col gap-4">
                  <label className="flex flex-col">
                    <span className="text-gray-700 font-semibold">Email Address *</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`mt-2 p-4 rounded-xl border ${errors.email ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm text-gray-900`}
                    />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                  </label>
                </motion.div>
              )}

              {/* Step 2: Personal Info */}
{step === 2 && (
  <motion.div
    key="step2"
    variants={stepVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    transition={{ duration: 0.4 }}
    className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
  >
    {/* First Name */}
    <label className="flex flex-col col-span-1">
      <span className="text-gray-700 font-semibold">First Name *</span>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        className={`mt-2 p-3 md:p-4 rounded-xl border ${
          errors.firstName ? "border-red-500" : "border-gray-300"
        } focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm text-gray-900`}
      />
      {errors.firstName && (
        <span className="mt-1 text-red-500 text-sm">{errors.firstName}</span>
      )}
    </label>

    {/* Middle Name */}
    <label className="flex flex-col col-span-1">
      <span className="text-gray-700 font-semibold">Middle Name</span>
      <input
        type="text"
        name="middleName"
        value={formData.middleName}
        onChange={handleChange}
        className="mt-2 p-3 md:p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm text-gray-900"
      />
    </label>

    {/* Last Name */}
    <label className="flex flex-col col-span-1">
      <span className="text-gray-700 font-semibold">Last Name *</span>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        className={`mt-2 p-3 md:p-4 rounded-xl border ${
          errors.lastName ? "border-red-500" : "border-gray-300"
        } focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm text-gray-900`}
      />
      {errors.lastName && (
        <span className="mt-1 text-red-500 text-sm">{errors.lastName}</span>
      )}
    </label>

    {/* Gender */}
    <label className="flex flex-col col-span-1">
      <span className="text-gray-700 font-semibold">Gender *</span>
      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        className={`mt-2 p-3 md:p-4 rounded-xl border ${
          errors.gender ? "border-red-500" : "border-gray-300"
        } focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm text-gray-900`}
      >
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      {errors.gender && (
        <span className="mt-1 text-red-500 text-sm">{errors.gender}</span>
      )}
    </label>

    {/* Nationality */}
    <label className="flex flex-col col-span-1 md:col-span-2">
      <span className="text-gray-700 font-semibold">Nationality *</span>
      <select
        name="nationality"
        value={formData.nationality}
        onChange={handleChange}
        className={`mt-2 p-3 md:p-4 rounded-xl border ${
          errors.nationality ? "border-red-500" : "border-gray-300"
        } focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm text-gray-900`}
      >
        <option value="">Select</option>
        <option value="africa">African</option>
        <option value="non-africa">Non-African</option>
      </select>
      {errors.nationality && (
        <span className="mt-1 text-red-500 text-sm">{errors.nationality}</span>
      )}
    </label>

    {/* African Country */}
    {formData.nationality === "africa" && (
      <label className="flex flex-col col-span-1 md:col-span-2">
        <span className="text-gray-700 font-semibold">Select Your Country *</span>
        <select
          name="africanCountry"
          value={formData.africanCountry}
          onChange={handleChange}
          className={`mt-2 p-3 md:p-4 rounded-xl border ${
            errors.africanCountry ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm text-gray-900`}
        >
          <option value="">Select Country</option>
          {africanCountries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        {errors.africanCountry && (
          <span className="mt-1 text-red-500 text-sm">
            {errors.africanCountry}
          </span>
        )}
      </label>
    )}

    {/* Non-African Country */}
    {formData.nationality === "non-africa" && (
      <label className="flex flex-col col-span-1 md:col-span-2">
        <span className="text-gray-700 font-semibold">Enter Your Country *</span>
        <input
          type="text"
          name="nonAfricanCountry"
          value={formData.nonAfricanCountry}
          onChange={handleChange}
          placeholder="Your country"
          className={`mt-2 p-3 md:p-4 rounded-xl border ${
            errors.nonAfricanCountry ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm text-gray-900`}
        />
        {errors.nonAfricanCountry && (
          <span className="mt-1 text-red-500 text-sm">
            {errors.nonAfricanCountry}
          </span>
        )}
      </label>
    )}
  </motion.div>
)}

              {/* Step 3: Contact & Profession */}
              {step === 3 && (
                <motion.div key="step3" variants={stepVariants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.4 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex flex-col">
                    <span className="text-gray-700 font-semibold">Phone *</span>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      className={`mt-2 p-4 rounded-xl border ${errors.phone ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm text-gray-900`}
                    />
                    {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
                  </label>

                  <label className="flex flex-col">
                    <span className="text-gray-700 font-semibold">Profession *</span>
                    <select name="profession" value={formData.profession} onChange={handleChange}
                      className={`mt-2 p-4 rounded-xl border ${errors.profession ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm text-gray-900`}
                    >
                      <option value="">Select Profession</option>
                      {professionsList.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                    {errors.profession && <span className="text-red-500 text-sm">{errors.profession}</span>}
                  </label>

                  <label className="flex flex-col">
                    <span className="text-gray-700 font-semibold">Organization *</span>
                    <input type="text" name="organization" value={formData.organization} onChange={handleChange}
                      className={`mt-2 p-4 rounded-xl border ${errors.organization ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm text-gray-900`}
                    />
                    {errors.organization && <span className="text-red-500 text-sm">{errors.organization}</span>}
                  </label>
                </motion.div>
              )}

              {/* Step 4: Preferences */}
              {step === 4 && (
                <motion.div key="step4" variants={stepVariants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.4 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex flex-col">
                    <span className="text-gray-700 font-semibold">Food Preference *</span>
                    <select name="foodPreference" value={formData.foodPreference} onChange={handleChange}
                      className={`mt-2 p-4 rounded-xl border ${errors.foodPreference ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm text-gray-900`}
                    >
                      <option value="">Select</option>
                      <option value="vegetarian">Vegetarian</option>
                      <option value="non-vegetarian">Non-Vegetarian</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.foodPreference && <span className="text-red-500 text-sm">{errors.foodPreference}</span>}
                  </label>

                  <label className="flex flex-col">
                    <span className="text-gray-700 font-semibold">Age Group *</span>
                    <select name="ageGroup" value={formData.ageGroup} onChange={handleChange}
                      className={`mt-2 p-4 rounded-xl border ${errors.ageGroup ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm text-gray-900`}
                    >
                      <option value="">Select</option>
                      <option value="17-25">17-25</option>
                      <option value="25-35">25-35</option>
                      <option value="35+">35+</option>
                    </select>
                    {errors.ageGroup && <span className="text-red-500 text-sm">{errors.ageGroup}</span>}
                  </label>

                  <label className="flex flex-col col-span-2">
                    <span className="text-gray-700 font-semibold">Other Information</span>
                    <input type="text" name="otherInfo" value={formData.otherInfo} onChange={handleChange} placeholder="Any special needs or info for the event"
                      className="mt-2 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm text-gray-900"
                    />
                  </label>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between items-center">
              {step > 1 ? (
                <Button onClick={prevStep} className="bg-gray-200 text-gray-800 hover:bg-gray-300 transition rounded-xl px-6 py-3">Back</Button>
              ) : <div />}

              <Button
                onClick={step < 4 ? nextStep : submitForm}
                className={`rounded-xl px-6 py-3 transition font-semibold ${step < 4 ? "bg-yellow-500 text-black hover:bg-yellow-600" : "bg-green-500 text-white hover:bg-green-600"}`}
                disabled={loading}
              >
                {loading ? "Submitting..." : step < 4 ? "Next" : "Submit"}
              </Button>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
