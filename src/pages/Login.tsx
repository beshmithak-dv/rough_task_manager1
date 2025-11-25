import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

export function Login({ onNavigate }: { onNavigate: (page: 'home' | 'signup') => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-300 to-white flex flex-col">
      <div className="absolute top-6 left-6">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2 text-white hover:text-white/80 transition-colors drop-shadow-md">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </button>
      </div>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center space-y-6 mb-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
              Login
            </h1>
            <p className="text-lg text-white drop-shadow-md">
              Access your tasks and stay productive.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-8 space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-blue-900">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all duration-200"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-blue-900">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all duration-200"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-200 mt-4"
              >
                Login
              </button>
            </div>

            <div className="text-center">
              <p className="text-white drop-shadow-md">
                Don't have an account?{' '}
                <button onClick={() => onNavigate('signup')} className="font-semibold hover:text-white/80 transition-colors">
                  Sign up
                </button>
              </p>
            </div>
          </form>
        </div>
      </main>

      <footer className="bg-white/10 backdrop-blur-sm py-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
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
