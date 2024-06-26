import { Route, Routes } from 'react-router-dom'
import { Home, Contact, About, Notification } from '@pages'
import MainLayout from '@layout/MainLayout'
import '@styles/App.sass'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="notification/:id" element={<Notification />} />
        </Route>
      </Routes >
    </>
  )
}

export default App
