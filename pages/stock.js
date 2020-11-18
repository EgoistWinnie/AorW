import Head from "next/head";
//import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { Table, Container, Button } from "react-bootstrap";
import Link from 'next/link'

import useSwr from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json())
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export async function getStaticProps() {
//   const stock = await prisma.products.findMany();

//   return {
//     props: {
//       stock
//     }
//   };
// }

// function onDelete(id,e) {
//   e.preventDefault();
//   console.log('The link was clicked.');
// }

// export async function getStaticProps() {
//   const stock = await prisma.products.findMany();

//   return {
//     props: {
//       stock
//     }
//   };
// }

async function destroy() {
  const res = await fetch(`http://localhost:3000/api/deletestock/`, {
    method: 'DELETE',
  })
  console.log('The link was clicked.')
  const data = await res.json()
  Router.push('/')
}

export default function Stock({stock}) {
  const { data, error } = useSwr('/api/stock', fetcher)

  if (error) return <div> Failed to load stock</div>
  if (!data) return <div> Loading...</div>
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
            {data.map((products) => (
              <tr key={products.ProductID}>
                <td>{products.productName}</td>
                <td>{products.quantityInStock}</td>
                <td><button type="button" className="btn btn-warning">Update</button></td>
                <td><button type="button" className="btn btn-danger"  onClick={destroy}>X</button></td>
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
