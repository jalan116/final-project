import 'firebase/auth'
import {firebaseConfig} from '../config/firebase'
import firebase from 'firebase/app'
import {useAuth} from '@vueuse/firebase'
import { onUnmounted } from '@vue/runtime-core'

firebase.initializeApp(firebaseConfig)

const { auth } = firebase

export const { isAuthenticated, user} = useAuth()

const { GoogleAuthProvider } = auth

export const signIn = (email, password) =>
  auth().signInWithEmailAndPassword (email, password)

export const googlePopup = () =>
  auth().signInWithPopup(new GoogleAuthProvider())

export const signOut = () => auth().signOut()