import { useState } from "react";
import { Link } from "react-router-dom";

export default function Chat() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h1>Chat Page</h1>

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type message"
      />

      <br /><br />

      <Link to="/">Go to Login</Link>
    </div>
  );
}
