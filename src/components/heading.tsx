import './heading.css';
import img1 from '../assets/dark.png';

const Heading =()=>{
    return(
        <div className='flex flex-col items-center pt-20 text-center justify-center'>
            <button className="theme-toggle" onClick={() => {
                document.body.classList.toggle('dark');
            }
            }>
                <img src={img1} className='theme' alt="Toggle Theme"/>
            </button>
            <div className='circlePattern mt-4'></div>
            <h1 className='introH  mb-3 z-10 relative'>Simple, traffic-based pricing</h1>
            <p className='introP  z-10'>Sign-up for our 30 day trial. No credit card required.</p>
        </div>
    )
}
export default Heading