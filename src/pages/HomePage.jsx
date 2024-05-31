import MsgInput from '../components/MsgInput'
import MsgWindow from '../components/MsgWindow'
import sendMsg from '../llm/LLMSetup'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addMessage } from '../features/message/messageSlice'

function Home() {
	const sentStatus = useSelector(state => state.sent)
	const llmMessage = useSelector(state => state.llmMessage)

  const responseDispatch = useDispatch()

  useEffect(() => {
    if (llmMessage && llmMessage.length > 0) {
      sendMsg(llmMessage)
      .then(data => {
        const responseMsg = data
        const tmpMessage = {
          message: responseMsg,
          role: 'assistant'
        }
        responseDispatch(addMessage(tmpMessage))
      })
    }
  }, [sentStatus])

  return (
    <>
      <div className='font-quicksand'>
				<MsgWindow />
				<MsgInput />
      </div>
    </>
  )
}

export default Home
