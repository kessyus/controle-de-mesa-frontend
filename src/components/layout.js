import React from 'react'
import Header from './header';

const Layout = (props) => {
    document.title = props.page
    return (
        <div>
            <Header></Header>
            <main>
                {props.children}
            </main>
            <footer>
                <p> Todos os direitos reservados</p>
            </footer>
        </div>
    )
}

export default Layout;
