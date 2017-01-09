import React from 'react';
import Head from 'next/head'
import axios from 'axios';


export default class extends React.Component {
  static async getInitialProps () {
    const res = await axios.get('https://api.discogs.com/artists/1/releases?page=1&per_page=75');
    return {data: res.data}
  }
  render () {
    return (
      <div>
        <Head>
            <title>Discogs</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css" />
        </Head>
        <div className="row">
          <div className="col s12 m4 l2"></div>
            <div className="col s12 m4 l8">
              <h1>Discogs</h1>
              <table className="striped">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>artist</th>
                    <th>label</th>
                    <th>year</th>
                    <th>format</th>
                  </tr>
                </thead>
                <tbody>
                {this.props.data.releases.map((releases, i) => {
                  const oddOrNot = i % 2 == 1 ? "striped" : "";
                  return (
                    <tr key={i} className={oddOrNot}>
                      <td>{releases.id}</td>
                      <td>{releases.title}</td>
                      <td>{releases.artist}</td>
                      <td>{releases.label}</td>
                      <td>{releases.year}</td>
                      <td>{releases.format}</td>
                    </tr>
                  );
                })}
                </tbody>
              </table>
            </div>
          <div className="col s12 m4 l2"></div>
        </div>
      </div>
    );
  }
}
