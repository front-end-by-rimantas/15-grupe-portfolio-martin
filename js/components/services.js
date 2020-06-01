"use strict";

let HTML = '';
let icons = ["desktop", "align-justify", "rocket", "tablet", "wrench", "scissors"];
let heading = ["Search Optimization", "Logo & Identityc", "Graphics Design3", "Fully Responsive",
    "Advanced Options", "Reasonable Pricing"];
let text = '';  

//if("jei nevienodas masyvu ilgis, ka darom tada")
if( icons == heading ){
    document.write(HTML);
}
// if("jei masyvas ilgesnis nei 6 elementai")

for (let i=0; i<6; i++) {
    HTML += ` <div class="col-4 servicesInfo">
                <div>
                    <i><a href="#" class="fa fa-${icons[i]}"></a></i>
                </div>
                <h3>${heading[i]}</h3>
                <p>The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading.</p>
            </div>`;
}

document.getElementById('servicesCards').innerHTML= HTML;
