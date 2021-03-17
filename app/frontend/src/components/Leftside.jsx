import React from 'react'
import './styles/leftside.css'
import NewButton from './NewButton'

const leftside = props => 
    <aside className="leftside">
        <form className="form-menu">
            <NewButton text="Home"/>
            <NewButton text="Amigos"/>
            <NewButton text="Encontre um Boosh"/>
            <NewButton text="Sugestões de Leitura"/>
            <NewButton text="Top Books"/>
        </form>
    </aside>

export default leftside