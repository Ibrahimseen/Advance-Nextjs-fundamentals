import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>

    <Navbar/>

    <div className="cards">
      <Card title="card1" Description="Ibrahim"/>
      <Card title="card1" Description="Ibrahim"/>
      <Card title="card1" Description="Ibrahim"/>
      <Card title="card1" Description="Ibrahim"/>
      {/* <Card/>
      <Card/>
      <Card/>
      <Card/> */}
    </div>
    <Footer/>

      </>

  )
}

export default App
