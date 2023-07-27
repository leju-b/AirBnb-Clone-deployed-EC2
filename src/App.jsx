import './App.css'
import NavBar from "./components/Header/header"
import Hero from "./components/Hero_section/hero"
import Section_one from "./components/Section1/section1"
import data from "./components/Section1/data"

function App() {

  const Dataelemets = data.map(datas=>{
    return <Section_one
          {...datas}
        //  datas = {datas}
        // coverImg = {datas.coverImg}
        // rating={datas.stats.rating}
        // id  ={datas.id}
        // location ={datas.location}
        // title ={datas.title}
        // price ={datas.price}
        // openSpots = {datas.openSpots}
    />
  })

  return(
    <div>
      <NavBar/>
      <Hero />
      <section className="card-section">
        {Dataelemets}
      </section>
      
    </div>
  )
}

export default App
