import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";

function Component() {
  return (
    <React.Fragment>
      <Grid align="center" container spacing={0}>
        <Grid align="center" item xs={3} style={{ marginTop: 10 }}>
          <DynamicFeedIcon style={{ color: "green" }} />
          <Grid>
            <Typography variant="caption">Timeline</Typography>
          </Grid>
        </Grid>
        <Grid align="center" item xs={3} style={{ marginTop: 10 }}>
          <PeopleIcon
            style={{
              color: "blue"
            }}
          />
          <Grid>
            <Typography variant="caption">Explorer</Typography>
          </Grid>
        </Grid>
        <Grid align="center" item xs={3} style={{ marginTop: 10 }}>
          <LocalOfferIcon
            style={{
              color: "orange"
            }}
          />
          <Grid>
            <Typography variant="caption">Voucher</Typography>
          </Grid>
        </Grid>
        <Grid align="center" item xs={3} style={{ marginTop: 10 }}>
          <PhoneIphoneIcon
            style={{
              color: "blue"
            }}
          />
          <Grid>
            <Typography variant="caption">#Gadget</Typography>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Component;
