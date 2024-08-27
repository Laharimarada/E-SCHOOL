import React, { useState, useEffect } from "react";
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Name", "Mobile", "Gender", "Email", "Class Section", ""];

export function StudentDetails() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://e-school-backend-tecp.onrender.com/api/v1/students")
      .then((response) => response.json())
      .then(({ data }) => {
        console.log(data.students);
        if (Array.isArray(data)) {
          setStudents(data);
        } else if (Array.isArray(data.students)) {
          setStudents(data.students);
        } else {
          console.error("Unexpected response format:", data);
        }
      })
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map(
            (
              {
                firstName,
                lastName,
                mobileNumber,
                gender,
                email,
                classSection,
              },
              index
            ) => (
              <tr key={index} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {firstName} {lastName}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {mobileNumber}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {gender}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {email}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {classSection}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    Edit
                  </Typography>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Card>
  );
}
