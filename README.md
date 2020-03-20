# mentoree
<img align="center" src="https://i.imgur.com/sZZWGFn.png" width="100%"/>
Our goal is to connect students in need of accessible, flexible and quality education, with passionate teachers, searching for a modern and innovative way to share knowledge.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Prerequisites

To run mentoree on dev mode, you must have:
- npm
- NodeJs
- ReactJs 
- MySQL

To install npm
```
$sudo npm install npm@latest -g
```

To install NodeJs
```
$curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
$sudo apt-get install -y nodejs
```

To install ReactJs
```
$npx create-react-app </mentoree-dev/frontend> mentoree 
```

To install MySQL
```
$echo 'deb http://repo.mysql.com/apt/ubuntu/ trusty mysql-5.7-dmr' | sudo tee -a /etc/apt/sources.list
$sudo apt-get update
$sudo apt-get install mysql-server
```

### Installing modules

Modules contain most of the faculties mentoree dev uses.

To install node_modules for the backend
```
$cd /backend/
$npm install
```

To install node_modules for the frontend
```
$cd /frontend/
$npm install
```

### Setting up the database

Mentoree dev uses relational tables for data storage and consuming.

To setup database credentials
```
$cd /backend/database/
$cat db_setup.sql | mysql -h localhost -u root -p
```

To create tables, relations and registers
```
$cd /backend/database/
$cat data-[lastest date].sql | mysql -u mentoree_dev -p
```

### Running the project

The backend and the frontend must be initialized.

To run de backend
```
$cd /backend/
$npm run dev
```

to run de frontend
```
$cd /frontend/
$npm start
```

Shortly, a browser tab will pop-out with the poject ready to use!


## Deployment

To begin deployment in AWS follow this tutorial made by AWS.
https://docs.aws.amazon.com/efs/latest/ug/gs-step-one-create-ec2-resources.html

then after having an instance enter to your server with the following information
```
ssh -i yourprivatekey.pem ubuntu@amazonserverip
```
then inside the server run the following script to set up an environment process found here:
https://github.com/Relaxforever/Installer_Mentoree/blob/master/installer.sh

Clone the repository and execute the backend as a pm2 instance and make a build of the front-end
```
$ git clone https://github.com/espinosakev24/Mentoree-dev.git
$ cd Mentoree/backend
$ sudo pm2 start run dev
$ cd ..
$ cd Mentoree/frontend
$ sudo npm run build
```
with this the build should be made in the front-end and know you can use any web-server that you want.

## Built With

* [NodeJs](https://nodejs.org/es/) - Backend environment execution.
* [ExpressJs](https://expressjs.com/es/) - Backend framework.
* [ReactJS](https://es.reactjs.org/) - Javascript library for frontend.
* [Bootstrap](https://getbootstrap.com/) - Frontend framework.
* [AWS](https://aws.amazon.com/) - Cloud platform dor deployement.


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


## Authors

* **Fidel Caicedo** - *Dev-Ops engineer* - [RelaxForever](https://github.com/Relaxforever)

* **Kevin Espinosa** - *Front-end engineer* - [espinosakev24](https://github.com/espinosakev24)

* **Camilo Villegas** - *Full-stack engineer* - [mrdoomus](https://github.com/mrdoomus)


## Acknowledgments

* Hat tip to anyone whose code was used
* Holberton School students
* Inspiration
