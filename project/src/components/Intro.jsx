import React from 'react'

export default function Intro(){
    return(
        <div className='bg-green-400 mx-44'>
            <div>
            <h3>Email</h3>
            <input type="text" className='border border-black' />
            </div>
            <div>
            <h3>Name</h3>
            <input type="text" className='border border-black' />
            </div>
            <div>
            <h3>Age</h3>
            <input type="text" className='border border-black' />
            </div>
           
            
        </div>
    )
}