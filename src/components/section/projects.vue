<template>
    <section class="projects-section">
        <h2 data-sr-id="7"
            style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;">
            Other Noteworthy Projects
        </h2>

        <a class="inline-link archive-link" href="/archive" data-sr-id="8"
            style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;">view
            the archive
        </a>

        <ul class="projects-grid">
            <li class="projects"
            :style="getStyleCustomByProjectsLi(index)"
            
                 :data-sr-id="9 + index" v-for="(edge, index) in showInProjectTemp?$static.projects.edges.filter(x=>x.node.showInProjects == false):
                $static.projects.edges.filter(x=>x.node.showInProjects == false).slice(0,gridLimitCount)"
                :key="edge.node.id">
                <div class="project-inner">
                    <header>
                        <div class="project-top">
                            <div class="folder"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-folder">
                                    <title>Folder</title>
                                    <path
                                        d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z">
                                    </path>
                                </svg></div>
                            <div class="project-links">
                                <a href="https://github.com/bchiang7/time-to-have-more-fun" aria-label="GitHub Link"
                                    target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg"
                                        role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="feather feather-github">
                                        <title>GitHub</title>
                                        <path
                                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                        </path>
                                    </svg></a>
                                <a href="https://time-to-have-more-fun.now.sh/" aria-label="External Link"
                                    class="external" target="_blank" rel="noopener noreferrer"><svg
                                        xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-external-link">
                                        <title>External Link</title>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg></a>
                            </div>
                        </div>
                        <h3 class="project-title"><a
                                href="https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c"
                                target="_blank" rel="noopener noreferrer">
                                {{ edge.node.title }}
                            </a>
                        </h3>

                        <div class="project-description" v-html="edge.node.content">
                        </div>
                    </header>
                    <footer>
                        <ul class="project-tech-list">
                            <li v-for="(tech, index) in edge.node.tech" :key="tech">{{ tech }}</li>
                        </ul>
                    </footer>
                </div>
            </li>


        </ul>
        <button @click="showInProjectTemp = !showInProjectTemp" class="more-button">
            {{ showInProjectTemp ? "Show Less" : "Show More" }}
        </button>
    </section>

</template>
<static-query>
query MyQuery {
  projects: allProjects {
    edges {
      node {
        id
        date
        title
        github
        external
        tech
        company
        showInProjects
        content
      }
    }
  }
}


</static-query>

<script>
export default {
    data: function () {
        return {

            showInProjectTemp: false,
            gridLimitCount: 6
        }
    },
    methods: {
        changeDataSrIdCountTempFunc: function (idIndex) {
            // console.log("idIndex:",idIndex)
            // var id = this.dataSrIdCountTemp++;
            // console.log(id) // 1
        },

        getStyleCustomByProjectsLi(index){
            let testStyle='';
            if(index < this.gridLimitCount){
                testStyle=  'transition:all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.'+index+'s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.'+index+'s';
            }else{
                testStyle=  'transition-delay:'+index* 100+'ms;';
            }
            
            return testStyle;
        }
    },
    computed: {

        // propertyComputed() {

        //   console.log('I change when this.property changes.')

        //   return this.property

        // }

    },
    created() {
// debugger;
        // this.property = 'Example property update.'

        // console.log('propertyComputed will update, as this.property is now reactive.')
        // let projectChild = document.getElementsByClassName("projects");
        // let index=0;
        // for (let item of projectChild) {
        //     index++;
        //     let dataSrId = item.getAttribute("data-sr-id") - 9;
        //     console.log("test");
        //     console.log("cureatod data sr", dataSrId);

        //     // item.style.transition='all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s';
        //     let testStyle=  'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.'+index+'s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.'+index+'s';
        //     let testStyle6= 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.5s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.5s'

        //     item.style.transition=testStyle
        //     console.log("testStyle=",testStyle)
        //     let testStyle2= 'transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;'
        //     let testStyle3= 'transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;'
        //     let testStyle4= 'transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s;'
        //     let testStyle5= 'transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.5s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.5s;'
        //     let showMoreStyle='transition-delay: 0ms;'
        //     let showMoreStyle2='transition-delay: 100ms;'
        //     let showMoreStyle3='transition-delay: 200ms;'

        // }
        // projectChild.forEach(element => {
        //     let dataSrId=element.getAttribute("data-sr-id")
        //     console.log("cureatod data sr",dataSrId);
        // });

    }
}
</script>