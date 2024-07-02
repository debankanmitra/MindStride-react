import Chat from "./pages/Chat";
import {BrowserRouter ,Routes, Route } from "react-router-dom";
// import { Suspense } from "react";
import Landing from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
    {/* <Suspense fallback={<div></div>}> */}
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/chat" element={<Chat />} />
				{/* <Route path="*" element={<Error />} /> */}
			</Routes>
		{/* </Suspense> */}
    </BrowserRouter>
  );
}

export default App;
