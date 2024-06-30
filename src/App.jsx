import Chat from "./pages/Chat";
import {BrowserRouter ,Routes, Route } from "react-router-dom";
import { Suspense } from "react";

function App() {
  return (
    // <BrowserRouter>
    // {/* <Suspense fallback={<div></div>}> */}
		// 	<Routes>
		// 		<Route path="/" element={<Chat />} />
		// 		<Route path="/chat" element={<Chat />} />
		// 		{/* <Route path="*" element={<Error />} /> */}
		// 	</Routes>
		// {/* </Suspense> */}
    // </BrowserRouter>
    <Chat />
  );
}

export default App;
