import { useEffect } from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Chat = lazy(() => import("./pages/Chat"));
const Landing = lazy(() => import("./pages/Landing"));
const Error = lazy(() => import("./pages/Error"));

const openDatabase = () => {
	// Check if IndexedDB is supported
	if (!window.indexedDB) {
		console.error("IndexedDB not supported");
		return;
	}

	const dbName = "mindstride";
	const tableName = "chats";

	const request = window.indexedDB.open(dbName, 1); // Version 1

	request.onupgradeneeded = (event) => {
		const db = event.target.result;
		// Create the table if it doesn't exist
		if (!db.objectStoreNames.contains(tableName)) {
			db.createObjectStore(tableName, {
				keyPath: "id",
				autoIncrement: true,
			});
			// Add any additional columns you need here
			// objectStore.createIndex('column_name', 'column_name', { unique: false });
		}
	};

	request.onsuccess = (event) => {
		console.log("Connected to IndexedDB", event);
		// You can now use the database
	};

	request.onerror = (event) => {
		console.error("Error connecting to IndexedDB", event);
	};
};

function App() {
	useEffect(() => {
		openDatabase();
	}, []);

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
