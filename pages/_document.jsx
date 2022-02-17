import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

export default class SSRDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="preconnect" href="https://connect.facebook.net" />
          <link rel="preconnect" href="https://platform.twitter.com" />
          <link rel="preconnect" href="https://platform.linkedin.com" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`}
          />
          <script
          // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
              window.twttr = (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0],
                  t = window.twttr || {};
                if (d.getElementById(id)) return t;
                js = d.createElement(s);
                js.id = id;
                js.src = "https://platform.twitter.com/widgets.js";
                js.defer = true;
                fjs.parentNode.insertBefore(js, fjs);
              
                t._e = [];
                t.ready = function(f) {
                  t._e.push(f);
                };
              
                return t;
              }(document, "script", "twitter-wjs"));
            `,
            }}
          />
          <script defer src="https://platform.linkedin.com/in.js" type="text/javascript">lang: en_US</script>
          <script
           // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
             (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
              js.defer = true;
              fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));
             `,
            }}
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.GA_ID}');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
