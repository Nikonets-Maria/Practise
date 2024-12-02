
import NotFoundImg from '../images/404.png'


function NotFoundPage() {
    return (
      <div>
          <img width={500} src={NotFoundImg}/>
        <p>We're sorry, the page you reqested could not be found.
          Please go back to the homepage
        </p>
        <button>Go Home</button>
      </div>
    );
  }
  
  export default NotFoundPage;