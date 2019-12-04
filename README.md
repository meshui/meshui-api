# Meshui API

## Run project manually

### Step1: setup

#### Generate .env file

A few environment variables need to be specified. Those can be added to a ".env" file: a template of it can be generated with the following command:

```
$ npm run env
```

### Step2: start

Install dependencies:`

Windows :
If you run `npm install`, 2 errors could arise :

- Dependencies node-gyp require Python SDK to be install. Be sure to install the 2.x version and add it to your PATH :
  https://www.python.org/downloads/release/python-2712/
- An other error could be throw about install SDK .NET 2.0. Here is a way to fix it :

```
npm install --global --production windows-build-tools
```

Linux :

```
npm install
```

Run the app:

```
npm start
```
