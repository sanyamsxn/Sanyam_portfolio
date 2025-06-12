import { useEffect, useState } from "react";
import { Heart, HeartFilled } from 'lucide-react';
import "./like.css"

export default function Like(){

    const[likes, setLikes] = useState(0);
    const[liked, setLiked] = useState(false);


    useEffect(()=>{
        const hasLiked = localStorage.getItem("portfolio-liked");
        if(hasLiked){
            setLiked(true);
        }

        //by default its a get request
        fetch('/api/likes')
            .then((res)=>res.json())
            .then((data)=> {console.log(data);setLikes(data.likes)});
    }, []);

    const handleLike = async () =>{
        if(liked){
            await fetch('/api/likes', {method: 'DELETE'});
            setLikes((prev)=> prev-1);
            setLiked(false);
            localStorage.removeItem('porfolio-liked');
            return;
        }
        await fetch('/api/likes', {method:'POST'});

        //WE ARE updating the number of likes otherwise we have to send a get request again to get the updated
        // likes count.
        setLikes((prev)=>prev+1);
        setLiked(true);
        localStorage.setItem('portfolio-liked', 'true');
    }

    return (
        <div className="flex flex-row items-center gap-2 mt-4">
      <button id ="like" onClick={handleLike} className="transition duration-300">
        {liked ? (
          <Heart  className="h-8 w-8 text-pink-500 fill-pink-500" />
        ) : (
          <Heart className="h-8 w-8 text-gray-400" />
        )}
      </button>
      <p className="text-xl text-gray-300">
        {liked ? ' ' : 'Love this? React!'}
      </p>
      <p className="text-xl text-gray-400"> Loved By: {likes}</p>
    </div>
    )
}