export function Header(){
    return (
        <div className="text-white flex justify-between items-center px-7 py-5 bg-gradient-to-r from-[#692182] to-[#A626D1]">
            <div className="flex gap-2 items-center">
                <img src="troll.png" alt="1" className="w-20"/>
                <p className="font-bold text-2xl">Meme Generator</p>
            </div>
            <p className="text-white font-medium text-lg">React Course - Project 3</p>
        </div>
    )
}