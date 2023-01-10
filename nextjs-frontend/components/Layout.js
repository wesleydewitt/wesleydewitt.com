import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({children}) {
    return (
        <>
            <Head>
                <title>Wesley De Witt</title>
            </Head>
            <Header />
                <main className='main'>
                    {children}
                </main>
            <Footer />
        </>
    )
}