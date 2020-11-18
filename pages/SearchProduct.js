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
                            type="text"
                            name="order"
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
                            opacity={1}
                            display="flex"
                        >
                            <Text
                                size={18}
                                color="white"
                                txtAlign="center"
                                weight={600}
                            >
                                search
                            </Text>
                    </Button>
            </Box> 

        {/* list of product  */}
            
        </Display>
        <Display bgColor="transparent">
            <Box marginT={50}  marginB="auto" marginL={60} marginR={60} 
                    h={220} w={100} 
                    borW={0} borC="transparent"
                    radius={0}
                    bgColor="transparent"
                    justify="center" align="center" display="flex"
                    size={16} color="black" weight="normal"
                >
                    <Box //type
                        marginT="auto"  marginB="auto" marginL={0} marginR="auto" 
                        h={220} w={30} 
                        borW={0} borC="transparent"
                        radius={8}
                        bgColor="black"
                        justify="center" align="center" display="flex"
                    >
                        <Text size={50} color="white" txtAlign="bold">
                            Type
                        </Text>
                    </Box>
                    <Box //data
                        marginT="auto"  marginB="auto" marginL={10} marginR="auto" 
                        h={220} w={70} 
                        borW={2} borC="black"
                        radius={8}
                        bgColor="white"
                        justify="flex-start" align="flex-start" display="block"
                        size={16} color="black" weight="normal"
                    >
                         <div className = "nameprod">
                            <Box //Name Product
                                    marginT={0}  marginB="auto" marginL={10} marginR={0}
                                    h={60} w={100} 
                                    borW={0} borC="black"
                                    radius={0}
                                    bgColor="transparent"
                                    justify="flex-start" align="center" display="flex"
                                    
                                >
                                    <Text size={30} color="black" txtAlign="normal">
                                        Name Product
                                    </Text>
                                       
                                </Box>
                                <Box //Price
                                    marginT={0}  marginB="auto" marginL={0} marginR={10}
                                    h={60} w={100} 
                                    borW={0} borC="black"
                                    radius={0}
                                    bgColor="transparent"
                                    justify="flex-end" align="center" display="flex"
                                >
                                    <Text size={32} color="MediumTurquoise" txtAlign={500}>
                                        Price
                                    </Text>
                                
                                </Box>
                                <style jsx>{`
                                        .nameprod{
                                            position:relative;
                                            width:100%
                                            height:auto;
                                            display:flex;
                                        }
                                `}</style>
                         </div>
                         {/* ProductNuber & Stock */}
                         <div > 
                            <Box //ProductCode
                                    marginT={0}  marginB="auto" marginL={10} marginR={0} h={50} w={50} 
                                    borW={0} borC="black" radius={0} bgColor="transparent"
                                    justify="flex-start" align="center" display="flex"
                                >
                                    <Text size={16} color="gray" txtAlign="normal">
                                        ID: 1234143141
                                    </Text>
                                    
                                </Box>
                                <Box //Stock
                                    marginT={0}  marginB="auto" marginL={0} marginR={10} h={50} w={50} 
                                    borW={0} borC="black" radius={0} bgColor="transparent"
                                    justify="flex-end" align="center" display="flex"
                                    size={16} color="black" weight="normal"
                                >
                                    <Text size={16} color="black" txtAlign="normal">
                                        In Stock: 8
                                    </Text>
                                </Box>
                                <style jsx>{`
                                        div{
                                            position:relative;
                                            width:100%
                                            height:auto;
                                            display:flex;
                                        }
                                `}</style>
                         </div>
                         {/* Product scale & amount piece of ordering */}
                         <div>
                            <Box //scale
                                    marginT={0}  marginB="auto" marginL={10} marginR={0} h={50} w={50} 
                                    borW={0} borC="black" radius={0} bgColor="transparent"
                                    justify="flex-start" align="center" display="flex"
                                    size={16} color="gray" weight="normal"
                                >
                                    <Text size={16} color="gray" txtAlign="normal">
                                        Scale: [1:3]
                                    </Text>
                                    
                                </Box>
                                <Box //Price
                                    marginT={0}  marginB="auto" marginL={0} marginR={10} h={50} w={50} 
                                    borW={0} borC="black" radius={0} bgColor="transparent"
                                    justify="flex-end" align="center" display="flex"
                                    
                                >
                                    <Button
                                        radius={8} borderC="FireBrick" 
                                        h={30} w={10} 
                                        bgColor="FireBrick" color="white" 
                                        marginT="auto"  marginB="auto" marginL={10} marginR={10}
                                        bgColorH="Maroon" colorH="whire"
                                        opacity={100}
                                        display="flex"
                                    >
                                        -
                                    </Button>
                                    <div className="zero">
                                        <Text size={20} color="gray" txtAlign="500">
                                            0
                                        </Text>
                                    </div>
                                    <Button
                                         radius={8} borderC="ForestGreen" 
                                         h={30} w={10} 
                                         bgColor="ForestGreen" color="white" 
                                         marginT="auto"  marginB="auto" marginL={10} marginR={10}
                                         bgColorH="Darkgreen" colorH="white"
                                         opacity={100}
                                         display="flex"
                                    >
                                       +
                                    </Button>
                                </Box>
                                <style jsx>{`
                                        div{
                                            position:relative;
                                            width:100%
                                            height:auto;
                                            display:flex;
                                        }
                                `}</style>
                         </div>
                          {/* More */}
                          
                         <button>
                                More
                                <style jsx>{`
                                            button{
                                            width:100%;
                                            height:57px;
                                            background-color:LightGray;
                                            display:flex;
                                            align-items:center;
                                            justify-content:center;
                                            color: black;
                                            border-bottom-left-radius: 8px;
                                            border-bottom-right-radius: 8px;
                                            margin: auto 0px 0px 0px;
                                            padding: auto;
                                            font-size: 16px;
                                            border-color:transparent;
                                        },
                                        button:hover{
                                            background-color:Gainsboro;
                                        }
                                `}</style>
                            </button>
                    </Box>
            </Box>
        </Display>
    </>
    );
}