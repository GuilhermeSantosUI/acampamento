export function ImageGrid() {
  return (
    <div className="flex items-center justify-center flex-col-reverse">
      <div className="container">
        <div className="order-2 mt-6 flex items-center justify-between px-page-px lg:order-1 lg:px-0 lg:mt-12">
          <div className="flex flex-col gap-2 lg:w-[unset] lg:gap-3">
            <h1 className="font-display text-xl lg:text-2.5xl">
              Casa para alugar com 4 quartos e 2 vagas, 260m²
            </h1>
            <div className="flex items-center space-x-3">
              <p className="text-sm text-gray-80 lg:text-base">
                Passo Fundo, Petrópolis, Rua Roberto Tasca, 142
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
                fill="none">
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
                className="transition-colors">
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

        <ImageGridHeader />

        <div className="container pb-32 mt-6 flex flex-col px-page-px xl:mt-12 lg:px-0 relative">
          <div className="flex flex-col xl:grid xl:grid-cols-12 xl:gap-24">
            <div className="col-span-7 flex flex-col">
              <ul className="grid w-full grid-cols-2 gap-5 lg:flex lg:flex-wrap">
                <li className="flex items-center gap-2 lg:gap-6 border-border lg:w-[120px] lg:flex-col lg:items-start lg:rounded-lg lg:border lg:p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-ruler size-5 lg:size-6">
                    <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
                    <path d="m14.5 12.5 2-2" />
                    <path d="m11.5 9.5 2-2" />
                    <path d="m8.5 6.5 2-2" />
                    <path d="m17.5 15.5 2-2" />
                  </svg>
                  <span className="relative text-sm lg:text-base leading-none lg:flex lg:flex-col">
                    260m² privativo
                  </span>
                </li>
                <li className="flex items-center gap-2 lg:gap-6 border-border lg:w-[120px] lg:flex-col lg:items-start lg:rounded-lg lg:border lg:p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-sofa size-5 lg:size-6">
                    <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
                    <path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" />
                    <path d="M4 18v2" />
                    <path d="M20 18v2" />
                    <path d="M12 4v9" />
                  </svg>
                  <span className="relative text-sm lg:text-base leading-none lg:flex lg:flex-col">
                    Mobiliado
                  </span>
                </li>
                <li className="flex items-center gap-2 lg:gap-6 border-border lg:w-[120px] lg:flex-col lg:items-start lg:rounded-lg lg:border lg:p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-bed-double size-5 lg:size-6">
                    <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
                    <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
                    <path d="M12 4v6" />
                    <path d="M2 18h20" />
                  </svg>
                  <span className="relative text-sm lg:text-base leading-none lg:flex lg:flex-col">
                    4 quartos
                    <span className="absolute left-0 top-full pt-1.5 text-xxs text-gray-80 lg:static lg:pt-1 lg:text-xs">
                      1 suíte
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2 lg:gap-6 border-border lg:w-[120px] lg:flex-col lg:items-start lg:rounded-lg lg:border lg:p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-car-front size-5 lg:size-6">
                    <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" />
                    <path d="M7 14h.01" />
                    <path d="M17 14h.01" />
                    <rect width={18} height={8} x={3} y={10} rx={2} />
                    <path d="M5 18v2" />
                    <path d="M19 18v2" />
                  </svg>
                  <span className="relative text-sm lg:text-base leading-none lg:flex lg:flex-col">
                    2 vagas
                  </span>
                </li>
                <li className="flex items-center gap-2 lg:gap-6 border-border lg:w-32 lg:flex-col lg:items-start lg:rounded-lg lg:border lg:p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-bath size-5 lg:size-6">
                    <path d="M10 4 8 6" />
                    <path d="M17 19v2" />
                    <path d="M2 12h20" />
                    <path d="M7 19v2" />
                    <path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                  </svg>
                  <span className="relative text-sm lg:text-base leading-none lg:flex lg:flex-col">
                    2 banheiros
                  </span>
                </li>
                <li className="flex items-center gap-2 lg:gap-6 border-border lg:w-32 lg:flex-col lg:items-start lg:rounded-lg lg:border lg:p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-toilet size-5 lg:size-6">
                    <path d="M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18" />
                    <path d="M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8" />
                  </svg>
                  <span className="relative text-sm lg:text-base leading-none lg:flex lg:flex-col">
                    2 lavabos
                  </span>
                </li>
              </ul>
              <div className="mt-6 flex items-center justify-between text-xs leading-none text-gray-80">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-clock">
                    <circle cx={12} cy={12} r={10} />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>
                    Publicado há{' '}
                    <time
                      dateTime="2025-01-09T17:48:39.691636+00:00"
                      className="text-xs">
                      cerca de 8 horas
                    </time>
                  </span>
                </div>
                <div className="rounded-full border border-border p-2 flex lg:hidden text-xs text-gray-80 font-medium leading-none">
                  #2912
                </div>
              </div>
              <div className="mt-8 xl:mt-0 xl:absolute xl:right-0 xl:top-0 w-full xl:max-w-md xl:h-full">
                <div className="xl:sticky xl:top-4 xl:right-0">
                  <div className="-mx-2 flex flex-col rounded-lg border border-gray-20 bg-background text-sm leading-none shadow-strong lg:mx-[unset]">
                    <div className="p-6 lg:p-8">
                      <div className="relative flex w-full flex-col leading-none">
                        <div className="text-sm lg:text-base">Aluguel</div>
                        <div className="flex items-center gap-2">
                          <div className="font-display text-2xl lg:text-[28px]">
                            R$&nbsp;7.500
                          </div>
                        </div>
                        <button
                          className="absolute right-0 top-0 flex h-7 w-7 items-center justify-center"
                          aria-label="Sobre os preços"
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:r2:"
                          data-state="closed">
                          <div className="flex h-5 w-5 items-center justify-center overflow-hidden rounded-full bg-gray-30 text-center text-xs leading-none">
                            <div className="h-min w-min">?</div>
                          </div>
                        </button>
                      </div>
                      <div className="flex flex-col text-sm lg:text-base leading-none mt-6">
                        <div className="flex flex-col gap-3">
                          <span className="flex items-center justify-between">
                            <span>IPTU</span>
                            <span className="font-display">R$&nbsp;222</span>
                          </span>
                          <span className="flex items-center justify-between">
                            <span>Proteção Contra Incêndio</span>
                            <span className="font-display">R$&nbsp;113</span>
                          </span>
                          <span className="flex items-center justify-between">
                            <span>Condomínio (pago à parte)</span>
                            <span className="font-display">Isento</span>
                          </span>
                        </div>
                      </div>
                      <div
                        data-orientation="horizontal"
                        role="none"
                        className="shrink-0 bg-border h-[1px] w-full my-6"
                      />
                      <div className="grid grid-cols-2 grid-rows-1 text-xs">
                        <div className="flex h-full items-center text-left text-xl leading-none">
                          <div className="w-full font-display text-black underline-offset-2 lg:underline font-medium">
                            Total R$&nbsp;7.835
                          </div>
                        </div>
                        <div className="text-right text-gray-80">
                          Acumule{' '}
                          <strong className="text-black">
                            R$&nbsp;150 de Cashback
                          </strong>{' '}
                          todos os meses
                        </div>
                      </div>
                      <div
                        data-orientation="horizontal"
                        role="none"
                        className="shrink-0 bg-border h-[1px] w-full my-6"
                      />
                      <div className="flex flex-col gap-8">
                        <button className="flex items-center justify-center gap-1 text-black outline-none lg:text-base hidden lg:flex">
                          <div className="underline">Enviar proposta</div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-right">
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </button>
                        <button className="items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background text-black hover:border-gray-50 drop-shadow-outline px-8 py-3 h-[48px] rounded-full flex lg:hidden border-black">
                          Enviar proposta
                        </button>
                        <button className="items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 drop-shadow-primary px-8 py-3 h-[48px] rounded-full hidden lg:flex">
                          Agendar visita gratuita
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative my-8 h-px w-full lg:my-8">
                <div
                  data-orientation="horizontal"
                  role="none"
                  className="shrink-0 bg-border w-full h-px"
                />
              </div>
              <div className="flex flex-col text-sm leading-none">
                <h2 className="text-gray-80">Características</h2>
                <ul className="mt-4 grid w-full grid-cols-2 gap-2 lg:mt-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-3">
                  <li className="flex items-center gap-2 lg:gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-dumbbell">
                      <path d="M14.4 14.4 9.6 9.6" />
                      <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
                      <path d="m21.5 21.5-1.4-1.4" />
                      <path d="M3.9 3.9 2.5 2.5" />
                      <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
                    </svg>
                    <span className="relative text-sm lg:text-base leading-none">
                      Academia
                    </span>
                  </li>
                  <li className="flex items-center gap-2 lg:gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-accessibility">
                      <circle cx={16} cy={4} r={1} />
                      <path d="m18 19 1-7-6 1" />
                      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
                      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
                      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
                    </svg>
                    <span className="relative text-sm lg:text-base leading-none">
                      Acessibilidade
                    </span>
                  </li>
                  <li className="flex items-center gap-2 lg:gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-drafting-compass">
                      <path d="m12.99 6.74 1.93 3.44" />
                      <path d="M19.136 12a10 10 0 0 1-14.271 0" />
                      <path d="m21 21-2.16-3.84" />
                      <path d="m3 21 8.02-14.26" />
                      <circle cx={12} cy={5} r={2} />
                    </svg>
                    <span className="relative text-sm lg:text-base leading-none">
                      Móveis Sob Medida
                    </span>
                  </li>
                  <li className="flex items-center gap-2 lg:gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-glass-water">
                      <path d="M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z" />
                      <path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
                    </svg>
                    <span className="relative text-sm lg:text-base leading-none">
                      Água de Poço
                    </span>
                  </li>
                  <li className="flex items-center gap-2 lg:gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-shield">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    </svg>
                    <span className="relative text-sm lg:text-base leading-none">
                      Bairro Seguro
                    </span>
                  </li>
                  <li className="flex items-center gap-2 lg:gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-beef">
                      <circle cx="12.5" cy="8.5" r="2.5" />
                      <path d="M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z" />
                      <path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" />
                    </svg>
                    <span className="relative text-sm lg:text-base leading-none">
                      Churrasqueira
                    </span>
                  </li>
                  <li className="flex items-center gap-2 lg:gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-waves">
                      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                    </svg>
                    <span className="relative text-sm lg:text-base leading-none">
                      Piscina
                    </span>
                  </li>
                  <li className="flex items-center gap-2 lg:gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-bed">
                      <path d="M2 4v16" />
                      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
                      <path d="M2 17h20" />
                      <path d="M6 8v9" />
                    </svg>
                    <span className="relative text-sm lg:text-base leading-none">
                      Quartos Grandes
                    </span>
                  </li>
                  <li className="flex items-center gap-2 lg:gap-3">
                    <span className="relative text-sm lg:text-base leading-none">
                      Recém Reformado
                    </span>
                  </li>
                  <li className="flex items-center gap-2 lg:gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-car">
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                      <circle cx={7} cy={17} r={2} />
                      <path d="M9 17h6" />
                      <circle cx={17} cy={17} r={2} />
                    </svg>
                    <span className="relative text-sm lg:text-base leading-none">
                      Vaga Dupla
                    </span>
                  </li>
                  <li className="flex items-center gap-2 lg:gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-party-popper">
                      <path d="M5.8 11.3 2 22l10.7-3.79" />
                      <path d="M4 3h.01" />
                      <path d="M22 8h.01" />
                      <path d="M15 2h.01" />
                      <path d="M22 20h.01" />
                      <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
                      <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17" />
                      <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7" />
                      <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" />
                    </svg>
                    <span className="relative text-sm lg:text-base leading-none">
                      Salão de Festas
                    </span>
                  </li>
                  <li className="flex items-center gap-2 lg:gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-volume-x">
                      <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
                      <line x1={22} x2={16} y1={9} y2={15} />
                      <line x1={16} x2={22} y1={9} y2={15} />
                    </svg>
                    <span className="relative text-sm lg:text-base leading-none">
                      Rua Silenciosa
                    </span>
                  </li>
                  <li className="flex items-center gap-2 lg:gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-map-pin">
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx={12} cy={10} r={3} />
                    </svg>
                    <span className="relative text-sm lg:text-base leading-none">
                      Localização Privilegiada
                    </span>
                  </li>
                  <li className="flex items-center gap-2 lg:gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-sun">
                      <circle cx={12} cy={12} r={4} />
                      <path d="M12 2v2" />
                      <path d="M12 20v2" />
                      <path d="m4.93 4.93 1.41 1.41" />
                      <path d="m17.66 17.66 1.41 1.41" />
                      <path d="M2 12h2" />
                      <path d="M20 12h2" />
                      <path d="m6.34 17.66-1.41 1.41" />
                      <path d="m19.07 4.93-1.41 1.41" />
                    </svg>
                    <span className="relative text-sm lg:text-base leading-none">
                      Sol da Manhã
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative my-8 h-px w-full lg:my-8">
                <div
                  data-orientation="horizontal"
                  role="none"
                  className="shrink-0 bg-border w-full h-px"
                />
              </div>
              <div className="flex flex-col text-sm lg:text-base">
                <h2 className="text-sm leading-none text-gray-80">Mobília</h2>
                <p className="mt-5 lg:mt-6">
                  Armários na Cozinha, Armários na Lavanderia, Armários no
                  Banheiro, Armários no Quarto, Armários para Despensa, Cadeira
                  de Balanço, Cama de Casal, Cama de Solteiro, Cômoda para
                  Quarto, Rack/Painel de TV, Cortinas e Persianas, Escrivaninha
                  Home Office, Espelhos, Estante/Biblioteca, Guarda-Roupa, Itens
                  de Decoração, Lustres e Luminárias, Mesa de Cabeceira, Mesa e
                  Cadeiras de Jantar, Utensílios de Cozinha.
                </p>
              </div>
              <div className="relative my-8 h-px w-full lg:my-8">
                <div
                  data-orientation="horizontal"
                  role="none"
                  className="shrink-0 bg-border w-full h-px"
                />
              </div>
              <div className="flex flex-col text-sm lg:text-base">
                <h2 className="text-sm leading-none text-gray-80">
                  Eletrodomésticos
                </h2>
                <p className="mt-5 lg:mt-6">
                  Ar-Condicionado, Micro-ondas, Forno Elétrico, Fogão,
                  Geladeira, Máquina de Lavar, Climatizador de Ambiente,
                  Churrasqueira Elétrica, Central de Ar.
                </p>
              </div>
              <div className="relative my-8 h-px w-full lg:my-8">
                <div
                  data-orientation="horizontal"
                  role="none"
                  className="shrink-0 bg-border w-full h-px"
                />
              </div>
              <div className="flex flex-col text-sm lg:text-base">
                <h2 className="text-sm leading-none text-gray-80">Sobre</h2>
                <p className="mt-5 lg:mt-6">
                  Descubra sua nova casa no bairro Petrópolis, em Passo Fundo!
                  Esta espaçosa residência de 260 m² conta com 4 quartos e 2
                  banheiros, perfeita para famílias. Com 2 vagas de garagem,
                  oferece conforto e praticidade. Aproveite a tranquilidade do
                  condomínio e a localização privilegiada, próxima a comércio e
                  serviços. Venha conhecer!
                </p>
              </div>
              <div className="relative my-8 h-px w-full lg:my-8">
                <div
                  data-orientation="horizontal"
                  role="none"
                  className="shrink-0 bg-border w-full h-px"
                />
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={43}
                    height={32}
                    fill="none"
                    viewBox="0 0 87 32">
                    <path
                      fill="currentColor"
                      d="M22.775 6.503c-.884-.494-1.974-.741-3.27-.742a7.049 7.049 0 0 0-1.473.163 6.577 6.577 0 0 0-1.5.52 6.19 6.19 0 0 0-1.357.89 4.786 4.786 0 0 0-.777.865 4.57 4.57 0 0 0-.843-1.161 4.092 4.092 0 0 0-1.65-.995 6.553 6.553 0 0 0-1.945-.282 7.586 7.586 0 0 0-1.297.12 5.454 5.454 0 0 0-1.326.416 5.261 5.261 0 0 0-1.222.786 4.116 4.116 0 0 0-.44.44L5.54 6.089H0v15.886h5.982V12.53a1.782 1.782 0 0 1 .147-.742c.099-.219.233-.42.398-.594.171-.181.383-.319.618-.4.26-.092.535-.138.81-.134.336-.01.667.073.958.24.267.159.478.397.604.682.138.297.207.663.207 1.099v9.295h5.981V12.53a1.783 1.783 0 0 1 .148-.742c.099-.219.233-.42.398-.594a1.56 1.56 0 0 1 .619-.4c.26-.092.534-.138.81-.134a1.84 1.84 0 0 1 .957.24c.267.159.477.397.604.682.137.297.206.663.206 1.099v9.295h5.982v-9.802c0-1.366-.221-2.529-.663-3.49-.442-.96-1.106-1.687-1.99-2.182ZM63.317 9.768c-.59-1.247-1.4-2.227-2.431-2.94-1.032-.713-2.215-1.068-3.551-1.067a6.449 6.449 0 0 0-1.914.282 5.819 5.819 0 0 0-1.65.802 5.702 5.702 0 0 0-.618.506V0H47.14v21.975h5.392l.198-1.475c.288.304.613.57.967.792a6.37 6.37 0 0 0 1.724.742 7.76 7.76 0 0 0 2.063.267c1.297 0 2.45-.351 3.462-1.054 1.012-.703 1.807-1.672 2.384-2.91.58-1.238.869-2.668.869-4.29 0-1.604-.293-3.03-.882-4.279Zm-5.29 6.09c-.206.494-.506.875-.898 1.143-.393.267-.874.4-1.444.4s-1.056-.133-1.459-.4a2.47 2.47 0 0 1-.913-1.144c-.206-.495-.31-1.098-.31-1.811 0-.713.104-1.322.31-1.826.206-.506.51-.887.913-1.144.403-.257.889-.385 1.459-.386.57 0 1.05.13 1.444.386.393.258.692.639.898 1.144.206.504.31 1.113.31 1.826 0 .713-.103 1.316-.31 1.811ZM36.167 5.76c-4.867 0-8.813 3.711-8.813 8.289 0 4.577 3.944 8.288 8.81 8.288 4.866 0 8.81-3.711 8.81-8.288 0-4.578-3.943-8.288-8.807-8.288Zm0 11.646c-1.972 0-3.568-1.503-3.568-3.355 0-1.853 1.598-3.356 3.568-3.356s3.567 1.503 3.567 3.355c0 1.853-1.596 3.356-3.567 3.356ZM84.74 26.264c-1.367-1.407-3.074-2.07-4.994-2.131-1.8-.057-3.602-.018-5.403-.024a3.144 3.144 0 0 1-.504-.037c-.599-.101-.931-.51-.842-1.025.043-.274.178-.525.384-.709a.499.499 0 0 1 .404-.104c.46.068.925.103 1.39.103 4.867 0 8.811-3.71 8.811-8.288a7.888 7.888 0 0 0-1.27-4.28.435.435 0 0 1 .264-.66c.117-.024.237-.036.357-.037.455-.006-2.116-.652-1.659-.652L81.257 8c-1.036.065 0 .42-1.263-.422-1.716.311.842 0-2.035-1.522a.136.136 0 0 1-.163.08 9.325 9.325 0 0 0-2.627-.376c-4.865 0-8.81 3.711-8.81 8.288 0 2.228.934 4.25 2.455 5.74a.117.117 0 0 1-.01.18 4.846 4.846 0 0 0-.345.283c-1.221 1.116-1.843 2.534-1.947 4.165-.137 2.087.594 3.788 2.382 4.949 1.06.688 2.247.999 3.492 1.024 1.82.035 3.64.011 5.459.021a3.43 3.43 0 0 1 .78.084c.784.187 1.26.7 1.454 1.506l6.647-1.879c-.332-1.48-.944-2.785-1.985-3.857ZM71.605 14.049c0-1.854 1.598-3.356 3.568-3.356s3.568 1.504 3.568 3.356c0 1.852-1.598 3.356-3.568 3.356s-3.568-1.502-3.568-3.356Z"
                    />
                    <path
                      fill="currentColor"
                      d="M77.889 2.526h6.736v6.736H77.89V2.526Z"
                    />
                  </svg>
                  <div className="inline-flex items-center uppercase rounded-full border px-2.5 h-6 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                    Gratuito
                  </div>
                </div>
                <h2 className="mb-3 font-display text-lg lg:text-2xl font-medium text-black">
                  Compare o preço desse imóvel <br /> com o mercado.
                </h2>
                <div>
                  <p className="text-gray-80 lg:text-base mb-3">
                    Tenha acesso a informações detalhadas sobre o preço do
                    imóvel com uma conta!
                  </p>
                  <a
                    className="underline text-black font-medium"
                    href="/criar-conta?redirect_url=/imovel/casa-para-alugar-com-3-quartos-no-petropolis-em-passo-fundo-002912">
                    Desbloquear análise completa
                  </a>
                  <div className="mt-6 pt-8 pb-8">
                    <div className="relative">
                      <div className="relative mb-6">
                        <div className="absolute transform -translate-x-1/2 left-6 -top-12 bg-black text-white px-3 py-1 rounded-lg text-sm font-semibold">
                          R$-
                          <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-black" />
                        </div>
                      </div>
                      <div className="relative flex items-center gap-1 sm:gap-2">
                        <div className="w-[15%] h-2 rounded-l bg-green" />
                        <div className="w-[45%] h-2 bg-green/50" />
                        <div className="w-[25%] h-2 bg-orange" />
                        <div className="w-[15%] h-2 rounded-r bg-red" />
                        <div className="absolute transform -translate-x-1/2 left-[15%] -bottom-9 text-black font-semibold">
                          R$-
                        </div>
                        <div className="absolute transform -translate-x-1/2 left-[60%] -bottom-9 text-black font-semibold">
                          R$-
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-8 mt-6 border-t border-gray-30 space-y-3">
                    <div className="flex justify-between items-center">
                      <p className="text-gray-80 leading-none">Aluguel</p>
                      <div className="flex items-center gap-2">
                        <p className="leading-none text-black">R$&nbsp;7.500</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-80 leading-none">
                        Estimativa min.
                      </p>
                      <p className="text-black leading-none">R$-</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-80 leading-none">
                        Estimativa máx.
                      </p>
                      <p className="text-black leading-none">R$-</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative my-8 h-px w-full lg:my-8">
                <div
                  data-orientation="horizontal"
                  role="none"
                  className="shrink-0 bg-border w-full h-px"
                />
              </div>
              <div className="mb-16">
                <div className="flex items-center space-x-3 mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={43}
                    height={32}
                    fill="none"
                    viewBox="0 0 87 32">
                    <path
                      fill="currentColor"
                      d="M22.775 6.503c-.884-.494-1.974-.741-3.27-.742a7.049 7.049 0 0 0-1.473.163 6.577 6.577 0 0 0-1.5.52 6.19 6.19 0 0 0-1.357.89 4.786 4.786 0 0 0-.777.865 4.57 4.57 0 0 0-.843-1.161 4.092 4.092 0 0 0-1.65-.995 6.553 6.553 0 0 0-1.945-.282 7.586 7.586 0 0 0-1.297.12 5.454 5.454 0 0 0-1.326.416 5.261 5.261 0 0 0-1.222.786 4.116 4.116 0 0 0-.44.44L5.54 6.089H0v15.886h5.982V12.53a1.782 1.782 0 0 1 .147-.742c.099-.219.233-.42.398-.594.171-.181.383-.319.618-.4.26-.092.535-.138.81-.134.336-.01.667.073.958.24.267.159.478.397.604.682.138.297.207.663.207 1.099v9.295h5.981V12.53a1.783 1.783 0 0 1 .148-.742c.099-.219.233-.42.398-.594a1.56 1.56 0 0 1 .619-.4c.26-.092.534-.138.81-.134a1.84 1.84 0 0 1 .957.24c.267.159.477.397.604.682.137.297.206.663.206 1.099v9.295h5.982v-9.802c0-1.366-.221-2.529-.663-3.49-.442-.96-1.106-1.687-1.99-2.182ZM63.317 9.768c-.59-1.247-1.4-2.227-2.431-2.94-1.032-.713-2.215-1.068-3.551-1.067a6.449 6.449 0 0 0-1.914.282 5.819 5.819 0 0 0-1.65.802 5.702 5.702 0 0 0-.618.506V0H47.14v21.975h5.392l.198-1.475c.288.304.613.57.967.792a6.37 6.37 0 0 0 1.724.742 7.76 7.76 0 0 0 2.063.267c1.297 0 2.45-.351 3.462-1.054 1.012-.703 1.807-1.672 2.384-2.91.58-1.238.869-2.668.869-4.29 0-1.604-.293-3.03-.882-4.279Zm-5.29 6.09c-.206.494-.506.875-.898 1.143-.393.267-.874.4-1.444.4s-1.056-.133-1.459-.4a2.47 2.47 0 0 1-.913-1.144c-.206-.495-.31-1.098-.31-1.811 0-.713.104-1.322.31-1.826.206-.506.51-.887.913-1.144.403-.257.889-.385 1.459-.386.57 0 1.05.13 1.444.386.393.258.692.639.898 1.144.206.504.31 1.113.31 1.826 0 .713-.103 1.316-.31 1.811ZM36.167 5.76c-4.867 0-8.813 3.711-8.813 8.289 0 4.577 3.944 8.288 8.81 8.288 4.866 0 8.81-3.711 8.81-8.288 0-4.578-3.943-8.288-8.807-8.288Zm0 11.646c-1.972 0-3.568-1.503-3.568-3.355 0-1.853 1.598-3.356 3.568-3.356s3.567 1.503 3.567 3.355c0 1.853-1.596 3.356-3.567 3.356ZM84.74 26.264c-1.367-1.407-3.074-2.07-4.994-2.131-1.8-.057-3.602-.018-5.403-.024a3.144 3.144 0 0 1-.504-.037c-.599-.101-.931-.51-.842-1.025.043-.274.178-.525.384-.709a.499.499 0 0 1 .404-.104c.46.068.925.103 1.39.103 4.867 0 8.811-3.71 8.811-8.288a7.888 7.888 0 0 0-1.27-4.28.435.435 0 0 1 .264-.66c.117-.024.237-.036.357-.037.455-.006-2.116-.652-1.659-.652L81.257 8c-1.036.065 0 .42-1.263-.422-1.716.311.842 0-2.035-1.522a.136.136 0 0 1-.163.08 9.325 9.325 0 0 0-2.627-.376c-4.865 0-8.81 3.711-8.81 8.288 0 2.228.934 4.25 2.455 5.74a.117.117 0 0 1-.01.18 4.846 4.846 0 0 0-.345.283c-1.221 1.116-1.843 2.534-1.947 4.165-.137 2.087.594 3.788 2.382 4.949 1.06.688 2.247.999 3.492 1.024 1.82.035 3.64.011 5.459.021a3.43 3.43 0 0 1 .78.084c.784.187 1.26.7 1.454 1.506l6.647-1.879c-.332-1.48-.944-2.785-1.985-3.857ZM71.605 14.049c0-1.854 1.598-3.356 3.568-3.356s3.568 1.504 3.568 3.356c0 1.852-1.598 3.356-3.568 3.356s-3.568-1.502-3.568-3.356Z"
                    />
                    <path
                      fill="currentColor"
                      d="M77.889 2.526h6.736v6.736H77.89V2.526Z"
                    />
                  </svg>
                  <div className="inline-flex items-center uppercase rounded-full border px-2.5 h-6 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                    Gratuito
                  </div>
                </div>
                <h2 className="font-display text-lg lg:text-2xl font-medium text-black mb-6">
                  Localidades próximas
                </h2>
                <div>
                  <ul className="flex items-center scrollbar-hide overflow-x-auto overflow-y-hidden gap-2 sm:flex-row sm:flex-wrap sm:overflow-x-hidden">
                    <li
                      value="Academia"
                      className="h-8 min-w-0 shrink-0 grow-0 cursor-default border-gray-60 text-gray-60 select-none bg-white border rounded-full px-3 text-sm leading-none outline-none flex items-center justify-center">
                      Academia (1)
                    </li>
                    <li
                      value="Conveniência"
                      className="h-8 min-w-0 shrink-0 grow-0 cursor-default border-gray-60 text-gray-60 select-none bg-white border rounded-full px-3 text-sm leading-none outline-none flex items-center justify-center">
                      Conveniência (2)
                    </li>
                    <li
                      value="Correios"
                      className="h-8 min-w-0 shrink-0 grow-0 cursor-default border-gray-60 text-gray-60 select-none bg-white border rounded-full px-3 text-sm leading-none outline-none flex items-center justify-center">
                      Correios (2)
                    </li>
                    <li
                      value="Escola"
                      className="h-8 min-w-0 shrink-0 grow-0 cursor-default border-gray-60 text-gray-60 select-none bg-white border rounded-full px-3 text-sm leading-none outline-none flex items-center justify-center">
                      Escola (8)
                    </li>
                    <li
                      value="Outro"
                      className="h-8 min-w-0 shrink-0 grow-0 cursor-default border-gray-60 text-gray-60 select-none bg-white border rounded-full px-3 text-sm leading-none outline-none flex items-center justify-center">
                      Outro (1)
                    </li>
                    <li
                      value="Posto de Gasolina"
                      className="h-8 min-w-0 shrink-0 grow-0 cursor-default border-gray-60 text-gray-60 select-none bg-white border rounded-full px-3 text-sm leading-none outline-none flex items-center justify-center">
                      Posto de Gasolina (3)
                    </li>
                    <li
                      value="Restaurante"
                      className="h-8 min-w-0 shrink-0 grow-0 cursor-default border-gray-60 text-gray-60 select-none bg-white border rounded-full px-3 text-sm leading-none outline-none flex items-center justify-center">
                      Restaurante (2)
                    </li>
                    <li
                      value="Universidade"
                      className="h-8 min-w-0 shrink-0 grow-0 cursor-default border-gray-60 text-gray-60 select-none bg-white border rounded-full px-3 text-sm leading-none outline-none flex items-center justify-center">
                      Universidade (1)
                    </li>
                  </ul>
                  <div className="mt-6">
                    <p className="font-medium text-gray-80 lg:text-base mb-3">
                      Tenha acesso a informações detalhadas sobre os lugares
                      próximos do imóvel. É simples e rápido desbloquear essas
                      informações: basta criar uma conta gratuita na!
                    </p>
                    <a
                      className="underline text-black font-medium"
                      href="/criar-conta?redirect_url=/imovel/casa-para-alugar-com-3-quartos-no-petropolis-em-passo-fundo-002912">
                      Desbloquear localidades próximas
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-6 lg:space-y-8">
                <div className="font-display text-lg lg:text-2xl font-medium text-black">
                  Localização exata do imóvel
                </div>
                <div className="relative w-full">
                  <div
                    data-ntpc="GoogleMapsEmbed"
                    style={{ height: 300 }}></div>
                </div>
              </div>
              <div className="-mx-2 mt-12 lg:mt-16 border-l-2 border-foreground bg-card px-8 py-6 md:mx-0 lg:p-8">
                <h2 className="font-display text-lg leading-tight">
                  O que eu preciso para alugar?
                </h2>
                <ul className="mt-6 flex flex-wrap gap-5 text-xs leading-normal lg:gap-8 lg:text-sm">
                  <li className="flex w-max max-w-[150px] flex-shrink-0 flex-grow items-baseline gap-3">
                    <div className="flex flex-shrink-0 aspect-square h-4 w-4 items-center justify-center rounded-full bg-black">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={10}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check text-white">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span>Renda mensal acima de R$&nbsp;23.505</span>
                  </li>
                  <li className="flex w-max max-w-[150px] flex-shrink-0 flex-grow items-baseline gap-3">
                    <div className="flex flex-shrink-0 aspect-square h-4 w-4 items-center justify-center rounded-full bg-black">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={10}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check text-white">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span>Bom histórico de pagamentos</span>
                  </li>
                </ul>
                <div className="mt-8 flex flex-col gap-4 text-sm lg:flex-row lg:items-end lg:justify-between lg:gap-10 lg:text-base">
                  <p className="lg:w-1/2 lg:text-base">
                    Faça uma análise 100% digital gratuita e segura sem
                    compromisso e receba um retorno em 24h.
                  </p>
                  <a href="/analise">
                    <div className="flex items-center justify-end gap-2 lg:mt-4">
                      <span className="leading-loose underline">
                        Fazer análise
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-right">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mx-auto mt-12 flex flex-col items-center text-center text-sm lg:mx-[unset] lg:mt-16 lg:items-start lg:text-start lg:text-base">
                <span className="font-semibold">Ficou com dúvidas?</span>
                <span className="text-gray-80 max-w-[80%] lg:max-w-full">
                  Acesse nosso canal no WhatsApp e sinta-se à vontade para
                  conversar com o nosso time!
                </span>
                <div className="mt-4 flex items-center gap-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    fill="currentColor"
                    viewBox="0 0 18 18">
                    <g clipPath="url(#clip0_3354_4570)">
                      <path
                        fill="#2EA340"
                        d="M9.002 0h-.004C4.035 0 0 4.037 0 9c0 1.969.634 3.793 1.713 5.275L.592 17.62l3.46-1.106A8.922 8.922 0 009.001 18C13.965 18 18 13.962 18 9s-4.035-9-8.998-9z"
                      />
                      <path
                        fill="#fff"
                        d="M14.24 12.71c-.217.613-1.079 1.121-1.766 1.27-.47.1-1.084.18-3.152-.678C6.677 12.207 4.974 9.52 4.84 9.345 4.714 9.17 3.772 7.922 3.772 6.63c0-1.291.656-1.92.92-2.19.218-.222.577-.323.92-.323.112 0 .212.005.302.01.265.011.397.027.572.444.217.523.746 1.815.809 1.948.064.132.128.312.038.487-.084.18-.159.26-.291.413-.133.153-.26.27-.392.434-.121.143-.259.296-.106.56.153.259.682 1.122 1.46 1.815 1.005.894 1.82 1.18 2.111 1.301.217.09.476.07.634-.1.202-.217.45-.577.704-.931.18-.254.407-.286.645-.196.243.084 1.53.72 1.794.852s.438.195.503.307c.063.111.063.634-.155 1.249z"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3354_4570">
                        <path fill="#fff" d="M0 0H18V18H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                  <a
                    href="https://api.whatsapp.com/send/?phone=554933661750&text&type=phone_number&app_absent=0"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    className="underline">
                    Enviar mensagem
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageGridHeader() {
  return (
    <div className="order-1 lg:order-1 lg:mt-8 relative">
      <div className="w-full md:hidden">
        <div className="relative h-full w-full rounded-lg">
          <div
            className="relative"
            role="region"
            aria-roledescription="carousel">
            <div className="overflow-hidden peer/carousel">
              <div
                className="flex -ml-4"
                style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full">
                  <button
                    id="image-slide-0"
                    aria-label="Foto 1"
                    className="relative flex aspect-square w-full shrink-0 snap-center">
                    <img
                      alt="Casa para alugar com 4 quartos"
                      loading="eager"
                      width={700}
                      height={700}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-full"
                      src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgyos3tb107k7xwn76s6i"
                      style={{ color: 'transparent' }}
                    />
                  </button>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full">
                  <button
                    id="image-slide-1"
                    aria-label="Foto 2"
                    className="relative flex aspect-square w-full shrink-0 snap-center">
                    <img
                      alt="Casa para alugar com 4 quartos"
                      loading="lazy"
                      width={700}
                      height={700}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-full"
                      src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgyo13qxc07ixt2oudrjz"
                      style={{ color: 'transparent' }}
                    />
                  </button>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full">
                  <button
                    id="image-slide-2"
                    aria-label="Foto 3"
                    className="relative flex aspect-square w-full shrink-0 snap-center">
                    <img
                      alt="Casa para alugar com 4 quartos"
                      loading="lazy"
                      width={700}
                      height={700}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-full"
                      src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgyom3tar07k7eqg19kkr"
                      style={{ color: 'transparent' }}
                    />
                  </button>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full">
                  <button
                    id="image-slide-3"
                    aria-label="Foto 4"
                    className="relative flex aspect-square w-full shrink-0 snap-center">
                    <img
                      alt="Casa para alugar com 4 quartos"
                      loading="lazy"
                      width={700}
                      height={700}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-full"
                      src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgyql3tc308ixmmqghmf4"
                      style={{ color: 'transparent' }}
                    />
                  </button>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full">
                  <button
                    id="image-slide-4"
                    aria-label="Foto 5"
                    className="relative flex aspect-square w-full shrink-0 snap-center">
                    <img
                      alt="Casa para alugar com 4 quartos"
                      loading="lazy"
                      width={700}
                      height={700}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-full"
                      src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgyod3tap07k7v0tbwdwm"
                      style={{ color: 'transparent' }}
                    />
                  </button>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full">
                  <button
                    id="image-slide-5"
                    aria-label="Foto 6"
                    className="relative flex aspect-square w-full shrink-0 snap-center">
                    <img
                      alt="Casa para alugar com 4 quartos"
                      loading="lazy"
                      width={700}
                      height={700}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-full"
                      src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgyoy3qxl07ixfx1x79uk"
                      style={{ color: 'transparent' }}
                    />
                  </button>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full">
                  <button
                    id="image-slide-6"
                    aria-label="Foto 7"
                    className="relative flex aspect-square w-full shrink-0 snap-center">
                    <img
                      alt="Casa para alugar com 4 quartos"
                      loading="lazy"
                      width={700}
                      height={700}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-full"
                      src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgyq43qy307ixkzos3vq3"
                      style={{ color: 'transparent' }}
                    />
                  </button>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full">
                  <button
                    id="image-slide-7"
                    aria-label="Foto 8"
                    className="relative flex aspect-square w-full shrink-0 snap-center">
                    <img
                      alt="Casa para alugar com 4 quartos"
                      loading="lazy"
                      width={700}
                      height={700}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-full"
                      src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgypf3qxt07ixdxjjm2al"
                      style={{ color: 'transparent' }}
                    />
                  </button>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full">
                  <button
                    id="image-slide-8"
                    aria-label="Foto 9"
                    className="relative flex aspect-square w-full shrink-0 snap-center">
                    <img
                      alt="Casa para alugar com 4 quartos"
                      loading="lazy"
                      width={700}
                      height={700}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-full"
                      src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgyoi3qxf07ixk82qn4zo"
                      style={{ color: 'transparent' }}
                    />
                  </button>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full">
                  <button
                    id="image-slide-9"
                    aria-label="Foto 10"
                    className="relative flex aspect-square w-full shrink-0 snap-center">
                    <img
                      alt="Casa para alugar com 4 quartos"
                      loading="lazy"
                      width={700}
                      height={700}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-full"
                      src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgyoy3qxj07ix9ib0mhhe"
                      style={{ color: 'transparent' }}
                    />
                  </button>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full">
                  <button
                    id="image-slide-10"
                    aria-label="Foto 11"
                    className="relative flex aspect-square w-full shrink-0 snap-center">
                    <img
                      alt="Casa para alugar com 4 quartos"
                      loading="lazy"
                      width={700}
                      height={700}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-full"
                      src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgyox3tb307k7a43912sg"
                      style={{ color: 'transparent' }}
                    />
                  </button>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full">
                  <button
                    id="image-slide-11"
                    aria-label="Foto 12"
                    className="relative flex aspect-square w-full shrink-0 snap-center">
                    <img
                      alt="Casa para alugar com 4 quartos"
                      loading="lazy"
                      width={700}
                      height={700}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-full"
                      src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgypx3tbp08ix4aks55rj"
                      style={{ color: 'transparent' }}
                    />
                  </button>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full">
                  <button
                    id="image-slide-12"
                    aria-label="Foto 13"
                    className="relative flex aspect-square w-full shrink-0 snap-center">
                    <img
                      alt="Casa para alugar com 4 quartos"
                      loading="lazy"
                      width={700}
                      height={700}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-full"
                      src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgyq63tbv08ixxwdmyfy2"
                      style={{ color: 'transparent' }}
                    />
                  </button>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full">
                  <button
                    id="image-slide-13"
                    aria-label="Foto 14"
                    className="relative flex aspect-square w-full shrink-0 snap-center">
                    <img
                      alt="Casa para alugar com 4 quartos"
                      loading="lazy"
                      width={700}
                      height={700}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-full"
                      src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgypg3qxv07ixi3b8webc"
                      style={{ color: 'transparent' }}
                    />
                  </button>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full">
                  <button
                    id="image-slide-14"
                    aria-label="Foto 15"
                    className="relative flex aspect-square w-full shrink-0 snap-center">
                    <img
                      alt="Casa para alugar com 4 quartos"
                      loading="lazy"
                      width={700}
                      height={700}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-full"
                      src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgyqd3tc108ixsot5x0au"
                      style={{ color: 'transparent' }}
                    />
                  </button>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full">
                  <button
                    id="image-slide-15"
                    aria-label="Foto 16"
                    className="relative flex aspect-square w-full shrink-0 snap-center">
                    <img
                      alt="Casa para alugar com 4 quartos"
                      loading="lazy"
                      width={700}
                      height={700}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-full"
                      src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgyp03qxn07ixadn5tc79"
                      style={{ color: 'transparent' }}
                    />
                  </button>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full">
                  <button
                    id="image-slide-16"
                    aria-label="Foto 17"
                    className="relative flex aspect-square w-full shrink-0 snap-center">
                    <img
                      alt="Casa para alugar com 4 quartos"
                      loading="lazy"
                      width={700}
                      height={700}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-full"
                      src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgyp23qxr07ixtwuzre6w"
                      style={{ color: 'transparent' }}
                    />
                  </button>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full">
                  <button
                    id="image-slide-17"
                    aria-label="Foto 18"
                    className="relative flex aspect-square w-full shrink-0 snap-center">
                    <img
                      alt="Casa para alugar com 4 quartos"
                      loading="lazy"
                      width={700}
                      height={700}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-full"
                      src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgyom3qxh07ixr4e2a7rd"
                      style={{ color: 'transparent' }}
                    />
                  </button>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full">
                  <button
                    id="image-slide-18"
                    aria-label="Foto 19"
                    className="relative flex aspect-square w-full shrink-0 snap-center">
                    <img
                      alt="Casa para alugar com 4 quartos"
                      loading="lazy"
                      width={700}
                      height={700}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-full"
                      src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgyq23tbr08ixulw7v0z8"
                      style={{ color: 'transparent' }}
                    />
                  </button>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full">
                  <button
                    id="image-slide-19"
                    aria-label="Foto 20"
                    className="relative flex aspect-square w-full shrink-0 snap-center">
                    <img
                      alt="Casa para alugar com 4 quartos"
                      loading="lazy"
                      width={700}
                      height={700}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-full"
                      src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgyoq3taz07k7zl9neoip"
                      style={{ color: 'transparent' }}
                    />
                  </button>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full">
                  <button
                    id="image-slide-20"
                    aria-label="Foto 21"
                    className="relative flex aspect-square w-full shrink-0 snap-center">
                    <img
                      alt="Casa para alugar com 4 quartos"
                      loading="lazy"
                      width={700}
                      height={700}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-full"
                      src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgyp33tb707k7mx32mqf1"
                      style={{ color: 'transparent' }}
                    />
                  </button>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full">
                  <button
                    id="image-slide-21"
                    aria-label="Foto 22"
                    className="relative flex aspect-square w-full shrink-0 snap-center">
                    <img
                      alt="Casa para alugar com 4 quartos"
                      loading="lazy"
                      width={700}
                      height={700}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-full"
                      src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgypt3tbl08ix0oo9esmt"
                      style={{ color: 'transparent' }}
                    />
                  </button>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full">
                  <button
                    id="image-slide-22"
                    aria-label="Foto 23"
                    className="relative flex aspect-square w-full shrink-0 snap-center">
                    <img
                      alt="Casa para alugar com 4 quartos"
                      loading="lazy"
                      width={700}
                      height={700}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-full"
                      src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgyom3tat07k7zqaqzssa"
                      style={{ color: 'transparent' }}
                    />
                  </button>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full">
                  <button
                    id="image-slide-23"
                    aria-label="Foto 24"
                    className="relative flex aspect-square w-full shrink-0 snap-center">
                    <img
                      alt="Casa para alugar com 4 quartos"
                      loading="lazy"
                      width={700}
                      height={700}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-full"
                      src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgyoo3tav07k7gzbo5k7o"
                      style={{ color: 'transparent' }}
                    />
                  </button>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full">
                  <button
                    id="image-slide-24"
                    aria-label="Foto 25"
                    className="relative flex aspect-square w-full shrink-0 snap-center">
                    <img
                      alt="Casa para alugar com 4 quartos"
                      loading="lazy"
                      width={700}
                      height={700}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-full"
                      src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgyo73tan07k72vht2q5w"
                      style={{ color: 'transparent' }}
                    />
                  </button>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full">
                  <button
                    id="image-slide-25"
                    aria-label="Foto 26"
                    className="relative flex aspect-square w-full shrink-0 snap-center">
                    <img
                      alt="Casa para alugar com 4 quartos"
                      loading="lazy"
                      width={700}
                      height={700}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-full"
                      src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgyq73tbz08ix5xkpnvox"
                      style={{ color: 'transparent' }}
                    />
                  </button>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full">
                  <button
                    id="image-slide-26"
                    aria-label="Foto 27"
                    className="relative flex aspect-square w-full shrink-0 snap-center">
                    <img
                      alt="Casa para alugar com 4 quartos"
                      loading="lazy"
                      width={700}
                      height={700}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover w-full h-full"
                      src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgyq73tbx08ixvnpeyg3s"
                      style={{ color: 'transparent' }}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden peer-hover/carousel:block hover:block" />
          </div>
          <div
            className="pointer-events-none flex items-center absolute bottom-4 w-full justify-center"
            aria-hidden="true">
            <div className="flex items-center">
              <div
                className="rounded-full transition-all duration-300 bg-white"
                style={{ width: 6, height: 6 }}
              />
              <div
                className="rounded-full transition-all duration-300 bg-white/70 ml-1.5"
                style={{ width: 6, height: 6 }}
              />
              <div
                className="rounded-full transition-all duration-300 bg-white/70 ml-1.5"
                style={{ width: 6, height: 6 }}
              />
              <div
                className="rounded-full transition-all duration-300 bg-white/70 ml-1.5"
                style={{ width: '4.2px', height: '4.2px' }}
              />
              <div
                className="rounded-full transition-all duration-300 bg-white/70 ml-1.5"
                style={{ width: '2.4px', height: '2.4px' }}
              />
              <div
                className="rounded-full transition-all duration-300 bg-white/70"
                style={{ width: 0, height: 0 }}
              />
              <div
                className="rounded-full transition-all duration-300 bg-white/70"
                style={{ width: 0, height: 0 }}
              />
              <div
                className="rounded-full transition-all duration-300 bg-white/70"
                style={{ width: 0, height: 0 }}
              />
              <div
                className="rounded-full transition-all duration-300 bg-white/70"
                style={{ width: 0, height: 0 }}
              />
              <div
                className="rounded-full transition-all duration-300 bg-white/70"
                style={{ width: 0, height: 0 }}
              />
              <div
                className="rounded-full transition-all duration-300 bg-white/70"
                style={{ width: 0, height: 0 }}
              />
              <div
                className="rounded-full transition-all duration-300 bg-white/70"
                style={{ width: 0, height: 0 }}
              />
              <div
                className="rounded-full transition-all duration-300 bg-white/70"
                style={{ width: 0, height: 0 }}
              />
              <div
                className="rounded-full transition-all duration-300 bg-white/70"
                style={{ width: 0, height: 0 }}
              />
              <div
                className="rounded-full transition-all duration-300 bg-white/70"
                style={{ width: 0, height: 0 }}
              />
              <div
                className="rounded-full transition-all duration-300 bg-white/70"
                style={{ width: 0, height: 0 }}
              />
              <div
                className="rounded-full transition-all duration-300 bg-white/70"
                style={{ width: 0, height: 0 }}
              />
              <div
                className="rounded-full transition-all duration-300 bg-white/70"
                style={{ width: 0, height: 0 }}
              />
              <div
                className="rounded-full transition-all duration-300 bg-white/70"
                style={{ width: 0, height: 0 }}
              />
              <div
                className="rounded-full transition-all duration-300 bg-white/70"
                style={{ width: 0, height: 0 }}
              />
              <div
                className="rounded-full transition-all duration-300 bg-white/70"
                style={{ width: 0, height: 0 }}
              />
              <div
                className="rounded-full transition-all duration-300 bg-white/70"
                style={{ width: 0, height: 0 }}
              />
              <div
                className="rounded-full transition-all duration-300 bg-white/70"
                style={{ width: 0, height: 0 }}
              />
              <div
                className="rounded-full transition-all duration-300 bg-white/70"
                style={{ width: 0, height: 0 }}
              />
              <div
                className="rounded-full transition-all duration-300 bg-white/70"
                style={{ width: 0, height: 0 }}
              />
              <div
                className="rounded-full transition-all duration-300 bg-white/70"
                style={{ width: 0, height: 0 }}
              />
              <div
                className="rounded-full transition-all duration-300 bg-white/70"
                style={{ width: 0, height: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="relative w-full grid-cols-4 grid-rows-2 gap-2 grid aspect-[2/1]">
          <button
            aria-label="Abrir galeria de fotos"
            className="relative col-span-2 row-span-2 h-full overflow-hidden rounded-lg">
            <img
              alt="Casa para alugar com 4 quartos"
              loading="lazy"
              width={594}
              height={598}
              decoding="async"
              data-nimg={1}
              className="object-cover w-full h-full transition duration-300 hover:scale-105 rounded-lg"
              src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgyos3tb107k7xwn76s6i"
              style={{ color: 'transparent' }}
            />
          </button>
          <button
            aria-label="Abrir galeria de fotos"
            className="relative col-span-1 row-span-1 h-full overflow-hidden rounded-lg">
            <img
              alt="Casa para alugar com 4 quartos"
              loading="lazy"
              width={293}
              height={295}
              decoding="async"
              data-nimg={1}
              className="object-cover w-full h-full rounded-lg transition duration-300 hover:scale-105"
              src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgyo13qxc07ixt2oudrjz"
              style={{ color: 'transparent' }}
            />
          </button>
          <button
            aria-label="Abrir galeria de fotos"
            className="relative col-span-1 row-span-1 h-full overflow-hidden rounded-lg">
            <img
              alt="Casa para alugar com 4 quartos"
              loading="lazy"
              width={293}
              height={295}
              decoding="async"
              data-nimg={1}
              className="object-cover w-full h-full rounded-lg transition duration-300 hover:scale-105"
              src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgyom3tar07k7eqg19kkr"
              style={{ color: 'transparent' }}
            />
          </button>
          <button
            aria-label="Abrir galeria de fotos"
            className="relative col-span-1 row-span-1 h-full overflow-hidden rounded-lg">
            <img
              alt="Casa para alugar com 4 quartos"
              loading="lazy"
              width={293}
              height={295}
              decoding="async"
              data-nimg={1}
              className="object-cover w-full h-full transition duration-300 hover:scale-105 rounded-lg"
              src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgyql3tc308ixmmqghmf4"
              style={{ color: 'transparent' }}
            />
          </button>
          <button
            aria-label="Abrir galeria de fotos"
            className="relative col-span-1 row-span-1 h-full overflow-hidden rounded-lg">
            <img
              alt="Casa para alugar com 4 quartos"
              loading="lazy"
              width={293}
              height={295}
              decoding="async"
              data-nimg={1}
              className="object-cover w-full h-full transition duration-300 hover:scale-105 rounded-lg"
              src="https://us-east-1.graphassets.com/AVYIggJxFSBeFOUYVUsKcz/output=format:webp/cm5pmgyod3tap07k7v0tbwdwm"
              style={{ color: 'transparent' }}
            />
          </button>
          <div className="absolute right-0 bottom-0 pr-6 pb-6">
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-30 bg-background text-black hover:border-gray-50 drop-shadow-outline py-3 h-[48px] rounded-full px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                className="mr-2">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.25"
                  d="M4.167 11.665v0A1.665 1.665 0 0 1 2.5 10v0c0-.921.746-1.667 1.667-1.667v0c.92 0 1.666.746 1.666 1.667v0c0 .92-.745 1.666-1.666 1.666Zm5.832 0v0a1.666 1.666 0 0 1-1.667-1.666v0c0-.921.746-1.667 1.667-1.667v0c.92 0 1.666.746 1.666 1.667v0c0 .92-.745 1.666-1.666 1.666Zm5.836 0v0a1.666 1.666 0 0 1-1.667-1.666v0c0-.921.746-1.667 1.667-1.667v0c.92 0 1.666.746 1.666 1.667v0c0 .92-.745 1.666-1.666 1.666ZM4.167 17.497v0A1.666 1.666 0 0 1 2.5 15.831v0c0-.921.746-1.667 1.667-1.667v0c.92 0 1.666.746 1.666 1.667v0c0 .92-.745 1.666-1.666 1.666Zm5.832 0v0a1.666 1.666 0 0 1-1.667-1.666v0c0-.921.746-1.667 1.667-1.667v0c.92 0 1.666.746 1.666 1.667v0c0 .92-.745 1.666-1.666 1.666Zm5.836 0v0a1.666 1.666 0 0 1-1.667-1.666v0c0-.921.746-1.667 1.667-1.667v0c.92 0 1.666.746 1.666 1.667v0c0 .92-.745 1.666-1.666 1.666ZM4.167 5.831v0A1.666 1.666 0 0 1 2.5 4.165v0c0-.921.746-1.667 1.667-1.667v0c.92 0 1.666.746 1.666 1.667v0c0 .92-.745 1.666-1.666 1.666Zm5.832 0v0a1.666 1.666 0 0 1-1.667-1.666v0c0-.921.746-1.667 1.667-1.667v0c.92 0 1.666.746 1.666 1.667v0c0 .92-.745 1.666-1.666 1.666Zm5.836 0v0a1.666 1.666 0 0 1-1.667-1.666v0c0-.921.746-1.667 1.667-1.667v0c.92 0 1.666.746 1.666 1.667v0c0 .92-.745 1.666-1.666 1.666Z"
                  clipRule="evenodd"
                />
              </svg>
              Mostrar todas as fotos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
