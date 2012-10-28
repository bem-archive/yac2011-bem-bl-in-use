YAC2011 Дом из готовых кирпичей (bem-bl in use)
================================================

ВАЖНО: С момента доклада bem tools и библиотека bem-bl ушли далеко вперед.
В ветке master сборка обновлена с учетом новых возможностей. Для сборки достаточно:

1. `git clone git://github.com/bem/yac2011-bem-bl-in-use.git -b master`
2. `cd yac2011-bem-bl-in-use`
3. `npm install`
4. Чтобы собрать статику — `make`. Чтобы запустить dev-сервер: `bem server`. Страница будет доступна по адресу [http://localhost:8080/pages/index/](http://localhost:8080/pages/index/)

Остальные ветки также были пропатчены для работы с bem tools версии `0.5.17` и bem-bl `0.3`.

Несколько замечаний относительно изменений
------------------------------------------

###Ветка first
Сейчас `bem create block -l pages index`
требует указания технологии, в которой создается блок, поэтому сразу делаем `bem create block -l pages -T bemjson.js index`.

###Ветка pages
Для того, чтобы выполнилась сборка, необходимо локально установить модули node:
`npm install bem ometajs xjst`.

Команда `bem build -l bem-bl/blocks-common -l bem-bl/blocks-desktop -t bem-bl/blocks-common/i-bem/bem/techs/bemhtml.js -d pages/index/index.deps.js -o pages/index -n index`
создает файл с расширением bemhtml, а команда `bem create block -l pages -T bem-bl/blocks-common/i-bem/bem/techs/html.js index`
ожидает файла с расширением bemhtml.js.

Поэтому необходимо их вручную переименовать `mv pages/index/index.bemhtml pages/index/index.bemhtml.js`.

Для следования докладу эту процедуру нужно будет повторять перед каждой сборкой html. В современных проектах, собираемых с помощью `bem make` этого, разумеется, делать не нужно.

###Ветка make
На этом этапе должны быть глобально установлены модули `npm install -g bem borschik ometajs`.

##NB
Клонировать bem-bl с гитхаба вручную теперь необязательно.
`bem tools` могут делать это автоматически по конфигу `.bem/make.js`.

В докладе речь идет о ветке `master` библиотеки bem-bl, текущая актуальная ветка — `0.3`.