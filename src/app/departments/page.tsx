"use client";

import Link from "next/link";

export default function Departments() {
  return (
    <div className="flex-1 w-full flex flex-col items-center">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-4 max-w-[1280px] mx-auto w-full">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-3 text-slate-900 dark:text-slate-100 group"
            >
              <div className="size-8 text-primary">
                <svg
                  className="w-full h-full transition-transform group-hover:scale-110"
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold leading-tight tracking-tight">
                Chhattisgarh Hospital
              </h2>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
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
                className="text-sm font-semibold text-primary"
              >
                Departments
              </Link>
              <Link
                href="#"
                className="text-sm font-semibold hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex w-64 items-center rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all shadow-sm">
              <span className="material-symbols-outlined text-slate-400 text-[20px]">
                search
              </span>
              <input
                className="w-full bg-transparent border-none text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none p-0 pl-2"
                placeholder="Search departments..."
              />
            </div>
            <Link
              href="/emergency"
              className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white shadow-md shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">
                call
              </span>
              <span className="hidden sm:inline">Emergency: 108</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col gap-12">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-2xl bg-primary text-white shadow-xl shadow-primary/10 w-full">
          {/* Background Pattern/Image Overlay */}
          <div
            className="absolute inset-0 opacity-20 mix-blend-overlay"
            data-alt="Abstract medical background with soft blue gradients"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuASE3-3Ineb7UFxQ3lYJm9oBF37Y8GDMuoUK2kSJfFBI9LXd5buiW7tDYMwC6OsXn6ipEnFyLpe3Mbi6s8JhKjfuPVxyftGP64HNlaUjthoRzHnsVR0jNuk03duB-Scfx7fh1ePXAbMfOMwl8UiCONJDTcbICGY8VxvHJtxlWqsNkMO9nntE7enW_brpD24VcyEveo2VNYG7clpu1fModh5gvTgPVBWdrhivFH90Z52fwPST7zM_FzSXMPKIBZQcefhPuZkkfiUBOo')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60"></div>
          <div className="relative z-10 flex flex-col items-center justify-center py-16 px-4 text-center md:py-24">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              Centers of Clinical Excellence
            </h1>
            <p className="max-w-2xl text-lg font-medium text-white/90 md:text-xl">
              Providing world-class healthcare across a wide range of
              specialties. Our expert teams are dedicated to your well-being.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/doctors"
                className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-primary shadow-lg hover:bg-slate-50 transition-all active:scale-95"
              >
                Find a Doctor
              </Link>
              <Link
                href="/book-appointment"
                className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm hover:bg-white/20 transition-all active:scale-95"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </section>

        {/* Departments Grid */}
        <section className="w-full">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Our Specialized Departments
              </h2>
              <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-xl">
                Comprehensive care delivered by leading specialists using
                state-of-the-art technology.
              </p>
            </div>
            <Link
              href="#"
              className="group flex items-center gap-1 text-sm font-bold text-primary hover:text-primary/80"
            >
              View all services
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Cardiology Card */}
            <div className="group relative flex flex-col rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <div className="mb-4 flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[32px]">
                  cardiology
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-100">
                Cardiology
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                Advanced heart care including diagnostics, interventional
                cardiology, and comprehensive rehabilitation programs for heart
                health.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/80"
              >
                View Details
                <span className="material-symbols-outlined ml-1 text-[16px]">
                  arrow_outward
                </span>
              </Link>
            </div>
            {/* Neurology Card */}
            <div className="group relative flex flex-col rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <div className="mb-4 flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[32px]">
                  neurology
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-100">
                Neurology
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                Expert diagnosis and treatment for disorders of the brain,
                spine, and nervous system using cutting-edge neuroimaging.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/80"
              >
                View Details
                <span className="material-symbols-outlined ml-1 text-[16px]">
                  arrow_outward
                </span>
              </Link>
            </div>
            {/* Orthopedics Card */}
            <div className="group relative flex flex-col rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <div className="mb-4 flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[32px]">
                  orthopedics
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-100">
                Orthopedics
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                Specialized care for bones and joints, including joint
                replacement surgery, sports medicine, and trauma recovery.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/80"
              >
                View Details
                <span className="material-symbols-outlined ml-1 text-[16px]">
                  arrow_outward
                </span>
              </Link>
            </div>
            {/* Pediatrics Card */}
            <div className="group relative flex flex-col rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <div className="mb-4 flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[32px]">
                  child_care
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-100">
                Pediatrics
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                Comprehensive medical care for infants, children, and
                adolescents, delivered with compassion and family-centered
                support.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/80"
              >
                View Details
                <span className="material-symbols-outlined ml-1 text-[16px]">
                  arrow_outward
                </span>
              </Link>
            </div>
            {/* General Medicine Card */}
            <div className="group relative flex flex-col rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <div className="mb-4 flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[32px]">
                  stethoscope
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-100">
                General Medicine
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                Holistic health management, preventive care, and diagnosis of
                acute and chronic illnesses for adult patients.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/80"
              >
                View Details
                <span className="material-symbols-outlined ml-1 text-[16px]">
                  arrow_outward
                </span>
              </Link>
            </div>
            {/* ICU & Emergency Card (Highlighted) */}
            <div className="group relative flex flex-col rounded-xl bg-slate-900 text-white border border-slate-800 p-6 shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 overflow-hidden">
              {/* Gradient accent */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl"></div>
              <div className="mb-4 flex size-14 items-center justify-center rounded-lg bg-red-600 text-white shadow-lg shadow-red-900/50">
                <span className="material-symbols-outlined text-[32px] animate-pulse">
                  emergency
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white relative z-10">
                ICU &amp; Emergency
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-300 relative z-10">
                24/7 critical care unit equipped with advanced life support
                systems and rapid response teams for immediate assistance.
              </p>
              <Link
                href="/emergency"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary/90 transition-colors relative z-10 w-full"
              >
                <span className="material-symbols-outlined mr-2 text-[18px]">
                  call
                </span>
                Contact Emergency
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-8 overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 w-full">
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary w-fit">
                <span className="material-symbols-outlined mr-1 text-[16px]">
                  verified_user
                </span>
                Trusted Healthcare
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Need Immediate Assistance?
              </h2>
              <p className="mb-8 text-slate-500 dark:text-slate-400">
                Our emergency department is open 24/7 to handle critical
                situations. Don&apos;t hesitate to reach out if you or a loved
                one needs urgent care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/emergency"
                  className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white shadow-md shadow-primary/20 hover:bg-primary/90 transition-all"
                >
                  <span className="material-symbols-outlined">call</span>
                  Call Ambulance
                </Link>
                <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent px-6 py-3 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                  View Location
                </button>
              </div>
            </div>
            <div className="relative min-h-[300px] bg-slate-100 dark:bg-slate-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Modern hospital building exterior with emergency entrance"
                className="absolute inset-0 h-full w-full object-cover"
                data-alt="Hospital exterior view showing emergency entrance"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3Cfq_BSBVKAMOvmjGFU3LOfnmJpf624MOg2ASyrB4P4XcBuguR3D4YzNqVj1LNDP4v903tRgdWD31PQ-I8FHc03OETJQ-AobDRLW9oR8_2e3MO1SLFFLcakDuckWsUUAL_qyNFXRiGkmUQbGbtJqmGPSnPiRmRze0XTUxNxUvOWgDl1AiuFYglntSJ3YQRL0LF-tZZvGHTB8sfKA7OaebQsNqnyJz4vOzA4kOhzdasBg6dMGE8exnk2KWGxT2UMsiMrEVnV72TmQ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r md:from-white/10 md:to-transparent dark:md:from-slate-800/20"></div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-12 w-full">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="size-6 text-primary">
                <svg
                  className="w-full h-full"
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Chhattisgarh Hospital
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © 2024 Chhattisgarh Hospital. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-slate-400 hover:text-primary transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-primary transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
