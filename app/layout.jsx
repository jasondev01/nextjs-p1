import "./globals.css"
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: 'Prompt Master',
    desscription: 'Discover & Share Amazing Prompts for AIs'
}

const RootLayout = ({children}) => {
    return (
        <html lang="en">
            <body className="bg-slate-800 bg-opacity-20">
                <Provider>
                    <div className="main">
                        <div className="gradient" />
                    </div>
                    <main className="app">
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout
