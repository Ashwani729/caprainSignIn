import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className=" App">
      <div className="flex min-h-screen ">
        <div className="flex justify-center w-1/2 ">
          <div className="flex-row mt-40 w-72">
            <img
              className="flex w-48 h-24 mx-auto"
              src="	https://app.salescaptain.com/static/media/loginLogo.3814067f45867b0a416c.png"
              alt="captain-image"
            />
            <h1 className="text-xl font-medium ">Login</h1>
            <div class="  w-full max-w-xs">
              <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div class="mb-6">
                  <input
                    class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div class="flex items-center justify-between">
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Sign In
                  </button>
                  <a
                    class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div  className='bg-center bg-cover ' style = {{
          height:"756px",
          width:"762px",
          backgroundImage:
          'url("https://app.salescaptain.com/static/media/loginSidePanel.6cc7d5c0ea3bc4deefac.jpeg")'
        }} >
          <div className='flex w-5/6 mx-auto rounded-md h-96 mt-60 bg-slate-100 '>
            <div className='w-5/6 mx-auto h-5/6'>
                <div className='mt-6 mb-6 text-5xl font-semibold text-left'>
                  Give your business a 
                  <br></br>
                  Sales Captain Upgrade
                </div>
                <div className='mb-4 text-base text-left text-slate-600 '>
                Our AI-powered tools help local businesses modernize how 
                they communicate with their customers by facilitating online 
                reviews, personalized marketing campaigns, web chats,
                 payments, and more.
                </div>
                <p className='text-base text-left text-slate-600'> To learn more ,talk to an expert today</p>
                <div className='mt-4'>
                  <button  className='py-3 text-lg font-semibold text-white bg-orange-400 rounded-md px-7 '>Book an appointment</button>
                </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
