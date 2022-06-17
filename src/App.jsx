import {
  Route
} from 'wouter'
import Header from './components/Header'
import Footer from './components/Footer'
import Explore from './views/Explore'
import Home from './views/Home'
import Messages from './views/Messages'
import Notifications from './views/Notifications'

function App () {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main>
        <Route path='/home' component={Home} />
        <Route path='/explore' component={Explore} />
        <Route path='/notifications' component={Notifications} />
        <Route path='/messages' component={Messages} />
        <Route path='/' component={Home} />
      </main>
      <Footer />
    </div>
  )
}

export default App
