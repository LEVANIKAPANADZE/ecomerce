import Cart from "/carts.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  type Field = "Username" | "Email" | "Password";

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

  const arr: { placeholder: string; inputName: Field; message: string }[] = [
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
        if (error instanceof Error) {
          alert(error.message);
        } else {
          alert("An unexpected error occured");
        }
      }
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <img src={Cart} alt="Shopping cart" className="w-[50px] h-[50px]" />

      <div
        className="bg-amber-500 w-[327px] py-[24px] 
      px-[32px] mt-[58px] rounded-[10px]"
      >
        <h1
          className="w-[76px] font-normal text-[32px] 
        leading-[100%] tracking-[0.5px] text-emerald-600 text-center whitespace-nowrap"
        >
          Sign Up
        </h1>

        <form onSubmit={handleSubmission}>
          <div className="my-[40px]">
            {arr.map((item) => (
              <div key={item.inputName} className="mb-[24px] w-[full]">
                <input
                  className="w-full
                border-b border-black
                opacity-100
                placeholder-opacity-50
                focus:outline-none"
                  type="text"
                  name={item.inputName}
                  placeholder={item.placeholder}
                  value={values[item.inputName]}
                  onChange={handleChange}
                />
                {errors[item.inputName] && (
                  <p className="error text-red-700">{item.message}</p>
                )}
              </div>
            ))}
          </div>

          <button
            className="
            bg-emerald-500 w-full py-[14px] text-white rounded-[10px] 
             hover:bg-white hover:text-black cursor-pointer"
            type="submit"
          >
            Create your account
          </button>
        </form>

        <div
          className="w-[216px] font-normal text-[13px] leading-[100%]
          tracking-[1px] mt-[24px] text-center mx-auto"
        >
          Alread have an account?{" "}
          <Link to="/" className="text-emerald-700 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
