import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function Component() {
  return (
    <Container maxWidth="xs" style={{ padding: 0 }}>
      <AppBar position="static" style={{ backgroundColor: "blue", padding: 5 }}>
        <Grid container spacing={3} style={{ padding: 5 }}>
          <Grid item xs={4}>
            <div
              style={{
                padding: 5,
                display: "flex",
                backgroundColor: "white",
                color: "black",
                borderRadius: 25
              }}
            >
              <Grid>
                <Typography style={{ color: "orange" }} variant="caption">
                  Shopee
                </Typography>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </AppBar>
    </Container>
  );
}
export default Component;
