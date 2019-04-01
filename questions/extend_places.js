/**
 * This code bundle extends the questions available for the places.
 */

 var placesQuestionsExtension = [
     {text:'An office is a ______.', a:'place', b:'food', c:'person', d:'tool', cor:'a', lvl:1},
     {text:'A ______ works at a bakery.', a:'mailman', b:'chef', c:'artisan', d:'sculptor', cor:'b', lvl:1},
     {text:'I need to catch a ______ at the airport.', a:'ride', b:'boat', c:'flight', d:'plane', cor:'c', lvl:1},
     {text:'A _____ has lots of books.', a:'library', b:'airport', c:'cafe', d:'office', cor:'a', lvl:1},
     {text:'A waiter works at a ______.', a:'school', b:'library', c:'home', d:'restaurant', cor:'d', lvl:2},
     {text:'A lawyer works at a ______.', a:'house', b:'park', c:'court', d:'restaurant', cor:'c', lvl:2},
     {text:'A cafe sells _____.', a:'food', b:'clothes', c:'cars', d:'pets', cor:'a', lvl:1},
     {text:'A toilet is always in the _______.', a:'bedroom', b:'bathroom', c:'kitchen', d:'backyard', cor:'b', lvl:2}
 ];

 for(var i_place_ex = 0; i_place_ex < placesQuestionsExtension.length;i_place_ex++) {
 	QSBANK.qs.push(placesQuestionsExtension[i_place_ex]);
 }
