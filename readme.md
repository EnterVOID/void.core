## Setup Automation And Package Manager
**npm**
If npm not installed, [download Node.js](https://nodejs.org/en/download/), then run:
```
npm install npm@latest -g
```

To install needed packages, run `npm install`.

**Bower**
If Bower not installed:
```
npm install -g bower
```
Then run `bower install` to pull in needed files. Install new packages by running `$ bower install <package> --save`.

**Gulp**
If Gulp not installed:
```
npm install gulp-cli -g
npm install gulp -D
```
Compile files live by running `gulp watch`.

## Homestead Documentation
### Install Needed Services
- Install the newest [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
- Install [Vagrant](https://www.vagrantup.com/downloads.html)

**Install Homestead Vagrant Box**
After installing the above two, install laravel/homestead by running this command:

```
vagrant box add laravel/homestead
```

This could take a few minutes. If it fails, make sure your Vagrant installation is up to date.

### Add/Setup Homestead.yaml File
Install Homestead directly to project:
```
composer require laravel/homestead --dev
```

Create Homestead.yaml file:
```
php vendor/bin/homestead make
```

**Example Homestead.yaml setup**
```
sites:
  - map: local.entervoid.com
```

If needed, follow Laravel's documentation for setup (https://laravel.com/docs/homestead).

## Laravel Setup
Copy contents of `.env.example` and paste into a new file named `.env`. 

**Example .env setup**
```
APP_URL=http://local.entervoid.com
```

## Lumen Setup
Copy contents of `.env.example` and paste into a new file named `.env`. 

### Official Lumen Documentation
Documentation for Lumen can be found on the [Lumen website](http://lumen.laravel.com/docs).

## Run Vagrant 
Run `vagrant up` to launch server, or `vagrant destroy --force` to stop it.
