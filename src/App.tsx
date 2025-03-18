import { BrowserRouter as Router, Routes, Route } from "react-router";
import AppLayout from "./layout/AppLayout";
import RipeDashboard from "./pages/RipeDashboard";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<RipeDashboard />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
