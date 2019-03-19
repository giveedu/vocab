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
