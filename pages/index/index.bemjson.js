({
    block: 'b-page',
    title: 'index',
    head: [
        { elem: 'css', url: 'index.css'},
        { elem: 'css', url: 'index.ie.css', ie: 'lt IE 8'},
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url:'index.js'}
    ],
    content: {
        block: 'b-page-inner',
        content: [
            {
                block: 'b-head',
                content: 'Шапка'
            },
            {
                content: {
                    block: 'b-layout-table',
                    mods: { layout: '60-40'},
                    content: {
                        elem: 'row',
                        content: [
                            {
                                elem: 'cell',
                                elemMods: { position: 'left'},
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
                                        }, 'здесь будет не меню'
                                    ]
                                }
                            },
                            {
                                elem: 'cell',
                                elemMods: { position: 'right'},
                                content: 'Second cell'
                            }
                        ]
                    }
                }
            }
        ]
    }
})
