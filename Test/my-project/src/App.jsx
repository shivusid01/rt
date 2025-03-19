import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

// UserCard Component
const UserCard = ({ name, email, age }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-700">Email: {email}</p>
      <p className="text-gray-700">Age: {age}</p>
    </div>
  );
};

// Dashboard Component
const Dashboard = () => {
  const [users, setUsers] = useState([
    { name: "John Doe", email: "john@example.com", age: 28 },
    { name: "Jane Smith", email: "jane@example.com", age: 32 },
    { name: "Alice Johnson", email: "alice@example.com", age: 24 },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user, index) => (
          <UserCard key={index} {...user} />
        ))}
      </div>
    </div>
  );
};

 // Home Component
// const Home = () => {
//   return <h1 className="text-2xl font-bold p-6">Welcome to User Dashboard</h1>;
// };

 // App Component
// const App = () => {
//   return (
//     <Router>
//       <div className="p-4">
//         <nav className="mb-4">
//           <Link to="/" className="mr-4 text-blue-500">Home</Link>
//           <Link to="/dashboard" className="text-blue-500">Dashboard</Link>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
