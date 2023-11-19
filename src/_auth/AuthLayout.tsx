import { Outlet, Navigate } from "react-router-dom";

export default function AuthLayout() {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
        {/* authentication layout */}
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>
          
          {/* side img */}
          <img src="/assets/Images/side-img.svg" alt="img" className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"/>
        </>
      )}
    </>
  );
}
