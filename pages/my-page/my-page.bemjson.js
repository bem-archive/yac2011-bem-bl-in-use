({
    block: 'b-page',
    title: 'my-page',
    head: [
        { elem: 'css', url: 'my-page.css'},
        { elem: 'css', url: 'my-page.ie.css', ie: 'lt IE 8'},
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url:'my-page.js'},
    ],
    content: [
        'block content'
    ]
})
