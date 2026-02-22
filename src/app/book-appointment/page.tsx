"use client";

import Link from "next/link";
import { useState } from "react";

export default function BookAppointment() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="flex-1 w-full bg-slate-50 dark:bg-slate-900 font-display text-slate-900 dark:text-slate-100 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                <span className="material-symbols-outlined text-xl">
                  local_hospital
                </span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Chhattisgarh Hospital
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-sm font-semibold hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/doctors"
                className="text-sm font-semibold hover:text-primary transition-colors"
              >
                Doctors
              </Link>
              <Link
                href="/departments"
                className="text-sm font-semibold hover:text-primary transition-colors"
              >
                Departments
              </Link>
            </nav>
            <div className="flex gap-3">
              <Link
                href="/emergency"
                className="hidden sm:flex items-center gap-2 rounded-lg bg-red-50 dark:bg-red-900/20 px-4 py-2 text-sm font-bold text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/50 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">
                  emergency
                </span>
                Emergency
              </Link>
              <button className="md:hidden p-2 text-slate-600 dark:text-slate-300">
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Schedule Your Appointment
            </h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Book a consultation with our specialists quickly and easily.
              Experience priority care at Chhattisgarh Hospital.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700 overflow-hidden">
            {/* Steps Progress */}
            <div className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700 px-6 py-4">
              <div className="flex items-center justify-between relative max-w-2xl mx-auto">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 dark:bg-slate-700 -z-10 rounded-full"></div>
                <div
                  className={`absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary -z-10 rounded-full transition-all duration-300 ${currentStep === 1 ? "w-0" : currentStep === 2 ? "w-1/2" : "w-full"}`}
                ></div>

                {/* Step 1 */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${currentStep >= 1 ? "bg-primary text-white border-2 border-primary" : "bg-slate-200 dark:bg-slate-700 text-slate-500 border-2 border-slate-200 dark:border-slate-700"}`}
                  >
                    1
                  </div>
                  <span
                    className={`text-xs font-bold ${currentStep >= 1 ? "text-primary" : "text-slate-500 dark:text-slate-400"}`}
                  >
                    Department
                  </span>
                </div>
                {/* Step 2 */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${currentStep >= 2 ? "bg-primary text-white border-2 border-primary" : "bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-2 border-slate-200 dark:border-slate-700"}`}
                  >
                    2
                  </div>
                  <span
                    className={`text-xs font-bold ${currentStep >= 2 ? "text-primary" : "text-slate-500 dark:text-slate-400"}`}
                  >
                    Details
                  </span>
                </div>
                {/* Step 3 */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${currentStep >= 3 ? "bg-primary text-white border-2 border-primary" : "bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-2 border-slate-200 dark:border-slate-700"}`}
                  >
                    3
                  </div>
                  <span
                    className={`text-xs font-bold ${currentStep >= 3 ? "text-primary" : "text-slate-500 dark:text-slate-400"}`}
                  >
                    Confirm
                  </span>
                </div>
              </div>
            </div>

            {/* Form Area Element */}
            <div className="p-6 md:p-10">
              <form>
                {/* Step 1: Selection */}
                <div className={currentStep === 1 ? "block" : "hidden"}>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">
                      medical_services
                    </span>
                    Select Department &amp; Doctor
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Department Select */}
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                        Specialty / Department{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select className="appearance-none w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer">
                          <option value="" disabled selected>
                            Choose a department
                          </option>
                          <option value="cardiology">Cardiology</option>
                          <option value="neurology">Neurology</option>
                          <option value="orthopedics">Orthopedics</option>
                          <option value="pediatrics">Pediatrics</option>
                          <option value="general">General Medicine</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                          expand_more
                        </span>
                      </div>
                    </div>

                    {/* Doctor Select */}
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                        Preferred Doctor (Optional)
                      </label>
                      <div className="relative">
                        <select
                          className="appearance-none w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer"
                          disabled
                        >
                          <option value="" disabled selected>
                            First select a department
                          </option>
                          <option value="any">Any Available Doctor</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                          expand_more
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <span className="material-symbols-outlined text-primary">
                      event_available
                    </span>
                    Select Date &amp; Time
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Date Picker */}
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    {/* Time Slot */}
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                        Preferred Time Slot{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            name="timeSlot"
                            className="peer sr-only"
                            value="morning"
                          />
                          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 py-3 px-4 text-center hover:bg-slate-100 dark:hover:bg-slate-800 peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary transition-all">
                            <span className="font-bold text-sm block">
                              Morning
                            </span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              9AM - 1PM
                            </span>
                          </div>
                        </label>
                        <label className="cursor-pointer">
                          <input
                            type="radio"
                            name="timeSlot"
                            className="peer sr-only"
                            value="evening"
                          />
                          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 py-3 px-4 text-center hover:bg-slate-100 dark:hover:bg-slate-800 peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary transition-all">
                            <span className="font-bold text-sm block">
                              Evening
                            </span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              4PM - 8PM
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-6 border-t border-slate-100 dark:border-slate-800">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-8 rounded-xl transition-colors shadow-md shadow-primary/20 flex items-center gap-2"
                    >
                      Continue to Details
                      <span className="material-symbols-outlined text-[20px]">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>

                {/* Step 2: Patient Details */}
                <div className={currentStep === 2 ? "block" : "hidden"}>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">
                      person
                    </span>
                    Patient Information
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative flex">
                        <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 sm:text-sm font-bold">
                          +91
                        </span>
                        <input
                          type="tel"
                          placeholder="98765 43210"
                          className="flex-1 min-w-0 w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-none rounded-r-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="rahul@example.com"
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                          Age
                        </label>
                        <input
                          type="number"
                          placeholder="Years"
                          className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                          Gender
                        </label>
                        <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer">
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                      Brief description of problem / Symptoms (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Please briefly describe your medical concern..."
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="flex justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold py-3.5 px-6 rounded-xl transition-colors flex items-center gap-2 border border-slate-200 dark:border-slate-700"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        arrow_back
                      </span>
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-8 rounded-xl transition-colors shadow-md shadow-primary/20 flex items-center gap-2"
                    >
                      Review &amp; Confirm
                      <span className="material-symbols-outlined text-[20px]">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>

                {/* Step 3: Confirmation View (Placeholder for demo) */}
                <div className={currentStep === 3 ? "block" : "hidden"}>
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="material-symbols-outlined text-[40px] text-green-600 dark:text-green-400">
                        check_circle
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      Ready to Confirm
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-8">
                      Please review your details. A representative will contact
                      you shortly after submission to finalize the booking.
                    </p>

                    <div className="flex justify-center gap-4">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold py-3.5 px-6 rounded-xl transition-colors border border-slate-200 dark:border-slate-700"
                      >
                        Edit Details
                      </button>
                      <button
                        type="button"
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 px-8 rounded-xl transition-colors shadow-md shadow-green-600/20"
                      >
                        Submit Appointment Request
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Small Footer */}
      <footer className="mt-auto py-6 text-center text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
        <p>
          © 2024 Chhattisgarh Hospital. All rights reserved.{" "}
          <Link href="#" className="underline hover:text-primary ml-2">
            Privacy Policy
          </Link>
        </p>
      </footer>
    </div>
  );
}
