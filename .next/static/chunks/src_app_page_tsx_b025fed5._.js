(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>App)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
// --- Helper Components ---
// Header Component
const Header = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "bg-card shadow-md w-full max-w-md mx-auto p-4 fixed top-0 left-0 right-0 z-10 rounded-b-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold text-center text-card-foreground",
                children: "Vyapar Sarthi 🚀"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 11,
                columnNumber: 8
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-sm text-muted-foreground",
                children: "Your Business Charioteer"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 14,
                columnNumber: 8
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 10,
        columnNumber: 4
    }, this);
_c = Header;
// Message Bubble Component
const MessageBubble = ({ message })=>{
    const { text, sender, timestamp } = message;
    const isUser = sender === 'user';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `max-w-xs md:max-w-md px-4 py-3 rounded-2xl ${isUser ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-muted text-muted-foreground rounded-bl-none'}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `text-base ${isUser ? 'text-right' : 'text-left'}`,
                    children: text
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 34,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-right mt-1 opacity-70",
                    children: timestamp
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 35,
                    columnNumber: 16
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 27,
            columnNumber: 12
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 26,
        columnNumber: 8
    }, this);
};
_c1 = MessageBubble;
function App() {
    _s();
    const [clientLoaded, setClientLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            setClientLoaded(true);
        }
    }["App.useEffect"], []);
    // State for managing conversation messages
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            text: "Welcome to Vyapar Sarthi! How can I help you today? Try saying: '10 Parle-G biscuit stock mein add karo'",
            sender: 'assistant',
            timestamp: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            })
        }
    ]);
    // State for the text input field
    const [inputText, setInputText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // State to simulate recording state
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const conversationEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Effect to scroll to the bottom of the conversation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            conversationEndRef.current?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }["App.useEffect"], [
        messages
    ]);
    // Function to add a new message to the conversation
    const addMessage = (text, sender)=>{
        const newMessage = {
            id: messages.length + 1,
            text,
            sender,
            timestamp: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            })
        };
        setMessages((prevMessages)=>[
                ...prevMessages,
                newMessage
            ]);
        // Mock assistant reply after a short delay
        if (sender === 'user') {
            setTimeout(()=>{
                const mockReply = {
                    id: messages.length + 2,
                    text: `Okay, I've processed your request: "${text}". The action has been completed.`,
                    sender: 'assistant',
                    timestamp: new Date().toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                    })
                };
                setMessages((prevMessages)=>[
                        ...prevMessages,
                        mockReply
                    ]);
            }, 1500);
        }
    };
    // Handler for sending a text message
    const handleSendMessage = ()=>{
        if (inputText.trim()) {
            addMessage(inputText, 'user');
            setInputText('');
        }
    };
    // Handler for the microphone button press
    const handleMicPress = ()=>{
        setIsRecording(true);
        // This is where you would start the actual speech recognition.
        // We will simulate a voice command after a delay.
        setTimeout(()=>{
            setIsRecording(false);
            const voiceCommands = [
                "20kg aashirvaad atta purchase mein daalo",
                "Raju ko 50 rupaye udhaar diye",
                "Aaj ka sales report dikhao",
                "5 Dairy Milk Silk expire hone wali hai"
            ];
            const randomCommand = voiceCommands[Math.floor(Math.random() * voiceCommands.length)];
            addMessage(randomCommand, 'user');
        }, 2500); // Simulate a 2.5 second recording
    };
    // Handler for key press in input field
    const handleKeyPress = (e)=>{
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };
    if (!clientLoaded) {
        return null; // Or a loading spinner
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-background font-sans h-screen flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 144,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 w-full max-w-md mx-auto pt-24 pb-28 px-4 overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col space-y-4",
                    children: [
                        messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MessageBubble, {
                                message: msg
                            }, msg.id, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 150,
                                columnNumber: 24
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: conversationEndRef
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 152,
                            columnNumber: 20
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 148,
                    columnNumber: 16
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 147,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-card shadow-t-md w-full max-w-md mx-auto p-4 fixed bottom-0 left-0 right-0 z-10 rounded-t-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: inputText,
                            onChange: (e)=>setInputText(e.target.value),
                            onKeyPress: handleKeyPress,
                            placeholder: "Or type your command...",
                            className: "flex-1 p-3 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-ring transition"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 160,
                            columnNumber: 20
                        }, this),
                        isRecording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center bg-red-500 text-white w-16 h-16 rounded-full transition-all duration-300 ease-in-out",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-8 h-8 animate-pulse",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M7 4a3 3 0 016 0v6a3 3 0 11-6 0V4z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 108
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            d: "M5.5 10.5a.5.5 0 01.5.5v1a4 4 0 004 4h.5a.5.5 0 010 1h-.5a5 5 0 01-5-5v-1a.5.5 0 01.5-.5z",
                                            clipRule: "evenodd"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 160
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute text-xs font-bold",
                                    children: "Listening..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 171,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 169,
                            columnNumber: 24
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleMicPress,
                            className: "bg-primary hover:bg-primary/90 text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-8 h-8",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 142
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 179,
                                columnNumber: 28
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 174,
                            columnNumber: 24
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 159,
                    columnNumber: 16
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 158,
                columnNumber: 12
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 143,
        columnNumber: 8
    }, this);
}
_s(App, "VmzbJEOxW6a1+U0HvdtAfzY5dYs=");
_c2 = App;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Header");
__turbopack_context__.k.register(_c1, "MessageBubble");
__turbopack_context__.k.register(_c2, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_page_tsx_b025fed5._.js.map