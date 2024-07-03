import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Chat = lazy(() => import("./pages/Chat"));
const Landing = lazy(() => import("./pages/Landing"));
const Error = lazy(() => import("./pages/Error"));

function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<div></div>}>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/chat" element={<Chat />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
