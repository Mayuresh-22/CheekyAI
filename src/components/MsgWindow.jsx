import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MsgBox from './MsgBox'

function MsgWindow() {

    const allMessages = useSelector(state => state.messages)

    useEffect(() => {
        const div = document.getElementById('messageWindow')
        div.scrollTop = div.scrollHeight
    }, [allMessages])

    return (
        <>
            <div className='px-4 py-2 my-2 lg:my-5'>
                <div id='messageWindow' className='chat-container flex flex-col mx-auto px-6 py-4 overflow-y-auto bg-white p-4 rounded-3xl shadow-lg lg:w-1/2'>
                    {allMessages.map((message) => (
                        <div key={message.id} className={`${message.role === 'assistant' ? 'bg-secondary text-white hover:shadow-slate-400' : 'bg-primary text-white hover:shadow-pink-300 self-end'}  p-4 mb-4 rounded-2xl hover:shadow-lg  max-w-md`}>
                            <MsgBox message={message}/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MsgWindow
