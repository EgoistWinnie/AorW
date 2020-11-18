import _JSXStyle from "styled-jsx/style"

export default function Button({children,display,opacity,marginB,marginL,marginR,marginT,borderC,color,bgColor,bgColorH,h,w,radius,colorH}){
    return<button>
        {children}
        <style jsx>{`
                button{
                    display:${display};
                    position:relative;
                    justify-content: center;
                    align-item: center;
                    border-radius:${radius}px;
                    border-color:${borderC};
                    height:${h == "auto" ? "auto" : `${h}px`};
                    width: ${w == "auto" ? "auto" : `${w}%`};
                    background-color: ${bgColor};
                    color:${color};
                    margin:${marginT == "auto" ? "auto" : `${marginT}px`} ${marginR == "auto" ? "auto" : `${marginR}px`} ${marginB == "auto" ? "auto" : `${marginB}px`} ${marginL == "auto" ? "auto" : `${marginL}px`};
                    opacity:${opacity};
                    font-weight:bold;
                    font-size:18px;
                    border-color:transparent;
                    padding:auto;

                }
                button:hover{
                    border-color:${borderC};
                    background-color:${bgColorH};
                    color:${colorH};
                }
            `}</style>
    </button>
}