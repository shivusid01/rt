import { FaEye, FaPen } from "react-icons/fa";

const Customer = ({ name, lastInvoice, avatar }) => {
  return (
    <tr>
      <td style={{ display: "flex", alignItems: "center", gap: "30px", paddingBottom: "20px"  }}>
        <img src={avatar} alt={name} style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
        <span>{name}</span>
      </td>
      <td>{lastInvoice}</td>
      <td style={{ display: "flex", paddingRight: "30px" ,gap: "15px" }}>
        <FaPen style={{ cursor: "pointer" }} />
        <FaEye style={{ cursor: "pointer" }} />
      </td>
    </tr>
  );
};

export default Customer;
