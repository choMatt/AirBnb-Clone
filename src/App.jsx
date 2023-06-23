import './App.css'
import Header from "../src/components/Header"
import Hero from "../src/components/Hero"
import Courses from './components/Courses'

function App() {


  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Courses />
      </main>
    </div>
  )
}

export default App

// TODO
// Add - Card Component
// Add - other data on out card component