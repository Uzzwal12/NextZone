import React from "react";
import Head from "next/head";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import useStyles from "../utils/styles";
export default function Layout({children}) {
	const classes = useStyles()
  return (
    <div>
      <Head>Next Project</Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>NextZone</Typography>
        </Toolbar>
      </AppBar>
			<Container className={classes.main}>
				{children}
			</Container>
			<footer className={classes.footer}>
				<Typography>All Rights Reserved. NextZone.</Typography>
			</footer>
    </div>
  );
}
