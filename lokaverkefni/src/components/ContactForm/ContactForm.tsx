import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Almenn fyrirspurn");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!name.trim()) {
      newErrors.name = "Vinsamlegast sláðu inn nafn.";
    }

    if (!email.trim()) {
      newErrors.email = "Vinsamlegast sláðu inn email.";
    } else if (!email.includes("@")) {
      newErrors.email = "Vinsamlegast sláðu inn gilt netfang.";
    }

    if (!message.trim()) {
      newErrors.message = "Vinsamlegast skrifaðu skilaboð.";
    }

    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.message) {
      return;
    }

    alert("Takk fyrir Skilaboðin!");

    setName("");
    setEmail("");
    setSubject("Almenn Fyrirspurn");
    setMessage("");

    setErrors({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div>
        <input
          className={`input ${errors.name ? "error" : ""}`}
          type="text"
          placeholder="Nafn"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
      </div>

      <div>
        <input
          className={`input ${errors.email ? "error" : ""}`}
          type="email"
          placeholder="Netfang"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>

      <select
        className="input"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      >
        <option>Almenn fyrirspurn</option>
        <option>Bókanir</option>
        <option>Fyrirtækjaþjónusta</option>
      </select>

      <div>
        <textarea
          className={`input ${errors.message ? "error" : ""}`}
          placeholder="Skilaboð"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {errors.message && <p className="error-message">{errors.message}</p>}
      </div>

      <button type="submit">Senda</button>
    </form>
  );
}

export default ContactForm;
