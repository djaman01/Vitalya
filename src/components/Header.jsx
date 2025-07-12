import { Link } from "react-router-dom";
import { logoVitalya } from "../assets/images";

const Header = () => {
  return (
    <header className="inter-header padding-x w-full py-1">
      <nav className="max-container flex items-center justify-between">
        <Link to="/">
          <img
            className="cursor-pointer bg-white"
            src={logoVitalya}
            alt="Logo Vitalya"
            width={160}
          />
        </Link>

        <div className="mt-2 mr-24 flex flex-1 items-center justify-center gap-14 text-lg leading-normal max-lg:hidden">
          <Link to="/">
            <p className="cursor-pointer text-xl hover:text-[#6d6d6d] active:rounded-lg active:bg-[#9ca3af] active:px-2 active:py-1 active:text-white">
              Accueil
            </p>
          </Link>
          <div className="group relative">
            <p className="cursor-pointer text-xl hover:text-[#6d6d6d]">
              La Clinique
            </p>
            <div className="inter-header absolute z-10 hidden w-52 cursor-pointer rounded-lg bg-white font-serif shadow-xl ring-1 ring-slate-900/5 group-hover:block">
              <Link to="/projetsEcole">
                <p className="mt-2 mb-2 py-1 pl-2 hover:bg-gray-200 active:bg-[#9ca3af] active:text-white">
                  Qui sommes-nous ?
                </p>
              </Link>
              <Link to="/memoire">
                <p className="mb-2 py-1 pl-2 hover:bg-gray-200 active:bg-[#9ca3af] active:text-white">
                  Nos Soins
                </p>
              </Link>
              <Link to="/projetFinEtude">
                <p className="mb-2 py-1 pl-2 hover:bg-gray-200 active:bg-[#9ca3af] active:text-white">
                  Technologies
                </p>
              </Link>
            </div>
          </div>

          <Link to="/CV">
            <p className="cursor-pointer text-xl hover:text-[#6d6d6d] active:rounded-lg active:bg-[#9ca3af] active:px-2 active:py-1 active:text-white">
              Notre Équipe
            </p>
          </Link>

          <Link to="/CV">
            <p className="cursor-pointer text-xl hover:text-[#6d6d6d] active:rounded-lg active:bg-[#9ca3af] active:px-2 active:py-1 active:text-white">
              Contact
            </p>
          </Link>
        </div>

        {/* <div className="hidden max-lg:block">
          <SideBar className="lg:hidden" />
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
