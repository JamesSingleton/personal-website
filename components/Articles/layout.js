import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

const Layout = ({preview, children}) => (
  <>
    <Meta />
    <div className="min-h-screen">
      <main>
        {children}
      </main>
    </div>
  </>
)

export default Layout