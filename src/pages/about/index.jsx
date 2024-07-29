import 'bootstrap/dist/css/bootstrap.css'
import '../../app/global.scss'
import '../styles/index.scss'
import Head from "next/head";
import Layout from "@/app/components/Layout/layout";
import styles from './styles.css'
import About from './About.jsx'

const AboutIndex = () => {
    return (
      <>
      <Layout>
        <About />
        </Layout>
      </>
    );
  };
  
  export default AboutIndex;