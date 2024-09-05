import { NavLink, Outlet } from "react-router-dom"
import { FaArrowLeft, FaArrowRight, FaRegQuestionCircle } from "react-icons/fa";
import { useEffect, useState } from "react";


function App() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
    // Convert file to base64 string
    const getBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    };
  
    // Retrieve images from local storage when the component mounts
    useEffect(() => {
      const storedImages = JSON.parse(localStorage.getItem('uploadedImages')) || [];
      setImages(storedImages);
    }, []);
  
    // Save images to local storage whenever they change
    useEffect(() => {
      if (images.length > 0) {
        localStorage.setItem('uploadedImages', JSON.stringify(images));
      }
    }, [images]);
    const handleImageUpload = async (event) => {
      const files = event.target.files;
      const newImages = [];
      for (let i = 0; i < files.length; i++) {
        const base64 = await getBase64(files[i]);
        newImages.push(base64);
      }
      setImages([...images, ...newImages]);
    };

    // slide 

  const handlePrevClick = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
 

  return (
    <>
      <div className="w-[512px] min-h-screen lg:w-[1260px] mx-auto bg-[#292c30] ">
        <div className="grid lg:grid-cols-2 lg:gap-8 lg:p-8  pt-10">
          <div className="hidden lg:flex lg:h-[550px] w-[200px] lg:w-[600px] border-2 border-solid border-[#8cb1d7] rounded-xl bg-[#575756]">
          </div>
          <div className="w-[370px] lg:w-[600px] mx-auto">
            <div className="h-[300px] lg:h-[270px] w-[370px] lg:w-[550px] shadow-lg shadow-black rounded-xl bg-[#373d43]">
              <div className="grid grid-cols-3 w-[380px] lg:w-[550px]">
                <div className="w-[20px] lg:w-[40px]">
                  <div>
                  <FaRegQuestionCircle className="text-[#99a0ae] text-xl mt-10 ml-1 lg:ml-5"/>
                  </div>
                  <div className="grid grid-cols-2 p-0 m-0 gap-1 mt-16 ml-1 lg:ml-4">
                    <div className="h-3 w-2 lg:w-3 bg-[#4b4e55]"></div>
                    <div className="h-3 w-2 lg:w-3 bg-[#4b4e55]"></div>
                    <div className="h-3 w-2 lg:w-3 bg-[#4b4e55]"></div>
                    <div className="h-3 w-2 lg:w-3 bg-[#4b4e55]"></div>
                    <div className="h-3 w-2 lg:w-3 bg-[#4b4e55]"></div>
                    <div className="h-3 w-2 lg:w-3 bg-[#4b4e55]"></div>
                  </div>
                </div>
                <div className="w-[320px] lg:w-[400px] h-[200px]">
                  {/* navbar */}
                  <div className=" bg-[#171616] text-[#696f72] w-[320px] lg:w-[400px] -ml-24 lg:-ml-32 mt-6 rounded-xl">
                    <div className="">
                      <ul className="p-1 gap-0 lg:p-2 menu  menu-horizontal  lg:gap-8">
                        <NavLink to={'/'} style={({isActive})=>(isActive?{backgroundColor:"#29292e",borderRadius:"15px", color:"#dfdfdf", font:"bold"}:{color:"#96a0a4"})}><li><a>About Me</a></li></NavLink>
                        <NavLink to={'/experience'} style={({isActive})=>(isActive?{backgroundColor:"#29292e",borderRadius:"15px", color:"#dfdfdf", font:"bold"}:{color:"#96a0a4"})}><li><a>Experience</a></li></NavLink>
                        <NavLink to={'/recomended'} style={({isActive})=>(isActive?{backgroundColor:"#29292e",borderRadius:"15px", color:"#dfdfdf", font:"bold"}:{color:"#96a0a4"})}><li><a>Recomended</a></li></NavLink>
                      </ul>
                    </div>
                
                  </div>
                  <div className="">
                  <Outlet></Outlet>
                  </div>
                </div>
                {/* nav bar end */}
                <div className="w-[10px] lg:w-[40px]">
                <div className="h-16 w-3 rounded-md  mt-28 ml-24 lg:ml-40 " style={{ background: 'linear-gradient(to bottom, #7e7e81, #595b61)' }}></div>
                </div>
              </div>
            </div>
            <div className="h-[300px] lg:h-[270px] w-[370px] lg:w-[550px] shadow-lg shadow-black   rounded-xl mt-3 bg-[#373d43]">
            <div className="grid grid-cols-3 w-[380px] lg:w-[550px]">
                <div className=" w-[20px] lg:w-[40px]">
                  <div>
                  <FaRegQuestionCircle className="text-[#99a0ae] text-xl mt-10 ml-1 lg:ml-5"/>
                  </div>
                  <div className="grid grid-cols-2 p-0  gap-1 mt-16 ml-2 lg:ml-4">
                    <div className="h-3 w-3 bg-[#4b4e55]"></div>
                    <div className="h-3 w-3 bg-[#4b4e55]"></div>
                    <div className="h-3 w-3 bg-[#4b4e55]"></div>
                    <div className="h-3 w-3 bg-[#4b4e55]"></div>
                    <div className="h-3 w-3 bg-[#4b4e55]"></div>
                    <div className="h-3 w-3 bg-[#4b4e55]"></div>
                  </div>
                </div>
                <div id="image-gallary" className="w-[320px] lg:w-[400px] h-[200px]">
                
                  <div className="  text-[#696f72]  -ml-20 lg:-ml-32 mt-6 rounded-xl">
                    <div className="">
                      <ul className="menu  menu-horizontal items-center">
                        <button className="btn bg-[#161617]  text-white border-none p-4 rounded-2xl">Gallery</button>
                        <label htmlFor="image-upload" className="btn bg-[#40464e] text-[#ecedec] rounded-full border-none shadow-sm shadow-slate-800 ml-4 lg:ml-24 cursor-pointer">
                          + ADD IMAGE
                          <input id="image-upload" type="file" multiple accept="image/*" onChange={handleImageUpload} className="hidden" />
                        </label>
                        <div className="ml-2 lg:ml-10 ">
                          <button className=" left p-3 shadow-2xl  drop-shadow-md shadow-cyan-400 transition-all duration-150 text-[#6f787c] 
                          rounded-full bg-[#1d1e20]" onClick={handlePrevClick} id=""> <FaArrowLeft /></button>

                          <button className="ml-2 shadow-2xl  drop-shadow-md shadow-cyan-400 transition-all duration-150  text-[#6f787c] p-3 rounded-full
                           bg-[#1d1e20]" onClick={handleNextClick}><FaArrowRight /></button>
                        </div>
                      </ul>
                      <div className="slider-container w-[300px] lg:w-[430px] overflow-hidden relative mt-4">
                      <div className="flex  gap-2 transition-transform duration-500" 
                     style={{ transform: `translateX(${-currentIndex * 33.33}%)` }}>
                        {images.map((image, index) => (
                          <div key={index} className="slide w-[40px] lg:w-[100px] h-[200px] ">
                            <img className="h-36 w-full  rounded-lg" src={image} alt={`Uploaded ${index}`} />
                          </div>
                        ))}
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>

          </div>
        </div>
      </div>
      <style>
      {`
          .slider-container {
            display: flex;
            overflow: hidden;
            
          }
          .slide {
            min-width: 33.33%;
            height: 150px;
          }
          .slide img {
            width: 200px;
            height: 100%;

          }
        
        `}
      </style>
    </>
  )
}

export default App
