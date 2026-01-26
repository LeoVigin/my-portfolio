import { Girassol } from "next/font/google";
import { Vazirmatn } from "next/font/google";
import { Zen_Old_Mincho } from "next/font/google";

export const girassol = Girassol
({
  subsets: ["latin"],
  weight: "400",
  variable: "--title",
});

export const vazirmatn = Vazirmatn
({
  subsets: ["latin"],
  weight: "500",
  variable: "--subtitle",
});

export const zen_old_mincho = Zen_Old_Mincho
({
  subsets: ["latin"],
  weight: "400",
  variable: "--subtitle",
});

// .girassol-regular {
//   font-family: "Girassol", serif;
//   font-weight: 400;
//   font-style: normal;
// }

// .vazirmatn-<uniquifier> {
//   font-family: "Vazirmatn", sans-serif;
//   font-optical-sizing: auto;
//   font-weight: 500;
//   font-style: normal;
// }

// .zen-old-mincho-regular {
//   font-family: "Zen Old Mincho", serif;
//   font-weight: 400;
//   font-style: normal;
// }