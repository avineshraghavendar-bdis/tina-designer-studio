"use client";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export default function ContactForm() {
  return (
    <Stack spacing={3} component="form" onSubmit={(e) => e.preventDefault()}>
      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField fullWidth label="Your Name" variant="outlined" required />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField fullWidth label="Phone Number" variant="outlined" required />
        </Grid>
      </Grid>
      <TextField fullWidth label="Email Address" type="email" variant="outlined" />
      <TextField
        fullWidth
        label="Service Interested In"
        variant="outlined"
        placeholder="e.g. Bridal Styling, Custom Designing"
      />
      <TextField
        fullWidth
        label="Your Message"
        variant="outlined"
        multiline
        rows={5}
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        sx={{ py: 1.75 }}
      >
        Send Message
      </Button>
    </Stack>
  );
}
