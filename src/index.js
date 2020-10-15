module.exports = function toReadable (number) {
const numberBasePrime = {
	"0": 'zero',	
	'1': 'one',
	'2': 'two',
	'3': 'three',
	'4': 'four',
	'5': 'five',
	'6': 'six',
	'7': 'seven',
	'8': 'eight',
	'9': 'nine',
	'10': 'ten',
	'11': 'eleven',
	'12': 'twelve',
	'13': 'thirteen',
	'14': 'fourteen',
	'15': 'fifteen',
	'16': 'sixteen',
	'17': 'seventeen',
	'18': 'eighteen',
	'19': 'nineteen'
};
const numberBase = {
	'20': 'twenty',
	'30': 'thirty',
	'40': 'forty',
	'50': 'fifty',
	'60': 'sixty',
	'70': 'seventy',
	'80': 'eighty',
	'90': 'ninety',
	'2': 'twenty',
	'3': 'thirty',
	'4': 'forty',
	'5': 'fifty',
	'6': 'sixty',
	'7': 'seventy',
	'8': 'eighty',
	'9': 'ninety'
};
const hundredNumber = {
	'1': 'one',
	'2': 'two',
	'3': 'three',
	'4': 'four',
	'5': 'five',
	'6': 'six',
	'7': 'seven',
	'8': 'eight',
	'9': 'nine'
}; 
let str = String(number);
let arr = str.split('');
let strNum;
if (arr.length == 1){
	for(let key in numberBasePrime){
		if(arr[0] == key) strNum = numberBasePrime[key];
}
}else{
	if(arr.length == 2 && arr[0] == '1'){
		for(let key in numberBasePrime){
			if(str == key) strNum = numberBasePrime[key];
		}
	}
}
if(arr.length == 2 && arr[arr.length - 1] == '0'){
	for(let key in numberBase){
		if(str == key) strNum = numberBase[key];
	}
}else{
	if(arr.length == 2 && arr[0] !== '1'){
		for(let pr in numberBase){
			for(let tw in numberBasePrime){
				if(arr[0] == pr && arr[arr.length - 1]==tw) strNum = numberBase[pr] +' '+ numberBasePrime[tw];
			}
		}
	}
}
if(arr.length == 3){
	for(let pr in numberBasePrime){
		for(let tw in numberBase){
			for (let th in hundredNumber){
				if(arr[0] == pr && arr[1] == '0' && arr[arr.length - 1] == '0') strNum = numberBasePrime[pr] + ' hundred';
				if(arr[0] == pr && arr[1] == '0' && arr[arr.length - 1] == th) strNum = numberBasePrime[pr] + ' hundred '  + hundredNumber[th];
				if(arr[0] == th && arr[1] + arr[arr.length - 1] == pr) strNum = hundredNumber[th] + ' hundred ' + numberBasePrime[pr];
				if(arr[0] == pr && arr[1] + arr[arr.length - 1] == tw) strNum = numberBasePrime[pr] + ' hundred ' + numberBase[tw];
				if(arr[0] == pr && arr[1] + arr[arr.length - 1] == th) strNum = numberBasePrime[pr] + ' hundred ' + hundredNumber[th];
				if(arr[0] == pr && arr[1] == tw && arr[arr.length - 1] == th) strNum = numberBasePrime[pr] + ' hundred ' + numberBase[tw] + ' ' + hundredNumber[th];
			}
		}
	}
}
return strNum;  
}
