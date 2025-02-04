import React, { useState, useEffect } from "react";
import { Button, Container, Box, Typography } from "@mui/material";
import { animated, useSpring } from "react-spring";
import './Counter.css'

 const Counter = () => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount ? parseInt(savedCount, 10) : 0;
  });
  useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count]);

  const backgroundAnimation = useSpring({
    backgroundColor: `rgba(0, 100, 200, ${count / 100})`,
    height: `${count * 2}px`,
  });

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev)=> prev-1);
  const reset = () => setCount(0);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ position: 'relative', mb: 4 }} className="container">
        <animated.div style={backgroundAnimation} className="counter-background" />
        <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Typography variant="h5" >{count}</Typography>
          <Typography variant="h4" gutterBottom>Count </Typography>
          <Button variant="contained" onClick={increment} sx={{ mx: 1 }}>+</Button>
          <Button variant="contained" onClick={reset} sx={{ mx: 1 }}>Reset</Button>
          <Button variant="contained" onClick={decrement} sx={{ mx: 1 }}>-</Button>
          
        </Box>
      </Box>
    </Container>
  );
}
export default Counter;