


import React from 'react';


export default class Introduction extends React.Component{

    render(){

        return (
            <div className="container">
                <div className="row text-center" id="introduction">

                    <h1 className="heading">introduction</h1>
                    <p> My name is Rixing Wu, I'm 21 years old and currently studying my third
                        towards my bache degree in Computer Science at the Wentworth
                        Institute of Technology in Boston Massachasch. What do I do? I code.
                        I started my programming journey many years ago with a TI-82 calculator,
                        and since that day I knew my true calling.
                    </p>

                    <p>
                        I have a strong theoretical background in Computer Science, so Java and C/C++
                        are my weapons of choice for solving problems. Whether it's high level or low
                        level I love getting my hands dirty and making things work, especially if it
                        involves learning new concepts. One of my passions is Human Computer Interaction,
                        which is what I'm specializing in as a track in my degree. I'm always tinkering
                        with something, whether it's making Android applications, websites with HTML/CSS,
                        or just experimenting with JavaScript.
                    </p>

                    <div id="resume" >
                        <a href="/Resume.pdf" className="btn btn-lg" title="View Resumé">
                            <i className="glyphicon glyphicon-file"> </i>View Resumé
                        </a>
                    </div>


                </div>
            </div>
        )
    }

}
