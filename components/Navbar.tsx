"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  const [dropDownState, setDropDownState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropDownMenuRef = useRef<HTMLDivElement | null>(null);

  // handle dropdown menu
  useEffect(() => {
    const closeDropDown = (e: MouseEvent) => {
      if (
        dropDownMenuRef.current &&
        !dropDownMenuRef.current.contains(e.target as Node)
      ) {
        setDropDownState(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    document.addEventListener("mousedown", closeDropDown);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // nav items and type
  type TNavItems = {
    path: string;
    name: string;
  };
  const navItems: TNavItems[] = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About Us",
    },
    {
      path: "/service",
      name: "Service",
    },
    {
      path: "/blog",
      name: "Blog",
    },
  ];

  //! handle search using react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    if (data.search && data.search.trim()) {
      router.push(`/search?query=${encodeURIComponent(data.search.trim())}`);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-secondary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-between text-white py-4">
          <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl  text-red-500 font-bold  transition-all duration-200 hover:scale-110">
            <div>
              <Link href="/">
                <span className="text-3xl font-serif text-white">Film</span>
                Forge
              </Link>
            </div>
          </div>
          <ul className="hidden items-center justify-between gap-10 md:flex">
            {navItems?.map((item: TNavItems, index: number) => {
              return (
                <Link href={item.path} key={index}>
                  <li className="group flex cursor-pointer flex-col">
                    {item.name}
                    <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </li>
                </Link>
              );
            })}
          </ul>
          {/* search bar */}
          <div className="relative w-max rounded-lg">
            <form
              // onSubmit={handleSearch}
              onSubmit={handleSubmit(onSubmit)}
              className=" rounded-lg border border-sky-600 bg-transparent px-4 py-2 text-white focus:outline-none 2xl:w-[300px] text-base flex items-center"
            >
              <input
                className=" peer focus:outline-none bg-transparent  2xl:w-[300px] text-base"
                type="text"
                placeholder=""
                id="navigate_ui_input_33"
                // onChange={(e) => setSearchQuery(e.target.value)}
                {...register("search", { required: true, minLength: 3 })}
              />
              <label
                className={`absolute -top-2 left-2 rounded-md ${
                  errors.search
                    ? "bg-red-500 peer-focus:bg-red-600"
                    : "bg-sky-800 peer-focus:bg-sky-600"
                } px-2 text-xs text-sky-100 duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-400 peer-focus:-top-2  peer-focus:text-xs peer-focus:text-sky-100 p-[2px] `}
                htmlFor="navigate_ui_input_33"
              >
                {errors.search && (
                  <span className="text-red-100">This field is required</span>
                )}
                {errors.search && (
                  <span className="text-red-100">Minimum length is 3</span>
                )}
                {!errors.search && "Search Movies..."}
              </label>
              <button type="submit">🔍</button>
            </form>
          </div>

          {/* mobile view navbar */}
          <div
            ref={dropDownMenuRef}
            onClick={() => setDropDownState(!dropDownState)}
            className="relative flex transition-transform md:hidden"
          >
            <svg
              strokeLinecap="round"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
              className="cursor-pointer"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            {dropDownState && (
              <ul className="z-10 gap-2 bg-secondary border shadow-md absolute right-0 top-11 flex w-[200px] flex-col rounded-lg overflow-hidden text-base">
                {navItems?.map((item: TNavItems, index: number) => {
                  return (
                    <Link href={item?.path} key={index}>
                      <li className="cursor-pointer px-6 py-2 text-white rounded-t-lg hover:bg-primary">
                        {item.name}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
