import { Header } from "./components/Header"
import { Card } from "./components/Card"
import Foto1 from '../assets/Foto_1.jpg'  
import Foto2 from '../assets/Foto_2.jpg'  
import Foto3 from '../assets/Foto_3.jpg'  
import Foto4 from '../assets/Foto_4.jpg'  
import Foto5 from '../assets/Foto_5.jpg'  
import Foto6 from '../assets/Foto_6.jpg'  
import Foto7 from '../assets/Foto_7.jpg'  
import Foto8 from '../assets/Foto_8.jpg'  
import Foto9 from '../assets/Foto_9.jpg'  

export function App() {
  return (
    <div className="w-full h-full">
      <Header />

      <main className="flex flex-col items-center gap-9 w-full bg-BgGray py-8 px-12 lg:items-start xl:px-28 ">
        <h1 className="text-2xl font-bold text-textHover">Galeria</h1>

          <div className="grid grid-rows-3 gap-10 itens-center place-items-center md:grid-rows-none md:grid-cols-2 lg:grid-cols-3">

            <Card img={Foto1} title='Workspace elétrica' />
            <Card img={Foto2} title='Dark and red' />
            <Card img={Foto3} title='Organização e grids' />
            <Card img={Foto4} title='Colméia' />
            <Card img={Foto5} title='Setup de escritor' />
            <Card img={Foto6} title='Ergonomia e cores' />
            <Card img={Foto7} title='Show de luzes' />
            <Card img={Foto8} title='WDeep purple' />
            <Card img={Foto9} title='Multi-Screen' />

          </div>

      </main>

      <footer className="bg-white text-textHover text-center px-4 py-7">© 2023 - Rocketseat Explorer</footer>
    </div>
  )
}