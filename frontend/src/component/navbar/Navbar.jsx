import {
  Box,
  Flex,
  Spacer,
  Badge,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Button,
} from "@chakra-ui/react";
import { useEffect, useContext, useState } from "react";

import { FaShoppingCart, FaUser } from "react-icons/fa";
import profilePic from "../../assets/profile.png";
import { AuthContext } from "../../Context/AuthContextProvider";
let cartItemCount = 12;

const Navbar = () => {
  // Assuming avatarImage holds the URL of the user's avatar image
  // let data = JSON.parse(localStorage.getItem("userdata")) || []
  // console.log(data)
  // const avatarImage = data.avatar; // Replace '' with the URL of the user's avatar image
  const [avatarImage, setAvatarImage] = useState(null);

  const { authState,loginState } = useContext(AuthContext);
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("userdata"));
    // console.log(data.token);
    if (data) {
      setAvatarImage(data.avatar);
    } else {
      setAvatarImage(profilePic);
    }
  }, [authState]);

  const handleLogout = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("userdata"));
  // console.log(token)
      const res = await fetch("https://arba-backend-server.onrender.com/user/logout", {
        method: "GET", 
        headers: {
          "Authorization": `Bearer ${token.token}`,
          "Content-Type": "application/json"
        }
      });
      if(res.ok){
        localStorage.removeItem("userdata");
        loginState(false)
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleProfile = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("userdata"));
  let id =1
      const res = await fetch(`https://arba-backend-server.onrender.com/user/profile/${id}`, {
        method: "GET", 
        headers: {
          "Authorization": `Bearer ${token.token}`,
          "Content-Type": "application/json"
        }
      });
      let data = await res.json()
      console.log(data)
      // if(res.ok){
        
      // }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <Flex p="4" bg="rgb(0,170,195)" alignItems="center">
      <Box>
        <Button>Logo</Button>
      </Box>
      <Spacer />
      <Menu>
        <FaShoppingCart size={24} color="white" />
        {cartItemCount > 0 && (
          <Badge colorScheme="red" borderRadius="full" px="2" ml="1">
            {cartItemCount}
          </Badge>
        )}

        <MenuButton
          as={IconButton}
          icon={
            avatarImage ? (
              <Avatar size="sm" src={avatarImage} />
            ) : (
              <FaUser size={24} color="white" />
            )
          }
          variant="outline"
          ml="5"
        />
        <MenuList>
          <MenuItem>My Store</MenuItem>
          <MenuItem onClick={handleProfile}>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Navbar;
