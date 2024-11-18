import Image from "next/image"

const UserCard =({type}:{type: string}) => {
    return(
        <div className = ' rounded-2xl odd:bg-violet-200 even:bg-yellow-200 p-4 flex-1'>
            <div className="flex justify-between items-center">
                <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600 ">2024/25</span>
                <Image src ="/more.png" alt="" width={20} height={20}/>
            </div>
            <h1 className="text-2xl my-4">1.234</h1>
            <h2 className="text-gray-500 text-sm cpitalize">{type}</h2>

            {/* <div className=""></div>
            <div className=""></div>
            <div className=""></div> */}
        </div>
    )
}

export default UserCard