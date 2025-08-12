import React from 'react'

const Manager = () => {
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
            <div className=" mx-auto bg-slate-450 w-55 mycontainer shadow-lg w-70 ">
            <div className='text-black flex flex-col p-4 '>
                <h1>PassOP</h1>
                <p>your own password manager</p>
                <input className="bg-slate-100 " type="text" />

                <div className="flex"></div>
                <input className='bg-slate-600' type="text" />

                <input className='bg-slate-600' type="text" />

            </div>
            </div>
        </>
    )

}

export default Manager