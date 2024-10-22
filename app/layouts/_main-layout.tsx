import Image from "next/image";

import headerLogo from "@/app/assets/bonyad-logo.png";
import HeaderLayout from "./_header-layout";

function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div style={{ width: "100%" }}>
        <HeaderLayout />
        {children}
        <div
          style={{
            width: "100%",
            height: "13rem",
            backgroundColor: "#202c5d !important",
          }}
        ></div>
      </div>
    </>
  );
}

export default MainLayout;
