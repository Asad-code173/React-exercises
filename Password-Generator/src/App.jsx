import { useState, useCallback, useEffect ,useRef} from 'react'


function App() {
  const [Length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  // set password use isliye kiya hy kyoun kay input field ko bhee optimize karnahy
  // ref hook use to provide reference it takes a variable
  const passwordref = useRef("");

  const passwordgenerator = useCallback(() => {
    let password = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      string += "0123456789";
    }
    if (charAllowed) {
      string += "@#$%!^*?/|\`~-_&+";
    }
    for (let i = 1; i <= Length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      password += string.charAt(char);

    }

    setPassword(password);

  }, [Length, numberAllowed
    , charAllowed, setPassword])
    
    const copypasswordtoclipboard = useCallback(()=>{
      passwordref.current?.select();
      passwordref.current?.setSelectionRange(0,8)
      window.navigator.clipboard.writeText(password);
    },[password]) 

    
  useEffect(() => {
    passwordgenerator();
  }, [Length, numberAllowed, charAllowed, passwordgenerator])
  //passwordgenerator();
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-3xl text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden my-4'>
          <input
            type="text"
            value={password} className='outline-none w-full py-1 px-3'
            placeholder='Password' readOnly 
            ref={passwordref} // har aik input ke andar ap refernce pass kartay ho
            />
          <button 
          onClick={copypasswordtoclipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5
         shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={8}
              max={16}
              value={Length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label>Length:{Length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}

            />
            <label htmlFor="numberInput">Numbers</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed} id="characterInput"


              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />

            <label htmlFor="characterInput">Characters</label>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
