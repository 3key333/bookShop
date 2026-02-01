# https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=<AIzaSyDd6AsSsvabMQyAM9wXXYdu--GDg69iHKQ>&printType=books&startIndex=0&maxResults=6&langRestrict=en 

1. Установка пакетов
# Основные пакеты (если ещё не установлены)
npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev html-webpack-plugin
npm install --save-dev mini-css-extract-plugin css-loader
npm install --save-dev babel-loader @babel/core @babel/preset-env

# ДЛЯ SCSS - добавляем sass-loader и sass
npm install --save-dev sass-loader sass


2. Структура проекта с SCSS:
bookshop/
├── src/
│   ├── index.html
│   ├── index.js
│   ├── styles/
│   │   ├── main.scss        # Главный SCSS файл
│   │   ├── _variables.scss  # Переменные
│   │   ├── _mixins.scss     # Миксины
│   │   ├── _components.scss # Компоненты
│   │   └── _layout.scss     # Сетка и layout
│   ├── modules/
│   │   ├── api.js
│   │   ├── bookCard.js
│   │   ├── slider.js
│   │   └── cart.js
│   └── assets/
│       ├── images/
│       └── fonts/
├── webpack.config.js
└── package.json

3. Настроивам webpack.config.js

порты:
3001

3002

3003

8080

8000

8081

4. Для запуска сервера нужна команда 'npm start' если будет ошибка о занятости порта то нужно поменять порт в json и webpack