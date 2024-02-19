import { Camera } from "lucide-react"
import Logo from '../../../assets/User.jpg'

export function Header(){
    return(
        <header className="flex flex-row w-full itens-center gap-6 px-4 py-4 md:px-28 bg-white">

            <div className="flex flex-row items-center justify-center gap-5">
                <Camera />

                <a href="#" className="text-textColor font-bold hover:text-textHover">Home</a>
                <a href="#" className="text-textColor font-bold hover:text-textHover">Galeria</a>

            </div>

            <div className="flex itens-center w-full bg-BgInput text-textInput font-semibold">
                <input type="text" placeholder="Pesquise por imagens e coleções" className="w-full h-12 bg-transparent border-none outline-none p-4 rounded placeholder:text-textInput"/>
            </div>

            <img src={Logo} alt="User" className="w-10 h-10 rounded-full"/>
        </header>
    )
}