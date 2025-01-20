import Image from "next/image";
import Home2 from "./(store)/head/page";
import Footer from "@/components/footer";
import Script from "next/script";
import Part4 from "@/components/ui/part4";

export default function Home() {
  return (
  <div>




    <>
      {/* Snipcart JavaScript */}
      <Script src="https://cdn.snipcart.com/themes/v3.4.0/default/snipcart.js" strategy="afterInteractive" />
      {/* Snipcart CSS */}
      <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.4.0/default/snipcart.css" />
      
      {/* Snipcart Initialization */}
      <div hidden id="snipcart" data-api-key="ZTdjMTk4YTUtMmM5ZC00NGRlLWFkMzUtZmE0YmU3MmE2YjdiNjM4NzE3NjQzNjI5MTE3MTYz"></div>
      
       
    </>
 



    <Home2/>
  
    <Footer/>
  </div>
  );
}
