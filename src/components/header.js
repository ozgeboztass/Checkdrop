export function PageHeader() {
    return(
      <header className="text-secondary body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-primary mb-4 md:mb-0">
          <img src="./logo/pp.png" alt="CheckDrop" className="w-10 mr-0" />
          <span className="ml-3 text-lg">CheckDrop</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-accent">Stats</a>
          <a className="mr-5 hover:text-accent">Görevler</a>
        </nav>
        <button className="inline-flex items-center text-secondary bg-primary border-0 py-2 px-8 focus:outline-none btn w-64 hover:bg-accent text-center rounded text-base mt-4 md:mt-0">
          Connect Wallet
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
    )
}