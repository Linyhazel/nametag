export default function ContactPage() {
  return (
    <div className="w-full h-full flex items-center justify-center pb-24">
      <div className="max-w-2xl mx-auto px-8 text-center">
        <h1 className="text-4xl font-bold mb-8 text-white">Get In Touch</h1>

        <p className="text-lg text-neutral-300 mb-12">
          I'm currently based in Lausanne, Switzerland and open to new
          opportunities. Feel free to reach out!
        </p>

        <div className="space-y-6">
          <a
            href="mailto:hazellyuanh@gmail.com"
            className="flex items-center justify-center gap-4 bg-neutral-900/50 rounded-xl p-6 border border-neutral-800 hover:border-lime-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-lime-500/10 group"
          >
            <svg
              className="w-8 h-8 text-lime-400 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div className="text-left">
              <p className="text-neutral-400 text-sm">Email</p>
              <p className="text-white text-lg">hazellyuanh@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+41764780427"
            className="flex items-center justify-center gap-4 bg-neutral-900/50 rounded-xl p-6 border border-neutral-800 hover:border-lime-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-lime-500/10 group"
          >
            <svg
              className="w-8 h-8 text-lime-400 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div className="text-left">
              <p className="text-neutral-400 text-sm">Phone</p>
              <p className="text-white text-lg">(+41) 076 478 0427</p>
            </div>
          </a>

          <div className="flex items-center justify-center gap-4 bg-neutral-900/50 rounded-xl p-6 border border-neutral-800">
            <svg
              className="w-8 h-8 text-lime-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div className="text-left">
              <p className="text-neutral-400 text-sm">Location</p>
              <p className="text-white text-lg">Lausanne, Switzerland</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-neutral-500 text-sm">
            Languages: English (C1) | French (A2) | Mandarin (Native)
          </p>
        </div>
      </div>
    </div>
  )
}
