import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ForumIcon from "@material-ui/icons/Forum";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Catbot from "../../Component/Catbot";
import BotNavAb from "../../Component/BotNavAb";

function ButtonAppBar() {
  return (
    <Container maxWidth="xs" style={{ padding: 0 }}>
      <AppBar color="white" position="static">
        <Grid container spacing={0} style={{ padding: 10 }}>
          <Grid item xs={1}>
            <SearchIcon style={{ color: "red" }} />
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h6">Feed</Typography>
          </Grid>
          <Grid item xs={1}>
            <ShoppingCartIcon style={{ color: "red" }} />
          </Grid>
          <Grid item xs={1}>
            <ForumIcon style={{ color: "red" }} />
          </Grid>
        </Grid>
      </AppBar>
      <div style={{ padding: 20, marginTop: 0 }}>
        <Catbot />
      </div>
      <BotNavAb />
    </Container>
  );
}
export default ButtonAppBar;
