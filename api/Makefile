data2=putdata.txt
topurl='http://localhost:8080/users'
url='${topurl}'

uuid='b46f14b9-6224-4f10-be0c-dbf25f97eb47'

data='data: {"uuid": "b46f14b9-6224-4f10-be0c-dbf25f97eb47kim", "email": “test21223334@test2122.com”, notes: "note",  name: "hong Kim",  enabled: true}'

urlput='${url}/${uuid}'

all:
	curl -i  -X GET -k  -H "Content-Type: application/json" ${url} 
get:
	curl -i  -X GET -k  -H "Content-Type: application/json" ${urlput} 

put: 
	curl -i  -X PUT -k  -H "Content-Type: application/json" ${urlput} -d @"${data2}"

put2: 
	curl -i  -X PUT -k  -H "Content-Type: application/json" ${urlput} -d ${data}