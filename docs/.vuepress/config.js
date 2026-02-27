import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    lang: 'en-US',
    title: 'Samuel Aeschbach',
    description: 'Personal website of Samuel Aeschbach.',
    bundler: viteBundler(),
    plugins: [
        googleAnalyticsPlugin({
          id: 'G-9QJ89T4GYS',
        }),
    ],
    theme: defaultTheme({
        navbar: [
            {
                text: 'Home',
                link: '/',
            },
            {
                text: 'Blog',
                link: '/blog/',
            },
            {
                text: 'Projects',
                link: '/projects.html',
            },
            {
                text: 'Works',
                link: '/works.html',
            },
            {
                text: 'Contact',
                link: '/contact.html',
            },
        ],
        logo: '/images/samuel-icon.png',
        logoDark: '/images/samuel-icon-dark-4.png',
    }),
})
