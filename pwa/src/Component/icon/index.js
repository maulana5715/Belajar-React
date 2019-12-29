import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import ReceiptIcon from "@material-ui/icons/Receipt";

function Component() {
  return (
    <React.Fragment>
      <Grid align="center" container spacing={0}>
        <Grid align="center" item xs={3}>
          <LocalShippingIcon
            style={{
              borderStyle: "solid",
              borderWidth: 1,
              borderRadius: 4,
              padding: 2,
              color: "red"
            }}
          />
          <Grid>
            <Typography variant="caption">Gratis Ongkir Xtra</Typography>
          </Grid>
        </Grid>
        <Grid align="center" item xs={3}>
          <LocalAtmIcon
            style={{
              borderStyle: "solid",
              borderWidth: 1,
              borderRadius: 4,
              padding: 2,
              color: "orange"
            }}
          />
          <Grid>
            <Typography variant="caption">Cashback dan Voucher</Typography>
          </Grid>
        </Grid>
        <Grid align="center" item xs={3}>
          <CardGiftcardIcon
            style={{
              borderStyle: "solid",
              borderWidth: 1,
              borderRadius: 4,
              padding: 2,
              color: "green"
            }}
          />
          <Grid>
            <Typography variant="caption">Shopee Games</Typography>
          </Grid>
        </Grid>
        <Grid align="center" item xs={3}>
          <ReceiptIcon
            style={{
              borderStyle: "solid",
              borderWidth: 1,
              borderRadius: 4,
              padding: 2,
              color: "red"
            }}
          />
          <Grid>
            <Typography variant="caption">Pasti Diskon 50%</Typography>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Component;
