import type { ThemeConfig } from '@/types'

export const themeConfig: ThemeConfig = {
  // SITE INFORMATION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  site: {
    // site title
    title: 'Retypeset',
    // site subtitle
    subtitle: 'Revive the beauty of typography',
    // site description
    description: 'Retypeset is a static blog theme based on the Astro framework. Inspired by Typography, Retypeset establishes a new visual standard and reimagines the layout of all pages, creating a reading experience reminiscent of paper books, reviving the beauty of typography. Details in every sight, elegance in every space.',
    // use i18n title/subtitle/description from src/i18n/ui.ts instead of static ones above
    i18nTitle: true, // true, false
    // author name
    author: 'vacuole',
    // site url
    url: 'https://blog.vacuole.top',
    // favicon url
    // recommended formats: svg, png or ico
    favicon: '/icon/favicon.png', // or https://example.com/favicon.svg
  },
  // SITE INFORMATION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // COLOR SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  color: {
    mode: 'light',
    light: {
      // 更柔和的主色调
      primary: 'oklch(0.35 0.045 265)',
      // 降低次要色的饱和度
      secondary: 'oklch(0.45 0.040 265)',
      // 轻微调整背景色，增加温暖感
      background: 'oklch(0.98 0.003 75)',
    },
    dark: {
      // 调整暗色模式主色调
      primary: 'oklch(0.85 0.02 265)',
      // 优化次要色对比度
      secondary: 'oklch(0.75 0.015 265)',
      // 更柔和的深色背景
      background: 'oklch(0.2 0.012 265)',
    },
  },
  // COLOR SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // GLOBAL SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  global: {
    // default language
    locale: 'zh', // zh, zh-tw, ja, en, es, ru
    // more languages
    // not fill in the locale code above again
    moreLocales: ['zh-tw', 'ja', 'en', 'es', 'ru'], // ['zh', 'zh-tw', 'ja', 'en', 'es', 'ru']
    // font styles for post text
    fontStyle: 'sans', // sans, serif
    // date format for posts
    dateFormat: 'YYYY-MM-DD', // YYYY-MM-DD, MM-DD-YYYY, DD-MM-YYYY, MONTH DAY YYYY, DAY MONTH YYYY
    // gap between title and subtitle
    titleGap: 2, // 1, 2, 3
    // enable KaTeX for mathematical formulas rendering
    katex: true, // true, false
  },
  // GLOBAL SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // COMMENT SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  comment: {
    // enable comment system
    enabled: false, // true, false
    // waline comment system
    // https://waline.js.org/en/
    waline: {
      // server url
      serverURL: 'https://retypeset-comment.radishzz.cc',
      // emoji url
      emoji: [
        'https://unpkg.com/@waline/emojis@1.2.0/tw-emoji',
        // 'https://unpkg.com/@waline/emojis@1.2.0/bmoji',
        // more emojis: https://waline.js.org/en/guide/features/emoji.html
      ],
      // gif search
      search: false, // true, false
      // image uploader
      // bug: unable to hide image uploader icon
      imageUploader: false, // true, false
    },
  },
  // COMMENT SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // SEO SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  seo: {
    // @twitter ID
    // site verification
    verification: {
      // google search console
      // https://search.google.com/search-console
      // google: 'AUCrz5F1e5qbnmKKDXl2Sf8u6y0kOpEO1wLs6HMMmlM',
      // bing webmaster tools
      // https://www.bing.com/webmasters
      // bing: '64708CD514011A7965C84DDE1D169F87',
      // yandex webmaster
      // https://webmaster.yandex.com
      yandex: '',
      // baidu search
      // https://ziyuan.baidu.com
      baidu: '',
    },
    // google analytics
    // https://analytics.google.com
    googleAnalyticsID: '',
    // umami analytics
    // https://cloud.umami.is
    umamiAnalyticsID: '520af332-bfb7-4e7c-9386-5f273ee3d697',
    // follow verification
    // https://follow.is/
    follow: {
      // feed ID
      feedID: '',
      // user ID
      userID: '',
    },
    // apiflash access key
    // automatically generate website screenshots for open graph images
    // get your access key at: https://apiflash.com/
    apiflashKey: '',
  },
  // SEO SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // FOOTER SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  footer: {
    // social links
    links: [
      {
        name: 'RSS',
        url: '/atom.xml', // rss.xml, atom.xml
      },
      {
        name: 'GitHub',
        url: 'https://github.com/vacuolepaoo',
      },
      {
        name: 'Bilibili',
        url: 'https://space.bilibili.com/518590350',
      },
      // {
      //   name: 'Email',
      //   url: 'https://example@gmail.com',
      // }
    ],
    // year of website start
    startYear: 2024,
  },
  // FOOTER SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // PRELOAD SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  preload: {
    // link prefetch
    // docs: https://docs.astro.build/en/guides/prefetch/#prefetch-strategies
    linkPrefetch: 'viewport', // hover, tap, viewport, load
    // comment server url
    // commentURL: 'https://retypeset-comment.radishzz.cc',
    // image hosting url
    // imageHostURL: 'https://image.radishzz.cc',
    // custom google analytics js
    // for users who route analytics javascript to a customized domain
    // See https://gist.github.com/xiaopc/0602f06ca465d76bd9efd3dda9393738
    customGoogleAnalyticsJS: '',
    // custom umami analytics js
    // for users who deploy umami on their own, or route analytics javascript to a customized domain
    // see https://github.com/umami-software/umami/discussions/1026
    customUmamiAnalyticsJS: 'https://js.radishzz.cc/jquery.min.js',
  },
  // PRELOAD SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END
}

export default themeConfig

export const defaultLocale = themeConfig.global.locale
export const moreLocales = themeConfig.global.moreLocales
export const allLocales = [defaultLocale, ...moreLocales]
