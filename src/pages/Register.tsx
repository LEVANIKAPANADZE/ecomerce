import Cart from "/trolley.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [values, setValues] = useState({
    Username: "",
    Email: "",
    Password: "",
  });

  const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [errors, setErrors] = useState({
    Username: false,
    Email: false,
    Password: false,
  });

  const arr = [
    {
      placeholder: "Username",
      inputName: "Username",
      message: "Username cannot be empty",
    },
    {
      placeholder: "Email Address",
      inputName: "Email",
      message: "Looks like this is not an email",
    },
    {
      placeholder: "Password",
      inputName: "Password",
      message: "Password cannot be empty",
    },
  ];

  async function handleSubmission(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedValues = {
      Username: values.Username.trim(),
      Email: values.Email.trim(),
      Password: values.Password.trim(),
    };

    const currentErrors = {
      Username: !trimmedValues.Username,
      Email: !EmailRegex.test(trimmedValues.Email),
      Password: !trimmedValues.Password,
    };

    setErrors(currentErrors);

    const hasErrors = Object.values(currentErrors).some((val) => val);

    console.log(trimmedValues);

    if (!hasErrors) {
      try {
        const response = await fetch(
          "https://pixelize.pythonanywhere.com/users/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: trimmedValues.Username,
              email: trimmedValues.Email,
              password: trimmedValues.Password,
            }),
          }
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        alert(error.message);
      }
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  return (
    <>
      <img src={Cart} alt="Shopping cart" className="w-8 h-8" />

      <div>
        <h1>Sign Up</h1>

        <form onSubmit={handleSubmission}>
          <div>
            {arr.map((item) => (
              <div key={item.inputName}>
                <input
                  type="text"
                  name={item.inputName}
                  placeholder={item.placeholder}
                  value={values[item.inputName]}
                  onChange={handleChange}
                />
                {errors[item.inputName] && (
                  <p className="error">{item.message}</p>
                )}
              </div>
            ))}
          </div>

          <button type="submit">Create your account</button>
        </form>

        <p>
          Already have an account? <Link to={"/"}>Login</Link>
        </p>
      </div>
    </>
  );
}
