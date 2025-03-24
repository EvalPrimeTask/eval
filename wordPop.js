define(['pipAPI', 'https://cdn.jsdelivr.net/gh/EvalPrimeTask/eval@latest/wordsStay.js'], function(APIConstructor, epExtension){
	var API = new APIConstructor();
	var global = API.getGlobal();
	return epExtension(
	{
			//The prime categories.
			primeCats :  [
				{
					name : 'Failure related', //Will appear in the data.
					//An array of all media objects for this category.
					mediaArray : [
    				    	{word : 'Failure'}, 
    					{word : 'Defeat'}, 
    					{word : 'Catastrophe'}, 
    					{word : 'Disaster'}, 
    					{word : 'Blunder'}, 
    					{word : 'Flaw'}, 
    					{word : 'Mistake'}, 
    					{word : 'Loss'}
				    ]
				}, 
				{
					name : 'Achievement related', //Will appear in the data.
					//An array of all media objects for this category.
					mediaArray : [
    					{word : 'Triumph'}, 
    					{word : 'Accomplishment'}, 
    					{word : 'Fulfillment'}, 
    					{word : 'Victory'}, 
    					{word : 'Success'}, 
    					{word : 'Win'}, 
    					{word : 'Skill'}, 
    					{word : 'Epic'}
    				]
				}
			],	

			nTrialsPerPrimeTargetPair:15, //How many trials in a block, per prime-target combination (always three blocks).
			fixationDuration : 500, 
			errorFBDuration : 1500, 
			ITIDuration : 500,
	});
});
