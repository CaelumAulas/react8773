import 'js/components/Tweet/tweet.css'

export function Tweet(conteudo) {
    return (
        <article class="tweet">
            <div class="tweet__cabecalho">
                <img class="tweet__fotoUsuario" src="https://placehold.it/50x50" alt="" />
                <span class="tweet__nomeUsuario">Fulano de Tal</span>
                <a href="/"><span class="tweet__userName">@usuario</span></a>
            </div>
            <p class="tweet__conteudo">conteudo</p>
            <footer class="tweet__footer">
                <button class="btn btn--clean">
                    <svg class="icon icon--small iconHeart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.5 47.5">
                        <defs>
                            <clipPath id="a">
                                <path d="M0 38h38V0H0v38z"></path>
                            </clipPath>
                        </defs>
                        <g clipPath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
                            <path
                                d="M36.885 25.166c0 5.45-4.418 9.868-9.867 9.868-3.308 0-6.227-1.632-8.018-4.128-1.79 2.496-4.71 4.129-8.017 4.129-5.45 0-9.868-4.418-9.868-9.868 0-.773.098-1.52.266-2.242C2.75 14.413 12.216 5.431 19 2.965c6.783 2.466 16.249 11.448 17.617 19.96.17.721.268 1.47.268 2.241">
                            </path>
                        </g>
                    </svg>
                    0
                </button>
            </footer>
        </article>
    )
}

/*
<article class="tweet">
    <div class="tweet__cabecalho">
        <img class="tweet__fotoUsuario" src="https://placehold.it/50x50" alt="" />
        <span class="tweet__nomeUsuario">Fulano de Tal</span>
        <a href="/"><span class="tweet__userName">@usuario</span></a>
    </div>

    <p class="tweet__conteudo"><span>Lorem, ipsum dolor sit <a href="/trends/#amet" data-reactroot="">#amet</a>
            consectetur adipisicing <a href="/trends/#elit" data-reactroot="">#elit</a>. Adipisci ut cumque tempora?
            Quam velit vitae voluptatum tempora iste, mollitia, sa</span></p>

    <footer class="tweet__footer">
        <button class="btn btn--clean">
            <svg class="icon icon--small iconHeart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.5 47.5">
                <defs>
                    <clipPath id="a">
                        <path d="M0 38h38V0H0v38z"></path>
                    </clipPath>
                </defs>
                <g clipPath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
                    <path
                        d="M36.885 25.166c0 5.45-4.418 9.868-9.867 9.868-3.308 0-6.227-1.632-8.018-4.128-1.79 2.496-4.71 4.129-8.017 4.129-5.45 0-9.868-4.418-9.868-9.868 0-.773.098-1.52.266-2.242C2.75 14.413 12.216 5.431 19 2.965c6.783 2.466 16.249 11.448 17.617 19.96.17.721.268 1.47.268 2.241">
                    </path>
                </g>
            </svg>
            0
        </button>
    </footer>
</article>
*/