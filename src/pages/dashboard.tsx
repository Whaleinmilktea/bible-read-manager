import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { data } from "../data/sample_data";

const Dashboard = () => {
  const newData = data
  const renderData = newData.map((item) => {
    return (
      <div key={item.id}>
        <div>{item.date}</div>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="div" flex="1" textAlign="left">
                  {item.passage}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {item.content.map((content) => {
                return <div>{content}</div>;
              })}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    );
  });

  return (
    <div>
      {renderData}
    </div>
  );
};

export default Dashboard;
