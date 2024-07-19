import { useState, useEffect } from "react";
import Chat_Bubble from "./Chat_Bubble";
import axios from "axios";

function Prompt_Template() {
	const userName = localStorage.getItem("name") || "User"; // default user name
	const [messages, setMessages] = useState([
		{
			sender: "user",
			text: "What's Mindstride?",
		},
		{
			sender: "bot",
			text: `Hi ${userName}, Mindstride is a RAG-based chat assistant designed to support mental health, personal growth, and self-improvement. Ask me anything you want to know about mental health, personal growth, or self-improvement.`,
		},
	]);
	const [input, setInput] = useState("");

	const sendMessage = async () => {
		if (input.trim() === "") return;

		const userMessage = { sender: "user", text: input };
		setMessages((prevMessages) => [...prevMessages, userMessage]);

		setInput("");
		try {
			const response = await axios.post(
				"https://z52r4jnvr2i3e4r4gegsdzh4vq0snwza.lambda-url.us-east-1.on.aws/gemini_inference",
				{ user: input }
			);

			console.log(response);
			const botMessage = { sender: "bot", text: response.data.output };
			setMessages((prevMessages) => [...prevMessages, botMessage]);
		} catch (error) {
			console.error("Error sending message:", error);
		}

	};

	const handleInputChange = (e) => {
		setInput(e.target.value);
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			sendMessage();
		}
	};

	// Log messages whenever they change
	useEffect(() => {
		console.log(messages);
	}, [messages]);

	return (
		// <!-- Content -->
		<div className="relative h-screen w-full lg:ps-64">
			<div className="py-10 lg:py-14">
				{/* <!-- Title --> */}
				<div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto text-center">
					<div className="flex items-center justify-center gap-x-2 ">
						<h1 className="text-3xl font-bold text-gray-800 sm:text-4xl ">
							Welcome to Mindstride AI
						</h1>
						<div className="relative w-8 h-8 bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-900 rounded-full bg-[length:200%_200%] animate-gradient-x"></div>
					</div>
					<p className="mt-3 text-gray-600 ">
						Your AI-powered copilot for personal growth and self-improvement.
					</p>
				</div>
				{/* <!-- End Title --> */}
				<ul className="mt-16 space-y-5">
					{messages.map((msg, index) => (
						<Chat_Bubble
							key={index}
							user={msg.sender === "user" ? msg.text : undefined}
							bot={msg.sender === "bot" ? msg.text : undefined}
							// status={msg.status}
						/>
					))}
				</ul>
			</div>

			{/* <!-- Textarea --> */}
			<footer className="max-w-4xl mx-auto sticky bottom-0 z-10 p-3 sm:py-6">
				<div className="lg:hidden flex justify-end mb-2 sm:mb-3">
					{/* <!-- Sidebar Toggle --> */}
					<button
						type="button"
						className="p-2 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
						data-hs-overlay="#application-sidebar"
						aria-controls="application-sidebar"
						aria-label="Toggle navigation"
					>
						<svg
							className="flex-shrink-0 size-3.5"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<line x1="3" x2="21" y1="6" y2="6" />
							<line x1="3" x2="21" y1="12" y2="12" />
							<line x1="3" x2="21" y1="18" y2="18" />
						</svg>
						<span>Sidebar</span>
					</button>
					{/* <!-- End Sidebar Toggle --> */}
				</div>

				{/* <!-- Input --> */}
				<div className="relative w-full">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						aria-hidden="true"
						className="absolute left-3 top-1/2 size-4 -translate-y-1/2 fill-blue-700 "
					>
						<path
							fillRule="evenodd"
							d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4ZM12 1a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1ZM10 11a.75.75 0 0 1 .728.568.968.968 0 0 0 .704.704.75.75 0 0 1 0 1.456.968.968 0 0 0-.704.704.75.75 0 0 1-1.456 0 .968.968 0 0 0-.704-.704.75.75 0 0 1 0-1.456.968.968 0 0 0 .704-.704A.75.75 0 0 1 10 11Z"
							clipRule="evenodd"
						/>
					</svg>
					<input
						id="aiPromt"
						type="text"
						className="w-full border bg-gray-200 border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-blue-500 px-2 py-4 pl-10 pr-24 rounded-xl text-sm"
						name="prompt"
						value={input}
						onChange={handleInputChange}
						onKeyDown={handleKeyPress}
						placeholder="Ask me anything ..."
					/>
					<button type="button" onClick={sendMessage}>
						<svg
							className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer tracking-wide transition hover:opacity-75 active:opacity-100 active:outline-offset-0 "
							fill="#2E86C1 "
							height="25"
							width="45"
							version="1.1"
							id="Layer_1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512.003 512.003"
							xmlSpace="preserve"
						>
							<g>
								<g>
									<path
										d="M507.284,248.364L12.35,0.898C8.894-0.826,4.721-0.007,2.153,2.86c-2.56,2.884-2.867,7.125-0.759,10.351l159.07,242.79
			L1.393,498.792c-2.108,3.226-1.801,7.467,0.759,10.351c1.664,1.86,4.002,2.859,6.383,2.859c1.289,0,2.594-0.29,3.814-0.896
			l494.933-247.467c2.893-1.451,4.719-4.403,4.719-7.637S510.176,249.815,507.284,248.364z"
									/>
								</g>
							</g>
						</svg>
					</button>
				</div>
				{/* <!-- End Input --> */}
			</footer>
			{/* <!-- End Textarea --> */}
		</div>
	);
}

export default Prompt_Template;
