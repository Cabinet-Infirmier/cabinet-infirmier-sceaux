"use client";

import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex items-center justify-between p-6 lg:px-8 lg:mt-6"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="flex justify-center items-center">
            <img
              alt="logo"
              src="/images/logo/logo.png"
              className="h-auto w-[5em]"
            />
            <h1 className="text-[#575555] font-semibold lg:text-[2em] m-2 uppercase">
              Cabinet Infirmières
            </h1>
          </Link>
        </div>
        <div className="flex lg:hidden ">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 lg:border-b border-stone-400">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-lg text-[##e4bbbb] px-3 py-2"
                : "text-lg text-gray-900 gray-50 rounded-lg px-3 py-2 hover:bg-gray-50"
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-lg text-[##e4bbbb] px-3 py-2"
                : "text-lg text-gray-900 gray-50 rounded-lg px-3 py-2 hover:bg-gray-50"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/questions-frequentes"
            className={({ isActive }) =>
              isActive
                ? "text-lg text-[##e4bbbb] px-3 py-2"
                : "text-lg text-gray-900 gray-50 rounded-lg px-3 py-2 hover:bg-gray-50"
            }
          >
            Questions fréquentes
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-lg text-[##e4bbbb] px-3 py-2"
                : "text-lg text-gray-900 gray-50 rounded-lg px-3 py-2 hover:bg-gray-50"
            }
          >
            Contact
          </NavLink>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-base text-[##e4bbbb] hover:bg-gray-50 block rounded-lg px-3 py-2"
                      : "text-base text-gray-900 hover:bg-gray-50 block rounded-lg px-3 py-2"
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Accueil
                </NavLink>

                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? "text-base text-[##e4bbbb]  hover:bg-gray-50 block rounded-lg px-3 py-2"
                      : "text-base text-gray-900 hover:bg-gray-50 block rounded-lg px-3 py-2"
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </NavLink>
                <NavLink
                  to="/questions-frequentes"
                  className={({ isActive }) =>
                    isActive
                      ? "text-base  text-[##e4bbbb]   hover:bg-gray-50 block rounded-lg px-3 py-2 "
                      : "text-base text-gray-900 hover:bg-gray-50 block rounded-lg px-3 py-2"
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Questions fréquentes
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-base text-[##e4bbbb]   hover:bg-gray-50 block rounded-lg px-3 py-2 "
                      : "text-base text-gray-900 hover:bg-gray-50 block rounded-lg px-3 py-2"
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Navbar;
