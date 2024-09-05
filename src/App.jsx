import { NavLink, Outlet } from "react-router-dom"
import { FaRegQuestionCircle } from "react-icons/fa";


function App() {


  return (
    <>
      <div className="">
        <div className="grid grid-cols-2 gap-8 p-8 bg-[#292c30]">
          <div className="h-[550px] w-[600px] border-2 border-solid border-[#8cb1d7] rounded-xl bg-[#575756]">
          </div>
          <div>
            <div className="h-[270px] w-[550px] border-2 border-solid border-black rounded-xl bg-[#373d43]">
              <div className="grid grid-cols-3 w-[550px]">
                <div className="w-[40px]">
                  <div>
                  <FaRegQuestionCircle className="text-[#99a0ae] text-xl mt-10 ml-10"/>
                  </div>
                  <div className="grid grid-cols-2 p-0 m-0 gap-1 mt-16 ml-4">
                    <div className="h-3 w-3 bg-[#4b4e55]"></div>
                    <div className="h-3 w-3 bg-[#4b4e55]"></div>
                    <div className="h-3 w-3 bg-[#4b4e55]"></div>
                    <div className="h-3 w-3 bg-[#4b4e55]"></div>
                    <div className="h-3 w-3 bg-[#4b4e55]"></div>
                    <div className="h-3 w-3 bg-[#4b4e55]"></div>
                  </div>
                </div>
                <div className="w-[400px] h-[200px]">
                  {/* navbar */}
                  <div className=" bg-[#171616] text-[#696f72] w-[350px]  -ml-20 mt-6 rounded-xl">
                    <div className="">
                      <ul className="menu  menu-horizontal ">
                        <NavLink to={'/'}><li><a>About Me</a></li></NavLink>
                        <NavLink to={'/experience'}><li><a>Experience</a></li></NavLink>
                        <NavLink to={'/recomended'}><li><a>Recomended</a></li></NavLink>
                      </ul>
                    </div>

                  </div>
                  <Outlet></Outlet>
                </div>
                {/* nav bar end */}
                <div className="w-[40px]">
                <div className="h-16 w-3 rounded-md  mt-28 ml-40 " style={{ background: 'linear-gradient(to bottom, #7e7e81, #595b61)' }}></div>
                </div>
              </div>
            </div>
            <div className="h-[270px] w-[550px] border-2 border-solid border-black rounded-xl mt-3 bg-[#373d43]"></div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
