"use client";

import Link from "next/link";

export default function Doctors() {
  return (
    <div className="flex-1 w-full bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 flex flex-col">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                <span className="material-symbols-outlined text-xl">
                  local_hospital
                </span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Chhattisgarh Hospital
              </span>
            </Link>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/doctors"
                className="text-sm font-semibold text-primary"
              >
                Doctors
              </Link>
              <Link
                href="/departments"
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Departments
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Patient Care
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
            {/* Emergency CTA */}
            <div className="flex items-center gap-4">
              <Link
                href="/emergency"
                className="hidden md:flex items-center gap-2 rounded-full bg-red-50 dark:bg-red-900/20 px-4 py-2 text-sm font-bold text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/50 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
              >
                <span className="material-symbols-outlined text-lg">
                  emergency
                </span>
                <span>Emergency: 108</span>
              </Link>
              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 text-slate-600 dark:text-slate-300">
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full">
        {/* Hero Section */}
        <section className="relative bg-primary-light dark:bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-10 dark:opacity-5 pattern-grid-lg text-primary"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
              Meet Our Medical Experts
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
              World-class care driven by experience and empathy. Find the right
              specialist for your needs.
            </p>

            {/* Search & Filter Bar */}
            <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-2 md:p-3 flex flex-col md:flex-row gap-2 border border-slate-100 dark:border-slate-700">
              {/* Search Input */}
              <div className="flex-1 flex items-center px-4 h-12 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                <span className="material-symbols-outlined text-slate-400">
                  search
                </span>
                <input
                  className="w-full bg-transparent border-none focus:outline-none text-slate-900 dark:text-white placeholder-slate-400 text-base"
                  placeholder="Search doctors by name..."
                  type="text"
                />
              </div>
              {/* Department Filter */}
              <div className="md:w-64 flex items-center px-4 h-12 bg-slate-50 dark:bg-slate-700/50 rounded-xl relative group cursor-pointer">
                <span className="material-symbols-outlined text-primary mr-2">
                  medical_services
                </span>
                <select className="w-full bg-transparent border-none focus:outline-none text-slate-900 dark:text-white text-base cursor-pointer appearance-none pr-8">
                  <option value="">All Departments</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="neurology">Neurology</option>
                  <option value="orthopedics">Orthopedics</option>
                  <option value="pediatrics">Pediatrics</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 text-slate-400 pointer-events-none">
                  expand_more
                </span>
              </div>
              {/* Search Button */}
              <button className="h-12 px-8 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2">
                <span>Find Doctor</span>
              </button>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <button className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary transition-colors">
                Cardiology
              </button>
              <button className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary transition-colors">
                Neurology
              </button>
              <button className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary transition-colors">
                Orthopedics
              </button>
              <button className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary transition-colors">
                General Surgery
              </button>
            </div>
          </div>
        </section>

        {/* Doctors Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Doctor Card 1 */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-slate-100 dark:bg-slate-700">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  data-alt="Female doctor smiling in white coat with stethoscope"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBORAagKGTGZeBhlnCoQIXl5T-yWTwfU28yMnC9DSwjJdp21RJVDYVAF4PSJFoAlw9It5HVW5AMzTSvRdncUqEtxxjrwElPzLN6DcsOx6mJFYqZxzS6BGLXgl_Nx7Kc3mddg66UCZ9RZMsVKBxK9SMNZf9fSlqS1C__BcScpDYRQC36RrVbRstNoitVwntl8zVUDFgh0_FQ35oXmsSk2nBRaqYUHxH0y8CqCqGr9puSyqYIt9H8Oqi_PrnCNzF01kUDG4bx36q0Dm8')",
                  }}
                ></div>
                <div className="absolute top-3 right-3 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>{" "}
                  Available
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Dr. Anjali Sharma
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  Senior Cardiologist
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium">
                    <span className="material-symbols-outlined text-[14px]">
                      school
                    </span>{" "}
                    MD, DM
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium">
                    <span className="material-symbols-outlined text-[14px]">
                      work_history
                    </span>{" "}
                    15+ Yrs
                  </span>
                </div>
                <div className="space-y-1 mb-5">
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="material-symbols-outlined text-[18px]">
                      language
                    </span>
                    <span>English, Hindi</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="material-symbols-outlined text-[18px]">
                      schedule
                    </span>
                    <span>Mon - Sat: 9AM - 2PM</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-auto">
                <button className="col-span-1 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  Profile
                </button>
                <Link
                  href="/book-appointment"
                  className="col-span-1 px-4 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-colors shadow-sm shadow-primary/30 flex justify-center items-center"
                >
                  Book
                </Link>
              </div>
            </div>

            {/* Doctor Card 2 */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-slate-100 dark:bg-slate-700">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  data-alt="Male doctor portrait with blue background"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAS9gQwNPR7isgtG4pQG66yaksSZIDhNCs2buXhlWNZGuKN8B4Min8xebd0OoBdR8zKJVlfOKfXLWUhrbD0ZIIhKy6zBmgYoY4oFh-4VkyIzna5fAzVJA703qsuMH6P5YLM5bTeEH5RIOl7xVDL0kAyx4Fs37XxJ2ssRWuzwvjERETef5Osm76wFO1acvxhrckS-aFSmBIfQ7jXk44Y-kqAlYkAWUSiw4q42oF7Jv24pcBQjKqDeTpdDoxCSFJu_n_pdHU8rDt6UsM')",
                  }}
                ></div>
                <div className="absolute top-3 right-3 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold px-2 py-1 rounded-md">
                  Next: Tomorrow
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Dr. Rajesh Verma
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  Head of Neurology
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium">
                    <span className="material-symbols-outlined text-[14px]">
                      school
                    </span>{" "}
                    MBBS, MD
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium">
                    <span className="material-symbols-outlined text-[14px]">
                      work_history
                    </span>{" "}
                    22+ Yrs
                  </span>
                </div>
                <div className="space-y-1 mb-5">
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="material-symbols-outlined text-[18px]">
                      language
                    </span>
                    <span>English, Hindi, Marathi</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="material-symbols-outlined text-[18px]">
                      schedule
                    </span>
                    <span>Tue - Thu: 10AM - 4PM</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-auto">
                <button className="col-span-1 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  Profile
                </button>
                <Link
                  href="/book-appointment"
                  className="col-span-1 px-4 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-colors shadow-sm shadow-primary/30 flex justify-center items-center"
                >
                  Book
                </Link>
              </div>
            </div>

            {/* Doctor Card 3 */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-slate-100 dark:bg-slate-700">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  data-alt="Female surgeon smiling in scrubs"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA58Mlb0YaqlDknVczVDisj0Ci_BUfrFFwsC0Ks4pjjsSoanjgkzwccS8Q00YiyOQqXGWgke8P5wkjjInLPsvoyBCnXuBJ2qRWYuyzGZJSiHmQSRUaiNSBvda4YVItDkT9M_xJvXjaEk3-IYgk7dAYNMMEWqsdSLhSfrajL5HNQ_3Z3SBkPeliJu37AzJ7tq8J9iLCOxIFCIL6A8c4PhRl4esNoBIIAvra_c0wrOxXwZLDRXp03tMCn_e6qm3a8YrwkRM7_JlwGrko')",
                  }}
                ></div>
                <div className="absolute top-3 right-3 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>{" "}
                  Available
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Dr. Priya Singh
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  Orthopedic Surgeon
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium">
                    <span className="material-symbols-outlined text-[14px]">
                      school
                    </span>{" "}
                    MS (Ortho)
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium">
                    <span className="material-symbols-outlined text-[14px]">
                      work_history
                    </span>{" "}
                    10+ Yrs
                  </span>
                </div>
                <div className="space-y-1 mb-5">
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="material-symbols-outlined text-[18px]">
                      language
                    </span>
                    <span>English, Hindi</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="material-symbols-outlined text-[18px]">
                      schedule
                    </span>
                    <span>Mon - Fri: 11AM - 5PM</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-auto">
                <button className="col-span-1 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  Profile
                </button>
                <Link
                  href="/book-appointment"
                  className="col-span-1 px-4 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-colors shadow-sm shadow-primary/30 flex justify-center items-center"
                >
                  Book
                </Link>
              </div>
            </div>

            {/* Doctor Card 4 */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-slate-100 dark:bg-slate-700">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  data-alt="Male doctor holding stethoscope wearing glasses"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBay5vdeTM3S3HhEfG1pv0oNuWOtLtPwT5yEy5No2jwMDTRWezaHVGRIO4PUChPHlBlkqrUZSU8TXIdeFf21KA5r7xrt_rPYY3nVBFtSc4avc7_NgredeFlZGvrSBSsCQ_t_13PN-jMUgOS1GhV8ZGOXcCIL-oZsHcIf0HwsXDBTG_fRdCRf28h9zRHJ8PGuqDVHfZs-qzLxZX4Ly3KpFh36AdOm4VyIPZnDnuq4kWvu60U2-68w1Ac8FUIDDyAYsGk4M0ulCpjd9I')",
                  }}
                ></div>
                <div className="absolute top-3 right-3 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 text-xs font-bold px-2 py-1 rounded-md">
                  On Leave
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Dr. Amit Patel
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  Pediatrician
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium">
                    <span className="material-symbols-outlined text-[14px]">
                      school
                    </span>{" "}
                    MD (Peds)
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium">
                    <span className="material-symbols-outlined text-[14px]">
                      work_history
                    </span>{" "}
                    8+ Yrs
                  </span>
                </div>
                <div className="space-y-1 mb-5">
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="material-symbols-outlined text-[18px]">
                      language
                    </span>
                    <span>English, Gujarati</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="material-symbols-outlined text-[18px]">
                      schedule
                    </span>
                    <span>Mon - Sat: 9AM - 1PM</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-auto">
                <button className="col-span-1 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  Profile
                </button>
                <button
                  className="col-span-1 px-4 py-2.5 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500 text-sm font-bold cursor-not-allowed"
                  disabled
                >
                  Book
                </button>
              </div>
            </div>

            {/* Doctor Card 5 */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-slate-100 dark:bg-slate-700">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  data-alt="Doctor male writing on clipboard"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6qy4uoaSuVoUxD1Zj-9LyghHR1rHIGFzDMk6yyHKVpuRdusQ2rosZ4uRcEXxWwhQWmFZENXFqVfsf16fygljMGqT5cV7SjLSm6J3x4gZYGXm5V27ZlXUq1bHCOGQK4C2es-QIGI0cIyFUyuk-my7wrXjNaDxwPGUpgHJjiqEEOjWQwi_8DIAcjZQzPpswXc7TQ-_DchmyWyjUrBeJmrStmu0HLVuqdJMYCBTKs0IUgv1xx_133tfVJyaTZbOwOaaHb8zcqFxoboE')",
                  }}
                ></div>
                <div className="absolute top-3 right-3 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>{" "}
                  Available
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Dr. Vikram Malhotra
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  General Surgeon
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium">
                    <span className="material-symbols-outlined text-[14px]">
                      school
                    </span>{" "}
                    MS, FACS
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium">
                    <span className="material-symbols-outlined text-[14px]">
                      work_history
                    </span>{" "}
                    18+ Yrs
                  </span>
                </div>
                <div className="space-y-1 mb-5">
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="material-symbols-outlined text-[18px]">
                      language
                    </span>
                    <span>English, Hindi, Punjabi</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="material-symbols-outlined text-[18px]">
                      schedule
                    </span>
                    <span>Mon - Fri: 8AM - 4PM</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-auto">
                <button className="col-span-1 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  Profile
                </button>
                <Link
                  href="/book-appointment"
                  className="col-span-1 px-4 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-colors shadow-sm shadow-primary/30 flex justify-center items-center"
                >
                  Book
                </Link>
              </div>
            </div>

            {/* Doctor Card 6 */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-slate-100 dark:bg-slate-700">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  data-alt="Young female doctor outdoors"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLJ80yP4O8QtUlhvz9LDsRjMEELKUFWLNs5ib30TdZjTexY1CLauKnb8ib2JqYKsLJweNWFbu_49gni6Oz4jnVdCoslLFmMMfgzBCdHvuJh7sL9scsiiWKVHnrLKPdSRdxrjMmiWZ_vWCOdW8Dqyz2NHWCICVnDZD3A8Zrrqq7vGAcKbdAYbCttE6wGFCJ4aLMTAo55BDVESQKJgHkkrdodQ5OzkuTH4Km0WMMgtc3xeyHkaX1R2_iehKI3sLpxSw2ZuJJSjw8eGY')",
                  }}
                ></div>
                <div className="absolute top-3 right-3 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>{" "}
                  Available
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Dr. Sanya Gupta
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  Dermatologist
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium">
                    <span className="material-symbols-outlined text-[14px]">
                      school
                    </span>{" "}
                    MD, DNB
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium">
                    <span className="material-symbols-outlined text-[14px]">
                      work_history
                    </span>{" "}
                    7+ Yrs
                  </span>
                </div>
                <div className="space-y-1 mb-5">
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="material-symbols-outlined text-[18px]">
                      language
                    </span>
                    <span>English, Hindi</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="material-symbols-outlined text-[18px]">
                      schedule
                    </span>
                    <span>Mon, Wed, Fri: 10AM - 2PM</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-auto">
                <button className="col-span-1 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  Profile
                </button>
                <Link
                  href="/book-appointment"
                  className="col-span-1 px-4 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-colors shadow-sm shadow-primary/30 flex justify-center items-center"
                >
                  Book
                </Link>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center gap-2">
              <button className="flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-10 h-10 rounded-lg bg-primary text-white font-bold text-sm shadow-md shadow-primary/30">
                1
              </button>
              <button className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-bold text-sm hover:border-primary hover:text-primary transition-colors">
                2
              </button>
              <button className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-bold text-sm hover:border-primary hover:text-primary transition-colors">
                3
              </button>
              <span className="text-slate-400 px-2">...</span>
              <button className="flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </nav>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-12 px-4 w-full">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Need immediate medical attention?
              </h2>
              <p className="text-primary-light text-lg">
                Our emergency department is open 24/7 with rapid response teams.
              </p>
            </div>
            <Link
              href="/emergency"
              className="flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg"
            >
              <span className="material-symbols-outlined">call</span>
              Call Emergency: 108
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 w-full mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                  <span className="material-symbols-outlined text-xl">
                    local_hospital
                  </span>
                </div>
                <span className="text-xl font-bold text-slate-900 dark:text-white">
                  Chhattisgarh Hospital
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Providing world-class healthcare with a focus on patient safety,
                clinical excellence, and compassion.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">
                    public
                  </span>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">
                    share
                  </span>
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-6">
                Departments
              </h4>
              <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                <li>
                  <Link
                    href="/departments"
                    className="hover:text-primary transition-colors"
                  >
                    Cardiology
                  </Link>
                </li>
                <li>
                  <Link
                    href="/departments"
                    className="hover:text-primary transition-colors"
                  >
                    Neurology
                  </Link>
                </li>
                <li>
                  <Link
                    href="/departments"
                    className="hover:text-primary transition-colors"
                  >
                    Orthopedics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/departments"
                    className="hover:text-primary transition-colors"
                  >
                    Oncology
                  </Link>
                </li>
                <li>
                  <Link
                    href="/departments"
                    className="hover:text-primary transition-colors"
                  >
                    Pediatrics
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                <li>
                  <Link
                    href="/doctors"
                    className="hover:text-primary transition-colors"
                  >
                    Find a Doctor
                  </Link>
                </li>
                <li>
                  <Link
                    href="/book-appointment"
                    className="hover:text-primary transition-colors"
                  >
                    Book Appointment
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    Patient Portal
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    Insurance Accepted
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-6">
                Contact Us
              </h4>
              <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-0.5">
                    location_on
                  </span>
                  <span>
                    Main Campus, Medical Square,
                    <br />
                    Raipur, Chhattisgarh 492001
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    call
                  </span>
                  <span>+91 771 123 4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    mail
                  </span>
                  <span>info@cghospital.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © 2023 Chhattisgarh Hospital. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-400">
              <Link href="#" className="hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
