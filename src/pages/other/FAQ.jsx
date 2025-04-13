import React, { useEffect, useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { useHeader } from '../../components/HeaderContext';

const FrequentlyAskedQuestions = () => {
  // const { setTitle } = useHeader();

  // useEffect(() => {
  //   setTitle("FAQs");
  // }, [setTitle]);

  const [expanded, setExpanded] = useState(null); // Use null for no expansion initially

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null); // Only one panel can be open at a time
  };

  return (
    <div className="px-3">
      <h1 className="fw-bold mb-4 mt-2">
        Frequently Asked <span style={{ color: 'var(--primary)' }}>Questions</span>
      </h1>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" variant="subtitle1" fontWeight="bold">
            What is Mandi Central?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Mandi Central is a platform providing real-time market data on agricultural commodities.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" variant="subtitle1" fontWeight="bold">
            How often are rates updated?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Rates are updated daily based on verified mandi sources and official data.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FrequentlyAskedQuestions;