"use client"
import dynamic from 'next/dynamic';

import { Form } from "@formio/react";

const MyComponent = dynamic(() => import('@/app/components/formiocomponent'), {
    ssr: false // This ensures the component is not SSR'd
});

export default function Page({ data }: { data: any }) {

  // Render data...
  return (
    <>
      <p>Hello</p>
      <div className="w-full h-full">
        <MyComponent />
        {/* <Form form={formData} /> */}
      </div>
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
