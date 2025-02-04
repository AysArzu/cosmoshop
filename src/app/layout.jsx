import "../global.scss";

import { montserrat, roboto } from "@/helpers/fonts";

export const metadata = {
  title:{
	template :"%s | Cosmo Shop",
	default: "Cosmo Shop",
  } ,
  description: "Cheap electronic devices",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${montserrat.variable}`}>
    
      <body>{children}</body>
    </html>
  );
}
