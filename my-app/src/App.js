import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import Box from '@material-ui/core/Box';
import { Button } from "@material-ui/core";
import {purple} from "@material-ui/core/colors";
import { withStyles, makeStyles } from '@material-ui/core/styles';

export default function App() {
  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[500],
      '&:hover': {
        backgroundColor: purple[700],
      },
    },
  }))(Button);
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  return (
    <div className="App" style={{ width: '100hv', height: '100vh'}}>
     <Box>
     <Header />
     </Box>
     <Box>

     </Box>
     <ColorButton variant="contained" size="medium" color="primary" className={classes.margin}>HOME</ColorButton>
     <ColorButton variant="contained" size="medium" color="primary" className={classes.margin}>GALLERY</ColorButton>
     <ColorButton variant="contained" size="medium" color="primary" className={classes.margin}>SALE</ColorButton>
     <Box>
     <p> Welcome to our store!
         We, a small group of enthusiastic artistically inclined people at FR Creations, make beautiful handmade paintings, crafts and items.
         You can view our some of our artwork in GALLERY.
     </p>
     <p>
        Some of our items are put for sale and the money made through them will be used to help people who are unable to bear treatment costs of Covid-19.These items can be viewed under the SALE section. Kindly support us in our innitiative.  
     </p>
     <Footer />
     </Box>
    </div>
  );
}