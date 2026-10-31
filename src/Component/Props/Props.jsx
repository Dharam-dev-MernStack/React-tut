import React from 'react'

// const Props = (props) => { we can do destructuring and direct give projectname
    // console.log(props.username)
    const Props =({Projectname,btntext="visit me "})=>{
                      {/* visit me  if any  one not pass the btntext in  props then  this will  show  */}

        console.log(Projectname)

  return (
    <>
    <div className="flex justify-center p-6">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition">
        <img 
          src="https://picsum.photos/400/250" 
          alt="project" 
          className="w-full h-48 object-cover" 
        />
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-900">{Projectname}</h3>
          <p className="text-sm text-gray-500 mt-2">
            Built with React and Tailwind CSS. Clean, fast and responsive.
          </p>
          <div className="flex gap-2 mt-4">
            <button className="flex-1 bg-black text-white py-2 rounded-xl text-sm hover:bg-gray-800">
              Live Demo
            </button>
            <button className="flex-1 bg-gray-100 py-2 rounded-xl text-sm hover:bg-gray-200">
              {btntext} 
            </button>
          </div>
        </div>
      </div>
    </div>

      
    </>
  )
}

export default Props
