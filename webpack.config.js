const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        clean: true // Автоматически очищает dist
    },
    mode: 'development',
    devServer: {
        static: [
            {
                directory: path.join(__dirname, 'public'), // Статические файлы ПЕРВЫМИ
                publicPath: '/',
                watch: true // Следить за изменениями
            },
            {
                directory: path.join(__dirname, 'dist'), // Собранные файлы
            }
        ],
        port: 3002, 
        open: true,
        hot: true, // Горячая замена модулей
        liveReload: true, // Автоматическая перезагрузка
        watchFiles: ['src/**/*'], // Следить за ВСЕМИ файлами в src
        client: {
            logging: 'info',
            overlay: {
                errors: true,
                warnings: false,
            },
            progress: true,
            reconnect: true // Переподключаться при ошибках
        }
    },
    module: {
        rules: [
            {
                test: /\.(scss|sass|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            // УБРАТЬ это правило, если изображения лежат в public/
            // Оно нужно только если ты импортируешь изображения через JS
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            //     type: 'asset/resource',
            //     generator: {
            //         filename: 'assets/images/[name][ext]'
            //     }
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body' // Внедрять скрипты в body
        })
    ],
    // Для лучшей производительности в development
    cache: {
        type: 'filesystem',
        buildDependencies: {
            config: [__filename]
        }
    },
    // Убираем минификацию для разработки
    optimization: {
        minimize: false,
        moduleIds: 'named'
    }
}