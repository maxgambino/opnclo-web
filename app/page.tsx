import Link from "next/link"

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app-opnclo.vercel.app"

export default function Home() {
  return (
    <div className="relative overflow-x-hidden bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <img 
                  src={`/api/proxy-image?url=${encodeURIComponent('https://raw.githubusercontent.com/maxgambino/opnclo-web/master/public/Opnclo-logo.png')}`}
                  alt="Opnclo Logo" 
                  className="h-8 w-auto"
                />
              </Link>
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#features" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Features
                </a>
                <a href="#customers" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Our Customers
                </a>
                <a href="#about" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  About
                </a>
                <Link href="/pricing" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Pricing
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href={`${APP_URL}/login`} 
                className="hidden sm:inline-block text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Log in
              </a>
              <a 
                href={`${APP_URL}/signup`} 
                className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
              >
                Start now, it&apos;s free!
              </a>
              <a 
                href="#demo" 
                className="hidden sm:inline-block px-5 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="relative">
        <div className="gradient-glow-top"></div>
        
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-24 pb-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <span className="material-icons text-base mr-2">spark</span>
                NEW! MULTI-TENANT PLATFORM
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                Manage your organization, eliminate chaos.
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto md:mx-0">
                A powerful multi-tenant platform to organize your teams, departments, and sites all in one place. Increase productivity and oversee any process from anywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href={`${APP_URL}/signup`}
                  className="px-8 py-3.5 text-base font-medium text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105"
                >
                  Start 14-day free trial
                </a>
                <a 
                  href="#demo"
                  className="px-8 py-3.5 text-base font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors"
                >
                  Book a demo
                </a>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">No credit card needed.</p>
            </div>
            <div className="relative">
              {/* Dashboard mockup */}
              <div className="relative z-10 w-full rounded-xl shadow-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 p-8 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <span className="material-icons text-6xl text-blue-600 dark:text-blue-400 mb-4">dashboard</span>
                  <p className="text-slate-600 dark:text-slate-400">Dashboard Preview</p>
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 z-20">
                {/* Mobile app mockup with checklist notification */}
                <div className="w-64 rounded-xl shadow-2xl overflow-hidden">
                  <img 
                    alt="Mobile app showing checklist notification on smartphone" 
                    src={`/api/proxy-image?url=${encodeURIComponent('https://raw.githubusercontent.com/maxgambino/opnclo-web/master/public/mobile-checklist.png')}`}
                    className="w-full h-auto rounded-xl block"
                    style={{ maxWidth: '256px', display: 'block' }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Cards Section */}
        <section className="py-20" id="features">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl gradient-background">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-icons text-slate-800 dark:text-white text-3xl">business</span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Multi-Organization Management</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Manage multiple organizations, sites, and departments from a single platform. Perfect for enterprises with complex structures.
                </p>
                <div className="rounded-lg shadow-lg bg-white dark:bg-slate-800 p-6 aspect-video flex items-center justify-center">
                  <span className="material-icons text-5xl text-blue-600 dark:text-blue-400">account_tree</span>
                </div>
              </div>

              <div className="p-8 rounded-2xl gradient-background">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-icons text-slate-800 dark:text-white text-3xl">security</span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Enterprise-Grade Security</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Row-level security ensures data isolation between organizations. OAuth authentication and role-based access control built-in.
                </p>
                <div className="rounded-lg shadow-lg bg-white dark:bg-slate-800 p-6 aspect-video flex items-center justify-center">
                  <span className="material-icons text-5xl text-blue-600 dark:text-blue-400">verified_user</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section 1 */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="rounded-xl shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 p-8 aspect-video flex items-center justify-center">
                  <span className="material-icons text-6xl text-blue-600 dark:text-blue-400">settings</span>
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Redefine efficiency for your organization
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="material-icons text-green-500 mr-3 mt-1">check_circle</span>
                    <span className="text-slate-600 dark:text-slate-300">Quickly set up multiple organizations, sites, and departments with intuitive management tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-icons text-green-500 mr-3 mt-1">check_circle</span>
                    <span className="text-slate-600 dark:text-slate-300">Invite team members and assign roles with granular permissions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-icons text-green-500 mr-3 mt-1">check_circle</span>
                    <span className="text-slate-600 dark:text-slate-300">Distribute access and manage resources across multiple locations instantly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-icons text-green-500 mr-3 mt-1">check_circle</span>
                    <span className="text-slate-600 dark:text-slate-300">Access your dashboard from any device, anywhere</span>
                  </li>
                </ul>
                <a 
                  href={`${APP_URL}/signup`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium mt-8 group"
                >
                  Let&apos;s Get Started
                  <span className="material-icons ml-1 transition-transform group-hover:translate-x-1">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section 2 */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Improve accuracy in every operation
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="material-icons text-green-500 mr-3 mt-1">check_circle</span>
                    <span className="text-slate-600 dark:text-slate-300">Keep organizational data up-to-date from anywhere with real-time synchronization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-icons text-green-500 mr-3 mt-1">check_circle</span>
                    <span className="text-slate-600 dark:text-slate-300">Gather correct and consistent information across all sites and departments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-icons text-green-500 mr-3 mt-1">check_circle</span>
                    <span className="text-slate-600 dark:text-slate-300">Build dynamic workflows that adapt based on user roles and permissions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-icons text-green-500 mr-3 mt-1">check_circle</span>
                    <span className="text-slate-600 dark:text-slate-300">Meet expectations by tracking progress and activity across your organization</span>
                  </li>
                </ul>
                <a 
                  href={`${APP_URL}/signup`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium mt-8 group"
                >
                  Let&apos;s Get Started
                  <span className="material-icons ml-1 transition-transform group-hover:translate-x-1">arrow_forward</span>
                </a>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-xl shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 p-8 aspect-video flex items-center justify-center">
                  <span className="material-icons text-6xl text-blue-600 dark:text-blue-400">analytics</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section 3 */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="rounded-xl shadow-xl overflow-hidden">
                  <img 
                    alt="Team collaboration interface showing communication and team management" 
                    src={`/api/proxy-image?url=${encodeURIComponent('https://raw.githubusercontent.com/maxgambino/opnclo-web/master/public/mobile-checklist.png')}`}
                    className="w-full h-auto rounded-xl block"
                    style={{ display: 'block' }}
                    loading="lazy"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Achieve better team collaboration
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="material-icons text-green-500 mr-3 mt-1">check_circle</span>
                    <span className="text-slate-600 dark:text-slate-300">Be notified of changes and monitor activity across all organizations in real-time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-icons text-green-500 mr-3 mt-1">check_circle</span>
                    <span className="text-slate-600 dark:text-slate-300">Get instant insights and feedback from team members across all sites</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-icons text-green-500 mr-3 mt-1">check_circle</span>
                    <span className="text-slate-600 dark:text-slate-300">Interact with team members directly through the platform</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-icons text-green-500 mr-3 mt-1">check_circle</span>
                    <span className="text-slate-600 dark:text-slate-300">Manage invitations and access control with ease</span>
                  </li>
                </ul>
                <a 
                  href={`${APP_URL}/signup`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium mt-8 group"
                >
                  Let&apos;s Get Started
                  <span className="material-icons ml-1 transition-transform group-hover:translate-x-1">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">© 2025 OPNCLO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
