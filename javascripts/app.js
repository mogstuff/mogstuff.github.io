import { readme } from './mockRepositoryREADME.js';
import { repositoryList } from './mockRepositoryList.js';
import { RepositoryDetail } from './RepositoryDetail.js';

let myList = [];


// module examples here https://github.com/mdn/js-examples/tree/master/modules

// github api links
const repoListUrl = `https://api.github.com/users/mogstuff/repos?per_page=100`;
const testReadmeUrl = `https://api.github.com/repos/mogstuff/travel-app-project/contents/README.md`;


(async  function () {
    try {            


        let containerDiv = document.getElementById('repos');

        // need to get this for each repo
        let readmeHash = readme.content;
        let readmeText = atob(readmeHash);

        for(let r of repositoryList){

        let readmeText = atob(readmeHash);
        let item = new RepositoryDetail(r.id,r.name, readmeText, r.clone_url );

            let itemDiv = document.createElement('div');
            itemDiv.classList.add('repo-detail');

            let h3 = document.createElement('h3');
            h3.innerText = item.name;
            itemDiv.appendChild(h3);

            let p = document.createElement('p');
            p.innerText = item.content;
            itemDiv.appendChild(p);

             let a = document.createElement('a');
             a.href = `${item.url}`;
             a.innerText = `${item.url}`;
             itemDiv.appendChild(a);

            containerDiv.appendChild(itemDiv);  

    }

  

    } catch (e) {
        console.log(e);
    }
})();



