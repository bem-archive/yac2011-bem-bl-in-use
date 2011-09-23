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
        content: 'Содержание страницы'
    }
})
