import React, { useEffect } from 'react'
import { useState, useRef } from 'react'

const Manager = () => {
    const passwordRef = useRef()
    const [showPwd, setShowPwd] = useState(false);
    const showPassword = () => {
        setShowPwd((prev) => !prev);
        if (passwordRef.current) {
            passwordRef.current.type = showPwd ? "password" : "text";
        }
    }
    




    const savePassword = () => {
        
        setpasswordArray([...password, form]);
        localStorage.setItem("passwords", JSON.stringify([...password, form]))
        console.log([...password, form]);
    }
    const [password, setpasswordArray] = useState([])
    useEffect(() => {
        let passwords = localStorage.getItem('passwords');
        let passwordArray
        if (passwords) {
            setpasswordArray(JSON.parse(passwords));

        }

    }, [])
    const [form, setForm] = useState({ site: '', username: '', password: '' })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
            <div className=" mx-auto bg-slate-450 mycontainer shadow-lg w-180 h-50">
                <div className='text-black flex flex-col p-4 justify-between'>
                    <h1 className='text-center'><span className='text-green-500 font-bold text-3xl '>&lt;PassOP&gt;</span></h1>
                    <p className='text-center'>your own password manager</p>
                    <input className="bg-slate-100 border border-gray-300 rounded-full px-2 " value={form.site} onChange={handleChange} name='site' type="text" placeholder="enter website url " />
                    <div className='flex flex-row space-x-5 mt-4'>
                        <input className='bg-slate-100 border border-gray-300 rounded-full w-100 px-2 ' value={form.username} onChange={handleChange} name='username' type="text" placeholder='enter username ' />
                        <div className="relative w-40">
                            <input
                                ref={passwordRef}
                                className='bg-slate-100 border border-gray-300 rounded-full w-67 px-2 pr-8'
                                value={form.password}
                                onChange={handleChange}
                                name='password'
                                type={showPwd ? "text" : "password"}
                                placeholder='enter password'
                            />
                            <span className='absolute inset-y-0 right-2 flex items-center cursor-pointer ' onClick={showPassword}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500 hover:text-black">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12z" />
                                    <circle cx="12" cy="12" r="3"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <button className='bg-green-500 text-white rounded-full mt-3 px-4 w-35 hover:bg-green-600 cursor-pointer' onClick={savePassword}>add password</button>
                    </div>
                </div>
                <div className="passwords m-3">
                    <h2 className='font-bold py-1.5 '>your passwords</h2>
                    {password.length === 0 && <div className='text-center'>no password to show</div>}
                    {password.length !== 0 && <div>
                    <table className="table-auto w-full overflow-hidden rounded-md ">
                        <thead className=' bg-green-700 text-white'>
                            <tr className='border-white'>
                                <th className='py-1'>Site</th>
                                <th>username</th>
                                <th>password</th>
                            </tr>
                        </thead>
                        <tbody className='bg-[#BCF0DA]'>
                            {password.map((item, idx) => (
                                <tr key={item.id || idx}>
                                    <td className='text-center'>
                                        <a href={item.site} target="_blank" className="text-blue-600 hover:underline">{item.site}</a>
                                    </td>
                                    <td className='text-center'>{item.username}</td>
                                    <td className='text-center'>{item.password}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>}
                    </div>
                    

                </div>
            
        </>
    )

}

export default Manager
