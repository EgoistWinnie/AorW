import Head from "next/head";
//import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { Table, Container, Button } from "react-bootstrap";

export default function Home() {
  return (
    //<Layout children>
    <Container>
      <Head>
        <title>Stock</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>In stock</th>
              <th>Update</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Susuki Swift</td>
              <td>307</td>
              <td>O</td>
              <td>X</td>
            </tr>
            <tr>
              <td>K/DA All out Akali</td>
              <td>2045</td>
              <td>O</td>
              <td>X</td>
            </tr>
            <tr>
              <td>When do we fall asleep, where do we go?</td>
              <td>2045</td>
              <td>O</td>
              <td>X</td>
            </tr>
          </tbody>
        </Table>
      </section>
      <div>
        <Button variant="secondary" size="lg">
          Add New Product
        </Button>
      </div>
    </Container>
    //</Layout>
  );
}
