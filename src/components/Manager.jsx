import React, { useEffect } from 'react'
import { useState, useRef } from 'react' 
import { v4 as uuidv4 } from 'uuid';

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

        setpasswordArray([...password, {...form,id:uuidv4()}]);
        localStorage.setItem("passwords", JSON.stringify([...password, {...form,id:uuidv4()}]))
        console.log([...password, form]);
        setForm({ site: '', username: '', password: '' });
        alert("password saved successfully")
    }
    const deletePassword = (id) => {
        console.log("deleting password with id:", id);
    let confirm = window.confirm("Are you sure you want to delete this password?");
    if (confirm) {
        setpasswordArray(password.filter(item => item.id !== id));
        localStorage.setItem("passwords", JSON.stringify(password.filter(item => item.id !== id)));
    }


    }
    const editPassword = (id) => {
        console.log("editing password with id:", id);
       setForm(password.filter(item => item.id === id)[0]);
       setpasswordArray(password.filter(item => item.id !== id));
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
            <div className="absolute inset-0 -z-10 h-screen w-full bg-green-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
           
            <div className=" mx-auto bg-slate-450 md:mycontainer shadow-lg w-180 h-50">
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
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <button className='bg-green-500 text-white rounded-full mt-3 px-4 w-35 hover:bg-green-600 cursor-pointer' onClick={savePassword}>save password</button>
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
                                    <th>actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-[#BCF0DA]'>
                                {password.map((item, idx) => (
                                    <tr key={item.id || idx}>
                                        <td className='text-center'>
                                            <a href={item.site} target="_blank" className="text-black-600 hover:underline">{item.site}</a>

                                        </td>
                                        <td className='text-center'>{item.username}</td>
                                        <td className='text-center'>{item.password}</td>
                                        <td className='text-center'>
                                            <span className="flex items-center justify-center gap-2">
                                            <button onClick={() => editPassword(item.id)}
                                                    className="material-symbols-outlined text-black-600 hover:text-blue-800 align-middle"
                                                    style={{
                                                        fontSize: "20px", 
                                                        background: "none",
                                                        border: "none",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    edit
                                                </button>

                                                <button onClick={() => deletePassword(item.id)} title="Delete" className="material-symbols-outlined text-red-600 hover:text-red-800 align-middle" style={{ fontSize: "20px", background: "none", border: "none", cursor: "pointer" }}>
                                                    delete
                                                </button>
                                            </span>
                                        </td>
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
