import React from "react";
import ImageOne from  '../ken1.jpg'
import ImageTwo from  '../ken2.jpg'
import ImageThree from  '../ken3.jpeg'
import ImageFour from  '../ken4.jpeg'


const Details = ()=>(

    <div class="content">
    <h2>ken-star duibit blenders</h2>
    <p>Prepare to be amazed by the sheer power of the Kenstar Blender. With its robust motor, this appliance effortlessly tackles even the toughest ingredients, transforming them into smooth, velvety blends in a matter of seconds. From crushing ice to pulverizing fruits and vegetables, the Kenstar Blender's versatile functionality opens up a world of culinary possibilities.</p>
    <div class="buttons">
        <button>Purchase</button>
        <button>Explore</button>
    </div>
    <div class="imager">
        <p>more |</p>
    <div class="blender-tiles">
        <a href="/"><img src={ImageOne} alt="image_one" /></a>
        <a href="/"><img src={ImageTwo} alt="image_two" /></a>
        <a href="/"><img src={ImageThree} alt="image_three" /></a>
        <a href="/"><img src={ImageFour} alt="image_four" /></a>
    </div>
    </div>
            </div>

)

export default Details;