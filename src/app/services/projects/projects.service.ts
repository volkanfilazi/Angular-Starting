import { isNgTemplate } from '@angular/compiler';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  copyProjects: any[] = [];
  hostingSelected: string = ''
  ratingSelected: string = ''
  vue: boolean = false
  typescript: boolean = false
  kotlin: boolean = false
  mainFilterToggle: boolean = true
  advancedFilterOpenCloseToggle: boolean = true
  programingFilterOpenCloseToggle: boolean = true
  hostingFilterOpenCloseToggle: boolean = true
  ratingFilterOpenCloseToggle: boolean = true

  projectsArray = [
    {
      status: 'Online',
      liked: false,
      numberOfLikes: 50,
      name: 'Shop',
      image: 'guidance:shop',
      thema: 'Shop, Order, Filter System, Checkout, Networking',
      frameworks: ['Vue.js', 'HTML', 'CSS', 'Tailwind', 'Typescript'],
      packages: '@iconify/vue, axios'
    },
    {
      status: 'Online',
      liked: false,
      numberOfLikes: 28,
      name: 'Intelligence Square',
      image: 'carbon:ibm-watson-knowledge-studio',
      thema: 'Knowledge Competition, Multiple categories, Local Backend',
      frameworks: ['Vue.js', 'HTML', 'CSS', 'Tailwind'],
      packages: '@iconify/vue'
    },
    {
      status: 'Offline',
      liked: false,
      numberOfLikes: 12,
      name: 'Desk Booking System',
      image: 'tabler:brand-booking',
      thema: 'Login System, Desk Reservation, Admin Panel, Offices , Desks, Users',
      frameworks: ['Vue.js', 'HTML', 'CSS', 'Tailwind'],
      packages: '@iconify/vue, jwt, decode, axios, vite, vueuse-usestorage, iconify'
    },
    {
      status: 'Continues',
      liked: false,
      numberOfLikes: 5,
      name: 'Encryption',
      image: 'carbon:ibm-cloud-hyper-protect-crypto-services',
      thema: 'Strengthen Passwords',
      frameworks: ['Vue.js', 'HTML', 'CSS', 'Tailwind'],
      packages: '@iconify/vue, jwt, decode'
    },
    {
      status: 'Continues',
      liked: false,
      numberOfLikes: 20,
      name: 'Second Cv',
      image: 'mdi:resume',
      thema: 'Resume, Tools, Languages, Specialization',
      frameworks: ['Vue.js', 'HTML', 'CSS', 'Tailwind', 'Typescript'],
      packages: '@iconify/vue, vue-router, vite'
    },
    {
      status: 'Offline',
      liked: false,
      numberOfLikes: 32,
      name: 'Codagram',
      image: 'mdi:resume',
      thema: 'Fake Instagram, Firebase Login System',
      frameworks: ['Kotlin'],
      packages: 'retrofit, firebase'
    }
  ]
  vueFilter() {
    if (this.vue) {
      this.copyProjects = this.projectsArray.filter(item => item.frameworks.includes('Vue.js'));
    }
    else if(!this.vue) {
      this.copyProjects = this.projectsArray
    }
    else if(this.typescript){
      this.typescriptFilter()
    }
    else if(this.kotlin) {
      this.kotlinFilter()
    }
  }

   kotlinFilter() { 
    if (this.kotlin) {
      this.copyProjects = this.projectsArray.filter(item => item.frameworks.includes('Kotlin'));
    } 
    else if (!this.kotlin) {
      this.copyProjects = this.projectsArray
    }
    else if (this.vue) {
      this.vueFilter()
    }
    else if(this.typescript){
      this.typescriptFilter()
    }
  }

  typescriptFilter() {
    if (this.typescript) {
      this.copyProjects = this.projectsArray.filter(item => item.frameworks.includes('Typescript'));
    } 
    else if (this.vue) {
      this.vueFilter()
    }
    else if (this.kotlin) {
      this.kotlinFilter()
    }
    else if (!this.typescript) {      
      this.copyProjects = this.projectsArray
    }
  }

  constructor() {
    this.copyProjects = this.projectsArray
  }
}
