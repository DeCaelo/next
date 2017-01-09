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
            <link rel="stylesheet" href="https://unpkg.com/purecss@0.6.1/build/pure-min.css" />
        </Head>
        <div className="pure-g">
            <div className="pure-u-1-3"></div>
            <div className="pure-u-1-3">
              <h1>Discogs</h1>
              <table className="pure-table">
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
                  const oddOrNot = i % 2 == 1 ? "pure-table-odd" : "";
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
            <div className="pure-u-1-3"></div>
        </div>
      </div>
    );
  }
}
