export function Card({img,title}){
    return(
        <div className="w-[350px]">
            <img src={img} alt=""/>
            
            <div className="flex flex-col gap-3 bg-white p-6 rounded-b-lg">
            <span className="text-lg text-textHover font-bold">{title}</span>
            <p className="text-xs bg-BgGray w-fit p-[7px]">TAG</p>
            </div>
    </div>
    )
}