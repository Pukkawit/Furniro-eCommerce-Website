import PaymentOptions from "../paymentOptions/PaymentOptions";
import PrivacyPolicy from "../privacyPolicy/PrivacyPolicy";
import Returns from "../returns/Returns";

let id = 0;

export const helpMenuLists = [
  {
    id: id++,
    text: "Payment Options",
    path: "/payment options",
    component: <PaymentOptions />,
  },
  {
    id: id++,
    text: "Returns",
    path: "/returns",
    component: <Returns />,
  },
  {
    id: id++,
    text: "Privacy Policies",
    path: "/privacy policies",
    component: <PrivacyPolicy />,
  },
];
