function Chat_Bubble() {
	return (
		<>
			{/* <!-- Chat Bubble --> */}
			<li className="py-2 sm:py-4">
				<div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
					<div className="max-w-2xl flex gap-x-2 sm:gap-x-4">
						<span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
							<span className="text-sm font-medium text-white leading-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
							</span>
						</span>

						<div className="grow mt-2 space-y-3">
							<p className="text-gray-800 dark:text-neutral-200">
								what&apos;s preline ui?
							</p>
						</div>
					</div>
				</div>
			</li>
			{/* <!-- End Chat Bubble --> */}
			{/* <!-- Chat Bubble --> */}
			<li className="max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4">
				<svg
					width="30"
					height="34"
					viewBox="0 0 44 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M25.8001 35.7873C22.3001 34.4873 18.7001 34.2873 15.4001 35.1873C13.1001 35.7873 10.9001 36.9873 8.90012 38.4873L7.50009 39.6873L7.1001 40.0873L8.00009 40.8873C8.10009 40.8873 8.1001 40.9873 8.2001 41.0873C8.4001 41.2873 8.60012 41.3873 8.90012 41.5873L9.50009 41.9873L10.1001 41.4873C10.2001 41.3873 10.4001 41.1873 10.6001 41.0873C12.4001 39.5873 14.4001 38.5873 16.5001 38.0873C19.2001 37.3873 22.1001 37.4873 25.0001 38.5873C27.4001 39.4873 32.3001 40.5873 38.2001 38.0873L38.4001 37.9873L38.7001 37.6873C38.7001 37.5873 38.8001 37.5873 38.9001 37.4873C39.4001 36.8873 39.9001 36.2873 40.3001 35.5873L42.3001 32.4873L39.1001 34.2873C34.4001 36.8873 30.1001 37.3873 25.8001 35.7873Z"
						fill="white"
					/>
					<path
						d="M12.1 24.9876C14.8 24.2876 17.7 24.3876 20.6 25.4876C23.8 26.6876 32 28.3876 41.2 20.0876L42.7 18.5876L42.8 18.4876L43.2 18.0876L43 17.5876C42.9 17.1876 42.7 16.6876 42.5 16.1876L42 14.7876L41 15.7876C40.9 15.9876 40.7 16.0876 40.5 16.2876C36.1 20.7876 29.3 25.3876 21.5 22.5876C18 21.2876 14.4 21.0876 11.1 21.9876C7.90001 22.8876 5.1 24.5876 2.5 26.9876V26.8876L1 28.4876C1 28.5876 0.900018 28.5876 0.800018 28.6876L0.5 28.9876L0.600006 29.3876C0.700006 29.8876 0.9 30.3876 1 30.8876L1.60001 32.4876L2.60001 31.1876C2.70001 30.9876 2.9 30.8876 3 30.6876C5.1 28.7876 8.00001 26.0876 12.1 24.9876Z"
						fill="white"
					/>
					<path
						d="M2.40002 23.1874C4.70002 20.7874 7.30001 19.2874 10.1 18.4874C12.8 17.7874 15.7 17.8874 18.6 18.9874C27.6 22.2874 35.4 16.8874 38.8 13.9874L40.1 12.6874L40.6 12.2874L40.2 11.6874C39.9 11.3874 39.7 10.9874 39.4 10.5874L38.8 9.78735L38.1 10.4874C38 10.5874 37.8 10.7874 37.7 10.8874C33.5 14.8874 27 18.9874 19.6 16.1874C16.1 14.8874 12.5 14.6874 9.20001 15.5874C7.10001 16.1874 5.10001 17.1874 3.10001 18.4874L1 20.1874C0.8 20.3874 0.7 20.4874 0.5 20.6874L0.300018 20.8874V21.1874C0.200018 21.8874 0.200006 22.5874 0.100006 23.1874L0 25.6874L1.70001 23.8874C1.90001 23.6874 2.10002 23.3874 2.40002 23.1874Z"
						fill="white"
					/>
					<path
						d="M28.7 42.5874L28.5 43.1874L28.7 42.5874C28.4 42.4874 28.2 42.3874 27.9 42.2874C24.4 40.9874 20.8 40.7874 17.5 41.6874C16.8 41.8874 16.1 42.0874 15.4 42.3874L13 43.4874L12.4 43.7874L14.4 44.4874C15 44.6874 15.6 44.8874 16.2 45.0874L16.5 45.1874L16.8 45.0874C17.1 44.9874 17.4 44.7874 17.7 44.7874C17.9 44.7874 18.1 44.6874 18.3 44.5874C20.7 43.9874 23.3 43.9874 26.1 44.8874C26.4 44.9874 26.6 45.0874 26.9 45.1874L27.4 45.3874L27.7 45.2874C28.4 45.0874 29.2 44.8874 29.8 44.5874L32.6 43.5874L29.7 42.8874C29.4 42.7874 29 42.6874 28.7 42.5874Z"
						fill="white"
					/>
					<path
						d="M44 21.8875L42.5 23.3875C42.3 23.5875 42.1001 23.7875 41.9001 23.9875C37.8001 27.8875 31.2 32.0874 23.8 29.2874C20.3 27.9874 16.7001 27.7875 13.4001 28.6875C10.3001 29.5875 7.50003 31.1875 5.00003 33.5875L3.70004 34.9875L3.30005 35.4875L3.70004 36.0875C4.00004 36.4875 4.20005 36.7875 4.40005 37.1875L5.00003 38.0875L5.70004 37.1875C5.80004 37.0875 6.00004 36.8874 6.10004 36.7874C8.50004 34.1874 11.1 32.5874 14.1 31.7874C16.8 31.0874 19.7 31.1874 22.6 32.2874C25.1 33.1874 27.7 33.4875 30.3 33.1875C34.9 32.6875 39.5 30.0875 42.9001 27.1875C43.1001 26.9875 43.3 26.8875 43.5 26.6875L43.8 26.3875V26.0875C43.8 25.4875 43.9001 24.7875 43.9001 24.1875L44 21.8875Z"
						fill="white"
					/>
					<path
						d="M6.00018 12.6877L5.7002 12.0876L6.00018 12.6877C6.60018 12.3877 7.30021 12.1876 7.90021 11.9876C10.6002 11.2876 13.5002 11.3876 16.4002 12.4876C18.3002 13.1876 20.2002 13.4876 22.3002 13.4876C26.5002 13.4876 30.7002 11.9876 34.6002 9.08765L36.1002 7.88763L36.6002 7.48764L35.7002 6.78763C35.4002 6.48763 35.0002 6.18764 34.6002 5.98764L34.0002 5.58765L33.5002 5.98764C33.3002 6.08764 33.2002 6.28763 33.0002 6.38763C27.7002 10.3876 22.4002 11.4876 17.4002 9.58765C13.8002 8.28765 10.2002 7.98765 6.60019 9.08765C6.30019 9.18765 6.00019 9.28763 5.60019 9.38763L5.40021 9.48764L5.10019 9.78763C5.10019 9.88763 5.00021 9.88764 4.90021 9.98764C4.50021 10.5876 4.00019 11.0877 3.60019 11.6877L1.7002 14.5876L4.8002 12.9876C5.3002 12.9876 5.70018 12.7877 6.00018 12.6877Z"
						fill="white"
					/>
					<path
						d="M14.2 5.88748L14.5 5.98749C15.8 6.48749 17.8 6.98749 20.3 6.98749C22.9 6.98749 25.4 6.38748 27.9 5.38748L31 3.88748L28.9 3.1875C28.3 2.9875 27.7 2.7875 27 2.6875H26.7L26.4 2.78748C26.1 2.88748 25.8 3.0875 25.5 3.1875C22.5 4.2875 19.5 4.4875 16.6 3.6875C16.3 3.5875 16 3.48748 15.7 3.38748L15.4 3.28748L15.1 3.38748C14.5 3.58748 13.9 3.78749 13.3 4.08749L11 5.08749L13.4 5.78748C13.6 5.68748 13.9 5.78748 14.2 5.88748Z"
						fill="white"
					/>
				</svg>

				<div className="grow max-w-[90%] md:max-w-2xl w-full space-y-3">
					{/* <!-- Card --> */}
					<div className="space-y-3">
						<p className="text-sm text-gray-800 dark:text-white">
							Preline UI is an open-source set of prebuilt UI components based
							on the utility-first Tailwind CSS framework.
						</p>
					</div>
					{/* <!-- End Card --> */}

					{/* <!-- Button Group --> */}
					<div>
						<div className="sm:flex sm:justify-between">
							<div className="space-y-2 sm:space-y-0 sm:space-x-2">
								<div className="inline-flex border border-gray-200 rounded-full p-0.5 dark:border-neutral-700">
									<button
										type="button"
										className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-neutral-500 dark:hover:bg-blue-900 dark:hover:text-blue-200"
									>
										<svg
											className="flex-shrink-0 size-4"
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
											<path d="M7 10v12" />
											<path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
										</svg>
									</button>
									<button
										type="button"
										className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-neutral-500 dark:hover:bg-blue-900 dark:hover:text-blue-200"
									>
										<svg
											className="flex-shrink-0 size-4"
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
											<path d="M17 14V2" />
											<path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
										</svg>
									</button>
								</div>
								<button
									type="button"
									className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										viewBox="0 0 448 512"
									>
										<path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z" />
									</svg>
									Copy
								</button>
							</div>

							<div className="mt-1 sm:mt-0">
								<button
									type="button"
									className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800"
								>
									<svg
										className="flex-shrink-0 size-4"
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
										<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
										<path d="M21 3v5h-5" />
									</svg>
									New answer
								</button>
							</div>
						</div>
					</div>
					{/* <!-- End Button Group --> */}
				</div>
			</li>
			{/* <!-- End Chat Bubble --> */}
		</>
	);
}

export default Chat_Bubble;
