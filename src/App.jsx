import Breed from './components/Breed'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import RecentPost from './components/RecentPost'
import ServiceBanner from './components/ServiceBanner'
import Team from './components/Team'
import Vaccination from './components/Vaccination'

const App = () => {

  return (
    <>
      <Header/>
      <ServiceBanner flexDirection={`flex-row`} img={`Injured-dog1.png`}/>
      <Vaccination/>
      <ServiceBanner flexDirection={`flex-row-reverse`} img={`Injured-dog2.png`}/>
      <Breed/>
      <Team/>
      <Features/>
      <RecentPost/>
      <Footer/>
    </>
  )
}

export default App
