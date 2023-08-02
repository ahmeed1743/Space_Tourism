let Planet_Img = document.getElementById("planet-img");
let Planet_Heading = document.getElementById("H1");
let Planet_Paragraph = document.getElementById("P");
let Planet_Distance = document.getElementById("Distance");
let Planet_Time = document.getElementById("Time");


function ChangeMoon(){
    Planet_Img.src="./assets/destination/image-moon.png";
    Planet_Heading.innerHTML="Moon";
    Planet_Paragraph.innerHTML= "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    Planet_Distance.innerHTML="384,400 km";
    Planet_Time.innerHTML="3 days";
}

function ChangeMars(){
    Planet_Img.src="./assets/destination/image-mars.png";
    Planet_Heading.innerHTML="Mars";
    Planet_Paragraph.innerHTML= "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
    Planet_Distance.innerHTML="225 mil. km"
    Planet_Time.innerHTML="9 months";
    
}

function ChangeEuropa(){
    Planet_Img.src="./assets/destination/image-europa.png";
    Planet_Heading.innerHTML="Europa";
    Planet_Paragraph.innerHTML= "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    Planet_Distance.innerHTML="628 mil. km";
    Planet_Time.innerHTML=" 3 years";
    
}

function ChangeTitan(){
    Planet_Img.src="./assets/destination/image-titan.png";
    Planet_Heading.innerHTML="Titan";
    Planet_Paragraph.innerHTML= "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    Planet_Distance.innerHTML="1.6 bil. km";
    Planet_Time.innerHTML="7 years";
    
}


let Crew_H3= document.getElementById("crew-h3");
let Crew_H1= document.getElementById("crew-h1");
let Crew_p= document.getElementById("crew-p");
let Crew_Img= document.getElementById("crew-img");


function ChangeEng(){
    Crew_H3.innerHTML="Flight Engineer";
    Crew_H1.innerHTML="Anousheh Ansari";
    Crew_p.innerHTML="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
    Crew_Img.src="./assets/crew/image-anousheh-ansari.png";
}

function ChangeCom(){
    Crew_H3.innerHTML="Commander";
    Crew_H1.innerHTML="Douglas Hurley";
    Crew_p.innerHTML=" Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
    Crew_Img.src="./assets/crew/image-douglas-hurley.png";
}

function ChangeSpe(){
    Crew_H3.innerHTML="Mission Specialist";
    Crew_H1.innerHTML="Mark Shuttleworth";
    Crew_p.innerHTML="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
    Crew_Img.src="./assets/crew/image-mark-shuttleworth.png";
}

function ChangePilot(){
    Crew_H3.innerHTML="Pilot";
    Crew_H1.innerHTML="Victor Glover";
    Crew_p.innerHTML="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
    Crew_Img.src="./assets/crew/image-victor-glover.png";
}





let Tech_H1= document.getElementById("tech-h1");
let Tech_P= document.getElementById("tech-p");
let Tech_Img= document.getElementById("tech-img");

function ChangeVehicle(){
    Tech_H1.innerHTML="Launch vehicle";
    Tech_P.innerHTML=" A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
    Tech_Img.src="./assets/technology/image-launch-vehicle-portrait.jpg";
}

function ChangePort(){
    Tech_H1.innerHTML="Spaceport";
    Tech_P.innerHTML="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
    Tech_Img.src="./assets/technology/image-spaceport-portrait.jpg";
}

function ChangeCapsule(){
    Tech_H1.innerHTML="Space capsule";
    Tech_P.innerHTML="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
    Tech_Img.src="./assets/technology/image-space-capsule-portrait.jpg";
}