import { Loader, Navbar, Footer, Welcome, Transactions, Services } from '../src/components/Index'
 
 function App() {

  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer /> 
    </div>
  )
}

export default App