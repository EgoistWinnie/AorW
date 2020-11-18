import _JSXStyle from "styled-jsx/style"

export default function Box  ({children,radius,marginL,marginR,marginT,marginB,borW,borC,h,w,bgColor,justify,align,display,size,color,weight}) {
    return<div className = "box">
            {children}
                <style jsx>{`
                    .box{
                        display:${display};
                        margin:${marginT == "auto" ? "auto" : `${marginT}px`} ${marginR == "auto" ? "auto" : `${marginR}px`} ${marginB == "auto" ? "auto" : `${marginB}px`} ${marginL == "auto" ? "auto" : `${marginL}px`};
                        height: ${h =="auto" ? "auto" : `${h}px`};
                        width: ${w == "auto" ? "auto" : `${w}%`};
                        border: ${borW}px solid ${borC};
                        border-radius: ${radius}px;
                        background-color: ${bgColor};
                        justify-content: ${justify};
                        align-items: ${align};
                        padding:auto;
                        position:relative;
                        font-size:${size}px;
                        color:${color};
                        font-family:Lucida Sans Unicode", "Lucida Grande", sans-serif ;
                        font-weight:${weight};
                    }
                `}</style>
        </div>
}
