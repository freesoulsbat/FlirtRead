import React from 'react'
import './styles/leftside.css'
import NewButton from './ButtonsLeftside'

const leftside = props =>
    <div className="wrapper">
        <aside className="leftside">
            <form className="form-menu">
                <NewButton text="Home"/>
                <NewButton text="Amigos"/>
                <NewButton text="Encontre um Boosh"/>
                <NewButton text="Sugestões de Leitura"/>
                <NewButton text="Top Books"/>
            </form>
        </aside>
        <hr className="divider"/>
    </div>

export default leftside