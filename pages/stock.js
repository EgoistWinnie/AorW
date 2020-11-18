import Head from "next/head";
//import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { Table, Container, Button } from "react-bootstrap";

import { PrismaClient } from "@prisma/client";

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const stock = await prisma.products.findMany();

  return {
    props: {
      stock
    }
  };
}

// import useSwr from 'swr'
// const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Stock({stock}) {
  // const { data, error } = useSwr('/api/hello', fetcher)

  // if (error) return <div> Failed to load stock</div>
  // if (!data) return <div> Loading...</div>
  return (
    //<Layout children>
    <Container>
      <Head>
        <title>Stock</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <Table striped bordered hover variant="dark" responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>In stock</th>
              <th>Update</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {stock.map((products) => (
              <tr key={products.ProductID}>
                <td>{products.productName}</td>
                <td>{products.quantityInStock}</td>
                <td>O</td>
                <td>X</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
      <div className="d-flex justify-content-center">
        <Button variant="secondary" size="lg">
          Add New Product
        </Button>
      </div>
    </Container>
    //</Layout>
  );
}
