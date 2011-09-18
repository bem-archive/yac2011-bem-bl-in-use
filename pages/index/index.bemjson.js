({
    block: 'b-page',
    title: 'index',
    head: [
        { elem: 'css', url: '_index.css' },
        { elem: 'css', url: '_index.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url:'index.js' }
    ],
    content: {
        block: 'b-page-inner',
        content: {
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
                            mix: [{ block: 'b-menu-vert', elem: 'trigger', elemMods: { state: 'opened' } }],
                            content: 'blocks-common'
                        },
                        {
                            elem: 'text',
                            content: 'Общие блоки'
                        }
                    ],
                    'item-content': {
                        elem: 'item-content',
                        elemMods: { visibility: 'visible' },
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
                }
            ]
        }
    }
})
