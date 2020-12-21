# fizzbuzz-demo












## Docker command

docker build -t fizzbuzzdemo .

docker run -d -p 8888:8888 --name fizzbuzz-app fizzbuzzdemo

## Other useful commands
docker start fizzbuzz-app

docker stop fizzbuzz-app

docker ps -a

sudo docker exec -it fizzbuzz-app /bin/bash