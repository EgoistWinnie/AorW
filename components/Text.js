import _JSXStyle from "styled-jsx/style"

export default function Text  ({children,size,color,txtAlign,weight}) {
    return<div>
            {children}
                <style jsx>{`
                    div{
                        font-size: ${size}px;
                        font-weight:${weight} ;
                        color: ${color};
                        padding: auto;
                        height: auto;
                        width: auto;
                        text-align: ${txtAlign};  
                        position: relative;  
                    }
                `}</style>
        </div>
}
