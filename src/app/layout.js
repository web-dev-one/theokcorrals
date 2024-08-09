import { Inter, Rye } from "next/font/google";

import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
const rye = Rye({
    weight: '400',
    subsets: ["latin"]
})

export const metadata = {
  title: "Arizona Horse Shade Installed",
  description: "If you want horse shade installers in Phoenix Arizona or the surrounding areas. You have come to the right website. OK Corrals is The Top Quality Shade For Horses Installation Team in AZ! We specialize in installation of mare motels and horse shelter, Shade and/or Covered Stalls, Snake Proof Gates, and Runs. The difference is in the details. We Custom Build and Install ALL Types of Shade in Arizona. Our Mare Motels are Built to Outlast Your Grand Kids. Our Equestrian Shade and Facilities are Built with the Heaviest Steel on the market. We Invented the Snake Proof Dog Kennel! Our animal containment systems keep your pets from digging out and prevents unwelcome intruders from digging in. All dog runs and kennels for sale and installed are customized to your specifications inside and out. Built with the Very Best Material Available! All horse shade and mare motels are durable and Maintenance free!",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={rye.className}>{children}</body>
    </html>
  );
}
