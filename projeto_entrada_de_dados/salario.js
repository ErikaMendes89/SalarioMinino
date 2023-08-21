import entradaDados from 'readline-sync';

let continua = true;

let Etiqueta_ano = "ano: ";
let Etiqueta_salario = "salario: ";
let Etiqueta_inflacao = "IPCA: ";
let Etiqueta_crescimento = "Crescimento Salarial: ";

Etiqueta_ano = Etiqueta_ano.padEnd(30, '.');
Etiqueta_salario = Etiqueta_salario.padEnd(30, '.');
Etiqueta_inflacao = Etiqueta_inflacao.padEnd(30, '.');
Etiqueta_crescimento = Etiqueta_crescimento.padEnd(30, '.');

while(continua){
console.log("Eescolha uma das alternativas:");
console.log("1-Listar os salarios minimos de 2010 a 2020");
console.log("2-Listar o indice IPCA de 2010 à 2020");
console.log("3-Comparação entre o percentual de aumento salarial e o IPCA");

let escolha = entradaDados.question("Digite o numero da opção escolhida:");//entrada de dados para a escolha


   switch(escolha){
       case '1':
          console.log("Opção escolhida: 1");
          setTimeout(function(){
          for(let i=0; i < Lista_salario.length; i++){
            let ano= Lista_salario[i].ano;
            let salario= Lista_salario[i].salario;
            console.log("\n");
            console.log(Etiqueta_salario+"R$ "+ salario);
            console.log(Etiqueta_ano + ano);
          }
        }, 1500);
        continua = false;
         break;
       case '2':
         console.log("Opção escolhida: 2");
         setTimeout(function(){
            for(let j=0; j < Lista_inflacao.length; j++){
                let Inflacao = Lista_inflacao[j].inflacao;
                let ano = Lista_inflacao[j].ano;
                let formatacao_Inflacao = Inflacao.toFixed(2).replace(".",",");
              console.log("\n");
              console.log(Etiqueta_inflacao + formatacao_Inflacao + "%");
              console.log(Etiqueta_ano + ano);
            }
          }, 1500);
          continua = false;
         break;
        case '3':
         console.log("Opção escolhida: 3");
         setTimeout(function(){
          for(let k=0; k < Lista_salario.length; k++){
              let salario = Lista_salario[k].salario;
              let ano = Lista_salario[k].ano;
              let percentual_crescimento;
              let crescimento_formatado;
              
              if(k>0){

                let salario_Anterior = Lista_salario[k-1].salario;
                let diferenca = salario - salario_Anterior;

                percentual_crescimento = (diferenca / salario_Anterior) * 100; 

                crescimento_formatado = percentual_crescimento.toFixed(2).replace(".", ",");
                            
              }else{
                crescimento_formatado="-";
              }

              let ipca = Lista_inflacao[k].inflacao;

              let salario_formatado = salario.toFixed(2).replace(".",",");
              let inflacao_formatado = ipca.toFixed(2).replace(".",",");

              console.log("\n");
              console.log(Etiqueta_ano + ano);
              console.log(Etiqueta_salario + "R$" + salario);
              console.log(Etiqueta_crescimento + crescimento_formatado);
              console.log(Etiqueta_inflacao + inflacao_formatado + " %");
              

          }
        }, 1500);
         continua = false;
         
         break;
       default:
         console.log("Opção inválida. Escolha novamente.");

      

    }
};


let Lista_salario=[
    {salario: 510 , ano:2010},
    {salario:545, ano:2011},
    {salario:622, ano:2012},
    {salario:678, ano:2013},
    {salario:724, ano:2014},
    {salario:788, ano:2015},
    {salario:880, ano:2016},
    {salario:937, ano:2017},
    {salario:954, ano:2018},
    {salario:998, ano:2019},
    {salario:1045, ano:2020}
];

let Lista_inflacao=[
    {inflacao:5.91 , ano:2010},
    {inflacao:6.50 , ano:2011},
    {inflacao:5.84 , ano:2012},
    {inflacao:5.91 , ano:2013},
    {inflacao:6.41 , ano:2014},
    {inflacao:10.67 , ano:2015},
    {inflacao:6.29 , ano:2016},
    {inflacao:2.95 , ano:2017},
    {inflacao:3.75 , ano:2018},
    {inflacao:4.31 , ano:2019},
    {inflacao:4.52 , ano:2020}
];

