'use client';
import React, { useState, useRef, useEffect } from 'react';
import { handleVoiceCommand } from '@/lib/client';


// --- Helper Components ---


// Header Component
const Header = () => (
   <header className="bg-card shadow-md w-full max-w-md mx-auto p-4 fixed top-0 left-0 right-0 z-10 rounded-b-lg">
       <h1 className="text-2xl font-bold text-center text-card-foreground">
           Vyapar Sarthi 🚀
       </h1>
       <p className="text-center text-sm text-muted-foreground">Your Business Charioteer</p>
   </header>
);


// Message Bubble Component
const MessageBubble = ({ message }: { message: { text: string; sender: string; timestamp: string } }) => {
   const { text, sender, timestamp } = message;
   const isUser = sender === 'user';


   return (
       <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
           <div
               className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl ${
                   isUser
                       ? 'bg-primary text-primary-foreground rounded-br-none'
                       : 'bg-muted text-muted-foreground rounded-bl-none'
               }`}
           >
               <p className={`text-base ${isUser ? 'text-right' : 'text-left'}`}>{text}</p>
               <p className="text-xs text-right mt-1 opacity-70">{timestamp}</p>
           </div>
       </div>
   );
};


// --- Main App Component ---


export default function App() {
    const [clientLoaded, setClientLoaded] = useState(false);
    useEffect(() => {
        setClientLoaded(true);
    }, []);

   // State for managing conversation messages
   const [messages, setMessages] = useState([
       {
           id: 1,
           text: "Welcome to Vyapar Sarthi! How can I help you today? Try saying: '10 Parle-G biscuit stock mein add karo'",
           sender: 'assistant',
           timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
       },
   ]);


   // State for the text input field
   const [inputText, setInputText] = useState('');
   // State to simulate recording state
   const [isRecording, setIsRecording] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
  
   const conversationEndRef = useRef<HTMLDivElement>(null);


   // Effect to scroll to the bottom of the conversation
   useEffect(() => {
       conversationEndRef.current?.scrollIntoView({ behavior: 'smooth' });
   }, [messages]);


   // Function to add a new message to the conversation
   const addMessage = (text: string, sender: 'user' | 'assistant') => {
       const newMessage = {
           id: messages.length + 1,
           text,
           sender,
           timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
       };
       setMessages(prevMessages => [...prevMessages, newMessage]);
       return newMessage;
   };

   // Function to handle backend processing and assistant reply
   const processUserMessage = async (text: string) => {
        setIsLoading(true);
         const result = await handleVoiceCommand(text);
        
        let replyText = "";
        if (result.error) {
            replyText = `Sorry, I encountered an error: ${result.details || result.error}`;
        } else {
            switch(result.type) {
                case 'ADD_STOCK':
                    replyText = `Added ${result.data.quantity} of ${result.data.product_name} to stock.`;
                    break;
                case 'RECORD_SALE':
                    replyText = `Recorded sale of ${result.data.quantity} ${result.data.product}. Amount ₹${result.data.amount}.`;
                    break;
                case 'ADD_CREDIT':
                    replyText = `Added credit of ₹${result.data.amount} for ${result.data.party_name}.`;
                    break;
                case 'CHECK_BALANCE':
                     replyText = `Checking balance for ${result.data.party_name}.`;
                    break;
                default:
                    replyText = "I've processed your request.";
            }
        }
        
        addMessage(replyText, 'assistant');
        setIsLoading(false);
   }

   // Handler for sending a text message
   const handleSendMessage = async () => {
       if (inputText.trim()) {
           addMessage(inputText, 'user');
           await processUserMessage(inputText);
           setInputText('');
       }
   };

   // Handler for the microphone button press
   const handleMicPress = () => {
       setIsRecording(true);
       // This is where you would start the actual speech recognition.
       // We will simulate a voice command after a delay.
       setTimeout(() => {
           setIsRecording(false);
           const voiceCommands = [
               "20kg aashirvaad atta purchase mein daalo",
               "Raju ko 50 rupaye udhaar diye",
               "Aaj ka sales report dikhao",
               "5 Dairy Milk Silk expire hone wali hai"
           ];
           const randomCommand = voiceCommands[Math.floor(Math.random() * voiceCommands.length)];
           addMessage(randomCommand, 'user');
           processUserMessage(randomCommand);
       }, 2500); // Simulate a 2.5 second recording
   };
  
   // Handler for key press in input field
   const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
       if (e.key === 'Enter') {
           handleSendMessage();
       }
   };
   
    if (!clientLoaded) {
        return null; // Or a loading spinner
    }


   return (
       <div className="bg-background font-sans h-screen flex flex-col items-center">
           <Header />
          
           {/* Conversation Area */}
           <main className="flex-1 w-full max-w-md mx-auto pt-24 pb-28 px-4 overflow-y-auto">
               <div className="flex flex-col space-y-4">
                   {messages.map(msg => (
                       <MessageBubble key={msg.id} message={msg} />
                   ))}
                    {isLoading && (
                        <MessageBubble message={{ text: "...", sender: 'assistant', timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }} />
                    )}
                   <div ref={conversationEndRef} />
               </div>
           </main>


           {/* Input Bar */}
           <footer className="bg-card shadow-t-md w-full max-w-md mx-auto p-4 fixed bottom-0 left-0 right-0 z-10 rounded-t-lg">
               <div className="flex items-center space-x-3">
                   <input
                       type="text"
                       value={inputText}
                       onChange={(e) => setInputText(e.target.value)}
                       onKeyPress={handleKeyPress}
                       placeholder="Or type your command..."
                       className="flex-1 p-3 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-ring transition"
                       disabled={isLoading || isRecording}
                   />
                   {isRecording ? (
                       <div className="flex items-center justify-center bg-red-500 text-white w-16 h-16 rounded-full transition-all duration-300 ease-in-out">
                            <svg className="w-8 h-8 animate-pulse" fill="currentColor" viewBox="0 0 20 20"><path d="M7 4a3 3 0 016 0v6a3 3 0 11-6 0V4z"></path><path fillRule="evenodd" d="M5.5 10.5a.5.5 0 01.5.5v1a4 4 0 004 4h.5a.5.5 0 010 1h-.5a5 5 0 01-5-5v-1a.5.5 0 01.5-.5z" clipRule="evenodd"></path></svg>
                            <span className="absolute text-xs font-bold">Listening...</span>
                       </div>
                   ) : (
                       <button
                           onClick={handleMicPress}
                           disabled={isLoading}
                           className="bg-primary hover:bg-primary/90 text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:scale-100"
                       >
                           {/* Microphone Icon */}
                           <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                       </button>
                   )}
               </div>
           </footer>
       </div>
   );
}
