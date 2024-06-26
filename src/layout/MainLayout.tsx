import Header from '@components/Header'
import { Outlet } from 'react-router-dom'
import "./MainLayout.sass"

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
