import { AiFillFacebook } from "react-icons/ai";
import Or from "@/components/login/Or";
import Input from "@/components/login/Input";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import axios from 'axios';
import Swal from 'sweetalert2'
import { useRouter } from "next/router";


function register() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:3030/auth/signup';
    const form = new FormData();
    form.append('username', username);
    form.append('name', fullName);
    form.append('email', email);
    form.append('password', password);
    form.append('avatar', selectedFile);

    axios.post(url, form).then(function (response) {
      const status = response.data.status;
      const message = response.data.data.message
      if (status) {
        Swal.fire({
          icon: 'success',
          title: message,
          showConfirmButton: false,
          timer: 1500
        });
        router.push('/');
      } else {
        Swal.fire({
          icon: 'error',
          title: message,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }).catch(function (error) {
      console.log(error);
    });
  }

  const enable = email && username && fullName && password.length >= 8;

  return (

    <div className="w-full h-full flex flex-wrap   overflow-auto items-center justify-center">
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/instagram.ico" />
      </Head>
      <div className="w-[350px] my-[2rem]">
        <div className="p-[20px_40px]   bg-white border-[#dbdbdb] border">
          <a className="flex justify-center mb-[15px] mt-[30px] ">
            <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
          </a>
          <div className="text-center text-[17px] text-[#8e8e8e] mb-4 font-semibold">
            Sign up to see photos and videos from your friends.
          </div>
          <a className="mb-[15px] flex justify-center gap-1 items-center  font-semibold w-full bg-[#0095f6] text-white text-sm  rounded h-[30px]">
            <AiFillFacebook size={19} />
            <span className="text-[14px]">Log in with Facebook</span>
          </a>
          <Or />
          <form onSubmit={handleSubmit} className="mt-4">
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
            />
            <Input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              label="Full name"
            />
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              label="Username"
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
            />
            <Input
              type="file"
              accept=".jpg, .png, .jpeg"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
            <p className="text-center text-[12px] text-[#8e8e8e] mt-3 mb-5">
              People who use our service may have uploaded your contact
              information to Instagram. <a className="font-semibold"> Learn More</a>
            </p>
            <p className="text-center text-[12px] text-[#8e8e8e] mb-5">
              By signing up, you agree to our Terms , <a className="font-semibold">Privacy</a> <a className="font-semibold">Policy</a> and <a className="font-semibold">Cookies Policy .</a>
            </p>
            <button
              type="submit"
              disabled={!enable}
              className="mb-[22px] disabled:opacity-50 font-semibold w-full bg-[#0095f6] text-white text-sm  rounded h-[30px]"
            >
              Sign up
            </button>
          </form>
        </div>
        <div className="mt-[10px] text-[14px] bg-white border-[#dbdbdb] h-[63px] border gap-x-1 flex items-center justify-center">
          Have an account?{" "}
          <Link href="/" className="font-semibold text-[#0095f6]">
            Log in
          </Link>
        </div>
      </div>
    </div>

  )
}

export default register
