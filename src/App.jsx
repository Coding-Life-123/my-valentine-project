import { useState } from "react";

const phrases = [
  "No",
  "No?",
  "Estás segura que no?",
  "Ayyyy pero puke?",
  "Porfiiii",
  "Bebé, pofi, yo quiero",
  "Me haces tricitas el corazonchito 💔",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleYes() {
    setYesPressed(true);
  }

  function handleNo() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div
    style={{display: "block"}}
    >
      {yesPressed ? (
        <>
          <img
            style={{
              height:"250px",
            }}
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="bear-Kissing"
          />
          <div style={{
            fontSize: "30px",
            fontWeight: "700",
            background: "rgb(255, 65, 65)",
            width: "fit-content",
            padding: "8px",
            border: "solid rgb(125, 108, 108) 3px",
            borderRadius: "12px",
            color: "#FFF"
          }}>
            Síiiiiiiii, yo sabía cariño
          </div>
        </>
      ) : (
        <>
          <div>
            <img
              src="https://media1.tenor.com/m/u1OqA3bNXyQAAAAC/hi-waving.gif"
            />
            <img
              src="https://media.tenor.com/uSUkySupnnUAAAAi/tkthao219-bubududu.gif"
            />
          </div>

          <div
            
            style={{
              fontSize: "30px",
            }}
          >
            Quieres ser mi San Valentín?
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <button
             
              style={{
                fontSize: yesButtonSize,
                minWidth: "160px",
                minheight: "100px",
                backgroundColor: "rgb(94, 243, 119)",
                marginRight: "40px",
                borderRadius: "10px",
                border: "solid 6px rgb(255, 138, 195)",
                fontWeight: "800",
                letterSpacing: "0.6px",
              }}
              onClick={handleYes}
            >
              Sí ❤️
            </button>
            <button
              
              style={{
                width: "160px",
                height: "100px",
                backgroundColor: "rgb(251, 59, 83)",
                marginRight: "40px",
                borderRadius: "10px",
                border: "solid 6px rgb(255, 138, 195)",
                fontWeight: "800",
                letterSpacing: "0.6px",
              }}
              onClick={handleNo}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
