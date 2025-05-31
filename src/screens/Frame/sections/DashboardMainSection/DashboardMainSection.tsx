import { CalendarIcon, PlusIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

// Data for employees section
const employeeData = [
  {
    id: "E1024",
    name: "Sara Lee",
    avatar: "/30-3.png",
    department: "Finance",
    position: "Accountant",
    status: "Active",
    joiningDate: "2021-01-12",
  },
  {
    id: "E1035",
    name: "Alex Kim",
    avatar: "/30-4.png",
    department: "IT",
    position: "Developer",
    status: "Active",
    joiningDate: "2020-11-23",
  },
  {
    id: "E1040",
    name: "Priya Singh",
    avatar: "/30-5.png",
    department: "HR",
    position: "HR Manager",
    status: "Active",
    joiningDate: "2019-03-18",
  },
  {
    id: "E1051",
    name: "Aman Patel",
    avatar: "/30-6.png",
    department: "IT",
    position: "Senior Developer",
    status: "Active",
    joiningDate: "2017-09-04",
  },
];

// Data for attendance section
const attendanceData = [
  {
    name: "Alex Kim",
    avatar: "/30-7.png",
    date: "2024-06-14",
    status: "Present",
    timeIn: "09:01",
    timeOut: "18:15",
    overtime: "1h",
  },
  {
    name: "Sara Lee",
    avatar: "/30-8.png",
    date: "2024-06-14",
    status: "Leave",
    timeIn: "-",
    timeOut: "-",
    overtime: "-",
  },
  {
    name: "Aman Patel",
    avatar: "/30-9.png",
    date: "2024-06-14",
    status: "Present",
    timeIn: "08:55",
    timeOut: "17:58",
    overtime: "0.5h",
  },
];

// Data for payroll section
const payrollData = [
  {
    name: "Sara Lee",
    avatar: "/30-10.png",
    month: "Jun 2024",
    salary: "₹60,000",
    deductions: "₹2,000",
    bonus: "₹3,000",
    netPay: "₹61,000",
  },
  {
    name: "Aman Patel",
    avatar: "/30-11.png",
    month: "Jun 2024",
    salary: "₹55,000",
    deductions: "₹1,500",
    bonus: "₹2,500",
    netPay: "₹56,000",
  },
  {
    name: "Alex Kim",
    avatar: "/30-12.png",
    month: "Jun 2024",
    salary: "₹50,000",
    deductions: "₹1,000",
    bonus: "₹2,000",
    netPay: "₹51,000",
  },
];

// Data for birthdays section
const birthdayData = [
  { name: "Sara Lee", avatar: "/30.png", date: "Jun 20" },
  { name: "Alex Kim", avatar: "/30-1.png", date: "Jun 22" },
  { name: "Priya Singh", avatar: "/30-2.png", date: "Jun 25" },
];

// Data for recent activities
const recentActivities = [
  {
    name: "Priya Singh",
    action: "approved for leave on Jun 15.",
    time: "2h ago",
    icon: "/svg-16.svg",
    bgColor: "bg-green-100",
  },
  {
    name: "Aman Patel",
    action: "promoted to Senior Developer.",
    time: "5h ago",
    icon: "/svg-9.svg",
    bgColor: "bg-blue-100",
  },
  {
    name: "Alex Kim",
    action: "submitted attendance for Jun 15.",
    time: "1d ago",
    icon: "/svg-1.svg",
    bgColor: "bg-yellow-100",
  },
];

export const DashboardMainSection = (): JSX.Element => {
  return (
    <div className="w-full pl-0 lg:pl-64">
      <div className="p-4 space-y-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-normal text-gray-800">HR Dashboard</h1>
            <p className="text-sm font-normal text-gray-500 mt-1">
              Overview &amp; quick actions
            </p>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-base font-medium text-gray-700">Date:</span>
            <div className="relative flex-1 sm:flex-none">
              <Input
                className="w-full sm:w-[173px] h-[34px] pl-3 pr-8 py-1.5 shadow-sm"
                defaultValue="--------- ----"
              />
              <CalendarIcon className="absolute right-2 top-2 h-[18px] w-[18px] text-gray-500" />
            </div>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Employees Card */}
          <Card className="shadow-sm">
            <CardContent className="p-5">
              <div className="flex items-center mb-4">
                <img className="w-7 h-7 mr-2" alt="Svg" src="/svg-11.svg" />
                <h3 className="text-lg font-medium text-gray-800">Employees</h3>
              </div>
              <div className="flex gap-11">
                <div>
                  <p className="text-2xl font-bold text-gray-800">124</p>
                  <p className="text-xs text-gray-500">Total</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">112</p>
                  <p className="text-xs text-gray-500">Active</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">7</p>
                  <p className="text-xs text-gray-500">Departments</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Attendance Card */}
          <Card className="shadow-sm">
            <CardContent className="p-5">
              <div className="flex items-center mb-4">
                <img className="w-7 h-7 mr-2" alt="Svg" src="/svg-14.svg" />
                <h3 className="text-lg font-medium text-gray-800">
                  Attendance
                </h3>
              </div>
              <div className="flex justify-center mb-4">
                <img className="w-24 h-24" alt="Svg" src="/svg-6.svg" />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded mr-1"></div>
                  <span className="text-xs text-gray-800">Present</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded mr-1"></div>
                  <span className="text-xs text-gray-800">Leave</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded mr-1"></div>
                  <span className="text-xs text-gray-800">Absent</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payroll Card */}
          <Card className="shadow-sm">
            <CardContent className="p-5">
              <div className="flex items-center mb-4">
                <img className="w-7 h-7 mr-2" alt="Svg" src="/svg-18.svg" />
                <h3 className="text-lg font-medium text-gray-800">Payroll</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-2xl font-bold text-purple-600">
                    ₹1,200,000
                  </p>
                  <p className="text-xs text-gray-500">
                    Total Expense (This Month)
                  </p>
                </div>
                <div>
                  <p className="text-lg font-normal text-gray-800">₹48,000</p>
                  <p className="text-xs text-gray-500">Avg. Monthly Salary</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Birthdays Card */}
          <Card className="shadow-sm">
            <CardContent className="p-5">
              <div className="flex items-center mb-4">
                <img className="w-7 h-7 mr-2" alt="Svg" src="/svg-15.svg" />
                <h3 className="text-lg font-medium text-gray-800">Birthdays</h3>
              </div>
              <div className="space-y-0">
                {birthdayData.map((person, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between py-2 ${
                      index > 0 ? "border-t border-gray-100" : ""
                    }`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-6 h-6 rounded-full bg-cover bg-center`}
                        style={{ backgroundImage: `url(${person.avatar})` }}
                      ></div>
                      <span className="ml-2 text-sm text-gray-800">
                        {person.name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">{person.date}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activities */}
        <Card className="shadow-sm">
          <CardContent className="p-5">
            <h3 className="text-lg font-normal text-gray-800 mb-4">
              Recent Activities
            </h3>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 ${activity.bgColor} rounded-full flex items-center justify-center mr-3`}
                    >
                      <img className="w-4 h-4" alt="Svg" src={activity.icon} />
                    </div>
                    <span className="text-sm text-gray-800">
                      <span className="font-bold">{activity.name}</span>{" "}
                      {activity.action}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Employee Management */}
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <h2 className="text-xl font-normal text-gray-800">
              Employee Management
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Input
                className="w-full sm:w-64 h-10"
                placeholder="Search by name, ID or department"
              />
              <Button className="bg-blue-600 text-white w-full sm:w-auto">
                <PlusIcon className="h-4 w-4 mr-2" />
                Add Employee
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <Card className="shadow-sm">
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-gray-100">
                    <TableRow>
                      <TableHead className="text-sm font-normal text-gray-800">
                        Emp. ID
                      </TableHead>
                      <TableHead className="text-sm font-normal text-gray-800">
                        Name
                      </TableHead>
                      <TableHead className="text-sm font-normal text-gray-800">
                        Department
                      </TableHead>
                      <TableHead className="text-sm font-normal text-gray-800">
                        Position
                      </TableHead>
                      <TableHead className="text-sm font-normal text-gray-800">
                        Status
                      </TableHead>
                      <TableHead className="text-sm font-normal text-gray-800">
                        Joining Date
                      </TableHead>
                      <TableHead className="text-sm font-normal text-gray-800 text-center">
                        Actions
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {employeeData.map((employee) => (
                      <TableRow key={employee.id}>
                        <TableCell className="text-sm font-normal text-gray-800">
                          {employee.id}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Avatar className="h-6 w-6 mr-2">
                              <AvatarImage
                                src={employee.avatar}
                                alt={employee.name}
                              />
                              <AvatarFallback>
                                {employee.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-normal text-gray-800">
                              {employee.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-sm font-normal text-gray-800">
                          {employee.department}
                        </TableCell>
                        <TableCell className="text-sm font-normal text-gray-800">
                          {employee.position}
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-600 hover:bg-green-100 font-normal text-xs rounded-full">
                            {employee.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm font-normal text-gray-800">
                          {employee.joiningDate}
                        </TableCell>
                        <TableCell className="text-center">
                          <div className="flex justify-center gap-4">
                            <span className="text-sm font-medium text-blue-600 cursor-pointer">
                              View
                            </span>
                            <span className="text-sm font-medium text-green-600 cursor-pointer">
                              Edit
                            </span>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Attendance Management */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-normal text-gray-800">
              Attendance Management
            </h2>
            <Button className="bg-green-500 text-white">
              <PlusIcon className="h-4 w-4 mr-2" />
              Add Attendance
            </Button>
          </div>

          <Card className="shadow-sm">
            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-gray-100">
                  <TableRow>
                    <TableHead className="text-sm font-normal text-gray-800">
                      Employee
                    </TableHead>
                    <TableHead className="text-sm font-normal text-gray-800">
                      Date
                    </TableHead>
                    <TableHead className="text-sm font-normal text-gray-800">
                      Status
                    </TableHead>
                    <TableHead className="text-sm font-normal text-gray-800">
                      Time In
                    </TableHead>
                    <TableHead className="text-sm font-normal text-gray-800">
                      Time Out
                    </TableHead>
                    <TableHead className="text-sm font-normal text-gray-800">
                      Overtime
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {attendanceData.map((record, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="flex items-center">
                          <Avatar className="h-6 w-6 mr-2">
                            <AvatarImage
                              src={record.avatar}
                              alt={record.name}
                            />
                            <AvatarFallback>
                              {record.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-normal text-gray-800">
                            {record.name}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm font-normal text-gray-800">
                        {record.date}
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={`${
                            record.status === "Present"
                              ? "bg-green-100 text-green-600"
                              : "bg-orange-100 text-orange-600"
                          } hover:bg-green-100 font-normal text-xs rounded-full`}
                        >
                          {record.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm font-normal text-gray-800">
                        {record.timeIn}
                      </TableCell>
                      <TableCell className="text-sm font-normal text-gray-800">
                        {record.timeOut}
                      </TableCell>
                      <TableCell className="text-sm font-normal text-gray-800">
                        {record.overtime}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Payroll */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-normal text-gray-800">Payroll</h2>
            <Button className="bg-purple-600 text-white">
              <PlusIcon className="h-4 w-4 mr-2" />
              Generate Payslips
            </Button>
          </div>

          <Card className="shadow-sm">
            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-gray-100">
                  <TableRow>
                    <TableHead className="text-sm font-normal text-gray-800">
                      Employee
                    </TableHead>
                    <TableHead className="text-sm font-normal text-gray-800">
                      Month
                    </TableHead>
                    <TableHead className="text-sm font-normal text-gray-800">
                      Salary
                    </TableHead>
                    <TableHead className="text-sm font-normal text-gray-800">
                      Deductions
                    </TableHead>
                    <TableHead className="text-sm font-normal text-gray-800">
                      Bonus
                    </TableHead>
                    <TableHead className="text-sm font-normal text-gray-800">
                      Net Pay
                    </TableHead>
                    <TableHead className="text-sm font-normal text-gray-800 text-center">
                      Payslip
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payrollData.map((record, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="flex items-center">
                          <Avatar className="h-6 w-6 mr-2">
                            <AvatarImage
                              src={record.avatar}
                              alt={record.name}
                            />
                            <AvatarFallback>
                              {record.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-normal text-gray-800">
                            {record.name}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm font-normal text-gray-800">
                        {record.month}
                      </TableCell>
                      <TableCell className="text-sm font-normal text-gray-800">
                        {record.salary}
                      </TableCell>
                      <TableCell className="text-sm font-normal text-gray-800">
                        {record.deductions}
                      </TableCell>
                      <TableCell className="text-sm font-normal text-gray-800">
                        {record.bonus}
                      </TableCell>
                      <TableCell className="text-sm font-normal text-gray-800">
                        {record.netPay}
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="text-sm font-medium text-purple-600 cursor-pointer">
                          Download
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Reports */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-xl font-normal text-gray-800">Reports</h2>
          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <Input className="w-full sm:w-[150px] h-[34px]" defaultValue="mm/dd/yyyy" />
              <CalendarIcon className="absolute right-2 top-2 h-[18px] w-[18px] text-gray-500" />
            </div>
            <Button variant="outline" className="h-[34px] bg-[#efefef] flex-1 sm:flex-none">
              All Departments
            </Button>
            <Button variant="outline" className="h-[34px] bg-[#efefef] flex-1 sm:flex-none">
              All Positions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};