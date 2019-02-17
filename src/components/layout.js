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
            </Helmet>
            <div
                css={css`
                    margin: 0 auto;
                    max-width: 700px;
                    padding: ${rhythm(2)};
                    padding-top: ${rhythm(1.5)};
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
                    Home
                </a>
                {children}
                </div>
        </Fragment>
    )}
    />
)
    