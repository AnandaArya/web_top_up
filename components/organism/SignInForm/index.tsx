import Link from "next/link";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    const data = {
      email: email,
      password: password
    }
    // console.log('data :' , data)
    if(!email || !password) {
      toast.error('email dan password wajib diisi')
    }
  }

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
      <p className="text-lg color-palette-1 m-0">
        Masuk untuk melakukan proses top up
      </p>
      <div className="pt-50">
        <label
          htmlFor="email"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Email Address
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          id="email"
          name="email"
          aria-describedby="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="pt-30">
        <label
          htmlFor="password"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          id="password"
          name="password"
          aria-describedby="password"
          placeholder="Your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          type="button"
          className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
          role="button"
          onClick={onSubmit}
        >
          Continue to Sign In
        </button>
        <Link href="/sign-up">
        <a
          className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
          role="button"
        >
          Sign Up
        </a>
        </Link>
      </div>
      <ToastContainer />
    </>
  );
}
