

<template>
<div class="content-apply">
    <div class="apply-addMovie">
        
        <form v-on:submit.prevent="newmovie2">
        <span>Nouveau film</span><br />
        Titre : <br /><input type="text" v-model="newTitle" /><br />
        URL de l'affiche : <br /><input type="text" v-model="newAffiche" /><br />
        Année : <br /><input type="text" v-model="newYear" /><br />
        Langue : <br /><input type="text" v-model="newLangue" /><br />
        Genre du film : <br /><input type="text" v-model="newGFilm" /><br />
        Synopsis : <br /><textarea v-model="newSynopsis"></textarea><br />
        <button>Ajouter</button>
        </form>
    </div>

    <input class="rechercheBar" type="text" v-model="search" placeholder="Search" /><p class="countermovies">Movie number : {{movies.length}}</p>

    <ul>
        <movie-item v-for="(movie, index) in movies_search" v-bind:key="movie.title" v-bind:movie="movie" v-on:edit="edit(movie)" v-on:note="addnote(movie)" v-on:remove="remove(index)"></movie-item>
    </ul>

    <div class="modal-edit" v-if="movie_to_edit">
        Modifier le film<br /><br />
        Titre : <br/><input type="text" v-model="movie_to_edit.title" /><br />
        affiche : <br/><input type="text" v-model="movie_to_edit.affiche" /><br />
        Année : <br/><input type="text" v-model="movie_to_edit.year" /><br />
        Langue : <br /><input type="text" v-model="movie_to_edit.language" /><br />
        Genre du film : <br /><input type="text" v-model="movie_to_edit.genres" /><br />
        Synopsis : <br/><textarea v-model="movie_to_edit.synopsis"></textarea><br />
        <button v-on:click="save">Save</button>
    </div>

    <p class="modal-edit" v-if="movie_to_notes">
        Note du film<br />
        note :
        <input type="numbre" id="inputnote" name="vote" v-model="movie_to_notes"><br />
        <button v-on:click="savenote">Save</button>
    </p>

</div>
</template>

<script>
export default {
    data() {
        return {
            movie_to_add: {},
            newTitle:'',
            newAffiche:'',
            newYear:'',
            newSynopsis:'',
            newLangue:'',
            newGFilm:'',
            movie_to_edit: null,
            movie_to_notes: null,
            search: "",
            movies : [
                {
                    title: "OSS 117, LE CAIRE NID D'ESPIONS",
                    affiche: "http://fr.web.img6.acsta.net/c_215_290/medias/nmedia/18/35/95/94/18602611.jpg",
                    year: 2006,
                    language:"Français",
                    genres:"Comédie, Action, Espionnage",
                    synopsis: "Égypte, 1955, le Caire est un véritable nid d'espions. Tout le monde se méfie de tout le monde, tout le monde complote contre tout le monde : Anglais, Français, Soviétiques, la famille du Roi déchu Farouk qui veut retrouver son trône, les Aigles de Kheops, secte religieuse qui veut prendre le pouvoir. Le Président de la République Française, Monsieur René Coty, envoie son arme maîtresse mettre de l'ordre dans cette pétaudière au bord du chaos : Hubert Bonisseur de la Bath, dit OSS 117.",
                    notes: [5,5,4.5]
                },
                {
                    title:"READY PLAYER ONE",
                    affiche: "http://fr.web.img5.acsta.net/c_215_290/pictures/18/02/14/09/15/3437390.jpg",
                    year:2018,
                    language:"Américain",
                    genres:"Science fiction, Action",
                    synopsis:"2045. Le monde est au bord du chaos. Les êtres humains se réfugient dans l'OASIS, univers virtuel mis au point par le brillant et excentrique James Halliday. Avant de disparaître, celui-ci a décidé de léguer son immense fortune à quiconque découvrira l'œuf de Pâques numérique qu'il a pris soin de dissimuler dans l'OASIS. L'appât du gain provoque une compétition planétaire. Mais lorsqu'un jeune garçon, Wade Watts, qui n'a pourtant pas le profil d'un héros, décide de participer à la chasse au trésor, il est plongé dans un monde parallèle à la fois mystérieux et inquiétant… ",
                    notes: [4,5]
                },
                {
                    title:"AVENGERS: INFINITY WAR",
                    affiche: "http://fr.web.img5.acsta.net/pictures/18/03/16/14/42/0611719.jpg",
                    year:2018,
                    language:"Américain",
                    genres:"Science fiction, Action",
                    synopsis:"Les Avengers et leurs alliés devront être prêts à tout sacrifier pour neutraliser le redoutable Thanos avant que son attaque éclair ne conduise à la destruction complète de l’univers. ",
                    notes: [4,5,3,5]
                }
            ]
        }
    },

    methods: {
        newmovie1: function() {
            this.movies.push({title:"New movie"})
        },
        newmovie2: function() {
            this.movie_to_add = {}
            this.movies.push({
                title: this.newTitle,
                affiche: this.newAffiche,
                year: this.newYear,
                synopsis:this.newSynopsis,
                notes: [0]
      })
        },

        edit: function(movie) {
            this.movie_to_edit = movie
        },
        save: function() {
            this.movie_to_edit = null
        },
        remove: function(index) {
            this.movies.splice(index, 1)
        },
        addnote: function(movie){
          this.movie_to_notes = movie.notes
        },
        savenote: function(movie){
          this.movie_to_notes = null
        }
    },

    created: function() {
        console.log("Created")
    },

    computed: {
        firstletter: function() {
            return this.message[0]
        },
        movies_search: function() {
            return this.movies.filter(m => m.title.toLowerCase().indexOf(this.search.toLowerCase())!=-1);
        }
    }
}
</script>
