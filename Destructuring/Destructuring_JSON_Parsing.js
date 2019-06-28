
let news = [
	{
		"title" : "sbs",
		"imgurl" : "https://static.naver.com/atricle_1732",
		"newslist" : [
			"가상경주, 자동차 만들기",
			"리캡차 사라진다.",
			"갤럭시 출시",
			"퍼블릭 블록체인",
			"프라이빗 블록체인"
		]
	},
	{
		"title" : "mbc",
		"imgurl" : "https://static.daum.net/article_8989",
		"newslist" : [
			"Lorem ipsum dolor",
			"ipsum dolor sit",
			"dolor sit amet",
			"amet, consectetur"
		]
	}
]
/*
let [,mbc] = news;

console.log(mbc);

let {title, imgurl} = mbc;
console.log("==========================")
console.log(title, imgurl);
console.log("==========================");

let [,{title: title1, imgurl: imgurl1}] = news;
console.log(imgurl1, title1);
*/

function getNewsList([,{newslist}]){
	console.log(newslist);
}
getNewsList(news);
