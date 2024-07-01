function Prompt_Template() {
	return (
		// <!-- Content -->
		<div className="relative h-screen w-full lg:ps-64">
			<div className="py-10 lg:py-14">
				{/* <!-- Title --> */}
				<div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto text-center">
					<div className="flex items-center justify-center gap-x-2 ">
						<h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
							Welcome to Mindstride AI
						</h1>
						<div className="relative w-8 h-8 bg-gradient-to-r from-blue-500 via-blue-700 to-indigo-800 rounded-full bg-[length:200%_200%] animate-gradient-x"></div>
					</div>
					<p className="mt-3 text-gray-600 dark:text-neutral-400">
						Your AI-powered copilot for personal growth and self-improvement.
					</p>
				</div>
				{/* <!-- End Title --> */}
				<ul className="mt-16 space-y-5">
					{/* <!-- Chat Bubble --> */}
					<li className="max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4">
						<svg
							className="flex-shrink-0 w-[2.375rem] h-[2.375rem] rounded-full"
							width="38"
							height="38"
							viewBox="0 0 38 38"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="38" height="38" rx="6" fill="#2563EB" />
							<path
								d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25"
								stroke="white"
								strokeWidth="1.5"
							/>
							<path
								d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25"
								stroke="white"
								strokeWidth="1.5"
							/>
							<ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white" />
						</svg>

						<div className="space-y-3">
							<h2 className="font-medium text-gray-800 dark:text-white">
								How can we help?
							</h2>
							<div className="space-y-1.5">
								<p className="mb-1.5 text-sm text-gray-800 dark:text-white">
									You can ask questions like:
								</p>
								<ul className="list-disc list-outside space-y-1.5 ps-3.5">
									<li className="text-sm text-gray-800 dark:text-white">
										What&apos;s Preline UI?
									</li>

									<li className="text-sm text-gray-800 dark:text-white">
										How many Starter Pages & Examples are there?
									</li>

									<li className="text-sm text-gray-800 dark:text-white">
										Is there a PRO version?
									</li>
								</ul>
							</div>
						</div>
					</li>
					{/* <!-- End Chat Bubble --> */}

					{/* <!-- Chat Bubble --> */}
					<li className="py-2 sm:py-4">
						<div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
							<div className="max-w-2xl flex gap-x-2 sm:gap-x-4">
								<span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
									<span className="text-sm font-medium text-white leading-none">
										AZ
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
							className="flex-shrink-0 w-[2.375rem] h-[2.375rem] rounded-full"
							width="38"
							height="38"
							viewBox="0 0 38 38"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="38" height="38" rx="6" fill="#2563EB" />
							<path
								d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25"
								stroke="white"
								strokeWidth="1.5"
							/>
							<path
								d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25"
								stroke="white"
								strokeWidth="1.5"
							/>
							<ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white" />
						</svg>

						<div className="grow max-w-[90%] md:max-w-2xl w-full space-y-3">
							{/* <!-- Card --> */}
							<div className="space-y-3">
								<p className="text-sm text-gray-800 dark:text-white">
									Preline UI is an open-source set of prebuilt UI components
									based on the utility-first Tailwind CSS framework.
								</p>
								<div className="space-y-1.5">
									<p className="text-sm text-gray-800 dark:text-white">
										Here&apos;re some links to get started
									</p>
									<ul>
										<li>
											<a
												className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500 dark:hover:text-blue-400"
												href="../docs/index.html"
											>
												Installation Guide
											</a>
										</li>
										<li>
											<a
												className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500 dark:hover:text-blue-400"
												href="../docs/frameworks.html"
											>
												Framework Guides
											</a>
										</li>
									</ul>
								</div>
							</div>
							{/* <!-- End Card --> */}

							{/* <!-- Button Group --> */}
							<div>
								<div className="sm:flex sm:justify-between">
									<div>
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
											Copy
										</button>
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
												<circle cx="18" cy="5" r="3" />
												<circle cx="6" cy="12" r="3" />
												<circle cx="18" cy="19" r="3" />
												<line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
												<line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
											</svg>
											Share
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

					{/* <!-- Chat Bubble --> */}
					<li className="py-2 sm:py-4">
						<div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
							<div className="max-w-2xl flex gap-x-2 sm:gap-x-4">
								<span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
									<span className="text-sm font-medium text-white leading-none">
										AZ
									</span>
								</span>

								<div className="grow mt-2 space-y-3">
									<p className="text-gray-800 dark:text-neutral-200">
										what&apos;s preline ui figma?
									</p>
									<div className="mt-3">
										<button
											type="button"
											className="p-2 inline-flex justify-center items-center gap-x-1 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 text-xs dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
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
												<polygon points="5 3 19 12 5 21 5 3" />
											</svg>
											Voice message
										</button>
									</div>
								</div>
							</div>
						</div>
					</li>
					{/* <!-- End Chat Bubble --> */}

					{/* <!-- Chat Bubble --> */}
					<li className="max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4">
						<svg
							className="flex-shrink-0 w-[2.375rem] h-[2.375rem] rounded-full"
							width="38"
							height="38"
							viewBox="0 0 38 38"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="38" height="38" rx="6" fill="#2563EB" />
							<path
								d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25"
								stroke="white"
								strokeWidth="1.5"
							/>
							<path
								d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25"
								stroke="white"
								strokeWidth="1.5"
							/>
							<ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white" />
						</svg>

						<div className="grow max-w-[90%] md:max-w-2xl w-full space-y-3">
							{/* <!-- Card --> */}
							<div className="space-y-3">
								<p className="text-sm text-gray-800 dark:text-white">
									Preline UI Figma is the largest free design system for Figma,
									crafted with Tailwind CSS styles and Preline UI components
									with extra top-notch additions.
								</p>
								<div className="space-y-1.5">
									<p className="text-sm text-gray-800 dark:text-white">
										With the features like:
									</p>
									<ul className="list-disc list-outside space-y-1.5 ps-3.5">
										<li className="text-sm text-gray-800 dark:text-white">
											12-column Grid System
										</li>

										<li className="text-sm text-gray-800 dark:text-white">
											Easily find UI elements
										</li>

										<li className="text-sm text-gray-800 dark:text-white">
											Variants and Properties
										</li>

										<li className="text-sm text-gray-800 dark:text-white">
											Tailwind CSS Color styles
										</li>

										<li className="text-sm text-gray-800 dark:text-white">
											Auto layout and constraints
										</li>
									</ul>
								</div>
							</div>
							{/* <!-- End Card --> */}

							{/* <!-- Button Group --> */}
							<div>
								<div className="sm:flex sm:justify-between">
									<div>
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
											Copy
										</button>
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
												<circle cx="18" cy="5" r="3" />
												<circle cx="6" cy="12" r="3" />
												<circle cx="18" cy="19" r="3" />
												<line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
												<line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
											</svg>
											Share
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

					{/* <!-- Chat Bubble --> */}
					<li className="py-2 sm:py-4">
						<div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
							<div className="max-w-2xl flex gap-x-2 sm:gap-x-4">
								<span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
									<span className="text-sm font-medium text-white leading-none">
										AZ
									</span>
								</span>

								<div className="grow mt-2 space-y-3">
									<p className="text-gray-800 dark:text-neutral-200">
										create a table example with preline using avatars, badges
										and progress bars
									</p>
								</div>
							</div>
						</div>
					</li>
					{/* <!-- End Chat Bubble --> */}

					{/* <!-- Chat Bubble --> */}
					<li className="max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4">
						<svg
							className="flex-shrink-0 w-[2.375rem] h-[2.375rem] rounded-full"
							width="38"
							height="38"
							viewBox="0 0 38 38"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="38" height="38" rx="6" fill="#2563EB" />
							<path
								d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25"
								stroke="white"
								strokeWidth="1.5"
							/>
							<path
								d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25"
								stroke="white"
								strokeWidth="1.5"
							/>
							<ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white" />
						</svg>

						<div className="grow max-w-[90%] md:max-w-2xl w-full space-y-3">
							{/* <!-- Card --> */}
							<div className="space-y-3">
								<p className="text-sm text-gray-800 dark:text-white">
									Hold on a sec...
								</p>
							</div>
							{/* <!-- End Card --> */}

							{/* <!-- Table Section --> */}
							<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
								{/* <!-- Table --> */}
								<div className="-m-1.5 overflow-x-auto">
									<div className="p-1.5 min-w-full inline-block align-middle">
										<table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
											<thead className="bg-gray-50 dark:bg-neutral-800">
												<tr>
													<th scope="col" className="px-6 py-3 text-start">
														<div className="flex items-center gap-x-2">
															<span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
																Name
															</span>
														</div>
													</th>

													<th scope="col" className="px-6 py-3 text-start">
														<div className="flex items-center gap-x-2">
															<span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
																Status
															</span>
														</div>
													</th>

													<th scope="col" className="px-6 py-3 text-start">
														<div className="flex items-center gap-x-2">
															<span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
																Portfolio
															</span>
														</div>
													</th>

													<th scope="col" className="px-6 py-3 text-start">
														<div className="flex items-center gap-x-2">
															<span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
																Created
															</span>
														</div>
													</th>
												</tr>
											</thead>

											<tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
												<tr>
													<td className="size-px whitespace-nowrap">
														<div className="px-6 py-3">
															<div className="flex items-center gap-x-3">
																<img
																	className="inline-block size-[38px] rounded-full"
																	src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
																	alt="Image Description"
																/>
																<div className="grow">
																	<span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
																		Christina Bersh
																	</span>
																	<span className="block text-sm text-gray-500 dark:text-neutral-500">
																		christina@site.com
																	</span>
																</div>
															</div>
														</div>
													</td>
													<td className="size-px whitespace-nowrap">
														<div className="px-6 py-3">
															<span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
																<svg
																	className="size-2.5"
																	xmlns="http://www.w3.org/2000/svg"
																	width="16"
																	height="16"
																	fill="currentColor"
																	viewBox="0 0 16 16"
																>
																	<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
																</svg>
																Active
															</span>
														</div>
													</td>
													<td className="size-px whitespace-nowrap">
														<div className="px-6 py-3">
															<div className="flex items-center gap-x-3">
																<span className="text-xs text-gray-500 dark:text-neutral-500">
																	1/5
																</span>
																<div
																	className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
																	role="progressbar"
																	aria-valuenow="25"
																	aria-valuemin="0"
																	aria-valuemax="100"
																>
																	<div
																		className="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap dark:bg-neutral-200"
																		style={{ width: "25%" }}
																	></div>
																</div>
															</div>
														</div>
													</td>
													<td className="size-px whitespace-nowrap">
														<div className="px-6 py-3">
															<span className="text-sm text-gray-500 dark:text-neutral-500">
																28 Dec, 12:12
															</span>
														</div>
													</td>
												</tr>

												<tr>
													<td className="size-px whitespace-nowrap">
														<div className="px-6 py-3">
															<div className="flex items-center gap-x-3">
																<img
																	className="inline-block size-[38px] rounded-full"
																	src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
																	alt="Image Description"
																/>
																<div className="grow">
																	<span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
																		David Harrison
																	</span>
																	<span className="block text-sm text-gray-500 dark:text-neutral-500">
																		david@site.com
																	</span>
																</div>
															</div>
														</div>
													</td>
													<td className="size-px whitespace-nowrap">
														<div className="px-6 py-3">
															<span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
																<svg
																	className="size-2.5"
																	xmlns="http://www.w3.org/2000/svg"
																	width="16"
																	height="16"
																	fill="currentColor"
																	viewBox="0 0 16 16"
																>
																	<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
																</svg>
																Warning
															</span>
														</div>
													</td>
													<td className="size-px whitespace-nowrap">
														<div className="px-6 py-3">
															<div className="flex items-center gap-x-3">
																<span className="text-xs text-gray-500 dark:text-neutral-500">
																	3/5
																</span>
																<div
																	className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
																	role="progressbar"
																	aria-valuenow="78"
																	aria-valuemin="0"
																	aria-valuemax="100"
																>
																	<div
																		className="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap dark:bg-neutral-200"
																		style={{ width: "78%" }}
																	></div>
																</div>
															</div>
														</div>
													</td>
													<td className="size-px whitespace-nowrap">
														<div className="px-6 py-3">
															<span className="text-sm text-gray-500 dark:text-neutral-500">
																20 Dec, 09:27
															</span>
														</div>
													</td>
												</tr>

												<tr>
													<td className="size-px whitespace-nowrap">
														<div className="px-6 py-3">
															<div className="flex items-center gap-x-3">
																<span className="inline-flex items-center justify-center size-[38px] rounded-full bg-gray-300 dark:bg-neutral-700">
																	<span className="font-medium text-gray-800 leading-none dark:text-neutral-200">
																		A
																	</span>
																</span>
																<div className="grow">
																	<span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
																		Anne Richard
																	</span>
																	<span className="block text-sm text-gray-500 dark:text-neutral-500">
																		anne@site.com
																	</span>
																</div>
															</div>
														</div>
													</td>
													<td className="size-px whitespace-nowrap">
														<div className="px-6 py-3">
															<span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
																<svg
																	className="size-2.5"
																	xmlns="http://www.w3.org/2000/svg"
																	width="16"
																	height="16"
																	fill="currentColor"
																	viewBox="0 0 16 16"
																>
																	<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
																</svg>
																Active
															</span>
														</div>
													</td>
													<td className="size-px whitespace-nowrap">
														<div className="px-6 py-3">
															<div className="flex items-center gap-x-3">
																<span className="text-xs text-gray-500 dark:text-neutral-500">
																	5/5
																</span>
																<div
																	className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
																	role="progressbar"
																	aria-valuenow="100"
																	aria-valuemin="0"
																	aria-valuemax="100"
																>
																	<div
																		className="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap dark:bg-neutral-200"
																		style={{ width: "100%" }}
																	></div>
																</div>
															</div>
														</div>
													</td>
													<td className="size-px whitespace-nowrap">
														<div className="px-6 py-3">
															<span className="text-sm text-gray-500 dark:text-neutral-500">
																18 Dec, 15:20
															</span>
														</div>
													</td>
												</tr>

												<tr>
													<td className="size-px whitespace-nowrap">
														<div className="px-6 py-3">
															<div className="flex items-center gap-x-3">
																<img
																	className="inline-block size-[38px] rounded-full"
																	src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
																	alt="Image Description"
																/>
																<div className="grow">
																	<span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
																		Samia Kartoon
																	</span>
																	<span className="block text-sm text-gray-500 dark:text-neutral-500">
																		samia@site.com
																	</span>
																</div>
															</div>
														</div>
													</td>
													<td className="size-px whitespace-nowrap">
														<div className="px-6 py-3">
															<span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
																<svg
																	className="size-2.5"
																	xmlns="http://www.w3.org/2000/svg"
																	width="16"
																	height="16"
																	fill="currentColor"
																	viewBox="0 0 16 16"
																>
																	<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
																</svg>
																Active
															</span>
														</div>
													</td>
													<td className="size-px whitespace-nowrap">
														<div className="px-6 py-3">
															<div className="flex items-center gap-x-3">
																<span className="text-xs text-gray-500 dark:text-neutral-500">
																	0/5
																</span>
																<div
																	className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
																	role="progressbar"
																	aria-valuenow="1"
																	aria-valuemin="0"
																	aria-valuemax="100"
																>
																	<div
																		className="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap dark:bg-neutral-200"
																		style={{ width: "1%" }}
																	></div>
																</div>
															</div>
														</div>
													</td>
													<td className="size-px whitespace-nowrap">
														<div className="px-6 py-3">
															<span className="text-sm text-gray-500 dark:text-neutral-500">
																18 Dec, 15:20
															</span>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								{/* <!-- End Table --> */}
							</div>
							{/* <!-- End Table Section --> */}

							{/* <!-- Button Group --> */}
							<div>
								<div className="sm:flex sm:justify-between">
									<div>
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
											Copy
										</button>
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
												<circle cx="18" cy="5" r="3" />
												<circle cx="6" cy="12" r="3" />
												<circle cx="18" cy="19" r="3" />
												<line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
												<line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
											</svg>
											Share
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

					{/* <!-- Chat Bubble --> */}
					<li className="py-2 sm:py-4">
						<div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
							<div className="max-w-2xl flex gap-x-2 sm:gap-x-4">
								<span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
									<span className="text-sm font-medium text-white leading-none">
										AZ
									</span>
								</span>

								<div className="grow mt-2 space-y-3">
									<p className="text-gray-800 dark:text-neutral-200">
										show me the code
									</p>
								</div>
							</div>
						</div>
					</li>
					{/* <!-- End Chat Bubble --> */}

					{/* <!-- Chat Bubble --> */}
					<li className="max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4">
						<svg
							className="flex-shrink-0 w-[2.375rem] h-[2.375rem] rounded-full"
							width="38"
							height="38"
							viewBox="0 0 38 38"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="38" height="38" rx="6" fill="#2563EB" />
							<path
								d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25"
								stroke="white"
								strokeWidth="1.5"
							/>
							<path
								d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25"
								stroke="white"
								strokeWidth="1.5"
							/>
							<ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white" />
						</svg>

						<div className="grow max-w-[90%] md:max-w-2xl w-full space-y-3">
							{/* <!-- Card --> */}
							<div className="space-y-3">
								<p className="text-sm text-gray-800 dark:text-white">
									Of course!
								</p>
							</div>
							{/* <!-- End Card --> */}

							<div className="mt-3 flex-none min-w-full bg-gray-800 font-mono text-sm p-5 rounded-lg dark:bg-neutral-800">
								<span className="text-red-500"></span>
								<span className="text-red-500">
									table{" "}
									<span className="text-gray-300">
										<span className="text-sky-400 min-w-full divide-y divide-gray-200 dark:divide-neutral-700"></span>
									</span>
									<span className="text-red-500"></span>
									<span className="block"></span>{" "}
									<span className="ms-5 text-red-500"></span>
									<span className="text-red-500">
										thead{" "}
										<span className="text-gray-300">
											<span className="text-sky-400 bg-gray-50 dark:bg-neutral-800"></span>
										</span>
										<span className="text-red-500"></span>
										<span className="block"></span>
										<span className="text-red-500">
											{" "}
											<span className="ms-10 text-gray-500 dark:text-neutral-500">
												...
											</span>
										</span>
									</span>
								</span>
							</div>

							{/* <!-- Button Group --> */}
							<div>
								<div className="sm:flex sm:justify-between">
									<div>
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
											Copy
										</button>
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
												<circle cx="18" cy="5" r="3" />
												<circle cx="6" cy="12" r="3" />
												<circle cx="18" cy="19" r="3" />
												<line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
												<line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
											</svg>
											Share
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

					{/* <!-- Chat Bubble --> */}
					<li className="py-2 sm:py-4">
						<div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
							<div className="max-w-2xl flex gap-x-2 sm:gap-x-4">
								<span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
									<span className="text-sm font-medium text-white leading-none">
										AZ
									</span>
								</span>

								<div className="grow mt-2 space-y-3">
									<p className="text-gray-800 dark:text-neutral-200">
										quiz me about tailwindcss
									</p>
								</div>
							</div>
						</div>
					</li>
					{/* <!-- End Chat Bubble --> */}

					{/* <!-- Chat Bubble --> */}
					<li className="max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4">
						<svg
							className="flex-shrink-0 w-[2.375rem] h-[2.375rem] rounded-full"
							width="38"
							height="38"
							viewBox="0 0 38 38"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="38" height="38" rx="6" fill="#2563EB" />
							<path
								d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25"
								stroke="white"
								strokeWidth="1.5"
							/>
							<path
								d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25"
								stroke="white"
								strokeWidth="1.5"
							/>
							<ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white" />
						</svg>

						<div className="grow max-w-[90%] md:max-w-2xl w-full space-y-3">
							{/* <!-- Card --> */}
							<div className="space-y-3">
								<p className="text-sm text-gray-800 dark:text-white">Sure!</p>
							</div>
							{/* <!-- End Card --> */}

							<div>
								<button
									type="button"
									className="mb-2.5 me-1.5 py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-lg border border-blue-600 bg-white text-blue-600 align-middle hover:bg-blue-50 text-sm dark:bg-neutral-900 dark:text-blue-500 dark:border-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400"
								>
									Is Tailwind CSS a free library?
								</button>
								<button
									type="button"
									className="mb-2.5 me-1.5 py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-lg border border-blue-600 bg-white text-blue-600 align-middle hover:bg-blue-50 text-sm dark:bg-neutral-900 dark:text-blue-500 dark:border-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400"
								>
									What&apos;s the latest Tailwind CSS version?
								</button>
								<button
									type="button"
									className="mb-2.5 me-1.5 py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-lg border border-blue-600 bg-white text-blue-600 align-middle hover:bg-blue-50 text-sm dark:bg-neutral-900 dark:text-blue-500 dark:border-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400"
								>
									Is it a utility-class based?
								</button>
							</div>

							{/* <!-- Button Group --> */}
							<div>
								<div className="sm:flex sm:justify-between">
									<div>
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
											Copy
										</button>
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
												<circle cx="18" cy="5" r="3" />
												<circle cx="6" cy="12" r="3" />
												<circle cx="18" cy="19" r="3" />
												<line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
												<line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
											</svg>
											Share
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

					{/* <!-- Chat Bubble --> */}
					<li className="py-2 sm:py-4">
						<div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
							<div className="max-w-2xl flex gap-x-2 sm:gap-x-4">
								<span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
									<span className="text-sm font-medium text-white leading-none">
										AZ
									</span>
								</span>

								<div className="grow mt-2 space-y-3">
									<p className="text-gray-800 dark:text-neutral-200">
										generate 3-dimensional abstract images
									</p>
								</div>
							</div>
						</div>
					</li>
					{/* <!-- End Chat Bubble --> */}

					{/* <!-- Chat Bubble --> */}
					<li className="max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4">
						<svg
							className="flex-shrink-0 w-[2.375rem] h-[2.375rem] rounded-full"
							width="38"
							height="38"
							viewBox="0 0 38 38"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="38" height="38" rx="6" fill="#2563EB" />
							<path
								d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25"
								stroke="white"
								strokeWidth="1.5"
							/>
							<path
								d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25"
								stroke="white"
								strokeWidth="1.5"
							/>
							<ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white" />
						</svg>

						<div className="grow max-w-[90%] md:max-w-2xl w-full space-y-3">
							{/* <!-- Card --> */}
							<div className="space-y-3">
								<p className="text-sm text-gray-800 dark:text-white">
									Here you go...
								</p>
							</div>
							{/* <!-- End Card --> */}

							<div className="grid grid-cols-2 gap-1 rounded-lg overflow-hidden">
								<div className="aspect-w-16 aspect-h-9">
									<img
										className="w-full object-cover"
										src="https://images.unsplash.com/photo-1677644334825-0eb411012ac0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3343&q=80"
										alt="Deep Learning"
									/>
								</div>
								<div className="aspect-w-16 aspect-h-9">
									<img
										className="w-full object-cover"
										src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
										alt="Deep Learning"
									/>
								</div>
								<div className="aspect-w-16 aspect-h-9">
									<img
										className="w-full object-cover"
										src="https://images.unsplash.com/photo-1680193895115-b51b4ed5392f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
										alt="Deep Learning"
									/>
								</div>
								<div className="aspect-w-16 aspect-h-9">
									<img
										className="w-full object-cover"
										src="https://images.unsplash.com/photo-1680587590161-3a1dd77a7609?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
										alt="Deep Learning"
									/>
								</div>
							</div>

							{/* <!-- Button Group --> */}
							<div>
								<div className="sm:flex sm:justify-between">
									<div>
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
											Copy
										</button>
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
												<circle cx="18" cy="5" r="3" />
												<circle cx="6" cy="12" r="3" />
												<circle cx="18" cy="19" r="3" />
												<line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
												<line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
											</svg>
											Share
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

					{/* <!-- Chat Bubble --> */}
					<li className="py-2 sm:py-4">
						<div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
							<div className="max-w-2xl flex gap-x-2 sm:gap-x-4">
								<span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
									<span className="text-sm font-medium text-white leading-none">
										AZ
									</span>
								</span>

								<div className="grow mt-2 space-y-3">
									<p className="text-gray-800 dark:text-neutral-200">
										what&apos;s tailwindcss?
									</p>
								</div>
							</div>
						</div>
					</li>
					{/* <!-- End Chat Bubble --> */}

					{/* <!-- Chat Bubble --> */}
					<li className="max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4">
						<svg
							className="flex-shrink-0 w-[2.375rem] h-[2.375rem] rounded-full"
							width="38"
							height="38"
							viewBox="0 0 38 38"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="38" height="38" rx="6" fill="#2563EB" />
							<path
								d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25"
								stroke="white"
								strokeWidth="1.5"
							/>
							<path
								d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25"
								stroke="white"
								strokeWidth="1.5"
							/>
							<ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white" />
						</svg>

						<div className="grow max-w-[90%] md:max-w-2xl w-full space-y-3">
							{/* <!-- Card --> */}
							<div className="space-y-3">
								<p className="text-sm text-gray-800 dark:text-white">
									Tailwind CSS is an open source CSS framework. The main feature
									of this library is that, unlike other CSS frameworks like
									Bootstrap, it does not provide a series of predefined classes
									for elements such as buttons or tables.
								</p>
								<div className="space-y-1.5">
									<ul>
										<li>
											<a
												className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500 dark:hover:text-blue-400"
												href="#"
											>
												Get started with Tailwind CSS
											</a>
										</li>
										<li>
											<a
												className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500 dark:hover:text-blue-400"
												href="#"
											>
												Tailwind CSS Installation guide
											</a>
										</li>
									</ul>
								</div>
							</div>
							{/* <!-- End Card --> */}

							{/* <!-- Button Group --> */}
							<div>
								<div className="sm:flex sm:justify-between">
									<div>
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
											Copy
										</button>
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
												<circle cx="18" cy="5" r="3" />
												<circle cx="6" cy="12" r="3" />
												<circle cx="18" cy="19" r="3" />
												<line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
												<line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
											</svg>
											Share
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

					{/* <!-- Chat Bubble --> */}
					<li className="py-2 sm:py-4">
						<div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
							<div className="max-w-2xl flex gap-x-2 sm:gap-x-4">
								<div>
									<div className="text-end">
										<button
											type="button"
											className="ms-1.5 py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-lg border border-blue-600 bg-white text-blue-600 align-middle hover:bg-blue-50 text-sm dark:bg-neutral-900 dark:text-blue-500 dark:border-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400"
										>
											What is the use of Tailwind CSS?
										</button>
										<button
											type="button"
											className="ms-1.5 py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-lg border border-blue-600 bg-white text-blue-600 align-middle hover:bg-blue-50 text-sm dark:bg-neutral-900 dark:text-blue-500 dark:border-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400"
										>
											What is the difference between Tailwind CSS and CSS?
										</button>
									</div>
								</div>
							</div>
						</div>
					</li>
					{/* <!-- End Chat Bubble --> */}

					{/* <!-- Chat Bubble --> */}
					<li className="py-2 sm:py-4">
						<div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
							<div className="max-w-2xl flex gap-x-2 sm:gap-x-4">
								<span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
									<span className="text-sm font-medium text-white leading-none">
										AZ
									</span>
								</span>

								<div className="grow mt-2 space-y-3">
									<p className="text-gray-800 dark:text-neutral-200">
										2 files uploaded
									</p>

									<ul className="flex flex-col justify-end text-start -space-y-px">
										<li className="flex items-center gap-x-2 p-3 text-sm bg-white border text-gray-800 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
											<div className="w-full flex justify-between truncate">
												<span className="me-3 flex-1 w-0 truncate">
													resume_web_ui_developer.csv
												</span>
												<button
													type="button"
													className="flex items-center gap-x-2 text-gray-500 hover:text-blue-600 whitespace-nowrap dark:text-neutral-500 dark:hover:text-blue-500"
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
														<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
														<polyline points="7 10 12 15 17 10" />
														<line x1="12" x2="12" y1="15" y2="3" />
													</svg>
													Download
												</button>
											</div>
										</li>
										<li className="flex items-center gap-x-2 p-3 text-sm bg-white border text-gray-800 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
											<div className="w-full flex justify-between truncate">
												<span className="me-3 flex-1 w-0 truncate">
													coverletter_web_ui_developer.pdf
												</span>
												<button
													type="button"
													className="flex items-center gap-x-2 text-gray-500 hover:text-blue-600 whitespace-nowrap dark:text-neutral-500 dark:hover:text-blue-500"
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
														<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
														<polyline points="7 10 12 15 17 10" />
														<line x1="12" x2="12" y1="15" y2="3" />
													</svg>
													Download
												</button>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</li>
					{/* <!-- End Chat Bubble --> */}
				</ul>
			</div>

			{/* <!-- Textarea --> */}
			<footer className="max-w-4xl mx-auto sticky bottom-0 z-10 p-3 sm:py-6">
				<div className="lg:hidden flex justify-end mb-2 sm:mb-3">
					{/* <!-- Sidebar Toggle --> */}
					<button
						type="button"
						className="p-2 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
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
						className="absolute left-3 top-1/2 size-4 -translate-y-1/2 fill-blue-700 dark:fill-blue-600"
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
						className="w-full border border-gray-300 focus:outline-none focus:border-gray-500 px-2 py-4 pl-10 pr-24 rounded-xl text-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500"
						name="prompt"
						placeholder="Ask me anything ..."
					/>
					<button
						type="button"
						className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer bg-blue-700 rounded-xl px-2 py-1 text-xs tracking-wide text-slate-100 transition hover:opacity-75 active:opacity-100 active:outline-offset-0 dark:bg-blue-600 dark:text-slate-100"
					>
						Generate
					</button>
				</div>
				{/* <!-- End Input --> */}
			</footer>
			{/* <!-- End Textarea --> */}
		</div>
	);
}

export default Prompt_Template;
