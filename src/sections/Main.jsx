import React from 'react'; 
import image from '../img/image 33.png'; 
import secondImage from '../img/Group 15768.png'; 

function Main() {
  return (
    <main className="bg-white p-10">
      <div className="max-w-4xl mx-auto text-center">
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4">O que é Disfagia?</h2>
          <p className="text-lg text-gray-700">
            Disfagia é a dificuldade em engolir, que pode ocorrer devido a diversas condições, como problemas neurológicos, lesões ou doenças que afetam a garganta ou o esôfago.
            Os sintomas podem incluir dor ao engolir, sensação de que os alimentos ficam presos na garganta e regurgitação.
          </p>
        </section>
        
        
        <div className="flex justify-center items-center mb-10">
          <div className="w-64 h-64">
            <img 
              src={image} 
              alt="Consultório" 
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4">Como Tratar a Disfagia?</h2>
          <p className="text-lg text-gray-700">
            O tratamento da disfagia depende da causa subjacente. As opções podem incluir terapia de deglutição com fonoaudiólogo, mudanças na dieta, como a ingestão de alimentos mais macios, e, em alguns casos, medicamentos ou cirurgias.
            É essencial consultar um profissional de saúde para avaliação e planejamento do tratamento adequado.
          </p>
        </section>

       
        <div className="mt-80 flex mb-10"> 
          <div className="flex-shrink-0 w-[500px] h-[500px] mr-4"> 
            <img 
              src={secondImage} 
              alt="Tratamento" 
              className="object-contain w-full h-full"
            />
          </div>
          <div className="text-left">
            <h1 className="text-2xl font-bold mb-2">O que é um Fonoaudiólogo afinal?</h1>
            <h2 className="text-lg text-gray-700">
              Um fonoaudiólogo é um profissional de saúde especializado na prevenção, diagnóstico e tratamento de distúrbios relacionados à comunicação, audição, voz, linguagem, fala, e deglutição. Eles trabalham com pessoas de todas as idades, desde bebês até idosos, abordando uma ampla gama de condições que podem afetar a capacidade de falar, ouvir, compreender, e interagir de forma eficaz.
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
