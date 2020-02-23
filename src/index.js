//@ts-check

const doctrine = require('doctrine')

// 17
const { add, subtract, divide, multiply } = require('./calculator') 

// 20
/**
 * @file index.js is the root file for this example app
 * @author Felix Heng
 * @see <a href="https://www.wiztopic.com/fr/">Wiztopic</a>
 */

/**
 * Username
 * @type {string}
 */
const username = 'Clark Kent'

/**
 * Favorite Numbers
 * @type {Array<number>}
 */
const favoriteNumbers = [5, 7, 9]

/**
 * Todo
 * @type {{id: number|string, text: string}}
 */
const todo = {
    id: 1,
    text: 'Hello'
}

/**
 * Sum function
 * @param {number} num1 - first number
 * @param {number} num2 - second number
 * @returns {string} - total in number and string
 */
const sum = (num1, num2) => {
    return `${num1 + num2}`
}

// 14
/**
 * A student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {string|number} [age] - Student age
 * @property {boolean} isActive - Student is active
 */

 /**
  * @type {Student}
  */
 const Student = {
     id: 1,
     name: 'Peter Parker',
     age: 20,
     isActive: true
 }

 // 15
 /**
  * Class to create a person object
  */
 class Person {
     /**
      * 
      * @param {Object} personInfo Information about the person
      */
     constructor(personInfo) {
         /**
          * @property {string} name Persons name
          */
        this.name = personInfo.name
        /**
         * @property {number|string}   age Persons age
         */
        this.age = personInfo.age
     }
     /**
      * @property {function} greet A greeting with the name and age
      * @returns {void}
      */
     greet() {
         console.log(`Hello, my name is ${this.name} and I am ${this.age}`)
     }
 }

 // 16
/**
 * Homer Simpson
 * see {@link Person}
 */
const HomerSimpson = new Person({
    name: 'Homer Simpson',
    age: 45
})
// console.log(HomerSimpson.greet())

// console.log(subtract(7, 3))