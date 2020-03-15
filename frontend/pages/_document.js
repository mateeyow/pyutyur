import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className='bg-gray-100 font-body h-screen'>
          <Main />
          <div id='portals'></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
