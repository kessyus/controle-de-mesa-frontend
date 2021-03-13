import React from 'react'
import Header from './header';
import Footer from  './footer';

const Layout = (props) => {
    document.title = props.page
    return (
        <div>
            <Header title={props.page}/>
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;
