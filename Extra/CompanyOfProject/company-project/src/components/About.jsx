import React from 'react'
import Footer from "./Footer"

export default function About() {
    return (
        <div>
            <div class="flex flex-col bg-aboutImage h-56 w-full bg-no-repeat mt-8  text-white justify-center align-middle	">
                <span class="text-center font-custom1 text-6xl	tracking-wide">Hakkımızda</span>
            </div>
            <div class="text-center font-custom1  tracking-wide leading-9 w-3/4 m-auto font-light py-24	">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nihil quis eum alias, doloremque consequuntur accusamus enim at totam dicta non praesentium, provident quibusdam necessitatibus maxime mollitia cum consectetur minus ducimus repellat, incidunt adipisci dignissimos voluptatem unde. Aliquam, nemo ducimus, totam unde fugiat libero deserunt maxime, quibusdam nisi aliquid vel atque. Unde magnam est officia sit officiis, molestiae magni vero?
            </div>
            <Footer />
        </div>
    )
}
