import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Card from "./Card";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock authentication
    if (email === "admin@skyline.com" && password === "123456") {
      onLogin(email);
    } else {
      setError(true);
    }
  };

  return (
    <Card>
      <h2>SkyLine Login</h2>

      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
        />

        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={error}
        />

        {error && <p className="error-text">Invalid credentials</p>}

        <Button>Login</Button>
      </form>
    </Card>
  );
};

export default LoginForm;
