// import "./Login.css";
// import { useState } from "react";
// import loginImage from '../../assets/login-image.jpg'
// import { Link } from "react-router-dom";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Submitted:", { username, password });
//     // Here you can add logic for authentication
//   };
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };
//   return (
//     <>
//       <div className="login-container">
//         <div className="login-image">
//           <img src={loginImage}/>
//         </div>
//         <div className="login-form">
//           <form onSubmit={handleSubmit}>
//           <div className="logo-image"></div>
//           <h2>APP NAME</h2>
//             <div>
//               <input
//                 type="text"
//                 id="username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Username"
//                 required
//               />
//             </div>
        
//             <div>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 required
                
//               />
             
//             </div>
//             <div>
//               <button type="submit">Login</button>
//             </div>
//             <p>Don&apos;t have an account? <Link to="/signup">Signup</Link></p>
//           </form>
         
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;

//-------------------------------------------------------------------------
import { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  IconButton,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Handle login logic here, like sending a request to an API
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={4}>
      <FormControl id="username" isRequired>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" mt={4} isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            pr="4.5rem"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <IconButton
              h="1.75rem"
              size="sm"
              onClick={handlePasswordVisibility}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button colorScheme="blue" mt={4} onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default Login;

//-------------------------------------------------------------------------

// import { useState } from 'react';
// import {
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   InputRightElement,
//   Button,
//   IconButton,
// } from '@chakra-ui/react';
// import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handlePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleLogin = () => {
//     // Handle login logic here, like sending a request to an API
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

//   return (
//     <Box maxW="md" mx="auto" mt={8} p={4}>
//       <FormControl id="username" isRequired>
//         <FormLabel>Username</FormLabel>
//         <Input
//           type="text"
//           placeholder="Enter your username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </FormControl>

//       <FormControl id="password" mt={4} isRequired>
//         <FormLabel>Password</FormLabel>
//         <InputGroup>
//           <Input
//             pr="4.5rem"
//             type={showPassword ? 'text' : 'password'}
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <InputRightElement width="4.5rem">
//             <IconButton
//               h="1.75rem"
//               size="sm"
//               onClick={handlePasswordVisibility}
//               icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
//             />
//           </InputRightElement>
//         </InputGroup>
//       </FormControl>

//       <Button colorScheme="blue" mt={4} onClick={handleLogin}>
//         Login
//       </Button>
//     </Box>
//   );
// };

// export default Login;
