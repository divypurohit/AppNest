"use client"
import Lookup from "@/app/data/Lookup";
import { ArrowRight ,Link} from "lucide-react";
import React, { useState } from "react";


function Hero() {
    const [userInput , setUserInput]=useState();
  return (
    <div className="flex flex-col items-center mt-36 xl:mt-42 gap-2">
      <h2 className="font-bold text-4xl">{Lookup.HERO_HEADING}</h2>
      <p className="text-grey-400 font-medium">{Lookup.HERO_HEADING}</p>
      <div className="p-5 border rounded-xl max-w-2xl w-full gap-2 ">
        <div className="flex gap-2">
          <textarea onChange={(event)=>setUserInput(event.target.value)} placeholder={Lookup.INPUT_PLACEHOLDER} className="outline-none bg-transparent w-full h-32 max-h-55 resize-none" />
         { userInput && <ArrowRight className="bg-blue-500 p-2 h-8 w-8 rounded-md cursor-auto" />}
        </div>
        <div>
        <Link className="h-25 w-25"/>
      </div>
      </div>
      <div>
  {LookupData?.SUGGSTIONS?.map((suggestion, index) => (
    <h2 key={index}>{suggestion}</h2>
  ))}
</div>

    </div>
  );
}

export default Hero;
