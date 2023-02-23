import { IconBrandGoogle } from "@tabler/icons";
import { signInWithGooglePopup } from "./../firebase";
function Login() {
  const logGoogleUser = () => {
    signInWithGooglePopup();
  };
  return (
    <div className=" flex h-screen w-full flex-col items-center justify-center ">
      <div className="mx-auto flex w-full flex-col justify-center space-y-3 sm:w-[350px]">
        <div className="w-full mt-8  text-center place-content-center  ">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-bold">Login to Imagine</h1>
            <p className="text-sm text-slate-600"></p>
          </div>
        </div>
        <div className="w-full mb-10 text-center place-content-center ">
          <button
            className="inline-flex w-full items-center justify-center rounded-lg border bg-white px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 disabled:opacity-50  border-slate-200 border-slate-700 hover:text-white
            border-solid border-1 border-slate-400 "
            data-bcup-haslogintext="no"
            onClick={logGoogleUser}
          >
            <IconBrandGoogle className="mr-4" size={16} strokeWidth={3} />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
