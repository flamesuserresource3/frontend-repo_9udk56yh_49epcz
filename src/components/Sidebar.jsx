import { useState } from 'react';
import { Home, User, Settings, ChevronDown, ChevronRight, LogOut } from 'lucide-react';

function TreeItem({ icon: Icon, label, children }) {
  const [open, setOpen] = useState(false);
  const hasChildren = Array.isArray(children) && children.length > 0;

  return (
    <div className="select-none">
      <button
        onClick={() => hasChildren && setOpen((o) => !o)}
        className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 text-sm text-gray-800"
      >
        {hasChildren ? (
          open ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
        ) : (
          <span className="w-4 h-4" />
        )}
        {Icon && <Icon className="w-4 h-4 text-gray-600" />}
        <span>{label}</span>
      </button>
      {hasChildren && open && (
        <div className="ml-6 border-l border-gray-200 pl-3 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
}

export default function Sidebar({ onLogout }) {
  return (
    <aside className="w-72 bg-white border-r border-gray-200 h-full overflow-y-auto p-3">
      <div className="px-2 py-3 font-semibold text-gray-700">Navigasi</div>
      <div className="space-y-1">
        <TreeItem icon={Home} label="Beranda" />
        <TreeItem icon={User} label="Profil">
          <TreeItem label="Info" />
          <TreeItem label="Teman" />
          <TreeItem label="Foto" />
        </TreeItem>
        <TreeItem icon={Settings} label="Pengaturan">
          <TreeItem label="Privasi" />
          <TreeItem label="Notifikasi" />
          <TreeItem label="Keamanan" />
        </TreeItem>
        <div className="pt-2">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 text-sm text-gray-800"
          >
            <LogOut className="w-4 h-4 text-gray-600" />
            <span>Keluar</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
