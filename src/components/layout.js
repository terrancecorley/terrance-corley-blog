import React, { Fragment } from "react"
import { Helmet } from 'react-helmet'
import { css } from "@emotion/core"
import { Link, StaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

export default ({ children }) => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
        }

    render={data => (
        <Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Blog | Terrance Corley</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <link href="https://fonts.googleapis.com/css?family=Nunito:800|Open+Sans:400,400i|Pacifico" rel="stylesheet" />
            </Helmet>
            <header
                css={css`
                    background-color: #5c6063;
                    flex-flow: row wrap;
                    margin-bottom: 2.5em;

                    @media (max-width: 32em) {
                        height: 160px;
                        margin-bottom: 2em;
                    }

                    h3 {
                       color: #fdfdfd;
                       font-family: 'Pacifico', sans-serif;
                       font-size: 1.5em;
                    }

                    a:nth-of-type(2) {
                        font-family: 'Nunito', sans-serif;
                        font-size: 1.4em;
                        color: #bdc3c7;
                        transition: color 0.2s ease-out;
                        text-decoration: none;

                        :hover {
                            color: #fdfdfd;
                        }
                    }
                `}
            >
                <div
                    css={css`
                    margin: 0 auto;
                    margin-bottom: 1.5em;
                    max-width: 725px;
                    padding: ${rhythm(2)};
                    padding-top: ${rhythm(1.5)};
                    padding-bottom: 0;
                `}
                >
                    <Link to={`/`}>
                        <h3
                        css={css`
                            margin-bottom: ${rhythm(2)};
                            display: inline-block;
                            font-style: normal;
                        `}
                        >
                        {data.site.siteMetadata.title}
                        </h3>
                    </Link>
                    <a
                        href="https://terrancecorley.com"
                        rel="noreferrer noopener"
                        style={{
                            float: 'right'
                        }}
                    >
                        Portfolio
                    </a>
                </div>
            </header>
            <div
                css={css`
                    margin: 0 auto;
                    max-width: 725px;
                    padding: ${rhythm(2)};
                    padding-top: 0;

                    h1, h4 {
                        color: #5c6063;
                        font-family: 'Nunito', sans-serif;
                    }
                    
                    h3 {
                        font-family: 'Nunito', sans-serif;
                        color: #2fa7bb;
                    }

                    h3 span {
                        color: #5c6063;
                    }
                `}
                >
                {children}
            </div>
        </Fragment>
    )}
    />
)
    