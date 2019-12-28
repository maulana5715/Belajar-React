import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ForumIcon from "@material-ui/icons/Forum";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Category from "../../Component/category";
import HomeCard from "../../Component/Home Card";

function Component() {
  return (
    <Container maxWidth="xs">
      <AppBar position="static" style={{ backgroundColor: "blue", padding: 2 }}>
        <Grid container spacing={3} style={{ padding: 5 }}>
          <Grid item xs={8}>
            <div
              style={{
                padding: 5,
                display: "flex",
                backgroundColor: "white",
                color: "black",
                borderRadius: 2
              }}
            >
              <SearchIcon />
              <Grid>
                <Typography style={{ color: "orange" }} variant="caption">
                  Shopee
                </Typography>
              </Grid>
            </div>
          </Grid>
          <Grid align="right" item xs={2} style={{ marginTop: 1 }}>
            <ShoppingCartIcon />
          </Grid>
          <Grid align="right" item xs={2} style={{ marginTop: 1 }}>
            <ForumIcon />
          </Grid>
        </Grid>
      </AppBar>
      <div style={{ padding: 20 }}>
        <HomeCard />
      </div>
      <div style={{ padding: 20 }}>
        <Category />
      </div>
    </Container>
  );
}
export default Component;
