import Head from "next/head";
//import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { Container, Button } from "react-bootstrap";


export default function Home() {
  return (
    //<Layout children>
    <Container>
      <Head>
        <title>Customers</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <div>
          <h2>Search for Customers</h2>
        </div>
        <div>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="InputCname"
                placeholder="Customer name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="InputCID"
                placeholder="Customer ID"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          </form>
        </div>
        <div class="card">
          <div class="card-body">This is some text within a card body.</div>
        </div>
      </section>
    </Container>
    //</Layout>
  );
}
