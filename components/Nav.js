import React from 'react'
import Link from "next/link"
export default function Navi() {
    return (
        <>
             <nav>
        <Link href="/signin">
      <a >Signin</a> 
      </Link>{" | "}
      <Link href="/order">
  <a >Order</a> 
     </Link>{" | "}
        <Link href="/stock" >
  <a >Stock</a> 
  </Link>
      </nav>
        </>
    )
}
