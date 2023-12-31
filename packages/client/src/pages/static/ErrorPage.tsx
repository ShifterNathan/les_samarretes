import { useNavigate } from 'react-router-dom';


const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <>
      <div className='flex items-center justify-center h-screen bg-gray-100'>
        <div className='text-center p-10  bg-white rounded-lg shadow-lg max-w-md mb-32'>
          <h1 className='text-6xl font-bold text-primary-500'>404</h1>
          <p className='text-xl text-secondary-500 mt-4'>Oops! Page not found.</p>
          <p className='text-gray-600 mt-2'>We can't seem to find the page you're looking for.</p>
          <button className='mt-6 px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition ease-in duration-300' onClick={handleGoHome}>
            Go Home
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;