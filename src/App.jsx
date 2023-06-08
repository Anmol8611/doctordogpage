import Breed from './components/Breed'
import Header from './components/Header'
import ServiceBanner from './components/ServiceBanner'
import Vaccination from './components/Vaccination'

const App = () => {

  return (
    <>
      <Header/>
      <ServiceBanner flexDirection={`flex-row`} img={`Injured-dog1.png`}/>
      <Vaccination/>
      <ServiceBanner flexDirection={`flex-row-reverse`} img={`Injured-dog2.png`}/>
      <Breed/>
    </>
  )
}

export default App
