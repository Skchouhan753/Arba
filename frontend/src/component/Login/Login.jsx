




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
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    if (!username) {
      toast({
        title: "Username Required",
        description: "Please enter a username.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (!password) {
      toast({
        title: "Password Required",
        description: "Please enter a password.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

   
    console.log("Username:", username);
    console.log("Password:", password);

    // Reset fields
    setUsername("");
    setPassword("");


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
            <h2>Login</h2>
            <Spacer />
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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

          <Button colorScheme="blue" className="submitbtn" onClick={handleLogin}>
            Login
          </Button>
          <p>
            Don&apos;t have an account? <Link className="signup-link" to="/signup">Signup</Link>
          </p>
        </Stack>
      </Box>
    </Flex>
  );
}

export default Login;

