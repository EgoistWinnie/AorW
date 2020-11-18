import _JSXStyle from "styled-jsx/style"

export default function Text  ({children,size,color,txtAlign}) {
    return<div>
            {children}
                <style jsx>{`
                    div{
                        font-family: Lucida Sans Unicode", "Lucida Grande", sans-serif;
                        font-size: ${size}px;
                        font-weight: ;
                        color: ${color};
                        padding: auto;
                        height: auto;
                        width: auto;
                        text-align: ${txtAlign};    
                    }
                `}</style>
        </div>
}
