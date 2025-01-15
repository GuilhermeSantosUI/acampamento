export function Header() {
  return (
    <div className="order-2 mt-6 flex items-center justify-between px-page-px lg:order-1 lg:px-0 lg:mt-12">
      <div className="flex flex-col gap-2 lg:w-[unset] lg:gap-3">
        <h1 className="font-display text-xl lg:text-2.5xl">
          Eventos de Acampamento
        </h1>
        <div className="flex items-center space-x-3">
          <p className="text-sm text-gray-80 lg:text-base">
            12 de setembro de 2021 - Gerenciamento de eventos
          </p>
          <div className="rounded-full border border-border p-2 lg:flex hidden text-xs text-gray-80 font-medium leading-none">
            #2912
          </div>
        </div>
      </div>
      <div className="hidden items-center gap-6 underline lg:flex">
        <button className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d="M8 9H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-2m-4-7v11M9.001 5 12 2l3 3"
            />
          </svg>
          <span>Compartilhar</span>
        </button>
        <button aria-label="Favoritar" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width={20}
            height={18}
            viewBox="0 0 20 18"
            aria-hidden="true"
            className="transition-colors"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M13.696 1C16.871 1 19 3.98 19 6.755 19 12.388 10.161 17 10 17c-.161 0-9-4.612-9-10.245C1 3.98 3.129 1 6.304 1 8.119 1 9.311 1.905 10 2.711 10.689 1.905 11.881 1 13.696 1Z"
              clipRule="evenodd"
            />
          </svg>
          <span>Favorito</span>
        </button>
      </div>
    </div>
  );
}
