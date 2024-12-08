import "./style.css";

export default function Card() {
  return (
    <div className="main__card__">
      <div className="image__card__">
        <a href="http://www.google.com" target="blank">
          <img
            src="./public/images/frlogo.png"
            alt="Fr Photo PNG:)))"
            width={180}
            height={180}
          />
        </a>
      </div>
      <div className="info__card__">
        <p>Faramarz Rezakhanlou</p>
        <p>Faramarz.khanlou@gmail.com</p>
      </div>
    </div>
  );
}
