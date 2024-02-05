import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const Dashboard = () => {
  const data = [
    {
      id: 1,
      date: "2024-02-03",
      passage: "창세기 1장 ~ 2장",
      content: [
        "태초에 하나님이 천지를 창조하시니라",
        "땅이 혼돁하고 공허하며, 흑암이 깊음 위에 있고 하나님의 영은 수면 위에 운행하시니라",
      ],
      checked: false,
    },
    {
      id: 2,
      date: "2024-02-03",
      passage: "창세기 1장 ~ 2장",
      content: [
        "태초에 하나님이 천지를 창조하시니라",
        "땅이 혼돁하고 공허하며, 흑암이 깊음 위에 있고 하나님의 영은 수면 위에 운행하시니라",
      ],
      checked: false,
    },
    {
      id: 3,
      date: "2024-02-03",
      passage: "창세기 1장 ~ 2장",
      content: [
        "태초에 하나님이 천지를 창조하시니라",
        "땅이 혼돁하고 공허하며, 흑암이 깊음 위에 있고 하나님의 영은 수면 위에 운행하시니라",
      ],
      checked: false,
    },
  ];

  const renderData = data.map((item) => {
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
      <h1>Dashboard</h1>
      {renderData}
    </div>
  );
};

export default Dashboard;
