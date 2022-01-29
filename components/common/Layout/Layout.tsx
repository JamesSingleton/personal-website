import { FC } from 'react'
import { Navbar, Footer } from '@components/common'

const Layout: FC = ({ children }) => (
  <>
    <div className="relative mx-auto h-full overflow-hidden transition-colors duration-150">
      <Navbar />
      <main className="fit">{children}</main>
      <Footer />
    </div>
  </>
)

export default Layout
