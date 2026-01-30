import { colors } from '../tokens'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import LogoStripe from '../components/LogoStripe'
import ProjectsSection from '../sections/ProjectsSection'
import ClosingSection from '../sections/ClosingSection'
import Footer from '../components/Footer'
import useResponsive from '../hooks/useResponsive'

const Home = () => {
  const { isMobile } = useResponsive()
  
  const homeStyles = {
    backgroundColor: colors.backgrounds.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    minHeight: '100vh',
  }

  return (
    <div style={homeStyles}>
      <Navbar />
      <Hero />
      <LogoStripe size={isMobile ? 'mobile' : 'Desktop'} state="Default" />
      <ProjectsSection />
      <ClosingSection />
      <Footer />
    </div>
  )
}

export default Home
