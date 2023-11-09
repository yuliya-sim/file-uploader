## About The Project

This is a simple Node.js Express application that allows users to upload files with formats '.txt', '.jpg', '.png', '.gif', '.svg', '.mp4', '.mov', '.avi', '.pdf' and max size 1000MB.


## Installation
1. Clone the repository:


```console
$ git clone https://github.com/yuliya-sim/file-uploader
```

2. Navigate to the project directory:

```console
$ cd back
```

3. Install the dependencies:

```console
$ npm install
```

4. Create .env file at the root of the project
   To run this project, you will need to add env like in env.example

5. Start the application:

```console
$ npm start
```

## Usage

Application will run on http://localhost:3000/upload/file 

Run "front" application according to it's readme, you will see a file upload form.
Click on the "Choose File" button to select a file from your local machine.
Once you have selected the file, click on the "Upload" button to upload the file.
The uploaded file will be stored in the uploads directory.

## Features

  * allow to download supported file formats



## License

  [MIT](LICENSE)
