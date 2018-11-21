var projectts = Vue.mixin({
    data: function () {
        return {
            projects: [
                {
                    id: 1,
                    title: 'Satdy',
                    theme: 'Développement | Intégration',
                    tinyDesc: 'Nam sole orto magnitudine angusti gurgitis sed profundi a transitu arcebantur et dum piscatorios quaerunt lenunculos vel innare temere contextis cratibus parant, effusae legiones, quae hiemabant tunc apud Siden, isdem impetu occurrere veloci. et signis prope ripam locatis ad manus comminus conserendas denseta scutorum conpage semet scientissime praestruebant.',
                    desc: "Ce projet s'agissait de créer une plateforme web de promotion de soirées étudiantes. En tant qu'étudiant nous avons été confronté à une situation tel que celle-ci: <i>« Un groupe d’étudiants de l’IUT de Meaux aimerait sortir faire la fête et rencontrer d’autres étudiants, de nouvelles têtes. Pierre aime le Rap US, Justine le Latino et Evan est fan d’Électro. Chacun aimerait entendre un peu de son style favori, mais où sortir pour satisfaire tout le monde ? L’IUT étant excentré du Campus, les étudiants ne sont pas avertis de toutes les soirées organisées par leur BDE, ils se connectent alors sur internet, mais où chercher l’information ? »</i><br/><br/>Le but de ce projet était donc de mettre en relation les organisateurs de soirées en île de France avec les étudiants souhaitant faire la fête. Nous avons mis en place un système de tag musical, qui mettra en avant les goûts musicaux des utilisateurs pour la recherche de sa soirée. Il est clair qu'une soirée avec de la musique que l'on n'apprécie pas, n'est pas une bonne soirée.<br/><br/><div class='project-desc-design'></div>",
                    pathImg: 'img/satdy.jpg',
                    pathImgLogo: 'img/satdy-logo.png',
                    date: 'blabladate',
            },
                {
                    id: 2,
                    title: 'Qobuz',
                    theme: 'Développement | Design',
                    tinyDesc: 'Nam sole orto magnitudine angusti gurgitis sed profundi a transitu arcebantur et dum piscatorios quaerunt lenunculos vel innare temere contextis cratibus parant, effusae legiones, quae hiemabant tunc apud Siden, isdem impetu occurrere veloci. et signis prope ripam locatis ad manus comminus conserendas denseta scutorum conpage semet scientissime praestruebant.',
                    desc: "Ce projet s'agissait de créer une plateforme web de promotion de soirées étudiantes. En tant qu'étudiant nous avons été confronté à une situation tel que celle-ci: <i>« Un groupe d’étudiants de l’IUT de Meaux aimerait sortir faire la fête et rencontrer d’autres étudiants, de nouvelles têtes. Pierre aime le Rap US, Justine le Latino et Evan est fan d’Électro. Chacun aimerait entendre un peu de son style favori, mais où sortir pour satisfaire tout le monde ? L’IUT étant excentré du Campus, les étudiants ne sont pas avertis de toutes les soirées organisées par leur BDE, ils se connectent alors sur internet, mais où chercher l’information ? »</i><br/><br/>Le but de ce projet était donc de mettre en relation les organisateurs de soirées en île de France avec les étudiants souhaitant faire la fête. Nous avons mis en place un système de tag musical, qui mettra en avant les goûts musicaux des utilisateurs pour la recherche de sa soirée. Il est clair qu'une soirée avec de la musique que l'on n'apprécie pas, n'est pas une bonne soirée.<br/><br/><div class='project-desc-design'></div>",
                    pathImg: 'img/qobuz.jpg',
                    pathImgLogo: 'img/qobuz-logo.png',
                    date: 'blabladate',
            },
                {
                    id: 3,
                    title: 'Engie',
                    theme: 'Développement | Base de donnée',
                    tinyDesc: 'Nam sole orto magnitudine angusti gurgitis sed profundi a transitu arcebantur et dum piscatorios quaerunt lenunculos vel innare temere contextis cratibus parant, effusae legiones, quae hiemabant tunc apud Siden, isdem impetu occurrere veloci. et signis prope ripam locatis ad manus comminus conserendas denseta scutorum conpage semet scientissime praestruebant.',
                    desc: "Ce projet s'agissait de créer une plateforme web de promotion de soirées étudiantes. En tant qu'étudiant nous avons été confronté à une situation tel que celle-ci: <i>« Un groupe d’étudiants de l’IUT de Meaux aimerait sortir faire la fête et rencontrer d’autres étudiants, de nouvelles têtes. Pierre aime le Rap US, Justine le Latino et Evan est fan d’Électro. Chacun aimerait entendre un peu de son style favori, mais où sortir pour satisfaire tout le monde ? L’IUT étant excentré du Campus, les étudiants ne sont pas avertis de toutes les soirées organisées par leur BDE, ils se connectent alors sur internet, mais où chercher l’information ? »</i><br/><br/>Le but de ce projet était donc de mettre en relation les organisateurs de soirées en île de France avec les étudiants souhaitant faire la fête. Nous avons mis en place un système de tag musical, qui mettra en avant les goûts musicaux des utilisateurs pour la recherche de sa soirée. Il est clair qu'une soirée avec de la musique que l'on n'apprécie pas, n'est pas une bonne soirée.<br/><br/><div class='project-desc-design'></div>",
                    pathImg: 'img/engie.jpg',
                    pathImgLogo: 'img/engie-logo.png',
                    date: 'blabladate',
            },
        ],}
    }
})
Vue.component('the-header', {
    template: '<div class="header" id="header"><span class="header-name">Matthias Ollivier</span><nav><a class="header-nav-pill"><span class="hover-select" @click="resetProject()">Projets</span></a><a href="" class="header-nav-pill"><span class="hover-select">Qui suis-je ?</span></a></nav></div>',
    methods: {
        resetProject: function(){
            active.activeProject = 0;
        }
    }
})

Vue.component('the-projects', {
    template: '<ul class="projects-list"><li v-for="project in projects" data-aos="flip-up" data-aos-offset="400"><div class="project-img" @click="selectProject(project.id)"><img class="project-back-img" v-bind:src="project.pathImg" alt=""/><div class="project-logo"><img v-bind:src="project.pathImgLogo" alt=""/></div></div><div class="project-info"><span class="project-theme">{{ project.theme }}</span><h2 class="project-title">{{ project.title }}</h2><p v-html="project.tinyDesc" class="project-tiny"></p><p class="project-desc" v-html="project.desc"></p><span class="project-date">{{ project.date }}</span></div></li></ul>',
    methods: {
        selectProject: function(id) {
            active.activeProject = id;
            console.log(active.activeProject);
            setInterval(function(){
                AOS.init();
            }, 10)
        }
    }
})

Vue.component('project-review', {
    template: '<div class="project-review"></div>',
})

var active = new Vue({
    el: '#app',
    data: {
        activeProject: 0,
    }
})