<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IRIS-Prepatec</title>
    <link rel="stylesheet" href="./PREPA_assets/PREPA_css/PREPA_bootstrap.css">
    <link rel="stylesheet" href="./PREPA_assets/PREPA_css/PREPA_style.css">

</head>
<body>
    <header>
       <!--Sección para Navegación -->
        <nav>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xtra py-5 bg-green"></div>
                    <div class="col-xtra-small py-5 bg-rose"></div>
                </div>
            </div>
        </nav>  
        <!--//Termina Navegación-->      
    </header>
    <section>
        <!--Intro, logo y texto de bienvenida-->
        <div class="container-fluid  bg-dblue intro">
            <div class="row py-0 justify-content-center">
                <img class="logo-centered" src="PREPA_img/PREPA_enemay24_logo.png" alt="logo-iris-unitec">

            </div>
            <div class="row">
                <div class="col-12 text-center text-light">
                   <h1>Prepárate para <br>tu inscripción</h1>
                   <h4 class="text-primary heading-highlight">Enero-Mayo 2025</h4>
                   <p class="desc-inscripcion">Te acompañamos durante tu experiencia de inscripción</p>
                </div>
 
            </div>
        </div>
        <!--//Termina Intro-->
         <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 px-0">
                    <img class="img-fluid" src="PREPA_img/PREPA_enemay24_grupo-de-alumnos.png" alt="grupo de alumnos unitec">
                </div>
                <div class="col-md-6  d-flex justify-content-center flex-column bg-magenta text-center alertas-container">
                    <h2 class="text-light heading-alertas">Abriendo paso a la <br>elaboración de tu horario</h2>
                    <p class="text-light">Con la finalidad de guiarte en el proceso de la elaboración de tu horario, IRIS te mostrará ALERTAS para cumplir con los lineamientos institucionales.</p>
                </div>
            </div>
        </div>
        <!--Sección de Alertas-->
        <div class="container-fluid  bg-cyan alertas">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="box d-flex justify-content-center flex-column">
                            <div class="icon text-center">
                                <img src="PREPA_img/PREPA_enemay24_alerta_amarilla.png" alt="alertas amarillas">
                            </div>
                            <div class="info-content">
                                <p>Con las <span class="text-light">alertas amarillas,</span>
                                    podrás guardar tu horario, pero
                                    no continuar con tu inscripción.</p>
                            </div>
                        </div>
    
                    </div>
                    <div class="col-lg-4">
                        <div class="box d-flex justify-content-center flex-column">
                            <h2 class="text-center text-white mb-4">
                                ALERTAS
                            </h2>
                            <div class="info-content">
                                <p class="text-center"><span class="rounded-full">
                                    <a class="bg-dblue text-light" href="./PREPA_assets/PREPA_pdf/PREPA_alertas.pdf" target="_blank">Ver más información</a></span>
                                </p>
                            </div>
                        </div>
    
                    </div>
                    <div class="col-lg-4">
                        <div class="box d-flex justify-content-center flex-column">
                            <div class="icon text-center">
                                <img src="PREPA_img/PREPA_enemay24_alerta_roja.png" alt="alertas amarillas">
                            </div>
                            <div class="info-content">
                                <p>Con las <span class="text-light">alertas rojas,</span>
                                    podrás guardar tu horario, pero
                                    no continuar con tu inscripción.</p>
                            </div>
                        </div>
    
                    </div>
    
                </div>
            </div>
        </div>
        <!--//Termina sección de alertas-->
    </section>
    <section class="criterio">
        <div class="container-fluid bg-orange">
            <!--Empieza Container Acordeones-->
            <div class="container accordionbox">
                <div class="row">
                    <div class="title-container-reduced bg-dblue align-self-center">
                        <h3 class="text-center text-light">¿QUÉ CRITERIOS TIENES<br>
                            QUE CONSIDERAR?</h3>
                    </div>
                </div>

                <div class="row gx-5 accordions-top"  >
                    <div class="col-md-4 ">
                        <div class="accordion-container">
                            <div class="image-box d-flex text-light position-relative">
                                <img class="img-fluid" src="PREPA_img/PREPA_enemay24_carga_academica.png" alt="carga académica">
                               <div class="title-box position-absolute bottom-0 w-100"><h4 class="text-center">Carga Académica</h4></div>
                            </div>
                            <div class="accordion-item-iris">
                                <div class="accordion-header-iris" id="heading-one">
                                  <button class="accordion-button-iris py-4" type="button"  aria-expanded="false" aria-controls="collapse1">
                                    <img class="mx-auto" src="PREPA_img/PREPA_enemay24_boton_1.png" alt="boton ver más">
                                  </button>
                                </div>
                                <div id="collapse1" class="accordion-collapse-iris see" aria-labelledby="heading-one">
                                  <div class="accordion-body">
                                    <div class="pointer text-center">
                                        <img src="PREPA_img/PREPA_enemay24_flecha_abajo.png" alt="flecha abajo">
                                    </div>
                                    <p class="text-light accordion-desc">Ahora, en tu proceso de inscripción se mostrarán <strong>créditos
                                         a inscribir</strong> en lugar de <strong>unidades por materia.</strong></p>
                                    <p class="text-light accordion-desc">La carga académica permanecerá igual; 
                                        lo único que cambia es la <strong>forma de medirla: 
                                            6 unidades</strong> equivalen a <strong>3 créditos</strong> académicos.
                                    </p>
                                    <p class="text-light accordion-desc">Revisa la carga académica de tu
                                        horario. Se considera <strong>carga
                                        académica completa de 24 a 26
                                        créditos</strong> dependiendo de tu
                                        programa y semestre cursando,
                                        y hasta <strong> 26 créditos la carga
                                        académica máxima.</strong></p>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="accordion-container">
                            <div class="image-box d-flex text-light position-relative">
                                <img class="img-fluid" src="PREPA_img/PREPA_enemay24_life.png" alt="life">
                               <div class="title-box position-absolute bottom-0 w-100"><h4 class="text-center">LiFE</h4></div>
                            </div>
                            <div class="accordion-item-iris">
                                <div class="accordion-header-iris" id="heading-two">
                                  <button class="accordion-button-iris py-4" type="button" aria-expanded="false" aria-controls="collapse2">
                                    <img class="mx-auto" src="PREPA_img/PREPA_enemay24_boton_2.png" alt="boton ver más">
                                  </button>
                                </div>
                                <div id="collapse2" class="accordion-collapse-iris" aria-labelledby="heading-two">
                                  <div class="accordion-body">
                                    <div class="pointer text-center">
                                        <img src="PREPA_img/PREPA_enemay24_flecha_abajo.png" alt="flecha abajo">
                                    </div>
                                    <p class="text-light accordion-desc">Puedes inscribir un <strong>máximo de 2 clases o talleres LIFE.</strong></p>
                                    <p class="text-light accordion-desc">Si estás en equipos representativos, compañías o selecciones,
                                         podrás inscribir una actividad LIFE. Para inscribir una segunda materia necesitas permiso de
                                          tu director LIFE de campus.</p>
                                    <p class="text-light accordion-desc">Si estás cursando “Yo y el TEC I” o “Yo y el Tec II”, deberás <strong>inscribir una materia LIFE en complemento.</strong></p>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="accordion-container">
                            <div class="image-box d-flex text-light position-relative">
                                <img class="img-fluid" src="PREPA_img/PREPA_enemay24_requisitos_de_materia.png" alt="requsitos de materias">
                               <div class="title-box position-absolute bottom-0 w-100"><h4 class="text-center">Requisitos de Materias</h4></div>
                            </div>
                            <div class="accordion-item-iris">
                                <div class="accordion-header-iris" id="heading-three">
                                  <button class="accordion-button-iris py-4" type="button"  aria-expanded="false" aria-controls="collapse3">
                                    <img class="mx-auto" src="PREPA_img/PREPA_enemay24_boton_3.png" alt="boton ver más">
                                  </button>
                                </div>
                                <div id="collapse3" class="accordion-collapse-iris" aria-labelledby="heading-three">
                                  <div class="accordion-body">
                                    <div class="pointer text-center">
                                        <img src="PREPA_img/PREPA_enemay24_flecha_abajo.png" alt="flecha abajo">
                                    </div>
                                    <p class="text-light accordion-desc">Selecciona primero tus materias que tienen requisito <strong>“Estar cursando”</strong>.</p>
                                    <p class="text-light accordion-desc">Asegúrate de inscribir las materias correspondientes a <strong>“Lengua Extranjera”</strong>.</p>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row gx-5">
                    <div class="col-md-4">
                        <div class="accordion-container">
                            <div class="image-box d-flex text-light position-relative">
                                <img class="img-fluid" src="PREPA_img/PREPA_enemay24_empalme_de_grupos.png" alt="empalme de grupos">
                               <div class="title-box position-absolute bottom-0 w-100"><h4 class="text-center">Empalme <br>de Grupos</h4></div>
                            </div>
                            <div class="accordion-item-iris">
                                <div class="accordion-header-iris" id="heading-fourth">
                                  <button class="accordion-button-iris py-4" type="button"  aria-controls="collapse4">
                                    <img class="mx-auto" src="PREPA_img/PREPA_enemay24_boton_4.png" alt="boton ver más">
                                  </button>
                                </div>
                                <div id="collapse4" class="accordion-collapse-iris" aria-labelledby="heading-fourth">
                                  <div class="accordion-body">
                                    <div class="pointer text-center">
                                        <img src="PREPA_img/PREPA_enemay24_flecha_abajo.png" alt="flecha abajo">
                                    </div>
                                    <p class="text-light accordion-desc">Asegúrate de que los grupos inscritos se encuentren <strong>sin empalme</strong> de horario.</p>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="accordion-container">
                            <div class="image-box d-flex text-light position-relative">
                                <img class="img-fluid" src="PREPA_img/PREPA_enemay24_honors.png" alt="Honors">
                               <div class="title-box position-absolute bottom-0 w-100"><h4 class="text-center">Honors</h4></div>
                            </div>
                            <div class="accordion-item-iris">
                                <div class="accordion-header-iris" id="heading-five">
                                  <button class="accordion-button-iris py-4" type="button"  aria-expanded="false" aria-controls="collapse5">
                                    <img class="mx-auto" src="PREPA_img/PREPA_enemay24_boton_5.png" alt="boton ver más">
                                  </button>
                                </div>
                                <div id="collapse5" class="accordion-collapse-iris" aria-labelledby="heading-five" >
                                  <div class="accordion-body">
                                    <div class="pointer text-center">
                                        <img src="PREPA_img/PREPA_enemay24_flecha_abajo.png" alt="flecha abajo">
                                    </div>
                                    <p class="text-light accordion-desc">Si vas a cursar las materias de <strong>HONORS</strong> recuerda
                                         seleccionarlas dentro del apartado de <strong>Complementarias (CP).</strong></p>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="accordion-container">
                            <div class="image-box d-flex text-light position-relative">
                                <img class="img-fluid" src="PREPA_img/PREPA_enemay24_PAA.png" alt="PAA">
                               <div class="title-box position-absolute bottom-0 w-100"><h4 class="text-center">PAA</h4></div>
                            </div>
                            <div class="accordion-item-iris">
                                <div class="accordion-header-iris" id="heading-six">
                                  <button class="accordion-button-iris py-4" type="button"  aria-expanded="false" aria-controls="collapse6">
                                    <img class="mx-auto" src="PREPA_img/PREPA_enemay24_boton_6.png" alt="boton ver más">
                                  </button>
                                </div>
                                <div id="collapse6" class="accordion-collapse-iris" aria-labelledby="heading-six">
                                  <div class="accordion-body">
                                    <div class="pointer text-center">
                                        <img src="PREPA_img/PREPA_enemay24_flecha_abajo.png" alt="flecha abajo">
                                    </div>
                                    <p class="text-light accordion-desc">Si presentas algún <strong>estatus académico como de
                                         apoyo o condicional,</strong> selecciona las materias correspondientes dentro del apartado
                                          de <strong>Complementarias (CP)</strong></p>
                                  </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <!--termina Container Acordeones-->
            
        </div>
        <div class="container-fluid cta-main bg-primary">
            <div class="container">
                <div class="row">
                    <span class="heading-cta text-center text-light">¿Iniciamos?</span>

                </div>
                <div class="row">
                    <div class="col-md-6 d-flex align-items-center justify-content-end">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="flexCheckboxDefault" data-url="https://amfs.tec.mx/nidp/saml2/sso?uniqueId=itesmidentidadSL2&id=itesmauth-identidadsl2&sid=0&option=credential&uniqueId=itesmidentidadSL2&sid=0">
                            <label class="form-check-label text-light" for="flexCheckboxDefault">He leído y verificado la información</label>
                        </div>               

 
                    </div>
                    <div class="col-md-6 d-flex justify-content-start">
                        <span class="rounded-full">
                            <a href="#" class="text-light bg-dblue rounded-big" id="submitLink" target="_blank">Ingresa a tu inscripción</a>
                        </span>    
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    <footer>
        <div class="container-fuid footer bg-blue">
            <div class="container">
               <!--Títulos de Footer-->
                <div class="row border-bottom border-white pb-4">
                    <div class="col-12 text-center text-light">
                        <h2>¿Tienes Preguntas?</h2>
                        <div class="sub-heading">Nuestro equipo de TECservices está aquí para ayudarte.<br/>
                            Contáctanos en cualquier momento</div>
                    </div>
                </div>
                <!--//Termina títulos de Footer-->
                <!--Comienza Widgets principales-->
                <div class="row pt-4">
                    <div class="col-md-3">
                        <div class="footer-widget d-flex align-items-center justify-content-end">
                            <div class="text-light me-4">TECbot a través de</div>
                            <div class="icon-widget mitec"><img src="PREPA_img/PREPA_enemay24_icon-mitec.png" alt="mitec icon"></div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="footer-widget d-flex align-items-center justify-content-center">
                            <div class="icon-widget whatsapp me-3"><img src="PREPA_img/PREPA_enemay24_icon-whatsapp.png" alt="whatsapp icon"></div>
                            <div class="text-light">WhatsApp 8116255123</div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="footer-widget  d-flex align-items-center justify-content-start">
                            <div class="icon-widget telefono me-3"><img src="PREPA_img/PREPA_enemay24_icon-telefono.png" alt="mitec icon"></div>
                            <div class="text-light">+52 81 8358 2000
                            </div>
                        </div>
                    </div>
                </div>
                <!--//Termina Widgets principales-->
                <!--Comienza subfooter-->
                <div class="row sub-footer py-2 ">
                    <div class="col-lg-4">
                        <div class="footer-widget  d-flex align-items-center">
                            <div class="icon-widget-subfooter atencion">
                                <img src="PREPA_img/PREPA_enemay24_icon-atencion.png" alt="icono atención">
                            </div>
                            <div class="text-light">Atención presencial en tu campus</div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="footer-widget d-flex align-items-center">
                            <div class="icon-widget-subfooter email">
                                <img src="PREPA_img/PREPA_enemay24_icon-email.png" alt="icono email">
                            </div>
                            <div class="text-light"><a class="text-light" href="mailto:tecservices@servicios.tec.mx">tecservices@servicios.tec.mx</a></div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="footer-widget  d-flex align-items-center">
                            <div class="icon-widget-subfooter chat">
                                <img src="PREPA_img/PREPA_enemay24_icon-chat.png" alt="icono chat">
                            </div>
                            <div class="text-light"><a class="text-light" href="http://tec.mx/tecserviceschat">http://tec.mx/tecserviceschat</a></div>
                        </div>
                    </div>
                </div>
                <!--//Termina subfooter-->
                <div class="row footer-bottom-bar footer-widget pt-4">
                    <p class="text-light text-center">Horario de atención: 8:00 am. a 8:00 pm. TCM. De lunes a viernes.</p>
                </div>
            </div>
        </div>
    </footer>
    <script
    src="https://code.jquery.com/jquery-3.7.1.min.js"
    integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
    crossorigin="anonymous"></script>
<script src="./PREPA_assets/PREPA_js/PREPA_bootstrap.bundle.min.js"></script>
<script src="./PREPA_assets/PREPA_js/PREPA_app.js"></script>

</body>

</html>
