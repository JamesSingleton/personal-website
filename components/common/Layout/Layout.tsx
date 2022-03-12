import { FC } from 'react'
import { Navbar, Footer } from '@components/common'

const Layout: FC = ({ children }) => (
  <>
    <Navbar />
    <main className="fit">{children}</main>
    <Footer />
  </>
)

export default Layout
