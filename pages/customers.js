import Head from "next/head";
//import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { Container } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import TableCustomer from '../components/TableCustomer'
import React from "react";
import Button from "../components/Button"
import {useTable} from 'react-table'
import ReactDOM from 'react-dom'
import Box from "../components/Box"
import Text from "../components/Text"

export default function Customers() {
  const data = [
    {
      id:1222,
      name:"sdff",
      contN:"daffa",
      contNo:123213,
      address: "london",
      saleEmp:"wwww",
      credit:234
    },
  ];
  
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
        <Box
          Box marginT={50}  marginB="auto" marginL={0} marginR={0} 
          h={50} w={100} 
          borW={0} borC="transparent"
          radius={0}
          bgColor="black"
          justify="center" align="center" display="flex"
        >
          <Text size={16} color="white" weight="normal" txtAlign="left">
            result
          </Text>
          
        </Box>
        <TableCustomer 
          Hname="Name" HcontN="Contact Name" Hcontact="Contact no." Haddress="Address" 
          HsaleEmp="Sale recp emp" HcreditLimit="Credit Limit" Hcheck="Add order" check="add"
          bgColor="ForestGreen" bgColorH="DarkGreen" marginB="auto" marginL={50} marginR={50} marginT={0}
          props={data}
        />

        <Box
          Box marginT={50}  marginB="auto" marginL={0} marginR={0} 
          h={50} w={100} 
          borW={0} borC="transparent"
          radius={0}
          bgColor="black"
          justify="center" align="center" display="flex"
        >
          <Text size={16} color="white" weight="normal" txtAlign="left">
            customer in ordering
          </Text>
          
        </Box>
        <TableCustomer 
          Hname="Name" HcontN="Contact Name" Hcontact="Contact no." Haddress="Address" 
          HsaleEmp="Sale recp emp" HcreditLimit="Credit Limit" Hcheck="Add order" check="finish"
          bgColor="FireBrick" bgColorH="Maroon" marginB="auto" marginL={50} marginR={50} marginT={0}
          props={data}
        />
      </section>
    </Container>
    //</Layout>
  );
}

// const data = [
//   {
//     id:1222,
//     name:"sdff",
//     contN:"daffa",
//     contNo:123213,
//     address: "london",
//     saleEmp:"wwww",
//     credit:234
//   },
// ];

// ReactDOM.render(
//   <Customers data={data} />,
//   document.getElementById('root')
// );
