import { StarOutline } from "@mui/icons-material"
import { Grid, Typography, useMediaQuery } from "@mui/material"


const smallScreenMedia = 50;
const drawerWidthMedia = 240;

export const NothingSelectedView = () => {

  const smallScreen = useMediaQuery('(max-width: 600px)');

  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3, mx: 2, p: 4, maxWidth: 500 }}
    >

      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 100, color: 'white' }} />
      </Grid>
      <Grid item xs={12}>
        <Typography color='white' variant="h5">Selecciona o crea una entrada</Typography>
      </Grid>

    </Grid>
  )
}
