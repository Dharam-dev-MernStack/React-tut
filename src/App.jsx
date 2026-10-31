import Props from "./Component/Props/Props"

function App() {
  let myobj = {
    name:"dharam",
    age:29
  }
  let newarr = [1,2,3,4,5,6,7,8]

  return (
   <>
   <h1 className="text-3xl font-bold text-red-500 bg-green-500 m-5 text-center ms-3">React Course </h1>
     <Props sumobj={myobj} arr = {newarr} Projectname="Restaurant" btntext="gitcode" />

     <Props sumobj={myobj} arr = {newarr} Projectname="ecommerce"  />

       

   </>
  )
}

export default App
