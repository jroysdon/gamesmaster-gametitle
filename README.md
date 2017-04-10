# gamesmaster-gametitle
The game title serive responds to the slackBot's intent of "gameTitle"

The purpose is to search the databases to narrow down the search to a single game. The service should search through mongo first. 

If more than one title is found by that name, the response will list the titles with the ID's on BGG (boardgamegeek). 

If a single title is found, it will query the BBG API using the BBG gameID and return a JSON result which it will format and respond to the service with. 

If not titles are found, it will search the BBG and parse the XML out to a JSON object which it will use to add to the Mongo tables. It will respond to the service with the list found. 

If no game titles are found in either DB, it will respond as such. 
