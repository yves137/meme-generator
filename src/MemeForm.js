export function MemeForm({onTopTextChange,onBottomTextChange,onFetchImg}){
    return (
        <div className="my-16">
            <div className="flex gap-3 mb-7">
                <input className="border w-1/2 text-xl py-3 px-5 rounded-md" placeholder="Top Text" onChange={(e)=>onTopTextChange(e.target.value)}/>
                <input className="border w-1/2 text-xl py-3 px-5 rounded-md" placeholder="Bottom Text" onChange={(e)=>onBottomTextChange(e.target.value)}/>
            </div>
            <button className="px-7 py-5 rounded-lg bg-gradient-to-r from-[#692182] to-[#A626D1] w-full text-white font-semibold text-lg" onClick={()=>onFetchImg()}>Get a new meme image 🖼</button>
        </div>
    )
}