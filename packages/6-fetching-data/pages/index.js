import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';


const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.name}</a>
    </Link>
  </li>
);

const LazyPost = props => (
  <li>
    <Link href="/lazy/[id]" as={`/lazy/${props.id}`}>
      <a>{props.name}</a>
    </Link>
  </li>
);

const Index = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <LazyPost key={show.id}
          id={show.id} 
          name={show.name} />
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;