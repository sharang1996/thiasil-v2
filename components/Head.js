import Head from "next/head";

const HeadComp = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link
        href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900"
        rel="stylesheet"
      />
      <script
        src="https://kit.fontawesome.com/e0e1078f11.js"
        crossOrigin="anonymous"
      ></script>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css"
      />

      <link
        rel="shortcut icon"
        type="image/png"
        href="../assets/img/favicon.png"
      />

      <title>Thiasil | Quality Silica</title>
    </Head>
  );
};

export default HeadComp;
