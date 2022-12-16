<template>


  <section id="jobs" class="section-jobs">
    <h2 class="numbered-heading">Where I’ve Worked</h2>
    <div class="inner">



      <div role="tablist" aria-label="Job tabs" class="jobs-tabs-list">
        <button @click="activeTabId = index" :id="'tab-' + index" role="tab" :tabindex="index" aria-selected="true"
          :aria-controls="'panel-' + index" v-for="(edge,index) in $static.jobs.edges" :key="edge.node.id"
          class="jobs-tab-button" :style="{'color':activeTabId==index ? 'var(--green)' : 'var(--slate)'}">
          <span>{{ edge.node.title }} </span>
        </button>
        <div class="jobs-hightlight"></div>
      </div>


      <div class="job-tab-panels">

        <div v-if="activeTabId == index" :id="'panel-' + index" role="tabpanel"
          :tabindex="index == activeTabId ? '0' : '-1'" :aria-labelledby="'tab-' + index"
          :aria-hidden="index == activeTabId ? 'false' : 'true'" class="jobs-tab-panel"
          v-for="(edge, index) in $static.jobs.edges" :key="edge.node.id">

          <h3>
            <span>{{ edge.node.title }}</span>
            <span class="company">&nbsp;@&nbsp;
              <a :href="edge.node.url" class="inline-link" rel="noopener noreferrer" target="_blank">{{
                  edge.node.company
              }}</a>
            </span>
          </h3>
          <p class="range">{{ edge.node.range }}
            <!-- May 2018 - Present -->
          </p>
          <div v-html="edge.node.content">
          </div>


        </div>
      </div>

    </div>

  </section>

</template>
<static-query>
query MyQuery {
  jobs: allJobs {
  edges {
    node {
      id
      date
      title
      company
      location
      range
      url
      content
    }
  }
}
}

</static-query>
  
<!-- <page-query>
query {
  jobs: allJobs {
    edges {
      node {
        id
        date
        title
        company
        location
        range
        url
      }
    }
  }
}

</page-query> -->
<!-- <page-query>
query {
    allJobs {
    edges {
      node {
        id
        date
        title
        company
        location
        range
        url
       	tags{id}
        
   
      }
    }
  }
}
    </page-query> -->
<!-- <script>
export default {
  functional: true,
  render(createElement, context) {
    const { title } = context.data.$static.jobs
    console.log("content", content)
    return;
    // return createElement('div', {
    //   domProps: {
    //     innerHTML: content
    //   },
    // })
  }
}
</script> -->

<script>
export default {
  data: function () {
    return {
      accentColor: '#f00',
      heroImage: 'https://vuejs.org/images/logo.png',
      activeTabId: 0,
      personSkills: ['JavaScript (ES6+)', 'TypeScript', 'React', 'Eleventy', 'Node.js', 'WordPress']
    }
  },
  components: {

  },
  created() {

  },
  computed: {
    cssVars() {
      return {
        '--active-jobs-tab-id': this.activeTabId
      }
    }
  }
}
</script>
<style lang="scss">
.jobs-hightlight {
  transform: translateY(calc(v-bind('activeTabId') * var(--tab-height)));

  @media (max-width: 600px) {
    transform: translateY(calc(v-bind('activeTabId') * var(--tab-width)));
  }
}
</style>