import PreddixxLogo from "./PreddixxLogo";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#1A2B3C] text-white dark:text-gray-100 py-16 px-4 transition-colors duration-500">
      <div className="container mx-auto">
        {/* 4 equal columns, horizontal gaps */}
        <div className="grid md:grid-cols-4 gap-x-12 gap-y-10 mb-12">
          {/* Logo + subtitle */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-40 md:w-56 -ml-2">
                <PreddixxLogo />
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              AI-Driven Insights for Smart HR Management
            </p>
            <p className="text-gray-400 text-sm">
              Transform your HR operations with intelligent analytics and real-time insights.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a className="hover:text-green-400 transition-colors" href="#features">Features</a></li>
              <li><a className="hover:text-green-400 transition-colors" href="#integrations">Integrations</a></li>
              <li><a className="hover:text-green-400 transition-colors" href="#solutions">Challeneges</a></li>
              <li><a className="hover:text-green-400 transition-colors" href="#modules">Modules</a></li>
            </ul>
          </div>

          {/* Payroll Cloud Limited (UK) */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Payroll Cloud Limited (UK)</h4>
            <p className="text-gray-300 mb-1">Registered in England and Wales</p>
            <address className="not-italic text-gray-300 leading-relaxed text-sm">
              International House, 12 Constance Street,<br />
              London, E16 2DQ, UK
            </address>
          </div>

          {/* Payroll Cloud Corp (USA) & Connect With Us Section */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Payroll Cloud Corp (USA)</h4>
            <p className="text-gray-300 mb-1 text-sm">Registered in Texas</p>
            <address className="not-italic text-gray-300 leading-relaxed mb-4 text-sm">
              1314 W McDermott Dr, Ste 106 #910,<br />
              Allen, TX 75013, US
            </address>
            <h4 className="font-semibold mb-2 text-white">Connect with Us</h4>
            <div className="flex space-x-4 mt-2">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/pclnxai/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
              ><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.238-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.786-1.75-1.754s.784-1.754 1.75-1.754 1.75.786 1.75 1.754-.783 1.754-1.75 1.754zm13.5 11.268h-3v-5.604c0-1.337-.026-3.059-1.864-3.059-1.865 0-2.151 1.458-2.151 2.964v5.699h-3v-10h2.881v1.367h.041c.402-.761 1.384-1.562 2.847-1.562 3.044 0 3.606 2.004 3.606 4.606v5.589z"/></svg></a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@pclnXAI"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2 rounded-full bg-red-600 hover:bg-red-700 transition-colors"
              ><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-1.23-.08-6.139-.08-6.139-.08s-4.875 0-6.136.08c-1.424.093-2.577 1.243-2.669 2.675-.08 1.231-.08 3.79-.08 3.79s0 2.552.08 3.79c.092 1.43 1.245 2.58 2.669 2.672 1.23.08 6.136.08 6.136.08s4.906 0 6.135-.08c1.425-.093 2.578-1.243 2.67-2.674.08-1.237.08-3.79.08-3.79s0-2.55-.08-3.79c-.092-1.43-1.244-2.578-2.67-2.672zm-10.615 8.27v-5.63l5.15 2.81-5.15 2.82z"/></svg></a>
              {/* Email */}
              <a
                href="mailto:info@pclnxai.com"
                aria-label="Email"
                className="p-2 rounded-full bg-green-600 hover:bg-green-700 transition-colors"
              ><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.105.897 2 2 2h16c1.104 0 2-.895 2-2V6c0-1.103-.896-2-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a className="text-gray-300 hover:text-green-400 transition-colors text-sm" href="#">
                Click here to see our Privacy Policy
              </a>
              
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-gray-400 text-sm">
                Contact:{" "}
                <a href="mailto:info@pclnxai.com" className="underline hover:text-green-400">
                  info@pclnxai.com
                </a>
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              © 2025 Preddix. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
