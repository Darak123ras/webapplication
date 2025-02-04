const generateUserId = () => {
    return `user_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  };
  
  export default generateUserId;