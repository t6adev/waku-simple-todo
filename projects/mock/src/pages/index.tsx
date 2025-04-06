import { Link } from 'waku';

export default async function HomePage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
      <Link to="/todo" className="block mt-4 underline">
        TODO App page
      </Link>
      <Link to="/todo/new" className="block mt-2 ml-4 underline">
        New TODO
      </Link>
    </div>
  );
}

const getData = async () => {
  const data = {
    title: 'Waku',
    headline: 'Waku',
    body: 'Hello world! This is a simple TODO App.',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
