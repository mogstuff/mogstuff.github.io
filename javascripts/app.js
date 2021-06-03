import { readme } from './mockRepositoryREADME.js';
import { repositoryList } from './mockRepositoryList.js';

// module examples here https://github.com/mdn/js-examples/tree/master/modules

// github api links
const repoListUrl = `https://api.github.com/users/mogstuff/repos?per_page=100`;
const testReadmeUrl = `https://api.github.com/repos/mogstuff/travel-app-project/contents/README.md`;




(async  function () {
    try {
       
        console.log(readme.content);

        let readmeHash = readme.content;
        let readmeText = atob(readmeHash);

        console.log(readmeText);

       console.log(repositoryList);

    } catch (e) {
        console.log(e);
    }
})();



