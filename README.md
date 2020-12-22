# fizzbuzz-demo




## About Project
This is a FizzBuzz Demo application which accepts start and end range as valid integer input and returns 'fizz' or 'buzz' based response in JSON format

### Criteria
    
1. Numbers are between 0 and 2<sup>32</sup>-1
2. If number is only divided by 3, it will be interpreted as **fizz**
3. If number is only divided by 5, it will be interpreted as **buzz**
4. If the number is both divisible by 3 and 5,it will be interpreted as **fizzbuzz**
5. If None of the above, string representation of number will be returned


### Built with
 * Node.js

#### Prerequisite
 * npm
 * Browser
 * docker (optional), follow [Docker](#docker-command) section for more details 

### Installation (node)

1. Clone the repo
   ```sh
   git clone https://github.com/yashdholakia/fizzbuzz-demo.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Usage 

1. If using node installation, after completing it, navigate to root directory of code and type 

    ```sh 
    node app.js 
    ``` 

    Once it says in console "Server is up and running on Port 8888!", navigate to browser and open [http://localhost:8888](http://localhost:8888)

2. Or, follow [Docker](#docker-command) section and [Setup](#setup)

### Execute

This app requires two input fields, as Start range and End Range and will be passed in URL with 
http://localhost:8888/range/:start/:end where :start and :end are valid range fields between 0 and 2<sup>32</sup>-1


If condition is not fullfilled, it will return error in json format like below

* If there are invalid inputs,
```
{'error': 'Provided input field(s) are not Valid'}
```

* If range is invalid (start is greater than less or beyond range)
```
{'error': 'Provided range is not valid'}
```

* If range is valid, it will return response, for example range between 3 and 16 (:start is 3 and :end is 16)
    click **(http://localhost:8888/range/3/16)** for quick example (or any choice of numbers within range)

```
[{"in":3,"result":"fizz"},{"in":4,"result":"4"},{"in":5,"result":"buzz"},{"in":6,"result":"fizz"},{"in":7,"result":"7"},{"in":8,"result":"8"},{"in":9,"result":"fizz"},{"in":10,"result":"buzz"},{"in":11,"result":"11"},{"in":12,"result":"fizz"},{"in":13,"result":"13"},{"in":14,"result":"14"},{"in":15,"result":"fizzbuzz"}]
```

## Docker command

### setup

```sh
docker build -t fizzbuzzdemo .
 ```

```sh
docker run -d -p 8888:8888 --name fizzbuzz-app fizzbuzzdemo
```

#### Other useful docker commands for debugging and troubleshooting
* To start the container

```sh
docker start fizzbuzz-app
```
* To stop the container
    
```sh
docker stop fizzbuzz-app
```
* List active containers in docker

```sh
docker ps -a
```
* Get into the terminal of container

```sh
sudo docker exec -it fizzbuzz-app /bin/bash
```