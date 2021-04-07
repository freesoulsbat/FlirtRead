import React from 'react'
import { Avatar } from "@chakra-ui/react"
import avataruser from "../assets/images/user-icon.jpg"
import { Box } from "@chakra-ui/react"

const profilepicture = props =>
    <Box as='profilecontentt' justify="center" align="center" m='0px' display='flex' gridArea='profilecontentt'>

        <Avatar size="2x" name="Segun Adebayo" src={avataruser} />
                <h2>Gregory Heringer</h2>
    </Box> 

export default profilepicture









// class ProfilePicture extends Component {
//         render (){
//         return(
//             <aside className="profilepicturee">
//                 <div className="ProfilePicture">
//                 <Avatar size="2x" name="Segun Adebayo" src={avataruser} />
//                 <h2>Gregory Heringer</h2>
//                 </div>
//             </aside>
//             )
//         }
// }