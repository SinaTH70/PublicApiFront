import Image from "next/image";

import headerLogo from "@/app/assets/bonyad-logo.png";

function HeaderLayout() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "5rem",
          backgroundColor: "#202c5d !important",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "90%",
            height: "auto",
            // backgroundColor: "#202c5d !important",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <a href="#">
            <Image
              src={headerLogo}
              alt=""
              style={{ margin: "20px", width: "2.5rem", height: "auto" }}
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default HeaderLayout;
