import React from 'react'
import {Grid} from '@chakra-ui/react'
import AvatarImage from '../assets/images/user-icon.jpg'
import NewTextPost from '../templates/NewTextPost'
import './custom.css'

const explorer = props =>
        <Grid templateColumns='1fr 1fr' gap='20px'>
            <NewTextPost 
                profile={AvatarImage}
                headingText='Carla Almeida'
                paragraphText='O Lorem Ipsum é um 
                texto modelo da indústria tipográfica e 
                de impressão. O Lorem Ipsum tem vindo a 
                ser o texto padrão usado por estas indústrias 
                desde o ano de 1500, quando uma misturou os caracteres
                de um texto para criar um espécime de livro. 
                Este texto não só sobreviveu 5 séculos, 
                mas também o salto ...'
                />
            <NewTextPost 
                profile={AvatarImage}
                headingText='Pedro de Lima'
                paragraphText='O Lorem Ipsum é um 
                texto modelo da indústria tipográfica e 
                de impressão. O Lorem Ipsum tem vindo a 
                ser o texto padrão usado por estas indústrias 
                desde o ano de 1500, quando uma misturou os caracteres
                de um texto para criar um espécime de livro. 
                Este texto não só sobreviveu 5 séculos, 
                mas também o salto ...'
                />
            <NewTextPost 
                profile={AvatarImage}
                headingText='Gustavo Freitas'
                paragraphText='O Lorem Ipsum é um 
                texto modelo da indústria tipográfica e 
                de impressão. O Lorem Ipsum tem vindo a 
                ser o texto padrão usado por estas indústrias 
                desde o ano de 1500, quando uma misturou os caracteres
                de um texto para criar um espécime de livro. 
                Este texto não só sobreviveu 5 séculos, 
                mas também o salto ...'
                />
            <NewTextPost 
                profile={AvatarImage}
                headingText='Bianca Souza'
                paragraphText='O Lorem Ipsum é um 
                texto modelo da indústria tipográfica e 
                de impressão. O Lorem Ipsum tem vindo a 
                ser o texto padrão usado por estas indústrias 
                desde o ano de 1500, quando uma misturou os caracteres
                de um texto para criar um espécime de livro. 
                Este texto não só sobreviveu 5 séculos, 
                mas também o salto ...'
                />
            <NewTextPost 
                profile={AvatarImage}
                headingText='Lucas Albino'
                paragraphText='O Lorem Ipsum é um 
                texto modelo da indústria tipográfica e 
                de impressão. O Lorem Ipsum tem vindo a 
                ser o texto padrão usado por estas indústrias 
                desde o ano de 1500, quando uma misturou os caracteres
                de um texto para criar um espécime de livro. 
                Este texto não só sobreviveu 5 séculos, 
                mas também o salto ...'
                />
            <NewTextPost 
                profile={AvatarImage}
                headingText='Ana Beatriz Silva'
                paragraphText='O Lorem Ipsum é um 
                texto modelo da indústria tipográfica e 
                de impressão. O Lorem Ipsum tem vindo a 
                ser o texto padrão usado por estas indústrias 
                desde o ano de 1500, quando uma misturou os caracteres
                de um texto para criar um espécime de livro. 
                Este texto não só sobreviveu 5 séculos, 
                mas também o salto ...'
                />
        </Grid>

export default explorer