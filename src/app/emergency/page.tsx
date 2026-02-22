"use client";

import Link from "next/link";

export default function Emergency() {
  return (
    <div className="flex-1 w-full bg-slate-50 dark:bg-slate-900 font-display text-slate-900 dark:text-slate-100 flex flex-col">
      {/* Header (Minimal for Emergency Focus) */}
      <header className="sticky top-0 z-50 w-full bg-red-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-red-600">
                <span className="material-symbols-outlined text-xl">
                  local_hospital
                </span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Chhattisgarh Hospital
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex flex-col items-end">
                <span className="text-xs font-medium text-red-200 uppercase tracking-widest">
                  24/7 Emergency Line
                </span>
                <span className="text-xl font-black">Call 108</span>
              </div>
              <a
                href="tel:108"
                className="md:hidden flex items-center justify-center h-10 px-4 bg-white text-red-600 font-bold rounded-lg shadow-sm"
              >
                <span className="material-symbols-outlined mr-2">call</span>{" "}
                Call 108
              </a>
              <Link
                href="/"
                className="hidden md:flex items-center text-sm font-medium hover:text-red-200 transition-colors"
              >
                Back to Home{" "}
                <span className="material-symbols-outlined ml-1 text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow w-full">
        {/* Urgent Action Hero Area */}
        <section className="bg-red-50 dark:bg-red-950/20 border-b border-red-100 dark:border-red-900/30 py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* subtle background pulse effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-red-500/5 dark:bg-red-500/10 rounded-full blur-3xl animate-pulse -z-10"></div>

          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 rounded-full mb-2">
              <span className="material-symbols-outlined text-[40px]">
                emergency
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-red-600 dark:text-red-500 uppercase">
              Medical Emergency?
            </h1>
            <p className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200">
              Do not wait. Act immediately.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a
                href="tel:108"
                className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-5 rounded-xl font-bold text-xl md:text-2xl shadow-xl shadow-red-600/30 transition-transform active:scale-95"
              >
                <span className="material-symbols-outlined text-3xl animate-bounce">
                  call
                </span>
                Dial 108 Right Now
              </a>
              <button className="flex items-center justify-center gap-3 bg-white dark:bg-slate-800 border-2 border-red-200 dark:border-red-700/50 hover:border-red-600 dark:hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 px-8 py-5 rounded-xl font-bold text-lg md:text-xl transition-all">
                <span className="material-symbols-outlined">
                  directions_car
                </span>
                Get Directions
              </button>
            </div>

            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-6 max-w-lg mx-auto bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm p-3 rounded-lg border border-slate-200 dark:border-slate-700">
              Our advanced life support ambulances are stationed across Raipur
              for rapid response, fully equipped with ventilators and
              defibrillators.
            </p>
          </div>
        </section>

        {/* Info Cards Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Location & Access */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center text-slate-700 dark:text-slate-300 mb-6">
                <span className="material-symbols-outlined text-[28px]">
                  location_on
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">Emergency Entrance</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
                Enter via Gate No. 2 on Medical College Road for immediate
                access to the triage area. Dedicated drop-off zone available.
              </p>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg font-mono text-sm text-slate-700 dark:text-slate-300">
                Main Campus, Medical Square,
                <br />
                Raipur, Chhattisgarh 492001
              </div>
            </div>

            {/* What to bring */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center text-slate-700 dark:text-slate-300 mb-6">
                <span className="material-symbols-outlined text-[28px]">
                  medical_information
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">What to Bring</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
                <li className="flex gap-2 items-start">
                  <span className="material-symbols-outlined text-[18px] text-green-500">
                    check_circle
                  </span>{" "}
                  Any current medications being taken
                </li>
                <li className="flex gap-2 items-start">
                  <span className="material-symbols-outlined text-[18px] text-green-500">
                    check_circle
                  </span>{" "}
                  List of known allergies
                </li>
                <li className="flex gap-2 items-start">
                  <span className="material-symbols-outlined text-[18px] text-green-500">
                    check_circle
                  </span>{" "}
                  Valid photo ID (Aadhar / PAN)
                </li>
                <li className="flex gap-2 items-start">
                  <span className="material-symbols-outlined text-[18px] text-green-500">
                    check_circle
                  </span>{" "}
                  Health insurance card / details
                </li>
              </ul>
            </div>

            {/* Our Capabilities */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 border-t-4 border-t-primary">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-[28px]">
                  verified
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">Level 1 Trauma Center</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
                Fully equipped to handle the most severe, life-threatening
                injuries and conditions.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                <span className="bg-slate-100 dark:bg-slate-700 px-3 py-1.5 rounded-full">
                  Stroke Unit
                </span>
                <span className="bg-slate-100 dark:bg-slate-700 px-3 py-1.5 rounded-full">
                  Cardiac Cath Lab
                </span>
                <span className="bg-slate-100 dark:bg-slate-700 px-3 py-1.5 rounded-full">
                  24/7 Blood Bank
                </span>
                <span className="bg-slate-100 dark:bg-slate-700 px-3 py-1.5 rounded-full">
                  Advanced ICU
                </span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative w-full border border-slate-800">
            <div
              className="absolute right-0 bottom-0 opacity-20 w-1/2 h-full pointer-events-none"
              data-alt="Abstract pulse line graphic"
              style={{
                backgroundImage:
                  "url('data:image/svg+xml,%3Csvg width=\\'100%\\' height=\\'100%\\' viewBox=\\'0 0 100 100\\' preserveAspectRatio=\\'none\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 50 L30 50 L40 20 L50 80 L60 50 L100 50\\' stroke=\\'%23ef4444\\' stroke-width=\\'2\\' fill=\\'none\\'/%3E%3C/svg%3E')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="p-8 md:p-12 relative z-10 flex flex-col md:flex-row items-center gap-8 justify-between">
              <div className="text-white max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  When every second counts, we are ready.
                </h2>
                <p className="text-slate-300 text-lg">
                  Our Emergency Department is staffed around the clock by
                  board-certified emergency physicians, trauma surgeons, and
                  specialized nurses ready to deliver critical care.
                </p>
              </div>
              <Link
                href="/"
                className="whitespace-nowrap rounded-xl bg-white text-slate-900 font-bold px-8 py-4 hover:bg-slate-100 transition-colors"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
