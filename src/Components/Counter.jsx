import { useEffect, useState } from "react";

function Counter() {
  const [num, setNum] = useState(0);
  console.log("beforeUseEffect",num);
//   useEffect(()=>{
//     alert("i am clicked")
//   },[])
    

   useEffect(()=>{
    if(num !== 0){
    localStorage.setItem("key",JSON.stringify(num));
    console.log("after setitem num",num)
    }else{
        console.log("num value is zero",num)
    }
    
   },[num]); 
   
   
   useEffect(()=>{
    const num1 = JSON.parse(localStorage.getItem("key"))
    if(num1){
        setNum(num1);
    }
   },[])



  return (
    <>
      <button
        onClick={() => setNum(num + 1)}
        style={{ backgroundColor: "red", fontSize: "40px" }}
      >
        PLUS
      </button>
      <br></br>
      <span
        style={{ backgroundColor: "white", color: "black", fontSize: "50px" }}
      >
        {num}
      </span>
      <br />
      <button
        onClick={() => setNum(num - 1)}
        style={{ backgroundColor: "green", fontSize: "40px" }}
      >
        MINUS
      </button>
      <br />
    </>
  );
}

export default Counter;
