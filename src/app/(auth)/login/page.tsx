"use client";
import { ButtonPrimary } from "@/components/ui/Button";
import { FormInput } from "@/components/ui/Input";
import { login } from "@/lib/api/auth";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Cookies from "js-cookie";

const Login = () => {
  React.useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      if (!window.sessionStorage.getItem("alerted")) {
        alert("Anda sudah login");
        window.sessionStorage.setItem("alerted", "true");
        window.location.href = "/";
      }
    }
  }, []);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = await login({ ...formData });
      window.location.href = "/";
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main>
      <section className="grid grid-cols-2 gap-4 w-full h-screen px-12 items-center">
        <div className="w-full rounded-xl">
          <Image
            src="/images/loginimage.png"
            alt="Login Image"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full flex flex-col gap-4 items-center justify-center bg-white rounded-xl px-8 py-12">
          <span className="text-sm text-gray-500 hover:text-orange-500 absolute top-5 left-12">
            <Link href={"/"}>Kembali Ke Beranda</Link>
          </span>
          <h1 className="text-3xl uppercase text-orange-500 font-semibold my-5">
            Login
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-3/4">
            <FormInput
              id="email"
              name="email"
              title="Email"
              placeholder="example@mail.com"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              required
            />
            <FormInput
              id="password"
              name="password"
              title="Password"
              placeholder="Masukkan Password Kamu"
              value={formData.password}
              onChange={handleInputChange}
              type="password"
              required
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="mt-5 text-white bg-orange-500 py-2 px-5 rounded-md cursor-pointer"
              >
                {loading ? "...Loading" : "Login"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
