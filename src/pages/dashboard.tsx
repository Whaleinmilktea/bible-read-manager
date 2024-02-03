import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <div>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                2024-02-03 : 창세기 1장 ~ 2장
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <p>
              <strong>1</strong> 태초에 하나님이 천지를 창조하시니라
            </p>
            <p>
              <strong>2</strong> 땅이 혼돈하고 공허하며, 흑암이 깊음 위에 있고
              하나님의 영은 수면 위에 운행하시니라
            </p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Dashboard;
