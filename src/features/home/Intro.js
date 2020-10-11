import React from 'react'

const Intro = ({ scrollToNode, node }) => {
    return (
        <>
            <div className="main-top-bg">

                <div class="banner-text-content">
                    <h1 class="banner-title" >ŠKODA KODIAQ</h1>
                    <h2 class="banner-tagline">Универсальный внедорожник для вашего бизнеса и семьи</h2>

                    <div class="banner-button" onClick={() => scrollToNode(node)}>
                        <span class="btn btn-sa-primary"><a href="#test">Заказать тест-драйв</a></span>
                    </div>
                </div>

            </div>
            <div className="main-bottom">
                <div class="banner-text-content">
                    <h1 class="banner-title">ŠKODA KODIAQ</h1>
                    <h2 class="banner-tagline">Универсальный внедорожник для вашего бизнеса и семьи</h2>

                    <div class="banner-button" onClick={() => scrollToNode(node)}>
                        <span class="btn btn-sa-primary"><a href="#test">Заказать тест-драйв</a></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro
