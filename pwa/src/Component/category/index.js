import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import PhonelinkRingIcon from "@material-ui/icons/PhonelinkRing";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import RestaurantIcon from "@material-ui/icons/Restaurant";

function Component() {
  return (
    <React.Fragment>
      <Grid align="center" container spacing={0}>
        <Grid align="center" item xs={3}>
          <LocalMallIcon
            style={{
              borderStyle: "solid",
              borderWidth: 1,
              borderRadius: 4,
              padding: 2,
              color: "red"
            }}
          />
          <Grid>
            <Typography variant="caption">Shopee Mall</Typography>
          </Grid>
        </Grid>
        <Grid align="center" item xs={3}>
          <PhonelinkRingIcon
            style={{
              borderStyle: "solid",
              borderWidth: 1,
              borderRadius: 4,
              padding: 2,
              color: "green"
            }}
          />
          <Grid>
            <Typography variant="caption">Pulsa,Tagihan dan Tiket </Typography>
          </Grid>
        </Grid>
        <Grid align="center" item xs={3}>
          <AttachMoneyIcon
            style={{
              borderStyle: "solid",
              borderWidth: 1,
              borderRadius: 4,
              padding: 2,
              color: "orange"
            }}
          />
          <Grid>
            <Typography variant="caption">Semua 5RB</Typography>
          </Grid>
        </Grid>
        <Grid align="center" item xs={3}>
          <RestaurantIcon
            style={{
              borderStyle: "solid",
              borderWidth: 1,
              borderRadius: 4,
              padding: 2,
              color: "red"
            }}
          />
          <Grid>
            <Typography variant="caption">Food dan Deals</Typography>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Component;
