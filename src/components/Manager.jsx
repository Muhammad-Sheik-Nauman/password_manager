import React, { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const passwordRef = useRef()
    const [showPwd, setShowPwd] = useState(false); 
    const [password, setPasswordArray] = useState([])
    const [form, setForm] = useState({ site: '', username: '', password: '' })

    useEffect(() => {
        let passwords = localStorage.getItem('passwords');
        if (passwords) {
            setPasswordArray(JSON.parse(passwords));
        }
    }, [])

    const showPassword = () => {
        setShowPwd((prev) => !prev);
        if (passwordRef.current) {
            passwordRef.current.type = showPwd ? "password" : "text";
        }
    }

    const savePassword = () => {
        const newArray = [...password, { ...form, id: uuidv4() }]
        setPasswordArray(newArray);
        localStorage.setItem("passwords", JSON.stringify(newArray))
        setForm({ site: '', username: '', password: '' });
        alert("Password saved successfully ")
    }

    const deletePassword = (id) => {
        if (window.confirm("Are you sure you want to delete this password?")) {
            const updated = password.filter(item => item.id !== id);
            setPasswordArray(updated);
            localStorage.setItem("passwords", JSON.stringify(updated));
        }
    }

    const editPassword = (id) => {
        setForm(password.find(item => item.id === id));
        setPasswordArray(password.filter(item => item.id !== id));
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <div 
          className="mx-auto shadow-lg w-full max-w-2xl mt-8 rounded-lg"
          style={{ backgroundColor: "var(--background)", color: "var(--text)" }}
        >
            <div className='flex flex-col p-4'>
                <h1 className='text-center text-3xl font-bold' style={{ color: "var(--primary)" }}>
                  &lt;PassOP&gt;
                </h1>
                <p className='text-center'>Your own password manager</p>

                
                <input 
                  className="border rounded-full px-2 py-1 mt-2"
                  style={{ backgroundColor: "var(--background)", color: "var(--text)", borderColor: "var(--primary)" }}
                  value={form.site} onChange={handleChange} name='site' type="text" placeholder="Enter website URL" 
                />

                <div className='flex flex-row gap-3 mt-3'>
                    <input 
                      className='border rounded-full w-full px-2 py-1'
                      style={{ backgroundColor: "var(--background)", color: "var(--text)", borderColor: "var(--primary)" }}
                      value={form.username} onChange={handleChange} name='username' type="text" placeholder='Enter username'
                    />
                    <div className="relative w-full">
                        <input
                            ref={passwordRef}
                            className='border rounded-full w-full px-2 py-1 pr-6'
                            style={{ backgroundColor: "var(--background)", color: "var(--text)", borderColor: "var(--primary)" }}
                            value={form.password}
                            onChange={handleChange}
                            name='password'
                            type={showPwd ? "text" : "password"}
                            placeholder='Enter password'
                        />
                        <span className='absolute inset-y-0 right-2 flex items-center cursor-pointer' onClick={showPassword}>
                          👁
                        </span>
                    </div>
                </div>

                <button 
                  className='mt-4 py-2 px-4 rounded-full font-semibold'
                  style={{ backgroundColor: "var(--primary)", color: "white" }}
                  onClick={savePassword}
                >
                  Save Password
                </button>
            </div>

            
            <div className="m-3">
                <h2 className='font-bold mb-2'>Your Passwords</h2>
                {password.length === 0 && <div className='text-center'>No password to show</div>}
                {password.length > 0 && (
                    <table className="table-auto w-full border rounded-md">
                        <thead style={{ backgroundColor: "var(--primary)", color: "white" }}>
                            <tr>
                                <th className='py-1'>Site</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {password.map((item) => (
                                <tr key={item.id}>
                                    <td className='text-center'>
                                        <a href={item.site} target="_blank" rel="noreferrer" className="underline">
                                          {item.site}
                                        </a>
                                    </td>
                                    <td className='text-center'>{item.username}</td>
                                    <td className='text-center'>{item.password}</td>
                                    <td className='text-center flex gap-2 justify-center'>
                                        <button onClick={() => editPassword(item.id)} style={{ color: "var(--primary)" }}>✏️</button>
                                        <button onClick={() => deletePassword(item.id)} style={{ color: "red" }}>🗑</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}

export default Manager
