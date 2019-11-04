import React from "react";
import { useRouter } from 'next/router';
import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';


export default function Post() {
  const [show, setShow] = React.useState({});
  const router = useRouter();
  const { id } = router.query;

  React.useEffect(()=>{
    async function fetchData() {
      // You can await here
      const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const json = await res.json();
      console.log(json);
      setShow(json);
    }
    fetchData(id);
  },[id])

  if(!Object.keys(show).length) return (<p>loading...</p>);

  return (
    <Layout>
      <h1>{show.name}</h1>
      <p>{show.summary.replace(/<[/]?[pb]>/g, '')}</p>
      <img src={show.image.medium} />
    </Layout>
  )

}