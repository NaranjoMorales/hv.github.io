import React from 'react';
import "./main.css";

function Main() { 
    return (
        <div className='main'>
            <h2>Habilidades</h2>
            <div className="cvMain">
                <ul className='ListaHabilidadesMain'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>NodeJS</li>
                    <li>Kubernetes</li>
                    <li>Docker</li>
                    <li>Express</li> 
                    <li>Java</li>
                    <li>SQL</li>
                    <li>Mongo db</li>
                    <li>REACT</li>
                    <li>Flutter</li>
                    <li>Dart</li>
                   
                </ul>
            </div> 
    
            <h2>Formación académica universitaria</h2>
            <div className="cvMain">
                <p>Administracion Ambiental 2018. Universidad Tecnológica de Pereira.</p>
                <p>Tecnologia en Analisis y Desarrollo de Software. SENA 2023.</p> 
                <p>Diplomado en Manejo de Base de Datos No relacionales. SENA 2023.</p>
            </div>

            <h2>Experiencia laboral</h2>
            <div className="cvMain">
                <p><strong>Desarrollador Web FullStack.</strong> SEINNOVA. 6 meses. Tecnologías empleadas: HTML, CSS, JAVASCRIPT, NODEJS, BOOTSTRAP, EXPRESS, MONGO DB. Proyecto desarrollado: en Proceso de Produccion</p>
                <p><strong>Monitor Academico SENA </strong>. 1 mes. Tecnologías empleadas: DART, FLUTTER, C</p>
                <p><strong>Monitor Laboratorio de Analitica de Datos en Proyecto de Microsonificacion Climatica de la Ciudad de Pereira</strong>1 mes. </p>
            </div>

            <h2>Proyectos desarrollados</h2>
            <div className="cvMain">
                <ul>
                    <li><p>Aplicacion de Administracion de Datos . en proceso de desarrollo</p></li> 
                    <li><p>Apoyo en analisis de datos en proyecto de Microsonificacion Climatica de la Ciudad de Pereira </p></li>
                </ul>
            </div>
            <h2>Formación Complementaria</h2>
            <div className="cvMain">
                <h4>SENA</h4>
                <ul>
                    <li>DIPLOMADO EN MANEJO DE BASES DE DATOS NO RELACIONALES MONGO DB</li>
                    <li> CURSO NODE.JS EN FREECODECAMP</li>
                    
                </ul>

                <h4>UNIVERSIDAD TECNOLÓGICA DE PEREIRA</h4>
                <ul>
                    <li>ADMINISTRACION AMBIENTAL</li>
                </ul>

                <h4>SENA</h4>
                <ul>
                    <li>ADSO</li>
                </ul>

                <h4>GOOGLE CLOUD PLATAFORM</h4>
                <ul>
                    <li>Google Cloud Associate Cloud Engineer</li>
                </ul>
            </div>
        </div>
    );
}

export default Main;

/////////////////


    
           


           

            
