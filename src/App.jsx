import { useState } from "react";

const languages = [
  { code: 'en', name: "Inglês"},
  { code: 'es', name: "Espanhol"},
  { code: 'fr', name: "Francês"},
  { code: 'de', name: "Alemão"},
  { code: 'it', name: "Italiano"},
  { code: 'pt', name: "Português"},
  { code: 'ar', name: "Árabe"},
  { code: 'et', name: "Estoniano"},
  { code: 'ko', name: "Coreano"},
  { code: 'ja', name: "Japonês"},
]

function App() {
	return (
		<div className="min-h-screen bg-background flex flex-col">

      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center">
			    <h1 className="text-hcolor text-2xl font-bold">React Tradutor</h1>
        </div>
      </header>

      <main className="flex-grow flex items-start justify-center px-4 py-5">
        <div className="w-full max-w-5xl bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">

            <select className="text-sm text-txtcolor bg-transparent border-none focus:outline-none cursor-pointer">
              {/* Seletor para pegar automaticamente os idiomas da lista acima */}
              { languages.map( (lang) => {
                  // React saberá separar os idiomas aqui
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              })}
            </select>

            <button className="p-2 rounded-full hover:bg-gray-100 outline-none">
              <svg
                className="w-5 h-5 text-hcolor"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </button>

            <select className="text-sm text-txtcolor bg-transparent border-none focus:outline-none cursor-pointer">
              { languages.map( (lang) => {
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              })}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">

            <div className="p-4">
              <textarea 
                placeholder="Digite aqui..."
                className="w-full h-40 text-lg text-txtcolor bg-transparent resize-none border-none outline-none">
              </textarea>
            </div>
          </div>
        </div>
      </main>
		</div>
	);
}

export default App;
