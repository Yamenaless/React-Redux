const increment = (num) => {
    return {
      type: "INC",
      payload: num ? num : 1,
    };
  };
  const decrement = () => {
    return {
      type: "DEC",
      payload: 1,
    };
  };

  const login = () => { 
    return { 
        type : "LOGIN",
        payload : true 
    }
  }
  
  const logout = () => { 
    return { 
        type : "LOGOUT",
        payload : false 
    }
  }


  export {increment , decrement , login , logout}