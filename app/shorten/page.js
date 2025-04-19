"use client";


import React, { useState } from "react";
import Link from "next/link";
const Shorten = () => {
    const [url,seturl] = useState("");
    const [shortUrl,setshortUrl] = useState("");
    const [generated,setgenerated] = useState(false);

    const generate = ()=>{
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      const raw = JSON.stringify({
        "url": url,
        "shorturl": shortUrl
        
      });
      
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
      
      fetch("/api/generate", requestOptions)
        .then((response) => response.json())
        .then((result) => {console.log(result)
         setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
         seturl("");
         setshortUrl("");
         console.log(result);
          alert("Url generated successfully!")
         
        })
        .catch((error) => console.error(error));
    }

    const handleUrlChange = (e) => {
       seturl(e.target.value);
    }
    
    const handleShortUrlChange = (e) => {
       setshortUrl(e.target.value);
    }
    
  return (
    <div>
       
        <input type="text" placeholder="Enter your URL" className="border-2 border-gray-300 rounded-lg p-2" onChange={handleUrlChange} />
        <input type="text" placeholder="Enter your preferred short URL text" className="border-2 border-gray-300 rounded-lg p-2" onChange={handleShortUrlChange} />
        
<button className="bg-blue-500 text-white px-4 py-2 rounded-2xl" onClick={generate} >Generate</button>
{generated && (
  <div>
    <span className='font-bold text-lg'>Your Link </span>
    <code>
      <Link target="_blank" href={generated}>{generated}</Link>
    </code>
  </div>
)}
        </div>
  );
}

export default Shorten;