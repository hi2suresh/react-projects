import { useEffect, useState } from 'react';
import Footer from './components/Nasa-React-App/Footer';
import Main from './components/Nasa-React-App/Main';
import Sidebar from './components/Nasa-React-App/Sidebar';

function App() {
  const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;
      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;
      if (localStorage.getItem(localKey)) {
        setData(JSON.parse(localStorage.getItem(localKey)));
        console.log('Fetched from local storage...');
        return;
      }
      try {
        console.log(`Getting data from NASA`);
        const resp = await fetch(url);
        const apiData = await resp.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchAPIData();
  }, []);
  return (
    <>
      <>
        {data ? (
          <Main data={data} />
        ) : (
          <div className="loadingState">
            <i className="fa-solid fa-gear"></i>
          </div>
        )}
        {showModal && (
          <Sidebar handleToggleModal={handleToggleModal} data={data} />
        )}
        {data && <Footer handleToggleModal={handleToggleModal} data={data} />}
      </>
    </>
  );
}

export default App;
