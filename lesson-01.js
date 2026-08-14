"use strict";

// Lesson 01 exercise: Running JavaScript three ways
// Clone the exercise repository for this course, https://github.com/Leon-Arno/JS-Exercises, to
// your computer.
// Make the copy your own. Inside the cloned folder, delete the `.git` folder to remove the
// connection to the original repository: run `rm -rf .git` on macOS and Linux, or `Remove-Item
// -Recurse -Force .git` in PowerShell on Windows.
// Run `git init` in the folder, create a new empty repository named `javascript-exercises` on
// your own GitHub account, connect it as the remote, and push. This is the same publishing
// flow you performed in the Git course.
// Create a branch named `lesson-01-exercise` and switch to it, then open `lesson-01.js`. The
// questions are already inside as comments; work through them in order, writing your answers
// directly beneath each one.

// TODO: Part one.
// Start the Node REPL and evaluate at least four arithmetic expressions of your own, using
// more than one operator across them. Copy the complete session transcript and paste it into
// `lesson-01.js` as a comment block where the question asks for it.

/*
(base) air-274:JS-Exercises kaveh$ node
Welcome to Node.js v26.4.0.
Type ".help" for more information.
> 8 + 4
12
> 15 - 6
9
> 7 * 3
21
> 20 / 5 + 2
6
> .exit
*/
// TODO: Part two.
// Write a `console.log` line in `lesson-01.js` that prints a greeting, save the file
// deliberately, and run it with `node lesson-01.js`.
// console.log("Hello from JavaScript");
console.log("Hello from saved JavaScript");

// TODO: Part three.
// Change the greeting text, run the file again without saving, and observe that the output has
// not changed. Save and run once more, then describe in a one-sentence comment what happened
// and why.

// The first run used the previously saved file, and the second run used the updated greeting because Node only reads the saved version.

// TODO: Part four.
// Run your greeting line in the Chrome DevTools Console. In a comment, record one way the
// experience matched Node and one way it differed.

// Both Node and Chrome DevTools executed console.log and printed the greeting, but Node ran the saved file while Chrome DevTools ran the command directly in the browser.

// TODO: Part five.
// From a folder that does not contain the file, deliberately run `node lesson-01.js` so that
// the terminal reports it cannot find the file. Paste that error transcript as a comment, then
// explain in one sentence how you resolved it.

/*
(base) air-274:_sap kaveh$ node lesson-01.js
node:internal/modules/cjs/loader:1572
  throw err;
  ^

Error: Cannot find module '/Users/kaveh/Desktop/base/_LIBRARY/_sap/lesson-01.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1568:15)
    at wrapResolveFilename (node:internal/modules/cjs/loader:1122:27)
    at defaultResolveImplForCJSLoading (node:internal/modules/cjs/loader:1146:10)
    at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1173:12)
    at Module._load (node:internal/modules/cjs/loader:1345:5)
    at Module.wrapResolveFilename (node:internal/modules/cjs/loader:1122:27)
    at defaultResolveImplForCJSLoading (node:internal/modules/cjs/loader:1146:10)
    at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1173:12)
    at Module._load (node:internal/modules/cjs/loader:1345:5)
    at wrapModuleLoad (node:internal/modules/cjs/loader:1345:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v26.4.0
*/

// I resolved the error by returning to the JS-Exercises folder before running node lesson-01.js.

// TODO: Save the file, commit your work with a clear message, push the branch, and open a pull
// request into your main branch.
// TODO: Submit the link to the pull request for review.
