import "../login/Login.css";

import { useState } from "react";
import {
  Box,
  FormControl,
  Input,
  Spacer,
  Image,
  Flex,
  InputGroup,
  InputRightElement,
  Button,
  IconButton,
  Stack,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import loginImage from "../../assets/login-image.png";
import logo from "../../assets/logo.png";
import axios from "axios";

import { Link } from "react-router-dom";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const toast = useToast();

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = async () => {
    if (!username || !email || !password || !confirmPassword) {
      toast({
        title: "All Fields Required",
        description: "Please fill in all fields.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Passwords Do Not Match",
        description: "Please make sure the passwords match.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await axios.post("https://your-api-endpoint/signup", {
        username,
        email,
        password,
      });

      console.log("Signup successful:", response.data);

      // Optionally, you can redirect to another page upon successful signup
    } catch (error) {
      console.error("Signup error:", error.response.data);

      // Display an error toast message
      toast({
        title: "Signup Error",
        description: error.response.data.message || "An error occurred during signup.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

    // Reset fields
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const showImage = useBreakpointValue({ base: false, md: true });

  return (
    <Flex direction={{ base: "column", md: "row" }}>
      {showImage && (
        <Box flex="1" order={{ base: "2", md: "1" }}>
          <Image src={loginImage} alt="" objectFit="cover" w="100%" h="100%" />
        </Box>
      )}
      <Box flex="1" order={{ base: "1", md: "2" }} p={{ base: 4, md: 12 }} mt="2%">
        <Stack spacing={4}>
          <FormControl id="username" isRequired>
            <div className="logo-image">
              <img src={logo} alt="Logo" />
            </div>
            <h2>Signup for APP NAME</h2>
            <Spacer />
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <Spacer />
          <FormControl id="email" isRequired>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <Spacer />
          <FormControl id="password" isRequired>
            <InputGroup>
              <Input
                pr="4.5rem"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <IconButton
                  h="1.75rem"
                  size="sm"
                  onClick={handlePasswordVisibility}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Spacer />
          <FormControl id="confirmPassword" isRequired>
            <InputGroup>
              <Input
                pr="4.5rem"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <IconButton
                  h="1.75rem"
                  size="sm"
                  onClick={handlePasswordVisibility}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button colorScheme="blue" className="submitbtn" onClick={handleSignup}>
            Signup
          </Button>
          <p>
            Already have an account? <Link className="signup-link" to="/login">Login</Link>
          </p>
        </Stack>
      </Box>
    </Flex>
  );
}

export default Signup;
