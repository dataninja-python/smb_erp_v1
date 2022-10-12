import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import { Home } from "./Home";
import {
  BrowserRouter,
  Outlet,
  Routes,
  Route,
  Link as RouteLink,
} from "react-router-dom";

const Spinner = () => {
  return (
    <>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Link
              as={RouteLink}
              color="teal.500"
              to="/home"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              To Home
            </Link>
          </VStack>
        </Grid>
      </Box>
    </>
  );
};

const pageRoutes = [
  {
    page_id: 0,
    path: "/",
    element: <Spinner />,
  },
  {
    page_id: 1,
    path: "/home",
    element: <Home />,
  },
];

export const App = () => (
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <Outlet />
      <Routes>
        {pageRoutes.map((route) => (
          <Route
            key={route.page_id}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </ChakraProvider>
  </BrowserRouter>
);
