import { Route, Outlet, Routes } from "react-router-dom";
import { NavBar } from "../components/nav/NavBar";
import { Welcome } from "../components/welcome/Welcome";
import { EmployeeList } from "../employees/Employees";
import { TicketList } from "../components/tickets/TicketList";
import { CustomerList } from "../components/customers/CustomersList";
import { CustomerDetails } from "../components/customers/CustomerDetails";
import { EmployeeDetails } from "../employees/EmployeeDetails";
import { useState, useEffect } from "react";
import { EmployeeForm } from "../components/forms/EmployeeForm";
import { EmployeeViews } from "./EmployeeViews";
import { CustomerViews } from "./CustomerViews";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user");
    const honeyUserObject = JSON.parse(localHoneyUser);

    setCurrentUser(honeyUserObject);
  }, []);
  return currentUser.isStaff ? (
    <EmployeeViews currentUser={currentUser} />
  ) : (
    <CustomerViews />
  );
};
