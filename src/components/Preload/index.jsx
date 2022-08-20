import "./style.css";

function Preload({ setLoading }) {
  setTimeout(() => setLoading(true), 1500);

  return (
    <div className="boxLoad">
      <div className="pre"></div>
    </div>
  );
}

export default Preload;
