import { useState } from "react";
import { AtSign, LockKeyhole, Lock, EyeOff, Eye } from "lucide-react";

function Register() {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [message, setmessage] = useState({});

  const [closePassword, setClosePassword] = useState({});
  const [CClosePassword, setCClosePassword] = useState({});

  const handleRole = (e) => {

    if(e.target.value){
      setmessage((prev)=>{
        const update = {...prev}
        delete update.role;
        return update;
      })
    }

    setRole(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{1,}$/;

    if (e.target.value == password) {
      setmessage((prev) => {
        const update = { ...prev };
        delete update.cpassword;
        return update;
      });
    } else {
      setmessage((prev) => ({
        ...prev,
        cpassword: "should be same as password",
      }));
    }

    if (e.target.value.length < 8) {
      setmessage((prev) => ({
        ...prev,
        password: "Password size should be grater then 8",
      }));
    } else if (!pattern.test(password)) {
      setmessage((prev) => ({
        ...prev,
        password:
          "must have Capital & small latter + number & special charecter",
      }));
    } else {
      setmessage((prev) => {
        const temp = { ...prev };
        delete temp.password;
        return temp;
      });
    }

    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    if (e.target.value == password) {
      setmessage((prev) => {
        const update = { ...prev };
        delete update.cpassword;
        return update;
      });
    } else {
      setmessage((prev) => ({
        ...prev,
        cpassword: "should be same as password",
      }));
    }

    setCPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((role == "")) {
      setmessage((prev) => ({ ...prev, role: "* must select role " }));
      return;
    }
    if (Object.keys(message).length > 0) {
      alert("Must compelete all the field");
      return;
    }

    try{

      

    }
    catch(e){
      alert(e.message)
    }

  };

  return (
    <div className="flex h-screen">
      {/* left section */}
      <div className="w-full flex-1 flex items-center bg-blue-200 justify-center">
        <div className="text-center">
          <p className="font-bold text-3xl">Get instent Match....</p>
          <p className="font-light text-xl">
            Resume analysis and job suggetion platform....
          </p>
        </div>
      </div>
      {/* Right Section */}
      <div className="w-full flex-1 bg-white py-10">
        <form onSubmit={handleSubmit}>
          <div className=" text-center">
            <p className="font-medium text-3xl text-primary mb-5">
              Role<span className="text-secondory">Met</span>
            </p>
            <p className="font-bold text-3xl">Welcome To Rolemet</p>
            <p className="mt-5">Register to get best job suggetion</p>
          </div>
          <div className="flex items-center justify-center w-full mt-10 px-10">
            <label
              htmlFor="roleSelect"
              className="mr-3 text-md font-medium text-gray-700 whitespace-nowrap"
            >
              Role :
            </label>

            <select
              id="roleSelect"
              className="flex-1 border border-black rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
              value={role}
              onChange={handleRole}
            >
              <option disabled value="">
                -- Please select option --
              </option>
              <option value="employee">Employee</option>
              <option value="admin">Admin</option>
              <option value="company">Company</option>
            </select>
          </div>
          {message.role && (
            <p className="text-red-500 text-sm mt-1 mx-10">{message.role}</p>
          )}

          <div className="flex justify-center items-center mt-5 border border-solid border-black rounded-md px-2 py-1.5 mx-10">
            <AtSign />
            <input
              type="email"
              onChange={handleEmail}
              value={email}
              className="w-full ml-3 border-none outline-0"
              placeholder="Enter Email"
            />
          </div>
          {message.email && (
            <p className="text-red-500 text-sm mt-1 mx-10">{message.email}</p>
          )}

          <div className="flex justify-center items-center mt-5 border border-solid border-black rounded-md px-2 py-1.5 mx-10">
            <Lock />
            <input
              type={closePassword ? "password" : "text"}
              value={password}
              onChange={handlePassword}
              className="w-full ml-3 border-none outline-0"
              placeholder="Enter Password"
            />
            <div
              onClick={() => {
                setClosePassword((prev) => !prev);
              }}
            >
              {closePassword ? <Eye /> : <EyeOff />}
            </div>
          </div>
          {message.password && (
            <p className="text-red-500 text-sm mt-1 mx-10">
              {message.password}
            </p>
          )}

          <div className="flex justify-center items-center mt-5 border border-solid border-black rounded-md px-2 py-1.5 mx-10">
            <LockKeyhole />
            <input
              type={CClosePassword ? "password" : "text"}
              value={cPassword}
              onChange={handleConfirmPassword}
              className="w-full ml-3 border-none outline-0"
              placeholder="Enter Confirm Password"
            />

            <div
              onClick={() => {
                setCClosePassword((prev) => !prev);
              }}
            >
              {CClosePassword ? <Eye /> : <EyeOff />}
            </div>
          </div>
          {message.cpassword && (
            <p className="text-red-500 text-sm mt-1 mx-10">
              {message.cpassword}
            </p>
          )}

          <div className="mx-10 mt-5 ">
            <button
              type="submit"
              className="bg-blue-300 rounded-xl py-1.5 text-gray-700 font-medium w-full hover:bg-blue-400"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
