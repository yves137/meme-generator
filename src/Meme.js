import { MemeForm } from "./MemeForm"
import { MemeDiplayer } from "./MemeDisplayer"
import { useState } from "react"
export function Meme(){
    const [topText,setTopText] =useState("")
    const [bottomText,setBottomText] =useState("")
    const [memeImage,setMemeImage]=useState('')

    function handleFetchImage(){
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(({data:{memes}})=>{
            const radomImg= Math.floor(Math.random()*memes.length)
            return memes[radomImg]
        }).then(({url})=>{
            setMemeImage(url)
        })
        .catch(err=>setMemeImage(''))
    }

    function handleTopText(txt){
        setTopText(txt)
    }

    function handleBottomText(txt){
        setBottomText(txt)
    }
    return (
        <div className="flex flex-col items-center">
            <MemeForm onTopTextChange={handleTopText} onBottomTextChange={handleBottomText} onFetchImg={handleFetchImage}/>
            <MemeDiplayer topText={topText} bottomText={bottomText} memeImage={memeImage}/>
        </div>
    )
}