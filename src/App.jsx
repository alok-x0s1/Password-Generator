import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef() : Aga kisi ka bhi reference lena hota h to useRef() hook use kiya jata hh.
  const passwordref = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (charAllowed) str += "~`!@#$%^&*(){}[]|,<>'+=-";
    if (numberAllowed) str += "0123456789";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length) + 1;

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [numberAllowed, charAllowed, length, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    let text = document.querySelector(".copyBtn");
    text.innerText = "Copied!";
    setTimeout(() => {
      text.innerText = "Copy";
    }, 5000);
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="flex flex-col max-w-xl gap-4 p-6 text-center min-h-screen shadow-md px-4 py-3 text-alok">
        <h1 className="text-center mt-5 text-3xl font-extrabold">
          Password generator
        </h1>
        <p className="my-3 p-4">
          Upgrade your online security with this easy-to-use password generator!
          Just choose your preferred length and check the character types
          (uppercase, lowercase, numbers, symbols) you want. The password
          updates as you go, making it a breeze to create strong, unique
          passwords for all your accounts.{" "}
        </p>
        <div className="flex shadow rounded-md overflow-hidden mb-4 border-2 border-alok">
          <input
            readOnly
            value={password}
            className="outline-none w-full max-w-full h-12 text-xl py-1 px-3 bg-bg text-white font-semibold tracking-wider"
            type="text"
            ref={passwordref}
          />
        </div>
        <button
          onClick={copyPasswordToClipboard}
          className="copyBtn w-28"
        >
          copy
        </button>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={10}
              max={25}
              onChange={(e) => setLength(e.target.value)}
              value={length}
              className="cursor-pointer"
            />
            <label>Length: {length}</label>
          </div>
        </div>
        <div className="text-center mt-3 rounded-lg">
          <div class="checkbox-wrapper-51 flex gap-4">
            <input
              type="checkbox"
              id="cbx-51"
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label for="cbx-51" class="toggle">
              <span>
                <svg width="10px" height="10px" viewBox="0 0 10 10">
                  <path d="M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z"></path>
                </svg>
              </span>
            </label>
            <label htmlFor="cbx-51">Number</label>
          </div>
          <div class="checkbox-wrapper-51 flex gap-4 mt-3">
            <input
              type="checkbox"
              id="cbx-52"
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label for="cbx-52" class="toggle">
              <span>
                <svg width="10px" height="10px" viewBox="0 0 10 10">
                  <path d="M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z"></path>
                </svg>
              </span>
            </label>
            <label htmlFor="cbx-52">Character</label>
          </div>
        </div>
        <div>
          <p className="text-center mt-5">
            All rights reserved. &copy; 2024 | made with ❤️{" "}
            <span>
              <a
                href="https://github.com/alok-x0s1"
                className="text-alok hover:underline"
                target="_blank"
              >
                @lokYadav
              </a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
