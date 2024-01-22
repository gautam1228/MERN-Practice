import './App.css'

function App() {

  return (
    <>
      <div className='flex justify-between'>
        <div className='bg-red-500'>Hi</div>
        <div className='bg-green-500'>Hi</div>
        <div className='bg-yellow-500'>Hi</div>
        <div className='bg-blue-500'>Hi</div>

        {/* raw css way */}
        {/* <div style = {{backgroundColor : "green"}}>Hi</div>
        <div style = {{backgroundColor : "yellow"}}>Hi</div>
      <div style = {{backgroundColor : "blue"}}>Hi</div> */}

      </div>

      <div><br></br></div>

      <div className='grid grid-cols-3'>
        <div className='bg-red-500'>Hi</div>
        <div className='bg-green-500'>Hi</div>
        <div className='bg-yellow-500'>Hi</div>
      </div>

      <div><br></br></div>
      
      <div className='grid grid-cols-4'>
        <div className='bg-red-500'>Hi</div>
        <div className='bg-green-500 col-span-2'>Hi</div>
        <div className='bg-yellow-500'>Hi</div>
      </div>
      
      <div><br></br></div>
      
      <div className='grid grid-cols-3'>
        <div className='bg-red-500'>Hi</div>
        <div className='bg-green-500 col-span-2'>Hi</div>
        <div className='bg-yellow-500'>Hi</div>
      </div>

      <div><br></br></div>
      
      <div className='bg-red-500 md:bg-blue-500 lg:bg-yellow-500'>
        Change the window size and see the magic
      </div>

      <div><br></br></div>

      <div className='grid grid-cols-1 md:grid grid-cols-3'>
        <div className='bg-red-500'>Hi</div>
        <div className='bg-green-500'>Hi</div>
        <div className='bg-yellow-500'>Hi</div>
      </div>

    </>
  )
}

export default App
