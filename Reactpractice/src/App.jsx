import { Card } from "./component/Card";

 function App(){

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
  return (<>
    <div className=" flex justify-center">
      <div className="flex flex-col justify-center w-96 border-4 border-gray-700 ">
        <h1 className="text-purple-600 text-center m-4 font-bold text-lg" >Users List</h1>
      
        
          {
            users.map((eachitem)=>{
              return (
              <Card imageUrl={eachitem.imageUrl} name={eachitem.name} Role={eachitem.role}></Card>
              )
            })
          }
        
      </div>
    </div>
  </>
  )
}

export default App