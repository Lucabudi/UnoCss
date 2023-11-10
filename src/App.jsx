/* eslint-disable react/no-unknown-property */

function App() {
  return (

    <div className="text-center">
        <div my="20">
          {/* rules text-title hover:animate-bounce */}
          <div className="text-20 text-red m-3 hover:animate-bounce">UnoCSS</div>
          <div className="text-20 text-title">UnoCSS</div>
          <h2 className="m-3.5 text-18">Not a beautiful presentation</h2>
          <div className="m-10">
            {/* text="~ red 15"  */}
            <div className="text-red text-15"  p="1">but at least</div>
            <div text="~ red 15"  p="1">but at least</div>
            <h3 className="m-2 text-12" p="4">useful</h3>
            {/*  Prefix  */}
            <h3 className="m-5.5 text-12">i hope</h3>
            {/* <h3 text-red text-center text-5xl animate-bounce className="m-5.5 text-12">i hope</h3> */}
          </div>
          {/* shortcuts */}
          <div className="m-4">
            {/* btnstaticverde */}
            <button className='btnstaticverde'>
              bottone css statico
            </button>
            <button className='m-2 btn-green'>
              bottone css dinamico
            </button>
            <button className='m-2 btn-blue'>
              bottone css dinamico
            </button>
            <button className='m-2 btn-red'>
              bottone dinamico
            </button>
            {/* attributify */}
            <div m-30>
              <button className="bg-blue-400 hover:bg-blue-500 text-sm text-white font-mono font-light py-2 px-4 rounded border-2 border-blue-200 dark:bg-blue-500 dark:hover:bg-blue-600">
                Button Speciale
              </button>
              <button
                bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
                text="sm white"
                font="mono light"
                p="y-2 x-4"
                border="2 rounded blue-200"
              >
                Button
              </button>
            </div>
          </div>
          {/* icons */}
          <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy text-20" />
          <p>Grazie</p>
        </div>
    </div>
  )
}

export default App
