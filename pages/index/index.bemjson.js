({
    block: 'b-page',
    title: 'index',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url:'_index.js' }
    ],
    content: {
        block: 'b-page-inner',
        content: [
            {
                block: 'b-head',
                content: [
                    {
                        block: 'b-link',
                        mods: { inner: 'yes' },
                        mix: [{ block: 'b-yaru-link' }],
                        url: 'http://clubs.ya.ru/bem/',
                        content: [
                            {
                                block: 'b-icon',
                                alt: 'icon'
                            },
                            {
                                elem: 'inner',
                                content: 'Клуб&nbsp;БЕМ'
                            }
                        ]
                    },
                    {
                        block: 'b-logo',
                        content: ['BEM-BL',
                            {
                                elem: 'text',
                                content: 'blocks library'
                            }
                        ]
                    },
                    {
                        block: 'b-search',
                        mix: [{ block: 'b-head', elem: 'search' }],
                        attrs: { action: '/' },
                        input: { elem: 'input' },
                        button: { elem: 'button' }
                    },
                    {
                        block: 'b-head-links',
                        content: {
                            block: 'b-menu-vert',
                            mix: [{ block: 'b-head-links', elem: 'menu' }],
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
                                }
                            ]
                        }
                    }
                ]
            },
            {
                block: 'b-layout-table',
                mods: { layout: '54-46' },
                content: [
                    {
                        elem: 'row',
                        content: [
                            {
                                elem: 'cell',
                                elemMods: { position: 'left' },
                                content: {
                                    elem: 'inner',
                                    content: [
                                        {
                                            block: 'b-menu-vert',
                                            js: true,
                                            mods: { list: 'blocks' },
                                            content: [
                                                {
                                                    elem: 'item',
                                                    content: [
                                                        {
                                                            block: 'b-link',
                                                            mods: { pseudo: 'yes' },
                                                            mix: [{ block: 'b-menu-vert', elem: 'trigger' }],
                                                            content: 'blocks-common'
                                                        },
                                                        {
                                                            elem: 'text',
                                                            content: 'Общие&nbsp;блоки'
                                                        }
                                                    ],
                                                    'item-content': {
                                                        elem: 'item-content',
                                                        content: {
                                                            block: 'b-menu-vert',
                                                            mods: { type: 'submenu' },
                                                            content: [
                                                                {
                                                                    elem: 'item',
                                                                    content: [
                                                                        {
                                                                            block: 'b-link',
                                                                            url: '/',
                                                                            content: 'i-bem'
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            content: 'Хелпер для создания блоков'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: [
                                                                        {
                                                                            block: 'b-link',
                                                                            url: '/',
                                                                            content: 'i-jquery'
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            content: 'Плагины для jQuery'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                {
                                                    elem: 'item',
                                                    content: [
                                                        {
                                                            block: 'b-link',
                                                            mods: { pseudo: 'yes' },
                                                            mix: [{ block: 'b-menu-vert', elem: 'trigger' }],
                                                            content: 'blocks-desktop'
                                                        },
                                                        {
                                                            elem: 'text',
                                                            content: 'Блоки&nbsp;для&nbsp;desktop-ых&nbsp;браузеров'
                                                        }
                                                    ],
                                                    'item-content': {
                                                        elem: 'item-content',
                                                        content: {
                                                            block: 'b-menu-vert',
                                                            mods: { type: 'submenu' },
                                                            content: [
                                                                {
                                                                    elem: 'item',
                                                                    content: [
                                                                        {
                                                                            block: 'b-link',
                                                                            url: '/',
                                                                            content: 'b-icon'
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            content: 'Абстрактная&nbsp;иконка'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: [
                                                                        {
                                                                            block: 'b-link',
                                                                            url: '/',
                                                                            content: 'b-layout-table'
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            content: 'Раскладка таблицей'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: [
                                                                        {
                                                                            block: 'b-link',
                                                                            url: '/',
                                                                            content: 'b-link'
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            content: 'Ссылка'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: [
                                                                        {
                                                                            block: 'b-link',
                                                                            url: '/',
                                                                            content: 'b-logo'
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            content: 'Логотип'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: [
                                                                        {
                                                                            block: 'b-link',
                                                                            url: '/',
                                                                            content: 'b-menu-horiz'
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            content: 'Горизонтальное меню'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: [
                                                                        {
                                                                            block: 'b-link',
                                                                            url: '/',
                                                                            content: 'b-menu-vert'
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            content: 'Вертикальное меню'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: [
                                                                        {
                                                                            block: 'b-link',
                                                                            url: '/',
                                                                            content: 'b-page'
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            content: 'Обвязка страницы'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: [
                                                                        {
                                                                            block: 'b-link',
                                                                            url: '/',
                                                                            content: 'b-search'
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            content: 'Форма поиска'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: [
                                                                        {
                                                                            block: 'b-link',
                                                                            url: '/',
                                                                            content: 'b-text'
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            content: 'Блок для работы с текстом'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: [
                                                                        {
                                                                            block: 'b-link',
                                                                            url: '/',
                                                                            content: 'i-bem'
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            content: 'Хелпер для создания блоков'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: [
                                                                        {
                                                                            block: 'b-link',
                                                                            url: '/',
                                                                            content: 'i-jquery'
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            content: 'Плагины для jQuery'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: [
                                                                        {
                                                                            block: 'b-link',
                                                                            url: '/',
                                                                            content: 'i-ua'
                                                                        },
                                                                        {
                                                                            elem: 'text',
                                                                            content: 'Информация о UserAgent'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            block: 'b-text',
                                            content: [
                                                {
                                                    elem: 'h4',
                                                    content: 'Пример кода технологии bemjson'
                                                },
                                                {
                                                    elem: 'pre',
                                                    content: "{\n" +
                                                        "    block: 'b-icon',\n" +
                                                        "    url: 'http://clck.ru/Ktgh',\n" +
                                                        "    alt: 'Иконка'\n" +
                                                    "}"
                                                },
                                                {
                                                    elem: 'h4',
                                                    content: 'Пример кода технологии bemhtml'
                                                },
                                                {
                                                    elem: 'pre',
                                                    content: "block b-icon {\n\n" +
                                                        "    tag: 'img'\n" +
                                                        "    attrs: {\n\n" +
                                                            "        var ctx = this.ctx,\n" +
                                                                "            a = { src: 'http://clck.ru/KtgU', alt: '' },\n" +
                                                                "            props = ['alt', 'width', 'height'], p;\n\n" +
                                                            "        ctx.url && (a.src = ctx.url);\n" +
                                                            "        while(p = props.shift()) ctx[p] && (a[p] = ctx[p]);\n\n" +
                                                            "        return a;\n" +
                                                        "    }\n\n" +
                                                    "}"
                                                },
                                                {
                                                    elem: 'h4',
                                                    content: 'Пример кода технологии css'
                                                },
                                                {
                                                    elem: 'pre',
                                                    content: ".b-icon\n" +
                                                        "{\n" +
                                                            "    font: 0/0 a;\n\n" +

                                                            "    border: 0;\n" +
                                                        "}\n"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            },
                            {
                                elem: 'cell',
                                elemMods: { position: 'right' },
                                content: {
                                    block: 'b-content',
                                    content: {
                                        block: 'b-text',
                                        content: [
                                            {
                                                elem: 'h1',
                                                content: 'Библиотека блоков'
                                            },
                                            {
                                                elem: 'p',
                                                content: 'Попытка сделать сделать лучший Web Framework, действительно облегчающий разработку и поддержку сайта. А так же систематизировать подходы к верстке и описать удобную схему верстки сайтов, как больших, так и маленьких.'
                                            },
                                            {
                                                elem: 'p',
                                                content: 'Все сайты немного похожи друг на друга. Если заниматься веб-разработкой долгие годы, накапливаются практики и типовые решения распространенных задач. Результатом наших накоплений становится open source библиотека блоков bem-bl, которую мы разрабатываем на GitHub. Библиотека реализована согласно методологии БЭМ и позволяет использовать блоки, уже имеющие шаблонную, CSS и JS-реализации, для построения web-страницы.'
                                            }
                                        ]
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
})
