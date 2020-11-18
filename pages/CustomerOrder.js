import Button from "../components/Button"
import Box from "../components/Box"
import Text from "../components/Text"
import Display from "../components/Display"
import _JSXStyle from "styled-jsx/style"


export default function SearchProduct(){
    return(
        <>
        {/* list of ordering products */}
            <Display>
                <Box marginT={50}  marginB="auto" marginL={60} marginR={60} 
                    h={160} w={100} 
                    borW={0} borC="transparent"
                    radius={0}
                    bgColor="transparent"
                    justify="center" align="center" display="flex"
                    size={16} color="black" weight="normal"
                >
                    <Box //type
                        marginT="auto"  marginB="auto" marginL={0} marginR="auto" 
                        h={160} w={25} 
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
                        h={160} w={65} 
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
                                        bgColorH="Maroon" colorH="white"
                                        opacity={100}
                                        display="flex"
                                    >
                                        <Text size={20} color="white" txtAlign="center">
                                            -
                                        </Text>
                                    </Button>
                                    <div className="zero">
                                        <Text size={20} color="gray" txtAlign="center">
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
                                       <Text size={20} color="white" txtAlign="center">
                                            +
                                        </Text>
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
                    </Box>
                    <Box // cancle
                        marginT="auto"  marginB="auto" marginL="auto" marginR={0} 
                        h={160} w={10} 
                        borW={0} borC="transparent"
                        radius={8}
                        bgColor="transparent"
                        justify="center" align="center" display="flex"
                    >
                        <Button
                            radius={8} borderC="red" 
                            h={50} w={50} 
                            bgColor="red" color="white" 
                            marginT="auto"  marginB="auto" marginL="auto" marginR="auto"
                            bgColorH="Crimson" colorH="white"
                            opacity={100}
                            display="flex"
                            className = "buttonRadius"
                        >
                            <Text size={30} color="white" txtAlign="center" weight={1200}>
                                X
                            </Text>
                        </Button>
                    </Box>
                </Box>
                
            </Display>

            {/* total data */}
            <div>
                <div className="container">
                    {/* container 1 : point */}
                        <Box
                            marginT={0}  marginB="auto" marginL={0} marginR={0} h={50} w={100} 
                            borW={0} borC="transparent" radius={0} bgColor="transparent"
                            justify="center" align="center" display="flex"
                        >
                            
                                <Box
                                        marginT={0}  marginB="auto" marginL={0} marginR="auto" h={50} w={50} 
                                        borW={0} borC="transparent" radius={0} bgColor="transparent"
                                        justify="flex-start" align="center" display="flex"
                                    >
                                        <Text size={16} color="white" weight="normal" txtAlign="left">
                                            point
                                        </Text>
                                </Box>
                                <Box
                                        marginT={0}  marginB="auto" marginL="auto" marginR={0} h={50} w={50} 
                                        borW={0} borC="transparent" radius={0} bgColor="transparent"
                                        justify="flex-end" align="center" display="flex"
                                    >
                                        <Text size={16} color="white" weight="normal" txtAlign="right">
                                            100
                                        </Text>
                                </Box>
                            {/* </div> */}
                            
                        </Box>
                        {/* container 2 : total */}
                        <Box
                            marginT={0}  marginB="auto" marginL={0} marginR={0} h={50} w={100} 
                            borW={0} borC="transparent" radius={0} bgColor="transparent"
                            justify="center" align="center" display="flex"
                        >
                           
                                <Box
                                        marginT={0}  marginB="auto" marginL={0} marginR="auto" h={50} w={50} 
                                        borW={0} borC="transparent" radius={0} bgColor="transparent"
                                        justify="flex-start" align="center" display="flex"
                                    >
                                        <Text size={22} color="white" weight={600} txtAlign="left">
                                            total
                                        </Text>
                                </Box>
                                <Box
                                        marginT={0}  marginB="auto" marginL="auto" marginR={0} h={50} w={50} 
                                        borW={0} borC="transparent" radius={0} bgColor="transparent"
                                        justify="flex-end" align="center" display="flex"
                                    >
                                        <Text size={22} color="white" weight={400} txtAlign="right">
                                            1222222
                                        </Text>
                                </Box>
                            {/* </div> */}
                            
                        </Box>
                        {/* container 3 : button */}
                        <Box
                            marginT="auto" marginB="auto" marginL="auto" marginR="auto" h={40} w={100} 
                            borW={0} borC="transparent" radius={0} bgColor="transparent"
                            justify="center" align="center" display="flex"
                        >
                            <Button
                                 radius={8} borderC="ForestGreen" 
                                 h={40} w={100} 
                                 bgColor="ForestGreen" color="white" 
                                 marginT="auto"  marginB={20} marginL={0} marginR={0}
                                 bgColorH="Darkgreen" colorH="white"
                                 opacity={1}
                                 display="flex"
                            >
                                <Text size={20} weight={500} color="white" txtAlign="center">
                                    confirm
                                </Text>
                            </Button>
                        </Box>
                    
                </div>
                
                <style jsx>{`
                        div{
                            position: fixed;
                            height: 200px;
                            width: 100%;
                            bottom:0;
                            right:0;
                            background-color: black;
                            padding: auto;
                        },
                        .container{
                            display:block;
                            margin-top:0px;
                            position: relative;
                            height: 50px;
                            width: 100%;
                            background-color: black;
                        }
                    `}</style>
            </div>
           
        </>
    );
}