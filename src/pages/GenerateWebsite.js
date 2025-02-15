import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generate_Website } from "../services/api";
import "./GenerateWebsite.css";

const GenerateWebsite = () => {
  const [input, setInput] = useState("");
  const [techStack, setTechStack] = useState("React.js");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) {
      setError("Description cannot be empty.");
      return;
    }

    setError(""); // Clear any previous errors
    setLoading(true);

    try {
      const data = await generate_Website(trimmedInput, techStack);

      // Log the backend response to check if generated_code exists
      console.log("Generated code:", data);

      if (data.generated_code) {
        // Navigate to the output page if code is successfully generated
        navigate("/output", { state: { generatedCode: data.generated_code } });
      } else {
        // Handle case where no code was generated
        setError("No code was generated. Please try again.");
      }
    } catch (err) {
      console.error("Error generating website:", err);
      const errorMessage =
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Failed to generate website code. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="generate-website">
      <div className="generate-container">
        <h2 className="title">AI Website Generator</h2>
        <textarea
          className="description-input"
          placeholder="Describe your website idea..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="tech-stack-container">
          <label htmlFor="tech-stack">Select Technology:</label>
          <select
            id="tech-stack"
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
          >
            <option value="React.js">React.js</option>
            <option value="Django">Django</option>
            <option value="Node.js">Node.js</option>
          </select>
        </div>
        <button className="generate-button" onClick={handleSubmit} disabled={loading}>
          {loading ? "Generating..." : "Generate Website"}
        </button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default GenerateWebsite;
