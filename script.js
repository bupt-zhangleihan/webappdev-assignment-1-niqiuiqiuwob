const quotes = [
	'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
	'There is nothing more deceptive than an obvious fact.',
	'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
	'I never make exceptions. An exception disproves the rule.',
	'What one man can invent another can discover.',
	'Nothing clears up a case so much as stating it to another person.',
	'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];

let words = [];
let wordIndex = 0;//记录当前输入到了第几个单词
let startTime = Date.now();//开始时间，返回当前时间戳

const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message')
const typedValueElement = document.getElementById('typed-value');//页面内容

document.getElementById('start').addEventListener('click', function () {//匿名函数，传递这个事件
	const quoteIndex = Math.floor(Math.random() * quotes.length);//获得一行引文,Math.random()*quotes.length生成从0至长度的浮点数并向下取整(Math.floor)
	const quote = quotes[quoteIndex];//将句子存放在数组中
	words = quote.split(' ');//以空格分割,存放在矩阵中
	wordIndex = 0;
	const spanWords = words.map(function(word) { return `<span>${word} </span>`});//创建一个包含每个单词的数组
	quoteElement.innerHTML = spanWords.join('');//join用于创建字符串的数组，使用该字符串更新quoteElement.innerHTML
	quoteElement.childNodes[0].className = 'highlight';//为第一个单词上色,和css相关
	messageElement.innerText = '';//清除先前消息
	typedValueElement.value = '';//设置文本框，清除文本框
	typedValueElement.focus();
	startTime = new Date().getTime();//启动计时器
	let highScore = localStorage.getItem('highScore');
if (highScore) {
    highScore = parseInt(highScore);
} else {
    highScore = 0;//若不存在最高分则设置为0
}

const highScoreElement = document.createElement('p');//用于显示最高分
highScoreElement.innerText = `High Score: ${highScore}`;
document.body.insertBefore(highScoreElement, quoteElement);
	//检查当前分数是否高于存储最高分
if (wordIndex > highScore) {
    highScore = wordIndex;
    localStorage.setItem('highScore', highScore);
    highScoreElement.innerText = `High Score: ${highScore}`;//更新最高分
}
});

typedValueElement.addEventListener('input', (e) => {
	const currentWord = words[wordIndex];
	const typedValue = typedValueElement.value;

	if (typedValue === currentWord && wordIndex === words.length - 1) {//完整句子
		const elapsedTime = new Date().getTime() - startTime;
		const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
		messageElement.innerText = message;
	} else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
		typedValueElement.value = '';//清除正确单词为下一个留出空间
		wordIndex++;//递增到下一个单词
		for (const wordElement of quoteElement.childNodes) {
			wordElement.className = '';//为所有元素重置类名
		}
		quoteElement.childNodes[wordIndex].className = 'highlight';//将当前单词设置为className，高亮下一个键入单词
	} else if (currentWord.startsWith(typedValue)) {//当前正确但不完整
		typedValueElement.className = '';//通过清除className确保为默认值
	} else {
		typedValueElement.className = 'error';
	}

}
);



//1.完成后禁用事件侦听器，并在单击按钮时重新启用它
const startButton = document.getElementById('start');
function startGame() {
	startButton.removeEventListener('click', startGame);//删除单击事件监听器
	typedValueElement.addEventListener('input', handleInput);//将handleInput函数添加到input事件上，以捕获用户输入
}
startButton.addEventListener('click', startGame);
function handleInput() {//游戏完成后，重新添加事件监听器
	if (wordIndex === words.length) {//检查游戏是否完成（长度相等）
		// Enable the button
		startButton.addEventListener('click', startGame);
	}
}
function startGame() {
	startButton.removeEventListener('click', startGame);
	typedValueElement.addEventListener('input', handleInput);
}

startButton.addEventListener('click', startGame);

//2.在玩家完成报价时禁用文本框
const startButton_1 = document.getElementById('start');
function startGame() {
	startButton_1.removeEventListener('click', startGame);
	typedValueElement.addEventListener('input', handleInput);
}
startButton_1.addEventListener('click', startGame);
function handleInput() {
	if (wordIndex === words.length) {
		typedValueElement.disabled = true;//
		startButton_1.addEventListener('click', startGame);
	}
}
function startGame() {
	startButton_1.removeEventListener('click', startGame);
	typedValueElement.disabled = false;//游戏开始时，在函数中重新启用了输入文本框，设置为可编辑状态
	typedValueElement.value = '';//清楚文本框内容以输入
	typedValueElement.addEventListener('input', handleInput);
}
startButton_1.addEventListener('click', startGame);

//3.显示包含成功消息的模式对话框
const startButton_2 = document.getElementById('start');
function startGame() {
	startButton_2.removeEventListener('click', startGame);
	typedValueElement.addEventListener('input', handleInput);
	if (wordIndex === words.length) {
		showSuccessDialog();//该函数显示包含成功消息的模式对话框
	}
}
startButton_2.addEventListener('click', startGame);

function handleInput() {
	if (wordIndex === words.length) {
		typedValueElement.disabled = true;
		startButton_2.addEventListener('click', startGame);
		showSuccessDialog();
	}
}
function showSuccessDialog() {
	alert('Congratulations! You completed the game successfully！');
}
function startGame() {
	startButton_2.removeEventListener('click', startGame);
	typedValueElement.disabled = false;
	typedValueElement.value = '';
	typedValueElement.addEventListener('input', handleInput);
}
startButton_2.addEventListener('click', startGame);




