import { useBusinesses } from './BusinessProvider.js'
import { Business } from './Business.js'

const contentTarget = document.querySelector(".businesses")

export const BusinessList = () => {
    const businessArray = useBusinesses()
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"
    businessArray.forEach((businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );
}



// NY Business Section
import { nyBusinesses } from './BusinessProvider.js';

const nyBusinessTarget = document.querySelector(".businessList--newYork")

export const nyBusinessList = () => {
    const nyBusinessArray = nyBusinesses;
    nyBusinessTarget.innerHTML= "<hr><h1> New York Businesses </h2>"
    nyBusinessArray.forEach((businessObject) => {
        nyBusinessTarget.innerHTML += Business(businessObject)
        }
    )
}



// Companies in manufacturing
import { manufacturingBusinesses } from './BusinessProvider.js';

const manufacturingBusinessTarget = document.querySelector(".businessList--manufacturing")

export const manufacturingBusinessList = () => {
    const manufacturingBusinessArray = manufacturingBusinesses;
    manufacturingBusinessTarget.innerHTML = "<hr><h1>Manufacturing Businesses</h1>"
    manufacturingBusinessArray.forEach((businessObject) => {
        manufacturingBusinessTarget.innerHTML += Business(businessObject)
        }
    )
    
}


// Listing only purchasing agents
import { agents } from './BusinessProvider.js';

const agentTarget = document.querySelector(".agents")

export const agentList = () => {
    agentTarget.innerHTML = "<hr><h1> Purchasing Agents</h1>"
    agents.forEach((agent) => {
        agentTarget.innerHTML += `
        <h2>${agent.fullName}<h2>
        <h3> ${agent.company}<h3> 
        <h3>${agent.phoneNumber}<h3>
        `
    })
}