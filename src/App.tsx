import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button,ButtonGroup } from "@material-tailwind/react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-red-500 text-[#FFF] text-center w-1/2" >Vite + React!!!!!</h1>
      
      <div className="flex my-10 text-center">
        <div className="w-14 flex-none bg-blue-500 ml-4 py-4 rounded-xl">01</div>
        <div className="w-64 flex-1 bg-blue-500 ml-4 py-4 rounded-xl">02</div>
        <div className="w-32 flex-1 bg-blue-500 ml-4 py-4 rounded-xl">03</div>

        <div className="bg-blue-500 rounded-xl w-20  h-40 flex justify-center items-center ml-4">
          <a href="https://react.dev" target="_blank">
            <img src={viteLogo} />
          </a>
        </div>
        <div className="bg-blue-500 rounded-xl w-20  h-40 flex justify-center items-center ml-4">
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} />
          </a>
        </div>
      </div>


      <ButtonGroup className="ml-10">
        <Button variant="outline">One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <Button className="ml-10">Button</Button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
