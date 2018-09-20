import vue from 'vue'
import vuex from 'vuex'
import router from '../router'
import firebase from 'firebase/app'
import 'firebase/auth'
import db from '../utils/firebaseInit'
import axios from 'axios'

vue.use(vuex)

let weatherApi = axios.create({
    baseURL: 'http://bcw-sandbox.herokuapp.com/api/weather/',
    timeout: 3000
})
let quoteApi = axios.create({
    baseURL: 'http://bcw-sandbox.herokuapp.com/api/quotes',
    timeout: 3000
})
// let photoApi = axios.create({
//     baseURL: 'http://bcw-sandbox.herokuapp.com/api/images/',
//     timeout: 3000
// })

let store = new vuex.Store({
  state: {
    user: {},
    weather: {},
    quote: {},
    // photo: {},
    toDos: [],
    myToDos: []
  },
  mutations: {
    setUser(state, user) {
            state.user = user
        },
    setWeather(state, weather) {
        state.weather = weather
    },
    setQuote(state, quote) {
        state.quote = quote
    },
    // setPhoto(state, photo) {
    //     state.photo = photo
    //     console.log('setphoto')
    // },
    setToDos(state, toDos) {
        state.toDos = toDos
    },
    setMyToDos(state, toDos) {
        state.myToDos = toDos
    }
  },
  actions: {
//user
    register({ commit, dispatch }, user) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    router.push("/login")
                    commit("setUser", res.user)
                    firebase.auth().currentUser.updateProfile({ displayName: user.displayName })
        })
  },
        login({ commit, dispatch }, creds) {
            firebase.auth().signInWithEmailAndPassword(creds.email, creds.password)
                .then(res => {
                    commit('setUser', res.user)
                    router.push({ name: 'Home' })
                }).catch(err => {
                    console.error(err)
                })
        },
        authenticate({ commit, dispatch }) {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    commit('setUser', user)
                    router.push({ name: 'Home' })
                } else {
                    commit('setUser', {})
                    router.push({ name: 'Login' })
                }
            })
        },
// weather
        getWeather({ commit, dispatch }) {
            weatherApi.get('').then(res=>{
            commit('setWeather', res.data)
            })
        },
// quote
        getQuote({ commit, dispatch }) {
            quoteApi.get().then(res=>{
                commit('setQuote', res.data)
            })
        },
//photo
        // getPhoto({ commit, dispatch}) {
        //     photoApi.get().then(res=>{
        //         commit('setPhoto', res.data)
        //         console.log('photoApi')
        //     }) 
        // },
//todo
        createToDo({ commit, dispatch }, newToDo) {
            db.collection('toDos').add(newToDo).then(doc => {
                console.log('created to do!')
                dispatch('getToDos')
            })
        },
        getToDos({ commit, dispatch}, ) {
            db.collection('toDos').get().then(querySnapShot => {
                let toDos = []
                querySnapShot.forEach(doc => {
                    if(doc.exists) {
                        let toDo = doc.data()
                        toDo.id = doc.id
                        toDos.push(toDo)
                    }
                })
                commit('setToDos', toDos)
            })
            },
        getMyToDos({ commit, dispatch }, userId) {
            db.collection('toDos').where("userId", "==", userId).get().then(querySnapShot => {
                let toDos = []
                querySnapShot.forEach(doc => {
                    if (doc.exists) {
                        let toDo = doc.data()
                        toDo.id = doc.id
                        toDos.push(toDo)
                    }
                })
                commit('setMyToDos', toDos)
            })
        },
        deleteToDo({ commit, dispatch }, id) {
            db.collection('toDos').doc(id).delete().then( res => {
            })
        },
        completeToDo({ commit, dispatch }, toDo) {
            console.log(toDo)
            db.collection('toDos').doc(toDo.id).set({
                completed: toDo.completed,
                message: toDo.message,
                userId: toDo.userId
            }).then(console.log)
        }
        }

})

export default store