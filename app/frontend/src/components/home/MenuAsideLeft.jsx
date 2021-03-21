import React from 'react'
import '../styles/menuasideleft.css'
import NewButton from '../templates/NewButton'

const menu = props =>
    <aside className="leftside">
        <form className="menu-asideleft">
            <NewButton text="Home"/>
            <NewButton text="Amigos"/>
            <NewButton text="Encontre um Boosh"/>
            <NewButton text="Sugestões de Leitura"/>
            <NewButton text="Top Books"/>
        </form>
    </aside>

export default menu