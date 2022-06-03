import React from "react";
import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      {/* Headings */}
      <Typography variant="h1" gutterBottom>
        Heading 1
      </Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3" gutterBottom>
        Heading 3
      </Typography>
      <Typography variant="h4" component="h1">
        Heading 4 with component='h1'attribute{" "}
      </Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>

      {/* Subtitles */}

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      {/* Paragraphes */}
      <Typography variant="body1">Body 1 with 'variant' attribute </Typography>
      <Typography>Body 1 without 'variant' attribute </Typography>
      <Typography variant="body2">Body 2</Typography>
    </div>
  );
};
