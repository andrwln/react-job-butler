import { connect } from 'react-redux';

function Page({}) {
  return (
    <div>
      {/* <h1>
        {title}
      </h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
      {placeholderData &&
        <pre>
          <code>
            {JSON.stringify(placeholderData, null, 2)}
          </code>
        </pre>}
      {error &&
        <p style={{color: 'red'}}>
          Error: {error.message}
        </p>} */}
    </div>
  );
}

export default connect(state => state)(Page);
