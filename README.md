# cobalt-starter
Boilerplate code to start a cobalt scaffolder

- Clone this repository: `git clone git@github.com:keremkazan/cobalt-starter.git`
- Get into the project folder: `cd cobalt-starter` and run `npm install`.
- Get out of the project folder: `..cd`, create a test folder: `mkdir test-cobalt`, and get into it: `cd test-cobalt`
- run: `node ../cobalt-starter/index.js generate example myFileName`
- This will create two example files:
 - `test-cobalt/examples/e1_my_file_name.txt`
 - `test-cobalt/examples/e2_my_file_name.txt`
- Once you make sure these files are created, you can replace the example code with yours by deleting `templates/example` folder and `generators/example.js` file.
- You're now ready to start coding your own scaffolder.

Go to https://github.com/keremkazan/cobalt-base for a complete tutorial.
