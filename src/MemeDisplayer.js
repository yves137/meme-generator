export function MemeDiplayer({topText,bottomText,memeImage}){
    return (
        <div className="w-[550px] h-[400px] relative">
            <img src={memeImage || 'meme.jpg'} alt="" className="w-[550px] h-[400px] object-cover"/>
            <span className="uppercase absolute top-0 left-0 right-0 text-center p-3 text-4xl font-bold text-outline">{topText}</span>
            <span className="uppercase absolute bottom-0 left-0 right-0 text-center p-3 text-4xl font-bold text-outline">{bottomText}</span>
        </div>
    )
}