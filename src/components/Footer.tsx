"use client";

export default function Footer() {
  return (
    <footer className="bg-[#064e3b]">
      {/* Main Footer */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center">
                <span className="text-white font-bold text-base">R</span>
              </div>
              <span className="text-white font-semibold text-base tracking-tight">
                Rillation<span className="text-[#6ee7b7]">.</span>
              </span>
            </div>
            <p className="text-white/50 leading-relaxed max-w-sm mb-6 text-sm">
              Strategic execution partner building revenue infrastructure for
              B2B organizations. We turn outbound into pipeline and pipeline into
              revenue.
            </p>
            <a
              href="mailto:hello@rillation.com"
              className="text-[#6ee7b7] hover:text-white transition-colors text-sm"
            >
              hello@rillation.com
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {["Content Strategy", "Outbound Email", "LinkedIn DMs", "Paid Advertising"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      className="text-white/45 hover:text-white transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {["About", "Process", "Results", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/45 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Rillation Revenue. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 hover:text-white transition-colors text-xs">
              Privacy
            </a>
            <a href="#" className="text-white/30 hover:text-white transition-colors text-xs">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
