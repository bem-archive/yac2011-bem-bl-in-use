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
                                            content: 'здесь будет меню'
                                        },
                                        {
                                            content: 'здесь будет не меню'
                                        }
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
