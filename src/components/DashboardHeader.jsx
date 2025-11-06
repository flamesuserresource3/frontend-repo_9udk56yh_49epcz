import { Bell, Search } from 'lucide-react';

export default function DashboardHeader({ user }) {
  return (
    <header className="flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-white">
      <div className="flex items-center gap-3">
        <div className="text-2xl font-extrabold text-[#1877F2]">facebook</div>
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari di Facebook"
            className="pl-9 pr-3 py-2 rounded-full bg-gray-100 border border-transparent focus:border-[#1877F2] focus:bg-white outline-none text-sm"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell className="w-5 h-5 text-gray-700" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1 rounded">3</span>
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center font-semibold">
            {user?.name?.[0] || 'U'}
          </div>
          <div className="text-sm font-medium text-gray-800">{user?.name || 'Pengguna'}</div>
        </div>
      </div>
    </header>
  );
}
