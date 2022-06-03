import { Button, Stack, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const MuiButton = () => {
  return (
    <Stack spacing={4}>
      {/* Types */}
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com" target="_blank">
          TEXT
        </Button>
        <Button variant="contained">CONTAINED</Button>
        <Button variant="outlined">OUTLINED</Button>
      </Stack>
      {/* Colors */}
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>{" "}
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary">
          Primary
        </Button>{" "}
        <Button variant="outlined" color="secondary">
          secondary
        </Button>
        <Button variant="outlined" color="success">
          success
        </Button>
        <Button variant="outlined" color="error">
          error
        </Button>
        <Button variant="outlined" color="warning">
          warning
        </Button>
        <Button variant="outlined" color="info">
          info
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">
          Primary
        </Button>{" "}
        <Button variant="text" color="secondary">
          secondary
        </Button>
        <Button variant="text" color="success">
          success
        </Button>
        <Button variant="text" color="error">
          error
        </Button>
        <Button variant="text" color="warning">
          warning
        </Button>
        <Button variant="text" color="info">
          info
        </Button>
      </Stack>
      {/* Size */}
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary" size="small">
          Small
        </Button>{" "}
        <Button variant="contained" color="secondary" size="medium">
          Medium
        </Button>
        <Button variant="contained" color="success" size="large">
          Large
        </Button>
      </Stack>
      {/* Icons */}
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="contained" color="secondary" endIcon={<SendIcon />}>
          Send
        </Button>
        <IconButton aria-label="send" color="success" size="large">
          <SendIcon />
        </IconButton>
      </Stack>
      {/* Cosmetic props */}
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          color="secondary"
          endIcon={<SendIcon />}
          disableElevation // <=====
        >
          Send
        </Button>
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableRipple // <=====
        >
          Send
        </Button>
        <Button
          variant="contained"
          color="warning"
          startIcon={<SendIcon />}
          onClick={() => alert("Clicked!")} // <=====
        >
          Send
        </Button>
      </Stack>
    </Stack>
  );
};
