import Cart from "/carts.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailER: false,
    passwordER: false,
  });

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedEmail = user.email.trim();
    const trimmedPassword = user.password.trim();

    if (!trimmedEmail || !trimmedPassword) {
      setErrors({
        emailER: !trimmedEmail,
        passwordER: !trimmedPassword,
      });
      return;
    }

    if (!EmailRegex.test(trimmedEmail)) {
      setErrors((prev) => ({ ...prev, emailER: true }));
      return;
    }

    setErrors({ emailER: false, passwordER: false });

    try {
      const response = await fetch(
        "https://pixelize.pythonanywhere.com/users/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: trimmedEmail,
            password: trimmedPassword,
          }),
        }
      );

      const result = await response.json();

      if (result.true_or_false === true) {
        navigate("/home", { state: { id: result.id } });
      } else {
        alert("Account not found");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
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
        leading-[100%] tracking-[0.5px] text-emerald-600"
        >
          Login
        </h1>

        <form onSubmit={handleLogin}>
          <div className="my-[40px]">
            {" "}
            <div className=" mb-[24px] w-[full]">
              <input
                className="w-full
                border-b border-black
                opacity-100
                placeholder-opacity-50
                focus:outline-none"
                type="text"
                value={user.email}
                placeholder="Email address"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              {errors.emailER && (
                <span className="text-red-700">Incorrect Email</span>
              )}
            </div>
            <div className="w-full">
              <input
                className="w-full
              border-b border-black
              opacity-100
              placeholder-opacity-50
              focus:outline-none"
                type="text"
                value={user.password}
                placeholder="Password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              {errors.passwordER && (
                <span className="text-red-700">Password required</span>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="
            bg-emerald-500 w-full py-[14px] text-white rounded-[10px] 
             hover:bg-white hover:text-black cursor-pointer"
          >
            Login to your account
          </button>
        </form>

        <div
          className="w-[216px] font-normal text-[13px] leading-[100%]
          tracking-[1px] mt-[24px] text-center mx-auto"
        >
          Don't have an account?{" "}
          <Link to="/register" className="text-emerald-700 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
