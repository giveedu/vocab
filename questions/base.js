/*Main banking object that contains all questions*/
 var QSBANK = {};

  QSBANK.qs = [

 	  {
 	  	text:'An apple is a ____.',
 	  	a:'vegetable',
 	  	b:'meat',
 	  	c:'fruit',
 	  	d:'animal',
 	  	cor:'c',
 	  	lvl:1
 	  },
 	  {
 	  	text:'Red and orange are both ____.',
 	  	a:'things',
 	  	b:'colors',
 	  	c:'places',
 	  	d:'names',
 	  	cor:'b',
 	  	lvl:1
 	  },
 	  {
 	  	text:'An alarm can _____.',
 	  	a:'ring',
 	  	b:'walk',
 	  	c:'talk',
 	  	d:'fall',
 	  	cor:'a',
 	  	lvl:2
 	  },
 	  {
 	  	text:'east is a _____.',
 	  	a:'place',
 	  	b:'direction',
 	  	c:'town',
 	  	d:'food',
 	  	cor:'b',
 	  	lvl:2
 	  },
 	  {
 	  	text:'_____ is a verb.',
 	  	a:'eating',
 	  	b:'gold',
 	  	c:'a walk',
 	  	d:'run',
 	  	cor:'d',
 	  	lvl:3
 	  },
 	  {
 	  	text:'A puppy is an ______.',
 	  	a:'animal',
 	  	b:'cat',
 	  	c:'monkey',
 	  	d:'buddy',
 	  	cor:'a',
 	  	lvl:2
 	  },
 	  {
 	  	text:'To rob means to _____.',
 	  	a:'give',
 	  	b:'look',
 	  	c:'find',
 	  	d:'steal',
 	  	cor:'d',
 	  	lvl:1
 	  },
 	  {
 	  	text:'The _____ is blue.',
 	  	a:'grass',
 	  	b:'tree',
 	  	c:'sky',
 	  	d:'apple',
 	  	cor:'c',
 	  	lvl:1
 	  },
 	  {
 	  	text:'I _____ to eat cake.',
 	  	a:'don\'t',
 	  	b:'will',
 	  	c:'like',
 	  	d:'before',
 	  	cor:'c',
 	  	lvl:1
 	  },
 	  {
 	  	text:'Bravery means _______.',
 	  	a:'courage',
 	  	b:'fear',
 	  	c:'smart',
 	  	d:'horrible',
 	  	cor:'a',
 	  	lvl:4
 	  },
 	  {text:'Evening is never in the ______.', a:'night', b:'morning', c:'dusk', d:'twilight', cor:'b', lvl:4},
 	  {text:'Morning is never in the ______.', a:'night', b:'morning', c:'dusk', d:'twilight', cor:'a', lvl:3},
 	  {text:'A kitten is a ______.', a:'dog', b:'farm', c:'rat', d:'cat', cor:'d', lvl:2},
 	  {text:'A fish is an ______.', a:'dog', b:'animal', c:'rat', d:'cat', cor:'b', lvl:2},
 	  {text:'Running is similar to _______.', a:'jogging', b:'walking', c:'crying', d:'pacing', cor:'b', lvl:4},
 	  {text:'Love means _____.', a:'like', b:'want', c:'hate', d:'despise', cor:'a', lvl:3},
 	  {text:'Rice is a ______.', a:'food', b:'thing', c:'rabbit', d:'animal', cor:'a', lvl:1},
 	  {text:'Good is the opposite of ______.', a:'justice', b:'cruel', c:'evil', d:'horror', cor:'c', lvl:2},
 	  {text:'A car is a ______.', a:'animal', b:'food', c:'vehicle', d:'boat', cor:'c', lvl:1},
 	  {text:'A teacher teaches ______.', a:'students', b:'friends', c:'colleagues', d:'people', cor:'a', lvl:1},
 	  {text:'Anger is most similar to _____.', a:'happiness', b:'frustration', c:'rage', d:'sadness', cor:'c', lvl:4},
 	  {text:'Orange is both a _____ and _____.', a:'fruit, place', b:'fruit, color', c:'color, name', d:'vegetable, food', cor:'b', lvl:2}

]

 function getQuestionsFromLevel(level) {
 	var query = [];
 	var i;
 	for(i = 0; i < QSBANK.qs.length; i++) {
 		if(QSBANK.qs[i].lvl === level)
 			query.push(QSBANK.qs[i]);
 	}
 	return query;
 }

 function getQuestionsUpToLevel(level){
  	var query = [];
 	var i;
 	for(i = 0; i < QSBANK.qs.length; i++) {
 		if(QSBANK.qs[i].lvl <= level) {
 			query.push(QSBANK.qs[i]);
 		}
 	}
 	return query;	
 }
