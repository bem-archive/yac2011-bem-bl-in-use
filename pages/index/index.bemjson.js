({
    block: 'b-page',
    title: 'index',
    head: [
        { elem: 'css', url: 'index.css'},
        { elem: 'css', url: 'index.ie.css', ie: 'lt IE 8'},
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url:'index.js'}
    ],
    content: [
        {
            block: 'b-head',
            content: [
                {
                    block: 'b-menu-horiz',
                    mods: { layout: 'horiz'},
                    content: [
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                url: '',
                                content: 'bem-metod'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                url: '',
                                content: 'bem-tools'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                url: '',
                                content: 'bem-bl-tools'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                mods: { inner: 'yes'},
                                url: '',
                                content: [
                                    {
                                        block: 'b-icon',
                                        alt: 'icon',
                                        url: '/'
                                    },
                                    {
                                        elem: 'inner',
                                        content: 'Клуб&nbsp;БЕМ'
                                    }
                                ]
                            }
                        }

                    ]
                },
                {
                    block: 'b-head-line',
                    content: {
                        block: 'b-logo',
                        content: [
                            {
                                elem: 'link',
                                url: '/',
                                title: 'logo',
                                content: {
                                    elem: 'icon',
                                    url: '../../../../bem-bl/blocks-desktop/b-logo/examples/10_b-logo.blocks/b-logo/b-logo.png',
                                    alt: 'logo'
                                }
                            }
                        ]
                    }
                },
                {
                    block: 'b-search',
                    attrs: { action: '/search.xml' },
                    input: {
                        elem: 'input',
                        attrs: { value: 'Поиск' }
                    },
                    button: {
                        elem: 'button'
                    }
                }
            ]
        },
        {
            block: 'b-layout-table',
            mods: { layout: '24-72' },
            content: [
                {
                    elem: 'row',
                    content: [
                        {
                            elem: 'gap'
                        },
                        {
                            elem: 'cell',
                            elemMods: { position: 'left' },
                            content: {
                                elem: 'inner',
                                content: [
                                    'Первая строка'
                                ]
                            }
                        },
                        {
                            elem: 'cell',
                            elemMods: { position: 'right' },
                            content: [
                                {
                                    block: 'b-text',
                                    content: [
                                        {
                                            elem: 'h1',
                                            content: 'WEB Framework или Библиотека блоков'
                                        },
                                        {
                                            elem: 'p',
                                            content: 'Попытка сделать сделать лучший Web Framework, действительно облегчающий разработку и поддержку сайта. А так же систематизировать подходы к вёрстке и описать удобную схему вёрстки сайтов, как больших, так и маленьких.'
                                        },
                                        {
                                            elem: 'p',
                                            content: 'Все сайты немного похожи друг на друга. Если заниматься веб-разработкой долгие годы, накапливаются практики и типовые решения распространённых задач. Результатом наших накоплений становится open source библиотека блоков bem-bl, которую мы разрабатываем на GitHub. Библиотека реализована согласно методологии БЭМ и позволяет использовать блоки, уже имеющие шаблонную, CSS и JS-реализации, для построения web-страницы.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'gap'
                        }
                    ]
                }
            ]
        }


    ]
})
