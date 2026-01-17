import { Download, Folders, Home, User } from 'lucide-react';
import { useMemo } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Dock from './components/Dock';
import DownloadPage from './pages/Download';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import ProjectsPage from './pages/Projects';

function Layout() {
  const navigate = useNavigate();
  const dockItems = useMemo(
    () => [
      {
        icon: <Home />,
        label: 'Home',
        onClick: () => navigate('/'),
      },
      {
        icon: <User />,
        label: 'Profile',
        onClick: () => navigate('/profile'),
      },
      {
        icon: <Folders />,
        label: 'Projects',
        onClick: () => navigate('/projects'),
      },
      {
        icon: <Download />,
        label: 'Download',
        onClick: () => navigate('/download'),
      },
    ],
    []
  );

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/Download" element={<DownloadPage />} />
      </Routes>
      <Dock
        items={dockItems}
        panelHeight={68}
        baseItemSize={48}
        magnification={70}
      />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
