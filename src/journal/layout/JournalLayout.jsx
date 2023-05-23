import { Box, Toolbar, useMediaQuery } from "@mui/material"
import { NavBar, SideBar } from "../components";


const smallScreenMedia = 50;
const drawerWidthMedia = 240;

export const JournalLayout = ({ children }) => {

  const smallScreen = useMediaQuery('(max-width: 600px)');


  return (
    <Box sx={{ display: "flex" }} className="animate__animated animate__fadeIn animate__faster">

      {
        (smallScreen)
          ?
          <>
            <NavBar drawerWidth={smallScreenMedia} /> && <SideBar drawerWidth={smallScreenMedia} />
          </>
          :
          <>
            <NavBar drawerWidth={drawerWidthMedia} /> && <SideBar drawerWidth={drawerWidthMedia} />
          </>
      }

      {/*
      <NavBar drawerWidth={drawerWidth} />

      <SideBar drawerWidth={drawerWidth} /> */}

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >

        <Toolbar />

        {children}

      </Box>


    </Box>
  )
}
