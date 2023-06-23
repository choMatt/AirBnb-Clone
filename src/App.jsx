import './App.css'
import Header from "../src/components/Header"
import Hero from "../src/components/Hero"
import CardData from "../src/data"
import Card from "../src/components/Card"

function App() {

  const cardElements = CardData.map((data) => {
     return(
      <Card 
        coverImg={data.coverImg}
      />
     )
  })

  return (
    <div>
      <Header />
      <main>
        <Hero />
        {cardElements}
      </main>
    </div>
  )
}

export default App

// TODO
// Add - Card Component