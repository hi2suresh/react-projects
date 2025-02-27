function Main({ data }) {
  return (
    <div className="imgContainer">
      <img src={data.hdurl} className="bgImage" alt="Image from Nasa" />
    </div>
  );
}
export default Main;
