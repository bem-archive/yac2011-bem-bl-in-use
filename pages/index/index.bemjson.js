({
    block: 'b-page',
    title: 'index',
    head: [
        { elem: 'css', url: 'index.css' },
        { elem: 'css', url: 'index.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url:'index.js' }
    ],
    content: {
        block: 'b-page-inner',
        content: {
            block: 'b-menu-vert',
            js: true,
            content: [
                {
                    elem: 'item',
                    content: {
                        elem: 'trigger',
                        content: 'Это тригер'
                    },
                    'item-content': {
                        elem: 'item-content',
                        content: 'Вложенное меню'
                    }
                }
            ]
        }
    }
})
