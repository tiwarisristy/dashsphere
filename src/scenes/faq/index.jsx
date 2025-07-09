import { Box, useTheme, Typography } from '@mui/material';
import Header from '../../components/Header';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from '../../theme';

const FAQ = () => {
const theme = useTheme();
const colors = tokens(theme.palette.mode);

return <Box m="20px">
    <Header title="FAQ" subtitle="Frequently Asked Questions" />

    <Accordion defaultExpanded>
     <AccordionSummary expandIcon={<ExpandMoreIcon />} >
        <Typography color={colors.greenAccent[500]} variant="h5">
         What is this dashboard used for?
       </Typography>
     </AccordionSummary>
     <AccordionDetails>
         <Typography>
           This dashboard provides a centralized interface to manage data, view analytics, and interact with various modules like calendar, charts, and user settings.
         </Typography>
     </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
     <AccordionSummary expandIcon={<ExpandMoreIcon />} >
        <Typography color={colors.greenAccent[500]} variant="h5">
         Is the dashboard mobile responsive?
       </Typography>
     </AccordionSummary>
     <AccordionDetails>
         <Typography>
            Yes, the layout adapts to different screen sizes using responsive design principles and Material UI components.
         </Typography>
     </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
     <AccordionSummary expandIcon={<ExpandMoreIcon />} >
        <Typography color={colors.greenAccent[500]} variant="h5">
         What technologies power this dashboard?
       </Typography>
     </AccordionSummary>
     <AccordionDetails>
         <Typography>
           It’s built using React, React Router, FullCalendar, Material UI, and custom theming via Tailwind or styled-components.
         </Typography>
     </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
     <AccordionSummary expandIcon={<ExpandMoreIcon />} >
        <Typography color={colors.greenAccent[500]} variant="h5">
          Is user authentication supported?
       </Typography>
     </AccordionSummary>
     <AccordionDetails>
         <Typography>
            Yes, you can integrate Firebase, Auth0, or custom JWT-based authentication depending on your backend setup
         </Typography>
     </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
     <AccordionSummary expandIcon={<ExpandMoreIcon />} >
        <Typography color={colors.greenAccent[500]} variant="h5">
        How is user data protected?
       </Typography>
     </AccordionSummary>
     <AccordionDetails>
         <Typography>
           Data is encrypted in transit using HTTPS, and sensitive operations are secured via role-based access control.
         </Typography>
     </AccordionDetails>
    </Accordion>

  

</Box>


  
}
export default FAQ;
