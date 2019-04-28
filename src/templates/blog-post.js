import React from "react"
import { graphql } from 'gatsby'
import { css } from "@emotion/core"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"

export default ({ data }) => {
    const post = data.markdownRemark;

    return (
        <Layout>
            <Helmet>
                <meta name="description" content={post.frontmatter.content} />
            </Helmet>
            <div
                css={css`
                    background-color: #fdfdfd;

                    a {
                        color: #2fa7bb;
                        transition: color 0.2s ease-out;

                        :hover,
                        :focus {
                            color: #227280;
                        }
                    }
                `}
            >
                <h1
                css={css`
                    color: #2fa7bb !important;
                `}
                >
                {post.frontmatter.title}
                </h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
            <form method="POST" action="https://api.staticman.net/v3/entry/terrancecorley/blog/gh-pages/comments">
                <label><input name="fields[name]" type="text" />Name</label>
                <label><input name="fields[email]" type="email" />E-mail</label>
                <label><textarea name="fields[message]"></textarea>Message</label>
                <button type="submit">Submit</button>
            </form>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title,
                content
            }
        }
    }
`