import { use, useState } from 'react'
import './App.css'
import ChatInput from './components/ChatInput'
import ChatResponse from './components/ChatResponse'
import { fetchChatResponse } from './services/api'

function App() {
  const [response, setResponse] = useState(null)
  const[loading,setLoading] = useState(false);

  const handleQuestionSubmit = async(question)=>{
    setLoading(true);
    setResponse(null);

    try {
      const apiresponse = await fetchChatResponse(question);
      setResponse(apiresponse);
    } catch (error) {
      alert("Failed to get the response");
    }finally{
      setLoading(false);
    }
  }

  // if(loading){
  //   return <h1>Loading....</h1>
  // }
  return (
    

    <div className='App'>
      <header className='bg-primary text-white text-center'>
        <h1>Gemini ChatBot</h1>
      </header>

      <ChatInput onSubmit={handleQuestionSubmit}/>
      {
        loading && <h1>Loading....</h1>
      }
      <ChatResponse response ={response} />

      
    </div>

    
  )
}

export default App
