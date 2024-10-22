export default function Page({ data }: { data: any }) {
  // Render data...
  return (
    <>
      <p>Hello</p>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
//   const res = await fetch(`https://.../data`);
//   const data = await res.json();
  const data = {fname:"sina"};

  // Pass data to the page via props
  return { props: { data } };
}
