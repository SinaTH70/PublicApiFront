function Page({ data }: { data: any }) {

    return(<>
    <p>
        l;kadslkmdslk
    </p>
    </>);
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`);
  // const data = await res.json()
  const data = { fname: "sina", lname: "th" };

  // Pass data to the page via props
  return { props: { data } };
}
