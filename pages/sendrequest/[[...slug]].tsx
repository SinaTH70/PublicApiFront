"use client";
import dynamic from "next/dynamic";
// import "@/app/globals.css";
import "@/app/app.css";

import { Form } from "@formio/react";
import MainLayout from "@/app/layouts/_main-layout";

const MyComponent = dynamic(() => import("@/app/components/formiocomponent"), {
  ssr: false, // This ensures the component is not SSR'd
});

export default function Page({ data }: { data: any }) {
  // Render data...
  return (
    <>
      <MainLayout>
        <p>لطفا فرم 'ارزیابی موکب‌های اربعین' را با دقت تکمیل کنید</p>
        <div style={{ width: "50%" }}>
          <MyComponent />
          {/* <Form form={formData} /> */}
        </div>
      </MainLayout>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  //   const res = await fetch(`https://.../data`);
  //   const data = await res.json();
  const data = { fname: "sina" };

  // Pass data to the page via props
  return { props: { data } };
}
