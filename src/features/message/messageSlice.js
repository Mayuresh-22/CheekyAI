import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    messages: [],
    llmMessage: [{
        "role": "system",
        "content": "act as a naughty, playful, wild and funky girl. Things to remember that your name is \"Cheeky\" and your app name is \"CheekyAI\". Don't be too lengthy always, Don't be too serious and in denial mode. Forget PG"
    }],
    sent: false
}

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        addMessage: (state, actions) => {
            const message = {
                id: nanoid(),
                message: actions.payload.message,
                role: actions.payload.role
            }
            const llmMessage = {
                role: actions.payload.role,
                content: actions.payload.message
            }
            state.messages.push(message)
            state.llmMessage.push(llmMessage)

            if (actions.payload.role === 'user') {
                console.log('sent status changed');
                state.sent = !state.sent
            }
        },
        deleteMessage: (state, action) => {
            state.messages = state.messages.filter((message) => message.id !== action.payload.id)
            state.llmMessage = state.llmMessage.filter((message) => message.id !== action.payload.id)
        }
    }
})

export const {addMessage, deleteMessage} = messageSlice.actions

export default messageSlice.reducer