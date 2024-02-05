import { CSVLink } from "react-csv";

const CsvTest = () => {
  const data = [
    ["Subject", "Start Date", "End Date", "Location", "Description"],
    ["Math", "2024-02-03T10:00:00", "2024-02-03T11:00:00", "Room 1", "Math class"],
    ["English", "2024-02-03T12:00:00", "2024-02-03T13:00:00", "Room 2", "English class"],
    ["Science", "2024-02-03T14:00:00", "2024-02-03T15:00:00", "Room 3", "Science class"],
  ];

  return (
    <>
      <CSVLink data={data} filename={"my-file.csv"}>
        Download me
      </CSVLink>
    </>
  );
};

export default CsvTest;