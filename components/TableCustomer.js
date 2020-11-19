import _JSXStyle from "styled-jsx/style"
import Button from "./Button"
import {useTable} from 'react-table'
import ReactDOM from 'react-dom'
import Text from './Text'


export default function TableCustomer({
    Hname,
    HcontN,
    Hcontact,
    Haddress,
    HsaleEmp,
    HcreditLimit,
    Hcheck,
    bgColor,
    bgColorH,
    check,
    props
}){

    

    const name = (
     
            props.map((data)=>
                <td key={data.id}>
                    {data.name}
                </td>
            )
     
    );
    
    const contN = (
        props.map((data)=>
            <td key={data.id}>
                {data.contN}
            </td>
        )
    );
    
    const contact = (
        props.map((data)=>
            <td key={data.id}>
                {data.contact}
            </td>
        )
    );

    const address = (
        props.map((data)=>
            <td key={data.id}>
                {data.address}
            </td>
        )
    );

    const saleEmp = (
        props.map((data)=>
            <td key={data.id}>
                {data.saleEmp}
            </td>
        )
    );

    const creditLimit = (
        props.map((data)=>
            <td key={data.id}>
                {data.creditLimit}
            </td>
        )
    );
    return<table>
        <tr>
            <th>{Hname}</th>
            <th>{HcontN}</th>
            <th>{Hcontact}</th>
            <th>{Haddress}</th>
            <th>{HsaleEmp}</th>
            <th>{HcreditLimit}</th>
            <th>{Hcheck}</th>
        </tr>
        <tr>
            {name}
            {contN}
            {contact}
            {address}
            {saleEmp}
            {creditLimit}
            <td>
                <button>
                    <Text size={16} weight="normal" color="white" txtAlign="center">
                        {check}
                    </Text>
                    
                </button>
            </td>
        </tr>
        <style jsx>{`
                table{
                    border-collapse: collapse;
                    width: 100%;
                    margin: auto auto auto auto;
                },
                th{
                    height:auto;
                    text-align:left;
                    border: 0.5px solid black;
                    background-color:black;
                    color:white;
                    font-size:12px;
                    font-weight:500;
                },
                td,tr{
                    height:auto;
                    text-align:left;
                    background-color:white;
                    color:black;
                    font-size:16px;
                    font-weight:normal;
                },
                tr:nth-child(even){
                    background-color: #f2f2f2;
                },
                tr:hover {background-color: #ddd;
                },
                button{
                    position:relative;
                    background-color:${bgColor};
                    color:white;
                    text-align:center;
                    widht:100%;
                    height:100%;
                    border: none;
                },
                button:hover{
                    background-color:${bgColorH};
                }

            `}</style>
    </table>
}

// const data = [
//     {
//       id:1222,
//       name:"sdff",
//       contN:"daffa",
//       contNo:123213,
//       address: "london",
//       saleEmp:"wwww",
//       credit:234
//     },
//   ];
  
//   ReactDOM.render(
//     <TableCustomer data={data} />,
//     document.getElementById('root')
//   );