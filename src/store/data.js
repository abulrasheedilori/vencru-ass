import visa from "../images/visa.png";
import mastercard from "../images/mastercard.png";
// import home from "../images/home.png";
// import dashboard from "../images/dashboard.png";
import projects from "../images/projects.png";
import task from "../images/task.png";
import flag from "../images/flag.png";
import users from "../images/users.png";
import support from "../images/support.png";
import setting from "../images/setting.png";
import paid from "../images/paid.png";

import avatar1 from "../images/avatar1.png";
import avatar2 from "../images/avatar2.png";
import avatar3 from "../images/avatar3.png";
import avatar4 from "../images/avatar4.png";
import avatar5 from "../images/avatar5.png";

export const listOfAvatars = [avatar1, avatar2, avatar3, avatar4, avatar5];
export const links = [
  { id: 1, title: "My details" },
  { id: 2, title: "Profile" },
  { id: 3, title: "Password" },
  { id: 4, title: "Team" },
  { id: 5, title: "Plan" },
  { id: 6, title: "Billing" },
  { id: 7, title: "Notification" },
  { id: 8, title: "Integrations" },
  { id: 9, title: "API" }
];

export const cards = [
  {
    id: 1,
    prepend: "Visa ending with",
    cardNo:"12345678801234",
    expDate: "06/2024",
    image: visa
  },
  {
    id: 2,
    prepend: "Mastercard ending with",
    cardNo:"12345678801234",
    expDate: "06/2024",
    image: mastercard
  }
];

export const navLinks = [
  {id: 3, title: "Projects", image: projects},
  {id: 4, title: "Tasks", image: task},
  {id: 5, title: "Reporting", image: flag},
  {id: 6, title: "Users", image: users},
  {id: 7, title: "Support", image: support},
  {id: 8, title: "Settings", image: setting}
];

export const billings = [
  {
    id: 1,
    invoice: "Basic Plan - Dec 2022",
    amount: 10.00,
    date: "Dec 1, 2022",
    status: paid,
    usersOnPlan: listOfAvatars
  },
  {
    id: 2,
    invoice: "Basic Plan - Nov 2022",
    amount: 10.00,
    date: "Nov 1, 2022",
    status: paid,
    usersOnPlan: listOfAvatars
  },
  {
    id: 3,
    invoice: "Basic Plan - Oct 2022",
    amount: 10.00,
    date: "Oct 1, 2022",
    status: paid,
    usersOnPlan: listOfAvatars
  },
  {
    id: 4,
    invoice: "Basic Plan - Sept 2022",
    amount: 10.00,
    date: "Sept 1, 2022",
    status: paid,
    usersOnPlan: listOfAvatars
  },
  {
    id: 5,
    invoice: "Basic Plan - Aug 2022",
    amount: 10.00,
    date: "Aug 1, 2022",
    status: paid,
    usersOnPlan: listOfAvatars
  },
  {
    id: 6,
    invoice: "Basic Plan - Jul 2022",
    amount: 10.00,
    date: "Jul 1, 2022",
    status: paid,
    usersOnPlan: listOfAvatars
  },
  {
    id: 7,
    invoice: "Basic Plan - Jun 2022",
    amount: 10.00,
    date: "Jun 1, 2022",
    status: paid,
    usersOnPlan: listOfAvatars
  }
]