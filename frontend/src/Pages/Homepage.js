import React from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  ChakraProvider,
  ColorModeScript,
  extendTheme,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../component/Authentication/Login";
import Signup from "../component/Authentication/Signup";



const theme = extendTheme({
  config: {
    initialColorMode: "grayScale",
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.800" : "gray.50",
      },
    }),
  },
  colors: {
    grayScale: {
      50: "#F7FAFC",
      100: "#EDF2F7",
    },
  },
});

const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          bg="white"
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Text
            fontSize="4xl"
            fontFamily="Work sans"
            textAlign="center"
            mx="auto"
          >
            REAL TIME CHAT APP
          </Text>
        </Box>
        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
          <Tabs isFitted variant="soft-rounded" colorScheme="grayScale">
            <TabList mb="1em">
              <Tab>Login </Tab>
              <Tab>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
                </TabPanel>
              <TabPanel>
                <Signup />
                </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </ChakraProvider>
  );
};

export default Homepage;
