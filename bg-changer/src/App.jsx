import { useState } from 'react'


function App() {

  const [color, Setcolor] = useState("olive");
  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-9 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white
        px-5 py-2 rounded-3xl">
            <button onClick={() => { Setcolor("red") }} className='outline-none px-4
          py-1 rounded-full' style={{ backgroundColor: "red" }}>Red</button>
            <button onClick={() => { Setcolor("green") }} className='outline-none px-4
          py-1 rounded-full' style={{ backgroundColor: "green" }}>Green</button>
            <button onClick={() => { Setcolor("blue") }} className='outline-none px-4
          py-1 rounded-full' style={{ backgroundColor: "blue" }}>Blue</button>
            <button onClick={() => { Setcolor("orange") }} className='outline-none px-4
          py-1 rounded-full' style={{ backgroundColor: "orange" }}>Orange</button>
            <button onClick={() => { Setcolor("purple") }} className='outline-none px-4
          py-1 rounded-full' style={{ backgroundColor: "purple" }}>Purple</button>
            

          </div>
        </div>
       

      
      </div>




    </>
  )
}

export default App
