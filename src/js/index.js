import _ from 'lodash';
import '../main.scss'

console.log('hello from webpack dev server');

const foo = (name) => {
    console.log(`Hello ${name}`);
}

foo('YuChih')

console.log(_.join(['Index', 'module', 'loaded!'], ' '));