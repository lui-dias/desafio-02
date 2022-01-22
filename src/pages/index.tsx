import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const images = new Array(8).fill(0).map((_, i) => `/shoes/${i + 1}.webp`)

export default function App() {
    return (
        <>
            <Head>
                <meta
                    name='description'
                    content='Desafio 02 do codelândia, feito com Next.js, Typescript e TailwindCSS'
                />
                <meta name='keywords' content='desafio, codelândia, nextjs, typescript, tailwindcss' />
                <meta name='author' content='Lui-dias' />

                <title>Desafio 02</title>
            </Head>

            <div className='min-h-screen font-montserrat'>
                <div className='min-w-screen flex justify-center bg-gray-900 py-4'>
                    <span className='text-white font-medium'>Ganhe R$ 10,00 de desconto no frete</span>
                </div>

                <header className='min-w-screen flex justify-center py-4'>
                    <Link href='/' passHref>
                        <a className='font-semibold text-lg'>JordanShoes</a>
                    </Link>
                </header>

                <main className='min-w-screen'>
                    <section className='relative h-[400px] flex items-center before:bg-[url("/main-image-mobile.webp")] before:bg-cover before:bg-no-repeat before:w-full before:h-full before:absolute before:brightness-50 before:-z-10 md:before:bg-[url("/main-image-desktop.webp")]'>
                        <div className='text-white px-6 pl-[10%]'>
                            <h2 className='text-3xl font-semibold mb-4'>A melhor loja de Jordan</h2>
                            <h3 className='font-medium leading-[1.8] max-w-[410px]'>
                                O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador
                                Michael Jordan.
                            </h3>
                        </div>
                    </section>

                    <section className='flex flex-col items-center px-6 py-20 gap-y-4'>
                        <h2 className='font-semibold text-3xl'>Destaques</h2>
                        <h3 className='font-medium text-center leading-[1.8] text-gray-700'>
                            Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.
                        </h3>
                    </section>

                    <section>
                        <nav className='pb-12 flex justify-center'>
                            <ul className='px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-x-2 gap-y-6 container'>
                                {images.map((image, i) => (
                                    <li key={image} className='relative w-full max-w-[380px] h-[300px]'>
                                        <Image
                                            src={image}
                                            layout='fill'
                                            alt={`Image ${i + 1}`}
                                            quality={100}
                                            loading='lazy'
                                        />
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </section>
                </main>

                <footer className='min-w-screen flex justify-center bg-gray-900 py-4'>
                    <span className='text-white font-medium'>Todos os direitos reservados</span>
                </footer>
            </div>
        </>
    )
}
