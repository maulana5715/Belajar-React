import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

function Component() {
  return (
    <React.Fragment>
      <Card style={{ padding: 5 }}>
        <Grid container spacing={0}>
          <Grid item xs={2}>
            <AspectRatioIcon style={{ marginTop: 7 }} />
          </Grid>
          <Grid item xs={5}>
            <div style={{ display: "flex" }}>
              {" "}
              <AccountBalanceWalletIcon style={{ color: "red" }} />
              <Grid>
                <Typography variant="caption" style={{ marginTop: -5 }}>
                  Rp.25000
                </Typography>
              </Grid>
            </div>

            <Grid>
              <Typography variant="caption" style={{ fontSize: 10 }}>
                Top Up ShopeePay
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <div style={{ display: "flex" }}>
              <MonetizationOnIcon style={{ color: "orange" }} />
              <Grid>
                <Typography variant="caption">20 Koin</Typography>
              </Grid>
            </div>

            <Grid>
              <Typography variant="caption" style={{ fontSize: 10 }}>
                Kumpulkan Koin Shopee
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </React.Fragment>
  );
}

export default Component;
