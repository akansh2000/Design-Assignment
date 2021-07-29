import play from './images/play.png';
import amazon from './images/amazon.png';
import northern from './images/northern.png';
import google from './images/google.png';
import skrill from './images/skrill.png';
import animate from './images/animate.jpg'

const Home=()=>{

    return(

        <>
        <section id='header' className='d-flex align-items-center'>
            <div className="container-fluid nav-bg">
                <div className='row'>
                    <div className='col-10 mx-auto main'>
                        <div className='row'>
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 justify-content-center flex-column">
                                <h1 className='head'>Don't worry.<br/>We are here for<br/>every solution.</h1>
                                <h6 className='mt-4 mb-5 pt-3'>
                                    Bushwick meh Blue Bottle pork belly mustache skateboard 3 wolf<br/>moon. Actually beard-single origin coffee, twee 90's PBR Echo Park.</h6>
                           <div className='video'>
                               <button className='btn btn-outline-primary started'>Get Started</button>
                               <div className='d-flex flex-box '>
                               <a class="play-btn" href="#"></a>
                               <p className='watch'>Watch Video</p> 
                               </div>
                           </div>
                           <div className='mt-5 p-auto col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 type'>
                               <p className='text-muted mt-4'>Integrations</p>
                               <img src={amazon} width='90' height='40' className='mt-4 p-2 item'/>
                               <img src={northern} width='110' height='85' className='mt-0 northern item'/>
                               <img src={google} width='80' height='70' className='mt-1 p-2 item'/>
                               <img src={skrill} width='60' height='30' className='mt-4 p-2 item'/>
                           </div>
                            </div>
                            
                            <div className='col-lg-6 order-1 order-lg-2 header-img'>
                            <img className='img-fluid animated' alt='Homeimage' src={animate} width='900' height='650'/>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
        </section>
        </>
    )
}

export default Home;