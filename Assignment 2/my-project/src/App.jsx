import React from "react";
import Customer from "./components/Customer";

const Customers = [
  { name: "Sukhi", lastInvoice: "45/12/24", avatar: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.641259872.1723827646&semt=ais_hybrid" },
  { name: "Abhishek", lastInvoice: "16/07/24", avatar: "https://img.freepik.com/free-photo/portrait-smiling-blonde-woman_23-2148316635.jpg?ga=GA1.1.641259872.1723827646&semt=ais_hybrid" },
  { name: "pandey", lastInvoice: "12/05/12", avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?ga=GA1.1.641259872.1723827646&semt=ais_hybrid" },
  { name: "kaur", lastInvoice: "09/10/30", avatar: "https://img.freepik.com/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg?ga=GA1.1.641259872.1723827646&semt=ais_hybrid" },
  { name: "Vivek", lastInvoice: "29/09/01", avatar: "https://img.freepik.com/free-photo/photo-handsome-unshaven-guy-looks-with-pleasant-expression-directly-camera_176532-8164.jpg?ga=GA1.1.641259872.1723827646&semt=ais_hybrid" },
  { name: "Jaspreet", lastInvoice: "01/01/25", avatar: "https://img.freepik.com/free-photo/handsome-smiling-man-looking-with-disbelief_176420-19591.jpg?ga=GA1.1.641259872.1723827646&semt=ais_hybrid" },
  { name: "chhabra", lastInvoice: "21/9/25", avatar: "https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?ga=GA1.1.641259872.1723827646&semt=ais_hybrid" },
  { name: "paswan", lastInvoice: "22/03/25", avatar: "https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?ga=GA1.1.641259872.1723827646&semt=ais_hybrid" },
  { name: "Ammu", lastInvoice: "23/12/25", avatar: "https://img.freepik.com/free-photo/portrait-caucasian-woman-smiling_53876-24998.jpg?ga=GA1.1.641259872.1723827646&semt=ais_hybrid" },
];

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <button style={{ marginRight: "30px", background: "orange", border: "none", padding: "10px" }}>
        + Register
      </button>
      <button style={{ marginRight: "30px", border: "1px solid black", padding: "10px" }}>Export</button>
      <button style={{ border: "1px solid black", padding: "10px" }}>Layout</button>

      <table style={{ width: "100%", marginTop: "50px", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Last Invoice</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Customers.map((customer, index) => (
            <Customer key={index} {...customer} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;