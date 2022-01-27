import Head from 'next/head';
import SiteContainer from '../components/SiteContainer';

export default function About() {
    return (
        <main className="flex flex-1 flex-col">
            <Head>
                <title>Omar Ali | About</title>
            </Head>

            <header className="flex-1 bg-amber-50 pt-24">
                <SiteContainer>
                    <div className="mx-auto max-w-2xl pt-20">
                        <div className="flex flex-col items-center">
                            <h1 className="mb-2 text-6xl font-bold tracking-widest text-slate-800">About Me</h1>
                            <div className="h-1 w-20 bg-amber-400"></div>
                        </div>
                        <div className="my-20 leading-7 text-slate-500">
                            Hello, I am <strong className="font-semibold">Omar Ali</strong> and I am a fullstack
                            web/mobile developer. I have a passion for programming and a{' '}
                            <strong className="font-semibold">B.A. degree</strong> in Computer Science. With{' '}
                            <strong className="font-semibold">7+ years</strong> experience writing clean code. I spend
                            most of my day, experimenting with HTML, CSS and JavaScript (and its endless list of
                            frameworks). I enjoy coding and the challenge of learning something new everyday.
                        </div>
                        <div className="text-center">
                            <a href="mailto:OmarXcoder@gmail.com" className="btn btn-primary">
                                <i className="fas fa-envelope mr-3"></i>
                                <span>SEND ME A MESSAGE</span>
                            </a>
                        </div>
                    </div>
                </SiteContainer>
            </header>
        </main>
    );
}
