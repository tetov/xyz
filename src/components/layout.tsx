import * as React from 'react'

import Footer from './footer'
import Header from './header'
import NavDefault from './nav-default'
import NavIndex from './nav-index'
import SEO, { SEOProps } from './seo'

interface LayoutProps extends SEOProps {
  location: any
  children: any
}

const Layout: React.FC<LayoutProps> = ({location, children, ...seoProps}) => {

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let Nav: React.FC = isRootPath ? NavIndex : NavDefault

  return (
    <div className="global-wrapper min-h-screen" data-is-root-path={isRootPath}>
      <SEO {...seoProps} />
      <Header />
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
