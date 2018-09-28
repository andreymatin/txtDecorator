/*
Copyright 2014 KOLANICH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
"use strict";
function Leeter(tbl){//<m41n cl@ss t0 1337ify t3xtz
	var self=this;
	this.importCTable(tbl)
	function randArr(arr){
		return arr[Math.floor(Math.random()*arr.length)];
	}
	this.replacer=function(str,offset,s) {
		return randArr(self.ctable.hashtable[str].table);
	};
	this.wordReplacer=function(symbolsPerWord,word,offset,s) {
		var syms=word.split("").sort(function() {return 0.5 - Math.random()}).filter(function(s){return self.ctable.hashtable[s]||false;});
		if(!Number.isInteger(symbolsPerWord)){
			symbolsPerWord=(symbolsPerWord>1?1:symbolsPerWord)*syms.length;
		}
		if(symbolsPerWord>syms.length)symbolsPerWord=syms.length;
		for(var i=0;i<symbolsPerWord;i++){
			word=word.replace(syms[i],randArr(self.ctable.hashtable[syms[i]].table));
		}
		return word;
	};
}
/*@
	d3ph4ult 7able oph r3pl4cem3n7z
	p}{1r57 173m [0n7@1nz [harz phor r3p1@[3m3n7
*/
Leeter.prototype.defaultCTable=[
	["aаAА","4","@"],
	["Бб","6","5"],
	["BвВb","8","|3","฿"],
	["CС","{","("],
	["cс","["],
	["Dd","|}","|]","|)","I>","[)"],
	["дД","6"],
	["EeеЕзЗ","3"],
	["F","PH","|="],
	["f","ph","£"],
	["Gg","6","&"],
	["HнНh","|-|","}{","#"],
	["Ii","|","!"],
	["Jj","]","_|",")"],
	["KkкК","|<","!<"],
	["L","|_","2"],
	["l","1"],
	["MmМм","/\\/\\","/V\\","|V|"],
	["Nn","|\\|","/\/"],
	["иИ","|/|"],
	["oOоО","()","0","[]"],
	["PpрР","?","|>","|o"],
	["Q","0_","()_"],
	["q","<|"],
	["R","|2","|?"],
	["rгГTt","7"],
	["sS","5","$"],
	["TtтТ","7"],
	["Uu","(_)","|_|"],
	["юЮ","|-0"],
	["vV","\\/"],
	["Ww","\\/\\/","\\^/","vv","\\X/"],
	["XxхХ","}{","][","><","%"],
	["YyУу","'/","\\//","¥"],
	["zZ","2"],
	["Жж","*",">|<","}|{","]|["],
	["лЛ","/\\","J|"],
	["Пп","|^|","/7"],
	["Фф","<|>","(|)","[|]"],
	["цЦ","|_|,","LL"],
	["Чч","4"],
	["Шш","w","LLI"],
	["Щщ","LLL"],
	["ъЪ","^|o"],
	["Ыы","61","6|"],
	["Ьь","b","6"],
	["Ээ","€","-)","3"]
];// 774|1||\|6 [()/\/\45 473 \/37'/ |]4|\|6370(_)5 ?}{07 ||\|737|\|37 3><?1()737 3|\|6||\|3 : |7 7|-|||\||<5 7}{373 |5 1457 3/\/\|>7\// |73/\/\ ||\| 4774'/

Leeter.prototype.importCTable=function(tbl){//<us3d ph0r 1mp0r71ng y0ur 0wn 748l3z 0r r3z3t1n9 t0 d3ph@u17 0n3
	tbl=tbl||this.defaultCTable;
	this.ctable={};
	this.ctable.objs=[];
	this.ctable.hashtable={};
	var len=tbl.length;
	for(var i=0;i<len;i++){
		var obj={};
		obj.table=tbl[i];
		var marker=obj.table.splice(0,1)[0];
		obj.rx=new RegExp("["+marker+"]","g");
		var arr=marker.split("");
		for(var j=0;j<arr.length;j++)
			this.ctable.hashtable[arr[j]]=obj;
		this.ctable.objs.push(obj);
	}
};

Leeter.prototype.makeLeet=function(text){//<uz3d for 13371ph11n9 73><7
	//if the table contains unicode in non-unicode supporting environment can work fine...
	var len=this.ctable.objs.length;
	for(this.i=0;this.i<len;this.i++){
		text=text.replace(this.ctable.objs[this.i].rx,this.replacer);
	}
	this.i=0;
	return text;
};
Leeter.prototype.makeLeetByWords=function(text,symbolsPerWord){//<uz3d for 13371ph11n9 wh013 73><7 1im171n9 [0un7 oph 13371ph13d 5ymb01z 1n w0rdz 
	//if the table contains unicode in non-unicode supporting environment wont work fine - replacements with unicode characters such as currency signs can be ignored
	return text.replace(/[\wа-я]+/ig,this.wordReplacer.bind(this,symbolsPerWord));
};

Leeter.prototype.testStrings=[
	"Широкая электрификация южных губерний даст мощный толчок подъёму сельского хозяйства",
	"В чащах юга жил бы цитрус? Да, но фальшивый экземпляр!",
	"Съешь же ещё этих мягких французских булок, да выпей чаю",
	"The quick brown fox jumps over the lazy dog",
	"The five boxing wizards jump quickly."
];

Leeter.prototype.testFullReplacement=function(){
	for(var p=0;p<this.testStrings.length;p++){
		if(!confirm(this.makeLeet(this.testStrings[p])))break;
	}
};

Leeter.prototype.testLimitedReplacement=function(){
	var charsInWord=parseInt(prompt(this.makeLeet("Input count of chars to be replaced in each word")));
	for(var p=0;p<this.testStrings.length;p++){
		if(!confirm(this.makeLeetByWords(this.testStrings[p],charsInWord)))break;
	}
};