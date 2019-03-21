/*Main banking object that contains all questions*/
 var QSBANK = {};

  QSBANK.qs = [

 	  {
 	  	text:'An apple is a ____.',
 	  	a:'vegetable',
 	  	b:'meat',
 	  	c:'fruit',
 	  	d:'animal'
 	  	cor:'c',
 	  	lvl:1
 	  },
 	  {
 	  	text:'Red and orange are both ____.',
 	  	a:'things',
 	  	b:'colors',
 	  	c:'places',
 	  	d:'names',
 	  	cor:'b'
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
 	  }

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
 		if(QSBANK.qs[i].lvl <= level)
 			query.push(QSBANK.qs[i]);
 	}
 	return query;	
 }
