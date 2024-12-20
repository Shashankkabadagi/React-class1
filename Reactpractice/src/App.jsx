import { useState } from "react";
import { Card } from "./component/Card";
import Homepage from "./component/Homepage";


const users=[
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer'
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer'
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer'
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer'
  }
]

 function App(){


   const[searchInput,setsearchInput]=useState('')
   const[dynamicUsers,setdynamicUsers]=useState(users)



  const  deleteFu= (id)=>{
    const list= dynamicUsers.filter((eachitem)=>{
    return(
        eachitem.uniqueNo!==id
    )
  })
  setdynamicUsers(list)
  }

  function inputChange(event){
    setsearchInput(event.target.value)
  }

  const filteredUser=dynamicUsers.filter((eachitem)=>{
    return(
      eachitem.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
    )
  })

  return (<>
    <div className=" flex justify-center">
      <div className="flex flex-col justify-center w-96 border-4 border-gray-700 ">
        <h1 className="text-purple-600 text-center m-4 font-bold text-lg" >Users List</h1>
        <input type="text" placeholder="search" onChange={inputChange} className="w-80 border-4 mx-8 border-gray-500 rounded-lg"/>
        
          {
            filteredUser.map((eachitem,index)=>{
              return (
              <Card key={index} imageUrl={eachitem.imageUrl} id={eachitem.uniqueNo} deleteFU={deleteFu} name={eachitem.name} Role={eachitem.role}></Card>
              )
            })
          }
        
      </div>
    </div>
  </>
  )
}

export default App