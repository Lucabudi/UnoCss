import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'



// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    UnoCSS({
      // configFile: './unocss.config.js',
      rules: [
        ['text-title', { 'font-size': '100px', 'font-weight': 'bold', 'color': 'red' }],

        [/^m-([.\d]+)$/, ([, num]) => ({ margin: `${num}px` })],
      ],
      shortcuts: [
        // you could still have object style
        {
          btnstaticverde: 'py-2 px-4 font-semibold rounded-lg shadow-md bg-green-600',
        },
        // btn dynamic shortcuts
        [/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg border-color-${c}-500 hover:border-color-${c}-600 focus:outline-none`],
      ],
      variants: [
        (matcher) => {
          if (!matcher.startsWith('hover:')){
            console.log(matcher)
            return matcher
          }
          return {
            matcher: matcher.slice(6),
            selector: s => `${s}:hover`,
          }
        }
      ],
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
          },
        }),
      ],
      // tranofmer per convertire attributi in classi
      transformers: [
        transformerAttributifyJsx(),
      ],
    }),
    React(),
  ],
})
