import Prompt_Template from "../components/Prompt_Template";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

function Chat() {
	const [messages, setMessages] = useState([]);
	const [index, setIndex] = useState(1);
	return (
		<>
			<Sidebar setMessages={setMessages} setIndex={setIndex} />
			<Prompt_Template
				setMessages={setMessages}
				messages={messages}
				index={index}
			/>
		</>
	);
}

export default Chat;
