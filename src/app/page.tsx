"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 flex flex-col w-full bg-white shadow-sm border-b border-slate-200">
        {/* Top Bar for Contact Info (Hidden on mobile) */}
        <div className="bg-primary text-white py-2 px-4 md:px-10 hidden md:flex justify-between text-sm font-medium">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">
                location_on
              </span>{" "}
              Raipur, Chhattisgarh, India
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">
                mail
              </span>{" "}
              info@cghospital.com
            </span>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-slate-200">
              Patient Portal
            </Link>
            <Link href="#" className="hover:text-slate-200">
              Careers
            </Link>
          </div>
        </div>
        {/* Main Nav */}
        <div className="flex items-center justify-between px-4 py-3 md:px-10 md:py-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-3xl">
                local_hospital
              </span>
            </div>
            <h1 className="text-slate-900 text-xl md:text-2xl font-bold tracking-tight">
              Chhattisgarh Hospital
            </h1>
          </div>
          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-slate-700 hover:text-primary font-bold text-sm transition-colors"
            >
              Home
            </Link>
            <Link
              href="/departments"
              className="text-slate-700 hover:text-primary font-medium text-sm transition-colors"
            >
              Departments
            </Link>
            <Link
              href="/doctors"
              className="text-slate-700 hover:text-primary font-medium text-sm transition-colors"
            >
              Doctors
            </Link>
            <Link
              href="#"
              className="text-slate-700 hover:text-primary font-medium text-sm transition-colors"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-slate-700 hover:text-primary font-medium text-sm transition-colors"
            >
              Contact
            </Link>
          </nav>
          {/* CTA Buttons */}
          <div className="hidden md:flex gap-3">
            <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors text-sm font-bold border border-slate-200">
              <span className="material-symbols-outlined text-[20px] mr-2 text-primary">
                call
              </span>
              <span className="truncate">+91 12345 67890</span>
            </button>
            <Link
              href="/emergency"
              className="flex items-center justify-center rounded-lg h-10 px-6 bg-secondary text-white hover:bg-red-700 transition-colors shadow-md shadow-red-200 text-sm font-bold"
            >
              <span className="truncate">Emergency</span>
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-slate-700">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <div className="relative w-full">
          {/* Hero Image & Content */}
          <div className="relative h-[560px] w-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Modern hospital hallway with medical staff walking"
              className="absolute inset-0 h-full w-full object-cover"
              data-alt="Modern hospital hallway with medical staff walking"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ_hfYnGcghl3MC_Qjqhr0Jnt2cR1G_u6TNFAyqUWsjHsSF7fyz8uRAQNeIZUGS7gbaQeJIukHkP7gF9Y986AhbO7GUa3NHT7Xf14cGfihv_KQy3-2kfYyViS-1Dha4NeCVFXFCcc9RztjYwh-bjqMXGIXEcKDFzZsvousb8eiAV03A5sw_i188UWwA1shms9r7entfelNnfUl7n_ktROkDO9TMDjeZmxUokq9pB0unsiVjNUaC0zTmWiHV1DErjEAfDm40a8hA4c"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent"></div>
            <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 md:px-10">
              <div className="max-w-2xl space-y-6">
                <div className="inline-flex items-center rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-100 backdrop-blur-sm border border-blue-400/30">
                  <span className="mr-2 h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>{" "}
                  Open 24/7 for Emergencies
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                  World-Class Healthcare <br />
                  <span className="text-blue-400">in Chhattisgarh</span>
                </h1>
                <p className="text-lg text-slate-100/90 leading-relaxed max-w-xl">
                  Advanced technology meets compassionate care. Experience
                  medical excellence you can trust with our team of specialists.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/book-appointment"
                    className="h-12 px-8 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2"
                  >
                    Book Appointment
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </Link>
                  <Link
                    href="/departments"
                    className="h-12 px-8 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold backdrop-blur-md border border-white/20 transition-all flex items-center justify-center gap-2"
                  >
                    View Departments
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Quick Action Cards (Overlapping) */}
          <div className="relative z-20 mx-auto max-w-7xl px-4 md:px-10 -mt-16 md:-mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 shadow-xl rounded-xl bg-white p-2 border border-slate-100">
              {/* Card 1 */}
              <Link
                href="/emergency"
                className="group flex flex-col gap-3 rounded-lg bg-secondary/5 hover:bg-secondary/10 p-6 transition-all border border-transparent hover:border-secondary/20 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="size-10 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg shadow-red-200">
                    <span className="material-symbols-outlined">ambulance</span>
                  </div>
                  <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                    arrow_forward
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Emergency
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    24/7 Trauma Care &amp; Ambulance Services
                  </p>
                </div>
              </Link>
              {/* Card 2 */}
              <Link
                href="/book-appointment"
                className="group flex flex-col gap-3 rounded-lg bg-primary/5 hover:bg-primary/10 p-6 transition-all border border-transparent hover:border-primary/20 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="size-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-blue-200">
                    <span className="material-symbols-outlined">
                      calendar_month
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    arrow_forward
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Appointments
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Schedule a visit online instantly
                  </p>
                </div>
              </Link>
              {/* Card 3 */}
              <Link
                href="/doctors"
                className="group flex flex-col gap-3 rounded-lg bg-sky-50 hover:bg-sky-100 p-6 transition-all border border-transparent hover:border-sky-200 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="size-10 rounded-full bg-sky-600 text-white flex items-center justify-center shadow-lg shadow-sky-200">
                    <span className="material-symbols-outlined">
                      stethoscope
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-sky-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    arrow_forward
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Find Doctor
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Browse our specialized experts
                  </p>
                </div>
              </Link>
              {/* Card 4 */}
              <Link
                href="/departments"
                className="group flex flex-col gap-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 p-6 transition-all border border-transparent hover:border-emerald-200 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="size-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-200">
                    <span className="material-symbols-outlined">
                      health_and_safety
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    arrow_forward
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Health Plans
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Preventive checkups for family
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Departments Section */}
        <section className="py-20 px-4 md:px-10 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="space-y-2">
                <h2 className="text-slate-900 text-3xl md:text-4xl font-black tracking-tight">
                  Our Centers of Excellence
                </h2>
                <p className="text-slate-600 max-w-xl">
                  Combining the best specialists and equipment to provide you
                  with nothing short of the best in healthcare.
                </p>
              </div>
              <Link
                href="/departments"
                className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all"
              >
                View All Departments{" "}
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Dept Card */}
              <div className="flex items-start gap-4 p-6 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 hover:border-primary/20 transition-all duration-300 group">
                <div className="flex-shrink-0 size-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    cardiology
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Cardiology
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    Comprehensive heart care ranging from prevention to advanced
                    surgical interventions.
                  </p>
                  <span className="text-primary text-xs font-bold uppercase tracking-wider group-hover:underline">
                    Learn more
                  </span>
                </div>
              </div>
              {/* Dept Card */}
              <div className="flex items-start gap-4 p-6 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 hover:border-primary/20 transition-all duration-300 group">
                <div className="flex-shrink-0 size-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    neurology
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Neurology
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    Advanced diagnosis and treatment for disorders affecting the
                    brain, spine, and nerves.
                  </p>
                  <span className="text-primary text-xs font-bold uppercase tracking-wider group-hover:underline">
                    Learn more
                  </span>
                </div>
              </div>
              {/* Dept Card */}
              <div className="flex items-start gap-4 p-6 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 hover:border-primary/20 transition-all duration-300 group">
                <div className="flex-shrink-0 size-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    orthopedics
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Orthopedics
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    Expert care for bones, joints, and muscles, including joint
                    replacement surgeries.
                  </p>
                  <span className="text-primary text-xs font-bold uppercase tracking-wider group-hover:underline">
                    Learn more
                  </span>
                </div>
              </div>
              {/* Dept Card */}
              <div className="flex items-start gap-4 p-6 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 hover:border-primary/20 transition-all duration-300 group">
                <div className="flex-shrink-0 size-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    pediatrics
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Pediatrics
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    Compassionate child care from newborns to adolescents in a
                    child-friendly environment.
                  </p>
                  <span className="text-primary text-xs font-bold uppercase tracking-wider group-hover:underline">
                    Learn more
                  </span>
                </div>
              </div>
              {/* Dept Card */}
              <div className="flex items-start gap-4 p-6 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 hover:border-primary/20 transition-all duration-300 group">
                <div className="flex-shrink-0 size-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    oncology
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Oncology
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    Holistic cancer care with state-of-the-art chemotherapy and
                    radiation facilities.
                  </p>
                  <span className="text-primary text-xs font-bold uppercase tracking-wider group-hover:underline">
                    Learn more
                  </span>
                </div>
              </div>
              {/* Dept Card */}
              <div className="flex items-start gap-4 p-6 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 hover:border-primary/20 transition-all duration-300 group">
                <div className="flex-shrink-0 size-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    female
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Gynecology
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    Dedicated women&apos;s health services, maternity care, and
                    fertility treatments.
                  </p>
                  <span className="text-primary text-xs font-bold uppercase tracking-wider group-hover:underline">
                    Learn more
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Experts */}
        <section className="py-20 px-4 md:px-10 bg-slate-50 border-t border-slate-200">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">
                Our Team
              </span>
              <h2 className="text-slate-900 text-3xl md:text-4xl font-black tracking-tight mb-4">
                Meet Our Top Specialists
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Our doctors are leaders in their fields, bringing years of
                experience and compassionate care to every patient interaction.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Doctor 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Portrait of Dr. Rajesh Sharma"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    data-alt="Male doctor with stethoscope smiling"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9RHx_SRlfvEsW7aN2bS97zu840GlnO5ABc1MpKGqQLTC7n6mCPVEy-N4hIje8mxhlWE02y0uuYW21unii8r7_exfyMy6a0VVCx9RKqFSCCLKe0UbF8M5xkgLYKbN0WTVivaWZzQ-moZI0l37xAWUeX220XwYtriu8izxGzNFyo6BVOjd38mppQZzguL_YQi7bx1qhS0KR174FWLThqs4l5AtfrKiLJY-6lIyC6mJQIC2LMyplwr7WL3NtroEAPHBcsMIhprLBuSE"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                    <div className="flex gap-2 justify-center">
                      <button className="size-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:border-transparent transition-colors">
                        <span className="material-symbols-outlined text-sm">
                          calendar_add_on
                        </span>
                      </button>
                      <button className="size-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:border-transparent transition-colors">
                        <span className="material-symbols-outlined text-sm">
                          share
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-slate-900 text-lg">
                    Dr. Rajesh Sharma
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">
                    Senior Cardiologist
                  </p>
                  <p className="text-slate-500 text-xs mb-4 line-clamp-2">
                    MBBS, MD, DM (Cardiology) with 15+ years of experience in
                    interventional cardiology.
                  </p>
                  <Link
                    href="/doctors"
                    className="inline-block text-sm font-bold text-slate-900 hover:text-primary transition-colors"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
              {/* Doctor 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Portrait of Dr. Anjali Verma"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    data-alt="Female doctor smiling wearing lab coat"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_hKUN80YkO0ly9jKzXfO9TA3Ca7SjJQXYwLmf0544h7UICXn6vEbz4clfxyASVzrrhRRUcVY3ZEbWah0k4EheSF285jGwtr8St_seSCbKWIE59thYAPOFW6GZINrP5eh3Ln-ccmuvEflhQQGr8DiXU8jqGF2W6anFoEayyMYrnK9feszbp1s9YRzuL8XsGBXIL01Jibw6IaTBGcf0Sp2ZaUQR7fE0V8veGbv0QTCGrSHTntpffONRrMmruK-qOPldzR5HuOHmqb0"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                    <div className="flex gap-2 justify-center">
                      <button className="size-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:border-transparent transition-colors">
                        <span className="material-symbols-outlined text-sm">
                          calendar_add_on
                        </span>
                      </button>
                      <button className="size-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:border-transparent transition-colors">
                        <span className="material-symbols-outlined text-sm">
                          share
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-slate-900 text-lg">
                    Dr. Anjali Verma
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">
                    Neurologist
                  </p>
                  <p className="text-slate-500 text-xs mb-4 line-clamp-2">
                    Expert in stroke management and neuro-rehabilitation with
                    international training.
                  </p>
                  <Link
                    href="/doctors"
                    className="inline-block text-sm font-bold text-slate-900 hover:text-primary transition-colors"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
              {/* Doctor 3 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Portrait of Dr. Vikram Singh"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    data-alt="Male doctor with glasses smiling"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwNSpusb_djsXhJZ83iaZpbKzdnMjwjQI1cZScXaJMut2qZGF52ifbq9dlhOKG7mnBKHksQl6Zdt-Rsvlx5NPCoO1fPMh3byLjITm3uJgN-eoM1A1Jxq3f6TXZrhUE9-cbtqe20sXNJpSgx0h236pfpDTLJnQSd2PjGK-EoaHc8eDiTVvLAun8MibkBrYnetfvYoJuGbGUeRi0RUTUsjxcyC5PCBIfvcgV2X8kzEP30iZi7eX_Hs67GloQ2_wyH3zTkhizab-Jpm4"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                    <div className="flex gap-2 justify-center">
                      <button className="size-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:border-transparent transition-colors">
                        <span className="material-symbols-outlined text-sm">
                          calendar_add_on
                        </span>
                      </button>
                      <button className="size-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:border-transparent transition-colors">
                        <span className="material-symbols-outlined text-sm">
                          share
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-slate-900 text-lg">
                    Dr. Vikram Singh
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">
                    Orthopedic Surgeon
                  </p>
                  <p className="text-slate-500 text-xs mb-4 line-clamp-2">
                    Specializing in joint replacement and sports injuries.
                    Pioneer in robotic surgery.
                  </p>
                  <Link
                    href="/doctors"
                    className="inline-block text-sm font-bold text-slate-900 hover:text-primary transition-colors"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
              {/* Doctor 4 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Portrait of Dr. Meera Gupta"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    data-alt="Female doctor writing on clipboard"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKCIBhZ1TUxVYL94SELe4SgX9bcIrVZa5eYrqx880ltGPtAcnDDnBPtHfeJkZnFwuQiFhcNbZX9TycBa17Us-YYTC47cqqNWoJQUpfKdCKAG1hR-XKvIDfbDuTihGZ-5h0pu5cRCt5RuiWhDSidlwK-zVW7JXNKyIVfOjl9t1UgO_pd1B0Mn0bAIbWIgBqw5iYTr5FjMtpOu7uDgwx77I-Yyi61KnfOWVMQIW6b9QOCvnh1m76W8_zExlxqGUA6al6k2QhfBlyMk8"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                    <div className="flex gap-2 justify-center">
                      <button className="size-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:border-transparent transition-colors">
                        <span className="material-symbols-outlined text-sm">
                          calendar_add_on
                        </span>
                      </button>
                      <button className="size-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:border-transparent transition-colors">
                        <span className="material-symbols-outlined text-sm">
                          share
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-slate-900 text-lg">
                    Dr. Meera Gupta
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">
                    Pediatrician
                  </p>
                  <p className="text-slate-500 text-xs mb-4 line-clamp-2">
                    Dedicated to child health and wellness. Focused on
                    preventive care and nutrition.
                  </p>
                  <Link
                    href="/doctors"
                    className="inline-block text-sm font-bold text-slate-900 hover:text-primary transition-colors"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/doctors"
                className="px-8 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white font-bold transition-all inline-flex items-center gap-2"
              >
                View All Doctors
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 px-4 md:px-10 bg-white relative overflow-hidden">
          {/* Decoration */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 size-96 rounded-full bg-blue-50/50 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 size-96 rounded-full bg-blue-50/50 blur-3xl"></div>

          <div className="mx-auto max-w-7xl relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3">
                <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">
                  Patient Stories
                </span>
                <h2 className="text-slate-900 text-3xl md:text-4xl font-black tracking-tight mb-6">
                  Healing Hands, <br />
                  Caring Hearts
                </h2>
                <p className="text-slate-600 mb-8">
                  Don&apos;t just take our word for it. Hear from those who have
                  experienced our care firsthand.
                </p>
                <div className="flex gap-4">
                  <button className="size-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all">
                    <span className="material-symbols-outlined">
                      arrow_back
                    </span>
                  </button>
                  <button className="size-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Testimonial 1 */}
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    <span className="material-symbols-outlined text-lg fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg fill-current">
                      star
                    </span>
                  </div>
                  <p className="text-slate-700 italic mb-6">
                    &quot;The emergency team was incredibly swift and
                    professional. They saved my father&apos;s life during a
                    cardiac arrest. Forever grateful to Dr. Sharma.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-slate-200 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        alt="Patient portrait"
                        className="w-full h-full object-cover"
                        data-alt="Portrait of a male patient"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHK5oUCxoSQtjtMgnYi8MoLncVj9xvI_sIDEhjCO2V-iZa12bkZBFDikTYBHnm84eQWY6GjSowH1t15aSKY9UHMdjQ8rpC9DvD93pjWeUQ15zstDv8uHEiWdB3MTwaeFSWF5c4rKKRsgKh5TDyVt48fpU3b9GW9Dg9yK4KTPs_HY5HSdICIdKxU4JMQxirXpmQSy86xX1HQnpNI_Ef46VPGosDH-ALq-MujkVpPoQTcJYApCQLOvBP_lgtF3p-g3j97lP70ebk6XA"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        Rahul Patel
                      </h4>
                      <p className="text-slate-500 text-xs">Raipur Resident</p>
                    </div>
                  </div>
                </div>
                {/* Testimonial 2 */}
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hidden md:block">
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    <span className="material-symbols-outlined text-lg fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg fill-current">
                      star
                    </span>
                  </div>
                  <p className="text-slate-700 italic mb-6">
                    &quot;The maternity ward is world-class. The nurses were so
                    supportive during my delivery. The facilities are clean and
                    very comfortable.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-slate-200 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        alt="Patient portrait"
                        className="w-full h-full object-cover"
                        data-alt="Portrait of a female patient"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIgGt29IAegdJPCSWo-uH4DaR86vC-kC-qESRLBl9md5A3FDLx-FSdsTYXGCtz6-ygkiAoXH7ySM91he4Kbfxw3HLtR0mXU0uQVs3yH3Hl3zSKrQfpNRIjOgwcyA00DmejHxqEwdPF-R2vraGgXBKk6w7-4UCsg_fLtLDU8pyntgjm3OWEpT09WDyMi6TAbfzYTJjyepsGQQKW-PNMvMgFqoZzElV_TakNesKMVFP9_4vkmTUoiSXGDzOfeclURTd98H5Z2WNmFD0"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        Priya Singh
                      </h4>
                      <p className="text-slate-500 text-xs">New Mother</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-slate-100 pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-blue-800 pb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center size-8 rounded bg-white text-primary">
                  <span className="material-symbols-outlined text-2xl">
                    local_hospital
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Chhattisgarh Hospital
                </h3>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                Leading the way in medical excellence with advanced technology
                and compassionate care. Committed to your health and well-being
                since 2005.
              </p>
              <div className="flex gap-4 pt-2">
                <Link
                  href="#"
                  className="size-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-white hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">
                    public
                  </span>
                </Link>
                <Link
                  href="#"
                  className="size-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-white hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">
                    campaign
                  </span>
                </Link>
                <Link
                  href="#"
                  className="size-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-white hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">
                    group
                  </span>
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm text-blue-100">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white hover:underline decoration-1 underline-offset-4"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/doctors"
                    className="hover:text-white hover:underline decoration-1 underline-offset-4"
                  >
                    Find a Doctor
                  </Link>
                </li>
                <li>
                  <Link
                    href="/departments"
                    className="hover:text-white hover:underline decoration-1 underline-offset-4"
                  >
                    Departments
                  </Link>
                </li>
                <li>
                  <Link
                    href="/book-appointment"
                    className="hover:text-white hover:underline decoration-1 underline-offset-4"
                  >
                    Book Appointment
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="hover:text-white hover:underline decoration-1 underline-offset-4"
                  >
                    News &amp; Media
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">
                Patient Services
              </h4>
              <ul className="space-y-3 text-sm text-blue-100">
                <li>
                  <Link
                    href="#"
                    className="hover:text-white hover:underline decoration-1 underline-offset-4"
                  >
                    Patient Portal
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white hover:underline decoration-1 underline-offset-4"
                  >
                    Health Packages
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white hover:underline decoration-1 underline-offset-4"
                  >
                    Insurance &amp; TPA
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white hover:underline decoration-1 underline-offset-4"
                  >
                    Visiting Hours
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white hover:underline decoration-1 underline-offset-4"
                  >
                    Tele-consultation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm text-blue-100">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 text-blue-300">
                    location_on
                  </span>
                  <span>
                    123, Medical College Road,
                    <br />
                    Raipur, Chhattisgarh 492001
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-blue-300">
                    call
                  </span>
                  <span>+91 12345 67890</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-blue-300">
                    mail
                  </span>
                  <span>contact@cghospital.com</span>
                </li>
                <li className="mt-4">
                  <Link
                    href="/emergency"
                    className="block w-full bg-secondary hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors text-center"
                  >
                    Emergency: 108
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-200">
            <p>© 2023 Chhattisgarh Hospital. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
