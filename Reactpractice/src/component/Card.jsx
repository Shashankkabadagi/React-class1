export function Card(props){
    const{imageUrl,name,Role,id,deleteFU}=props

    function deleteIt(){
        deleteFU(id)
        console.log(id)
    }

    return (
        <div className="flex justify-center w-80 border-4 mx-8 m-2 border-gray-500 rounded-xl">
            <div className="my-2">
                <img className='rounded-full w-20 h-20 mx-2' src={imageUrl} alt="image" />
            </div>
            <div className="pt-3">
                <h3 className="font-semibold" >name:<span className="font-bold">{name}</span></h3>
                <p className="font-semibold">Role:<span className="font-bold text-blue-400">{Role}</span></p>
                <button className="border-2 bg-blue-300 border-red-950 rounded-md font-semibold" onClick={deleteIt}>Delete</button>
            </div>
        </div> 
    )
}