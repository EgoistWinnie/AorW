import _JSXStyle from "styled-jsx/style"
import React from 'react'
import Link from "next/link"
import Button from"../Button"
import {ReactElement} from 'react'
import {FontAwesomIcom} from '@fortawesome/react-fontawesome'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'

export default function customBut () {
    return( <div className="main">
                <Link href="/">
                    <a>
                        <button className="confirm">
                            +
                        </button>
                    </a>
                </Link >
                <Link href="/customers">
                    <a>
                        <button className="customer">
                            #
                        </button>
                    </a>
                </Link>
            <style jsx>{`
                    .main{
                        width:auto;
                        height:auto;                      
                    },
                    .confirm{
                        position:fixed;
                        right:30px;
                        bottom:30px;
                        background-color: Coral;                       
                        width:50px;
                        height:50px;
                        border-radius: 99px;
                        border-color: transparent;
                        font-size: 30px;
                        font-weight:800;
                        color: white;
                        opacity: 0.7;
                    },
                    .confirm:hover{
                        opacity: 1;
                    },
                    .customer{
                        position:fixed;
                        right:30px;
                        bottom:110px;
                        background-color: Black;                       
                        width:50px;
                        height:50px;
                        border-radius: 99px;
                        border-color: transparent;
                        font-size: 30px;
                        font-weight:800;
                        color: white;
                        opacity: 0.7;
                    },
                    .customer:hover{
                        opacity: 1;
                    }
                `}</style>
        </div>
    )
}