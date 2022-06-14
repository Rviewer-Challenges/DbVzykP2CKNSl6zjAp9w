import {
  Router,
  Route
} from 'wouter'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Header />

      <Router>
        <Route path='home' />
        <Route path='explore' />
        <Route path='notifications' />
        <Router path='messages' />
      </Router>

      <Footer />
    </div>
  )
}

export default App
