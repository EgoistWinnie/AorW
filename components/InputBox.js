import _JSXStyle from "styled-jsx/style"
import Box from "./Box"

export default function InputBox  ({children,type,order,marginB,marginL,marginR,marginT,placeholder,borderFCC,borderC,borderW,bgC,radius,w,h,color,fSize,display}) {
    return<>
            <input type={type} name={order} placeholder= {placeholder} />
            <style jsx>{`
                    input[type=${type}]{
                        font-size:${fSize}px;
                        width: ${w == "100" ? `${100}%` : `${w}%`};
                        height:${h == "100" ? `${100}%` : `${h}px`};
                        box-sizing: border-box;
                        margin:margin:${marginT == "auto" ? "auto" : `${marginT}px`} ${marginR == "auto" ? "auto" : `${marginR}px`} ${marginB == "auto" ? "auto" : `${marginB}px`} ${marginL == "auto" ? "auto" : `${marginL}px`};
                        border-radius:${radius}px;
                        color:${color};
                        border:${borderW}px solid ${borderC}; 
                        background-color: ${bgC};
                        outline:none;
                    },
                    input[type=text]:hover{
                        border-color: ${borderFCC};
                    }
                `}</style>
        </>
}
