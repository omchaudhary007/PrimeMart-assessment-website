import { useState} from "react"


const Sidebar = ({sidebarStatus,setSidebar}) => {
  console.log(sidebarStatus)
  return (
    <div onClick={()=>{setSidebar(false)}} className={`transition-all duration-500 fixed  min-w-[50%]  ${sidebarStatus?'left-0':'-left-1/2'} max-w-[30%] overflow-hidden bg-green-500`}>
      <div className="p-4">
        <h1>Header 1</h1>
        <p>This is some data about this header</p>
      </div>
      <p className="line h-[0.5px] w-full bg-red-500"></p>
      <div className="p-4">
        <h1>Header 2</h1>
        <p>This is some data about this header</p>
      </div>
      <p className="line h-[0.5px] w-full bg-red-500"></p>
      <div className="p-4">
        <h1>Header 3</h1>
        <p>This is some data about this header</p>
      </div>
      <p className="line h-[0.5px] w-full bg-red-500"></p>
      <div className="p-4">
        <h1>Header 4</h1>
        <p>This is some data about this header</p>
      </div>
      <p className="line h-[0.5px] w-full bg-red-500"></p>
      <div className="p-4">
        <h1>Header 5</h1>
        <p>This is some data about this header</p>
      </div>
      <p className="line h-[0.5px] w-full bg-red-500"></p>
    </div>
  )
}

export default Sidebar
