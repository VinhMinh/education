import { HeaderProvider } from "@/context/headerContext";
import React from "react";
import BodyContent from "./BodyContent";
import Header from "./Header";
import Footer from "./Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function WrapperProvider({ dataSetting, children }: any) {
  return (
    <div className={`w-screen max-w-full`}>
      <HeaderProvider>
        <Header dataSetting={dataSetting} />
        <SmoothScroll>
          <BodyContent>{children}</BodyContent>
          <Footer dataSetting={dataSetting} />
        </SmoothScroll>
      </HeaderProvider>
    </div>
  );
}
