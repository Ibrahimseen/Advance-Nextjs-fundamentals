import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    // await delay(2)
      let r = await fetch("http://localhost:3000/", {method: "POST",  headers: {
      "Content-Type": "application/json",  //server ko bataya: "main JSON bhej raha hoon"
    }, body: JSON.stringify(data)}) // JS object ko string me convert karke bheja
    let res = await r.text(); 
    console.log(data, res);
    // if(data.username !== "shubam"){
    //   setError('myform', {message:"your form is not in good order  because  credential are invalid"})
    // }
    // if(data.username === "rohan"){
    //   setError('Blocked', {message:"your are Blocked from here"})
    // }
  };

  return (
    <>
      {isSubmitting && <div>..loading</div>}
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Enter-username"
            {...register("username", {
              required: { value: true, message: " This field is  required" },
              minLength: { value: 3, message: "min lenth is 3" },
              maxLength: { value: 8, message: "maxlenth is 8 " },
            })}
            type="text"
          />
          {errors.username && (
            <div className="red"> {errors.username.message} </div>
          )}
          <br />
          <input
            placeholder="Enter-password"
            {...register("password", {
              required: { value: true, message: " This field is  required" },
              minLength: { value: 4, message: "min lenth is 4" },
              maxLength: { value: 8, message: "maxlenth is 8 " },
            })}
            type="text"
          />
          {errors.password && (
            <div className="red"> {errors.password.message} </div>
          )}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {/* {errors.myform && <div className='red'> {errors.myform.message} </div>}
     {errors.Blocked && <div className='red'> {errors.Blocked.message} </div>} */}
        </form>
      </div>
    </>
  );
}

export default App;
