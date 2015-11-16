SERVER:

api/ is server-side stuff for the remote docs service

CLIENT:

db has the local documentation storage and the source html docs. this is consulted when the api has no new data or when the user is offline.
index.js is the main file that calls in lib/main and all of the helper functions
