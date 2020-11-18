import Button from "../components/Button"
import Box from "../components/Box"
import Text from "../components/Text"
import Display from "../components/Display"
import InputBox from "../components/InputBox"
import _JSXStyle from "styled-jsx/style"


export default function SearchProduct(){
    return(
    <>
        <Display bgColor="transparent">
            <Box marginT="auto"  marginB="auto" marginL={50} marginR={50} 
                h={50} w={100} 
                borW={0} borC="transparent"
                radius={0}
                bgColor="transparent"
                justify="center" align="center" display="flex"
            >
                <div className="in">
                    <form>
                        {/* <input type="text" name="order" placeholder= "search" /> */}
                        <InputBox placeholder="search"
                            fsize={16}
                            w={100} h={40}
                            marginL={10} marginB="auto" marginT="auto" marginR="auto"
                            radius={8} borderC="grey" borderW={2} borderFCC="black"
                        />
                    </form>
                    <style jsx>{`
                            .in{
                                position:relative;
                                width:80%;
                                height:40px;
                                margin:auto 10px auto 10px;
                                font-size: 16px;
                            }
                        `}</style>
                </div>
                    <Button radius={8} borderC="black" 
                            h={40} w={30} 
                            bgColor="black" color="white" 
                            marginT="auto"  marginB="auto" marginL={10} marginR={10}
                            bgColorH="white" colorH="black"
                            opacity={100}
                            display="flex"
                        >
                            <Text
                                size={16}
                                color="black"
                                txtAlign="center"
                            >
                                search
                            </Text>
                    </Button>
            </Box> 

            {/* list of product  */}
            
        </Display>
        <Display bgColor="transparent">
            <Box
                    marginT={50}  marginB="auto" marginL={60} marginR={60} 
                    h={220} w={100} 
                    borW={0} borC="transparent"
                    radius={0}
                    bgColor="transparent"
                    justify="center" align="center" display="flex"
                >
                <Box
                    marginT="auto"  marginB="auto" marginL={0} marginR="auto" 
                    h={220} w={30} 
                    borW={0} borC="transparent"
                    radius={8}
                    bgColor="black"
                    justify="center" align="center" display="flex"
                >
                    <Text size={30} color="white" txtAlign="center">
                        sddfsf
                    </Text>
                </Box>
                <Box
                    marginT="auto"  marginB="auto" marginL={10} marginR="auto" 
                    h={220} w={70} 
                    borW={2} borC="black"
                    radius={8}
                    bgColor="white"
                    justify="flex-start" align="left" display="flex"
                >
                    <Text size={30} color="white" txtAlign="center">
                        Name Product
                    </Text>
                </Box>
            </Box>
        </Display>
    </>
    );
}