import _JSXStyle from "styled-jsx/style"

export default function Display  ({children,bgColor,justify,align}) {
    return<div>
            {children}
                <style jsx>{`
                    div{
                        display:flex;
                        margin:auto;
                        position: relative;
                        height: 100%;
                        width: 100%;
                        background-color: ${bgColor};
                        padding: auto;
                        font-family: Lucida Sans Unicode", "Lucida Grande", sans-serif;
                    }
                `}</style>
        </div>
}