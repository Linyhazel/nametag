import { Folders, Home, Mail, User } from 'lucide-react'
import { useMemo } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Dock from './components/Dock'
import ContactPage from './pages/Contact'
import HomePage from './pages/Home'
import ProfilePage from './pages/Profile'
import ProjectsPage from './pages/Projects'

function Layout() {
  const navigate = useNavigate()
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
        icon: <Mail />,
        label: 'Contact',
        onClick: () => navigate('/contact'),
      },
    ],
    []
  )

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Dock
        items={dockItems}
        panelHeight={68}
        baseItemSize={48}
        magnification={70}
      />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
