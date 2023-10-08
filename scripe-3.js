// 创建<html>元素
var html = document.createElement('html');

// 创建<head>元素
var head = document.createElement('head');

// 创建<title>元素
var title = document.createElement('title');
title.textContent = '我的网页';

// 将<title>元素添加到<head>元素中
head.appendChild(title);

// 创建<body>元素
var body = document.createElement('body');

// 创建<h1>元素
var heading = document.createElement('h1');
heading.textContent = '欢迎来到我的网页！';

// 创建<p>元素
var paragraph = document.createElement('p');
paragraph.textContent = '这是一个使用createElement()方法创建的简单网页示例。';

// 将<h1>元素和<p>元素添加到<body>元素中
body.appendChild(heading);
body.appendChild(paragraph);

// 将<head>元素和<body>元素添加到<html>元素中
html.appendChild(head);
html.appendChild(body);

// 将<html>元素添加到文档的<body>中
document.body.appendChild(html);