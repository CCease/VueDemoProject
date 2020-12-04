/*

These commands above simply automate the whole process of:

- Creating a GitHub Pages branch on your repository
- Building out your Vue application for production
- Committing and pushing the changes of the built dist file 
to Pages
- Deleting and totally removing the GitHub Pages branch after
 the build has been picked and deployed.
(This is so that you can run the command again after any new 
changes without errors)
*/
/* eslint-disable no-console */
const execa = require("execa");
const fs = require("fs");
(async () => {
  try {
    await execa("git", ["checkout", "--orphan", "gh-pages"]);
    // eslint-disable-next-line no-console
    console.log("Building started...");
    await execa("npm", ["run", "build"]);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    await execa("rm", ["-r", folderName]);
    await execa("git", ["checkout", "-f", "main"]);
    await execa("git", ["branch", "-D", "gh-pages"]);
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();