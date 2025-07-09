import React from 'react'

function Home() {

    const LogData = (a,b) => {
        console.log(a+b)
    }
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Hello</h1>
        <h2 className="text-2xl text-gray-600 mb-8">Welcome to my app</h2>
        <button 
          onClick={ ()=> LogData(10,20)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
        >
          ClickMe
        </button>
    </div>
  )
}

export default Home
