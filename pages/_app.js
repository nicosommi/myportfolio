import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/sidebar.css";
import "../styles/about.css";
import "../styles/contact.css";
import "../styles/home.css";
import "../styles/projects.css";
import "../styles/skills.css";
import "../styles/footer.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
