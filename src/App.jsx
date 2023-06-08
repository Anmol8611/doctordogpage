import Header from './components/Header'
import ServiceBanner from './components/ServiceBanner'

const App = () => {

  return (
    <>
      <Header/>
      <ServiceBanner flexDirection={`flex-row`} img={`Injured-dog1.png`}/>
    </>
  )
}

export default App
