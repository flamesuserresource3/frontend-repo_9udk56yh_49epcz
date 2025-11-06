import { useState } from 'react';
import LoginForm from './components/LoginForm';
import Sidebar from './components/Sidebar';
import DashboardHeader from './components/DashboardHeader';
import Feed from './components/Feed';

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (profile) => setUser(profile);
  const handleLogout = () => setUser(null);

  if (!user) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <DashboardHeader user={user} />
      <div className="flex flex-1">
        <Sidebar onLogout={handleLogout} />
        <main className="flex-1">
          <Feed />
        </main>
      </div>
    </div>
  );
}
