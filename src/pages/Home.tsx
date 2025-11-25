import { CheckCircle, TrendingUp, Zap } from 'lucide-react';

export function Home({ onNavigate }: { onNavigate: (page: 'login' | 'signup' | 'dashboard') => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-300 to-white flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="text-center space-y-16 max-w-4xl w-full">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
              Welcome to My Task Manager
            </h1>
            <p className="text-lg md:text-xl text-white drop-shadow-md max-w-2xl mx-auto leading-relaxed">
              A simple space where managing tasks becomes joyful, organized, and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Organize with Ease</h3>
              <p className="text-blue-700 text-sm">Keep all your tasks in one place with a clean, intuitive interface.</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Track Your Progress</h3>
              <p className="text-blue-700 text-sm">Watch your productivity grow with real-time progress tracking.</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex justify-center mb-4">
                <Zap className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Find Joy in Productivity</h3>
              <p className="text-blue-700 text-sm">Transform your workflow and celebrate every achievement.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button onClick={() => onNavigate('login')} className="w-full md:w-48 px-8 py-4 bg-white text-blue-600 rounded-lg text-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
              Login
            </button>

            <button onClick={() => onNavigate('signup')} className="w-full md:w-48 px-8 py-4 bg-white text-blue-600 rounded-lg text-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
              Signup
            </button>

            <button onClick={() => onNavigate('dashboard')} className="w-full md:w-48 px-8 py-4 bg-blue-600 text-white rounded-lg text-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
              Go to Dashboard
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-white/10 backdrop-blur-sm py-8 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-white drop-shadow-md">
            Made with <span className="text-red-300">❤️</span> to make your day more productive.
          </p>
          <div className="flex justify-center gap-6 text-white/80 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Help</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
