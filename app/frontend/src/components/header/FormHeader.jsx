import React from 'react'
import {
    FormControl,
    Input,
    Icon,
    Link,
    Flex
} from "@chakra-ui/react"



const form = props =>
<Flex h="100%" justify="center" align="center">
        <FormControl w="auto">
            <Input type='text' placeholder='Pesquisar...' 
                w="220px"
                h="24px"
                mr="2"
                fontFamily='Open sans, sans-serif'
                fontSize='14px'
                border="1px"
                borderColor="rgba(194, 56, 58, 0.5)"
                borderRadius="25px"
                outline="transparent"
                _focus={{borderColor: "rgba(194, 56, 58, 1)", boxShadow: "0px 0px 3px #C2383A"}}
                _hover={{borderColor: "rgba(194, 56, 58, 0.5)"}}/>
            <Link 
                href="#/"
                bgColor='transparent'
                border='none'
                outline='transparent'
                _focus={{border: 'none'}}>
                <Icon viewBox="0 0 16 16" w="20px" h="20px">
                    <path fill="#C2383A" d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </Icon>
            </Link>
        </FormControl>
    </Flex>   

export default form




// import '../styles/formheader.css'
//antigo jsx abaixo
// <form className="form-header">
//     <input type="text" placeholder="Pesquisar..."/>
//     <button>
//         <a href="/">
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#C2383A" className="bi bi-search" viewBox="0 0 16 16">
//             <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
//             </svg>
//         </a>
//     </button>
// </form>