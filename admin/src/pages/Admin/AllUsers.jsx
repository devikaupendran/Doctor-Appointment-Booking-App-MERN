import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext';

const AllUsers = () => {
    const { users, admintoken, getAllUsers } = useContext(AdminContext);
    const { calculateAge } = useContext(AppContext);

    //whenever the adminToken will updated then it will execute the function
    useEffect(() => {
        if (admintoken) {
            getAllUsers()
        }
    }, [admintoken]);

    return (
        <div className='w-full max-w-6xl m-5'>
            <p className='mb-3 text-lg font-medium'>All Appointments</p>
            <div className='bg-white border border-zinc-400 rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll'>
                <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_2fr_3fr_2fr_2fr] grid-flow-col py-3 px-6 border-b border-b-zinc-400'>
                    <p>#</p>
                    <p>Name</p>
                    <p>Age</p>
                    <p>Phone</p>
                    <p>Email</p>
                    <p>Gender</p>
                    <p>Address</p>
                </div>
                {
                    users.map((item, index) => {
                        return (
                            <div key={index} className='flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_2fr_3fr_2fr_2fr] items-center text-gray-500 py-3 px-6 border-b border-b-zinc-400 hover:bg-gray-100 '>

                                {/* index  */}
                                <p className='max-sm:hidden'>{index + 1}</p>

                                {/* patient image and name  */}
                                <div className='flex items-center gap-2'>
                                    <img src={item.image} alt="patientImage" className='w-8 rounded-full' />
                                    <p>{item.name}</p>
                                </div>

                                {/* patient age  */}
                                <p className='max-sm:hidden'>{calculateAge(item.dob)}</p>

                                {/*  Phone */}
                                <div className='flex items-center gap-2'>
                                    <p>{item.phone}</p>
                                </div>

                                {/*  email */}
                                <div className='flex items-center gap-2'>
                                    <p>{item.email}</p>
                                </div>
                            
                                {/*  gender */}
                                <div className='flex items-center gap-2'>
                                    <p>{item.gender}</p>
                                </div>

                                {/* address  */}
                                <div className='flex items-center gap-2'>
                                    <p><span>{item.address.line1}</span>, <span>{item.address.line2}</span></p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllUsers


