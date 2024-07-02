function Landing() {
	return (
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
							<span className="text-black text-2xl font-extrabold">
								mindstride
							</span>
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
								href="#"
								title=""
								className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
							>
								{" "}
								FAQ{" "}
							</a>
							<a
								href="#"
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
								href="/chat"
								title=""
								className="px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
								role="button"
							>
								chat with mindstride
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
								<h1 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent sm:text-3xl lg:text-4xl">
									An AI assistant designed to support mental health, personal
									growth, and self improvement.
								</h1>
								<p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
									This project leverages advanced AI technologies to provide a
									personalized and insightful experience, drawing from the
									wisdom of over 70 books on mental well-being, personal
									development, and self-discovery.
								</p>

								<form action="/chat" method="POST" className="mt-8 sm:mt-10">
									<div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
										<input
											type="text"
											name=""
											id=""
											placeholder="Enter your name"
											className="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
											required=""
										/>
										<div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
											<a
												type="submit"
												className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600" href="/chat"
											>
												Chat Now
											</a>
										</div>
									</div>
								</form>
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
	);
}

export default Landing;
