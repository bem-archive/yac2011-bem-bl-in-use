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
                                    content: 'Cell 1'
                                }
                            },
                            {
                                elem: 'cell',
                                elemMods: { position: 'right' },
                                content: 'Cell 2'
                            }
                        ]
                    }
                ]
            }
        ]
    }
})
