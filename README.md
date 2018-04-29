The Trip Guru Demo
==================

### Demo is running live at [here](http://tripguru.laveesingh.com/city/phuket)

Instructions to run locally
==========================

#### With Docker
```bash
# with docker-compose
docker-compose up --build
# head to localhost:5000

# without docker-compose
docker build -t tripguru .
docker run -p 5000:5000 -d tripguru
# head to localhost:5000
```


#### Without Docker
```bash
#install dependencies
yarn install

# run development server
yarn start  # head to localhost:3000

# with production build
yarn build
yarn global add serve
serve -s build  # head to localhost:5000
```

