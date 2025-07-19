const m = document.querySelector("#m");
const w = document.querySelector("#w");

m.addEventListener("click", () => {
  m.classList.add("m-active");
  w.classList.remove("w-active");
});

w.addEventListener("click", () => {
  w.classList.add("w-active");
  m.classList.remove("m-active");
});

// Impedir entrada não numérica nos campos
function isNumberKey(e) {
  return (
    (e.key >= "0" && e.key <= "9") ||
    [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Tab",
    ].includes(e.key)
  );
}

const calc = document.querySelector("#box-btn");
calc.addEventListener("click", () => {
  if (calc.classList.contains("btn-pressed")) {
    location.reload();
    window.scrollTo(0, 0);
    return;
  }

  const idade = document.querySelector("#idade").value;
  const altura = document.querySelector("#altura").value;
  const peso = document.querySelector("#peso").value;

  if (!m.classList.contains("m-active") && !w.classList.contains("w-active")) {
    alert("Selecione o sexo!");
    return;
  }
  if (!idade || !altura || !peso) {
    alert("Preencha todos os campos!");
    return;
  }

  const imc = (peso / ((altura / 100) * (altura / 100))).toFixed(2);
  let classification;

  const txtResult = document.querySelector("#txt-result");
  const boxResult = document.querySelector("#box-result");

  boxResult.style.display = "flex";
  boxResult.scrollIntoView({ behavior: "smooth", block: "center" });

  const lines = document.querySelectorAll(".line");
  war = true;
  if (imc < 18.5) {
    lines[0].style.color = "red";
    classification = "Abaixo do peso";
  } else if (imc < 24.9) {
    lines[1].style.color = "green";
    classification = "Peso normal";
    war = false;
  } else if (imc < 29.9) {
    lines[2].style.color = "red";
    classification = "Sobrepeso";
  } else if (imc < 34.9) {
    lines[3].style.color = "red";
    classification = "Obesidade grau I";
  } else if (imc < 39.9) {
    lines[4].style.color = "red";
    classification = "Obesidade grau II";
  } else {
    lines[5].style.color = "red";
    classification = "Obesidade grau III";
  }

  txtResult.textContent = `Seu IMC é ${imc} e você está classificado com: ${classification}`;

  btnRefreshCalc();
  iconStyle(war);
  resultMsg(war);
});

function btnRefreshCalc() {
  const icone = document.createElement("ion-icon");
  icone.setAttribute("name", "refresh-outline");
  calc.innerHTML = "";
  calc.append(icone);
  calc.classList.add("btn-pressed");
}

function iconStyle(bool) {
  const icon = document.querySelector("#icon");
  if (bool) {
    icon.name = "warning-outline";
    icon.classList.add("icon-red");
  } else {
    icon.classList.add("icon-green");
  }
}

function resultMsg(bool) {
  const txtResult = document.querySelector("#txt-message");

  if (bool) {
    txtResult.textContent =
      "⚠️ Seu IMC está fora da faixa considerada saudável, é importante considerar uma avaliação médica para melhores orientações. Lembrando que manter um IMC saudável evita problemas de saúde como diabetes, hipertensão, desnutrição e doenças cardíacas.";
  } else {
    txtResult.textContent =
      "✅ Seu IMC está dentro da faixa considerada saudável. Isso é um ótimo indicativo de equilíbrio entre peso e altura. Continue mantendo hábitos saudáveis, como alimentação equilibrada e prática regular de atividades físicas.";
  }
}

window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});
