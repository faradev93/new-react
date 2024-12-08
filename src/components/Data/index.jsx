import "./style.css";

export default function Data(prop) {
  return (
    <div className="data__kososher__">
      <p>دیتای شما میشه این:</p>
      <p>{prop.lastname}</p>
    </div>
  );
}
