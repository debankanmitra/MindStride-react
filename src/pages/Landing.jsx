import { useState } from "react";
import Footer from "../components/Footer";
function Landing() {
	const [name, setName] = useState("");
	const [isInvalid, setIsInvalid] = useState(false);
	const handleNameSubmit = (e) => {
		e.preventDefault();
		if (name.trim() != "") {
			localStorage.setItem("name", name);
			window.location.href = "/chat";
		} else {
			setIsInvalid(true);
		}
	};
	return (
		<>
			<div className="bg-gradient-to-t from-violet-50 to-indigo-200">
				<header className="py-4 md:py-6">
					<div className="container px-4 mx-auto sm:px-6 lg:px-8">
						<div className="flex items-center justify-between">
							<div className="flex items-center pe-4 ps-7 gap-x-2">
								{/* <!-- Logo --> */}
								<svg
									width="30"
									height="34"
									viewBox="0 0 44 48"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M25.8001 35.7873C22.3001 34.4873 18.7001 34.2873 15.4001 35.1873C13.1001 35.7873 10.9001 36.9873 8.90012 38.4873L7.50009 39.6873L7.1001 40.0873L8.00009 40.8873C8.10009 40.8873 8.1001 40.9873 8.2001 41.0873C8.4001 41.2873 8.60012 41.3873 8.90012 41.5873L9.50009 41.9873L10.1001 41.4873C10.2001 41.3873 10.4001 41.1873 10.6001 41.0873C12.4001 39.5873 14.4001 38.5873 16.5001 38.0873C19.2001 37.3873 22.1001 37.4873 25.0001 38.5873C27.4001 39.4873 32.3001 40.5873 38.2001 38.0873L38.4001 37.9873L38.7001 37.6873C38.7001 37.5873 38.8001 37.5873 38.9001 37.4873C39.4001 36.8873 39.9001 36.2873 40.3001 35.5873L42.3001 32.4873L39.1001 34.2873C34.4001 36.8873 30.1001 37.3873 25.8001 35.7873Z"
										fill="black"
									/>
									<path
										d="M12.1 24.9876C14.8 24.2876 17.7 24.3876 20.6 25.4876C23.8 26.6876 32 28.3876 41.2 20.0876L42.7 18.5876L42.8 18.4876L43.2 18.0876L43 17.5876C42.9 17.1876 42.7 16.6876 42.5 16.1876L42 14.7876L41 15.7876C40.9 15.9876 40.7 16.0876 40.5 16.2876C36.1 20.7876 29.3 25.3876 21.5 22.5876C18 21.2876 14.4 21.0876 11.1 21.9876C7.90001 22.8876 5.1 24.5876 2.5 26.9876V26.8876L1 28.4876C1 28.5876 0.900018 28.5876 0.800018 28.6876L0.5 28.9876L0.600006 29.3876C0.700006 29.8876 0.9 30.3876 1 30.8876L1.60001 32.4876L2.60001 31.1876C2.70001 30.9876 2.9 30.8876 3 30.6876C5.1 28.7876 8.00001 26.0876 12.1 24.9876Z"
										fill="black"
									/>
									<path
										d="M2.40002 23.1874C4.70002 20.7874 7.30001 19.2874 10.1 18.4874C12.8 17.7874 15.7 17.8874 18.6 18.9874C27.6 22.2874 35.4 16.8874 38.8 13.9874L40.1 12.6874L40.6 12.2874L40.2 11.6874C39.9 11.3874 39.7 10.9874 39.4 10.5874L38.8 9.78735L38.1 10.4874C38 10.5874 37.8 10.7874 37.7 10.8874C33.5 14.8874 27 18.9874 19.6 16.1874C16.1 14.8874 12.5 14.6874 9.20001 15.5874C7.10001 16.1874 5.10001 17.1874 3.10001 18.4874L1 20.1874C0.8 20.3874 0.7 20.4874 0.5 20.6874L0.300018 20.8874V21.1874C0.200018 21.8874 0.200006 22.5874 0.100006 23.1874L0 25.6874L1.70001 23.8874C1.90001 23.6874 2.10002 23.3874 2.40002 23.1874Z"
										fill="black"
									/>
									<path
										d="M28.7 42.5874L28.5 43.1874L28.7 42.5874C28.4 42.4874 28.2 42.3874 27.9 42.2874C24.4 40.9874 20.8 40.7874 17.5 41.6874C16.8 41.8874 16.1 42.0874 15.4 42.3874L13 43.4874L12.4 43.7874L14.4 44.4874C15 44.6874 15.6 44.8874 16.2 45.0874L16.5 45.1874L16.8 45.0874C17.1 44.9874 17.4 44.7874 17.7 44.7874C17.9 44.7874 18.1 44.6874 18.3 44.5874C20.7 43.9874 23.3 43.9874 26.1 44.8874C26.4 44.9874 26.6 45.0874 26.9 45.1874L27.4 45.3874L27.7 45.2874C28.4 45.0874 29.2 44.8874 29.8 44.5874L32.6 43.5874L29.7 42.8874C29.4 42.7874 29 42.6874 28.7 42.5874Z"
										fill="black"
									/>
									<path
										d="M44 21.8875L42.5 23.3875C42.3 23.5875 42.1001 23.7875 41.9001 23.9875C37.8001 27.8875 31.2 32.0874 23.8 29.2874C20.3 27.9874 16.7001 27.7875 13.4001 28.6875C10.3001 29.5875 7.50003 31.1875 5.00003 33.5875L3.70004 34.9875L3.30005 35.4875L3.70004 36.0875C4.00004 36.4875 4.20005 36.7875 4.40005 37.1875L5.00003 38.0875L5.70004 37.1875C5.80004 37.0875 6.00004 36.8874 6.10004 36.7874C8.50004 34.1874 11.1 32.5874 14.1 31.7874C16.8 31.0874 19.7 31.1874 22.6 32.2874C25.1 33.1874 27.7 33.4875 30.3 33.1875C34.9 32.6875 39.5 30.0875 42.9001 27.1875C43.1001 26.9875 43.3 26.8875 43.5 26.6875L43.8 26.3875V26.0875C43.8 25.4875 43.9001 24.7875 43.9001 24.1875L44 21.8875Z"
										fill="black"
									/>
									<path
										d="M6.00018 12.6877L5.7002 12.0876L6.00018 12.6877C6.60018 12.3877 7.30021 12.1876 7.90021 11.9876C10.6002 11.2876 13.5002 11.3876 16.4002 12.4876C18.3002 13.1876 20.2002 13.4876 22.3002 13.4876C26.5002 13.4876 30.7002 11.9876 34.6002 9.08765L36.1002 7.88763L36.6002 7.48764L35.7002 6.78763C35.4002 6.48763 35.0002 6.18764 34.6002 5.98764L34.0002 5.58765L33.5002 5.98764C33.3002 6.08764 33.2002 6.28763 33.0002 6.38763C27.7002 10.3876 22.4002 11.4876 17.4002 9.58765C13.8002 8.28765 10.2002 7.98765 6.60019 9.08765C6.30019 9.18765 6.00019 9.28763 5.60019 9.38763L5.40021 9.48764L5.10019 9.78763C5.10019 9.88763 5.00021 9.88764 4.90021 9.98764C4.50021 10.5876 4.00019 11.0877 3.60019 11.6877L1.7002 14.5876L4.8002 12.9876C5.3002 12.9876 5.70018 12.7877 6.00018 12.6877Z"
										fill="black"
									/>
									<path
										d="M14.2 5.88748L14.5 5.98749C15.8 6.48749 17.8 6.98749 20.3 6.98749C22.9 6.98749 25.4 6.38748 27.9 5.38748L31 3.88748L28.9 3.1875C28.3 2.9875 27.7 2.7875 27 2.6875H26.7L26.4 2.78748C26.1 2.88748 25.8 3.0875 25.5 3.1875C22.5 4.2875 19.5 4.4875 16.6 3.6875C16.3 3.5875 16 3.48748 15.7 3.38748L15.4 3.28748L15.1 3.38748C14.5 3.58748 13.9 3.78749 13.3 4.08749L11 5.08749L13.4 5.78748C13.6 5.68748 13.9 5.78748 14.2 5.88748Z"
										fill="black"
									/>
								</svg>{" "}
								<a href="/" className="text-black text-2xl font-extrabold">
									mindstride
								</a>
								{/* <!-- End Logo --> */}
							</div>

							<div className="flex lg:hidden">
								<button type="button" className="text-gray-900">
									<svg
										className="w-7 h-7"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M4 6h16M4 12h16M4 18h16"
										></path>
									</svg>
								</button>
							</div>

							<div className="hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16">
								<a
									href="#faq"
									title=""
									className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
								>
									{" "}
									FAQ{" "}
								</a>
								<a
									href="#about"
									title=""
									className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
								>
									{" "}
									About Mindstride{" "}
								</a>
							</div>

							<div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
								{/* <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Sign in </a> */}

								<a
									href="https://github.com/debankanmitra/Mindstride"
									title="github"
									className=" flex items-center justify-center px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
									role="button"
									target="_blank"
								>
									<svg
										className="mr-2"
										fill="white"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 496 512"
									>
										<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
									</svg>
									Github
								</a>
							</div>
						</div>
					</div>
				</header>

				<section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
					<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
						<div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
							<div>
								<div className="text-center lg:text-left">
									<h1
										id="about"
										className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent sm:text-3xl lg:text-4xl"
									>
										An AI assistant designed to support mental health, personal
										growth, and self improvement.
									</h1>
									<p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
										This project leverages advanced AI technologies to provide a
										personalized and insightful experience, drawing from the
										wisdom of over 70 books on mental well-being, personal
										development, and self-discovery.
									</p>

									<div className="mt-8 sm:mt-10">
										<div
											className={`relative p-2 sm:border ${
												isInvalid ? "border-red-500" : "border-gray-400"
											} group sm:rounded-xl sm:focus-within:ring-1`}
										>
											<input
												type="text"
												name="name"
												id="nameInput"
												placeholder={
													isInvalid
														? "Enter your name (Required)"
														: "Enter your name"
												}
												className={`block w-full px-4 py-4 text-gray-900 ${
													isInvalid
														? "placeholder-red-500"
														: "placeholder-gray-700"
												} bg-transparent border border-gray-400 outline-none focus:border-red-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent`}
												value={name}
												onChange={(e) => setName(e.target.value)}
												required=""
											/>
											<div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
												<button
													type="submit"
													className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none hover:bg-gray-600"
													onClick={handleNameSubmit}
												>
													Chat Now
												</button>
											</div>
										</div>
									</div>
								</div>

								<div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
									<div className="flex items-center">
										<p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">
											294
										</p>
										<p className="ml-3 text-sm text-gray-900 font-pj">
											Chats
											<br />
											Delivered
										</p>
									</div>

									<div className="hidden sm:block">
										<svg
											className="text-gray-400"
											width="16"
											height="39"
											viewBox="0 0 16 39"
											fill="none"
											stroke="currentColor"
											xmlns="http://www.w3.org/2000/svg"
										>
											<line
												x1="0.72265"
												y1="10.584"
												x2="15.7226"
												y2="0.583975"
											></line>
											<line
												x1="0.72265"
												y1="17.584"
												x2="15.7226"
												y2="7.58398"
											></line>
											<line
												x1="0.72265"
												y1="24.584"
												x2="15.7226"
												y2="14.584"
											></line>
											<line
												x1="0.72265"
												y1="31.584"
												x2="15.7226"
												y2="21.584"
											></line>
											<line
												x1="0.72265"
												y1="38.584"
												x2="15.7226"
												y2="28.584"
											></line>
										</svg>
									</div>

									<div className="flex items-center">
										<p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">
											10M+
										</p>
										<p className="ml-3 text-sm text-gray-900 font-pj">
											Tokens
											<br />
											Generated
										</p>
									</div>
								</div>
							</div>
							<div className="gallery rounded-xl grid place-items-center">
								<img
									className="w-4/5 rounded-xl px-16"
									src="/books/book-1.webp"
									alt="a dream catcher"
								/>
								<img
									className="w-4/5 px-16"
									src="/books/book-2.webp"
									alt="a piano"
								/>
								<img
									className="w-4/5 px-16"
									src="/books/book-3.webp"
									alt="a live concert"
								/>
								<img
									className="w-4/5 px-16"
									src="/books/book-4.webp"
									alt="Paris"
								/>
							</div>
						</div>
					</div>
				</section>
			</div>
			{/* // <!-- FAQ --> */}
			<div
				id="faq"
				className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-gradient-to-t from-slate-50 to-violet-50"
			>
				{/* <!-- Title --> */}
				<div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
					<h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800">
						Frequently Asked Questions
					</h2>
				</div>
				{/* <!-- End Title --> */}

				<div className="max-w-5xl mx-auto">
					{/* <!-- Grid --> */}
					<div className="grid sm:grid-cols-2 gap-6 md:gap-12">
						<div>
							<h3 className="text-lg font-semibold text-gray-800">
								What is Mindstride?
							</h3>
							<p className="mt-2 text-gray-600 ">
								Mindstride is a chat assistant designed to support mental
								health, personal growth, and self-improvement. It leverages
								advanced AI technologies and draws insights from over 70 books
								on these topics to provide personalized guidance and support.
							</p>
						</div>
						{/* <!-- End Col --> */}

						<div>
							<h3 className="text-lg font-semibold text-gray-800">
								How does Mindstride support mental health?
							</h3>
							<p className="mt-2 text-gray-600 ">
								Mindstride offers guidance and support to enhance mental
								well-being by providing insights, strategies, and techniques
								drawn from a vast collection of books on mental health. It aims
								to help users manage stress, anxiety, and other mental health
								challenges.
							</p>
						</div>
						{/* <!-- End Col --> */}

						<div>
							<h3 className="text-lg font-semibold text-gray-800">
								What kind of personal growth can I achieve with Mindstride?
							</h3>
							<p className="mt-2 text-gray-600 ">
								Mindstride assists users in their journey towards personal
								development by offering tailored advice and tools for
								self-improvement. It covers areas such as goal setting, habit
								formation, mindfulness, and emotional intelligence to help users
								grow and achieve their potential.
							</p>
						</div>
						{/* <!-- End Col --> */}

						<div>
							<h3 className="text-lg font-semibold text-gray-800">
								How does Mindstride use AI technologies?
							</h3>
							<p className="mt-2 text-gray-600 ">
								Mindstride uses a range of AI technologies including the OpenAI
								API for querying GPT-3.5 and the Hugging Face Inference API for
								creating embeddings. These technologies help to manage and query
								text chains effectively, ensuring that users receive accurate
								and insightful responses.
							</p>
						</div>
						{/* <!-- End Col --> */}

						<div>
							<h3 className="text-lg font-semibold text-gray-800">
								How is the information in Mindstride sourced and managed?
							</h3>
							<p className="mt-2 text-gray-600 ">
								Mindstride draws its knowledge from over 70 books on mental
								well-being, personal development, and self-discovery. It uses
								Langchain for managing and querying text chains and a vector
								database (Pinecone) for efficient information retrieval,
								ensuring that the responses are based on reliable and
								comprehensive sources.
							</p>
						</div>
						{/* <!-- End Col --> */}

						<div>
							<h3 className="text-lg font-semibold text-gray-800">
								Is my data safe with Mindstride?
							</h3>
							<p className="mt-2 text-gray-600 ">
								Yes, Mindstride prioritizes user privacy and data security. It
								is hosted on AWS Lambda, which provides a secure and scalable
								infrastructure. Your interactions with Mindstride are kept
								confidential and are used solely to improve your experience with
								the application.
							</p>
						</div>
						{/* <!-- End Col --> */}
					</div>
					{/* <!-- End Grid --> */}
				</div>
			</div>
			{/* // <!-- End FAQ --> */}
			<Footer />
		</>
	);
}

export default Landing;
