//Cotação de moedas do dia.
const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

//Obtendo os elementos do formulário.
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// Manipulando o input amout para receber somente números.
amount.addEventListener("input", () => {
  const hasCharacteresRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharacteresRegex, "");
});

// Capturando o evento de submit do formulário.
form.addEventListener("submit", (e) => {
  e.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
});

//Função para converter a moeda.
const convertCurrency = (amount, price, symbol) => {
  try {
    //Exibindo a cotação da moeda selecionada.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    //Caçcula o total.
    let total = amount * price;

    //Exibe o resultado total.
    result.textContent = `${formatCurrencyBRL(total)}`;

    //Aplicando a classe que exibe o footer para mostrar o resultado.
    footer.classList.add("show-result");
  } catch (error) {
    //Remove a classe do footer Removendo ele.
    footer.classList.remove("show-result");
  }
};

//Formata a moeda em Real Brasileiro.
const formatCurrencyBRL = (value) => {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
