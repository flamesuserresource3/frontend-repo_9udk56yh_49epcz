import { useState } from 'react';
import { LogIn } from 'lucide-react';

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    // Fake auth delay to simulate request
    setTimeout(() => {
      setLoading(false);
      if (email && password) {
        onLogin({ name: 'Pengguna', email });
      } else {
        setError('Masukkan email dan kata sandi.');
      }
    }, 700);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1877F2] tracking-tight">
            facebook
          </h1>
          <p className="text-gray-700 text-lg">
            Facebook membantu Anda terhubung dan berbagi dengan orang-orang dalam kehidupan Anda.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-xl p-6 space-y-4">
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              placeholder="Email atau Nomor Telepon"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#1877F2]"
            />
            <input
              type="password"
              placeholder="Kata Sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#1877F2]"
            />
            {error && <div className="text-red-600 text-sm">{error}</div>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1877F2] hover:bg-[#1667d9] text-white font-semibold py-3 rounded-md flex items-center justify-center gap-2 transition"
            >
              <LogIn className="w-5 h-5" />
              {loading ? 'Masuk...' : 'Masuk'}
            </button>
          </form>
          <div className="h-px bg-gray-200" />
          <button
            onClick={() => onLogin({ name: 'Tamu', email: 'guest@example.com' })}
            className="w-full bg-[#42B72A] hover:bg-[#36a420] text-white font-semibold py-3 rounded-md transition"
          >
            Buat Akun Baru
          </button>
        </div>
      </div>
    </div>
  );
}
