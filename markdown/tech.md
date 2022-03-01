# Tech blogs

&nbsp;

As mentioned [on the home page](/#what-is-this-site), this website is the test bed for things I wanted to learn on the technical front.  

&nbsp;

At first it started with full server side rendering to make an informed decision about our path forward for SEO. It then became about static rendering...from there every dev's favorite topic: performance.  

&nbsp;

I've learned about Vercel hosting & its git integration, its analytics platform, and the pains of immediate production releases of bugs.  

&nbsp;

As I continue working on this site, I'll add links out to my [Medium blog](https://angular-evan.medium.com/) that highlights what I've learned about this project!

&nbsp;

## High level

&nbsp;

This site is built on [NextJS](https://nextjs.org/docs/advanced-features/automatic-static-optimization) leveraging (largely) its static site generation behavior. This results in a static HTML page on initial response from the server, which can be infinitely cached per build. This is by and large the biggest win for this project as it is super efficient (build time only generation of the document).


&nbsp;

It is hosted on [Vercel](https://vercel.com/) and is built automatically from the [github repo](https://github.com/m3fawner/ssr-study).

&nbsp;

For styling, I chose [Chakra UI](https://chakra-ui.com/) which leverages [Emotion](https://emotion.sh/docs/introduction) under the hood to generate styles via Javascript.

&nbsp;

For forms, [React Hook Form](https://react-hook-form.com/api/) is leveraged.

&nbsp;

Blog content is rendered from Markdown using [React markdown](https://github.com/remarkjs/react-markdown).

&nbsp;

## Direct learnings

&nbsp;

* [A tale of SEO](https://angular-evan.medium.com/a-tale-of-seo-af1b046846f7) - The story of how this site was used to explore how we can increase SEO rankings in a client side rendered site.
* [NextJS Static Render & Performance](https://angular-evan.medium.com/nextjs-static-render-performance-6fa455bcf391) - An extension of the previous article after it clicked how the static site generation could be used to substantially increase core web vitals scores...and then some!

&nbsp;

## Related articles

&nbsp;

* [Yup, you should use React Hook Form](https://angular-evan.medium.com/yup-you-should-use-react-hook-form-9864d8bc80ef) - The original research into React Hook Form. There are several subsequent articles linked from this article.