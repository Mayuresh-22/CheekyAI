import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage } from '../features/message/messageSlice'

function MsgInput() {
    const [message, setMessage] = useState('')

    const msgDispatch = useDispatch()

    const handleSubmit = (e) => {
        const tmpMessage = {
            message,
            role: 'user'
        }
        e.preventDefault()
        msgDispatch(addMessage(tmpMessage))
        setMessage('')
    }

    return (
        <>
            {/* center this input field at the bottom of half width */}
            <form onSubmit={handleSubmit}>
                <div className='fixed mx-auto flex px-4 py-2 inset-x-0 bottom-10 lg:bottom-20 gap-2 lg:w-1/2'>
                    <input
                        class="w-full rounded-full shadow-lg bg-gray-200 text-secondary text-xl p-3 border-2 border-secondary placeholder-secondary focus:text-primary focus:border-primary focus:outline-none"
                        placeholder="Enter anything..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <button class="p-4 bg-primary text-white rounded-full hover:shadow-pink-300 shadow-lg hover:bg-pink-600 focus:outline-none focus:ring focus:ring-primary flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M11.907 1.975a2.91 2.91 0 0 1 2.64 1.69l6.9 14.21c.16.377.244.78.25 1.19c0 .195-.02.39-.06.58a2.85 2.85 0 0 1-.85 1.53a2.88 2.88 0 0 1-1.57.77a2.841 2.841 0 0 1-1.72-.27l-.11-.06l-3.1-2.23a1.66 1.66 0 0 1-.7-1.25l-.08-1.16l-.45-6.4a1 1 0 0 0-2 0l-.44 6.3l-.07 1.09a1.702 1.702 0 0 1-.72 1.27l-3.12 2.17a2.91 2.91 0 0 1-4.34-1.92a2.82 2.82 0 0 1 .2-1.79l6.7-14a2.92 2.92 0 0 1 2.64-1.72" />
                        </svg>
                    </button>
                </div>
            </form>
        </>
    )
}

export default MsgInput
