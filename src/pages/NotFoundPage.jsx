
import { useNavigate } from 'react-router-dom';
import NotFoundImg from '../images/404.png'



function NotFoundPage() {

  const navigate = useNavigate()
    return (
      <div className='notFindPageContent'>
          <img width={500} src={NotFoundImg}/>
       <h1>Page Not Found</h1>
        <p>We're sorry, the page you reqested could not be found.
          Please go back to the homepage
        </p>
        <button onClick={() => navigate('/')}>Go Home</button>
      </div>
    );
  }
  
  export default NotFoundPage;