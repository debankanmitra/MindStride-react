import Chat_Bubble from "./Chat_Bubble";

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
					<Chat_Bubble />
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
						Send
					</button>
				</div>
				{/* <!-- End Input --> */}
			</footer>
			{/* <!-- End Textarea --> */}
		</div>
	);
}

export default Prompt_Template;
