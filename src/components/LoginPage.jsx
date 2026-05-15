export default function LoginPage(){

    const inputClasses = "border-2 my-2 w-96 hover:rounded-xl rounded-2xl px-2 transition-all bg-white  py-1";

    return (<>
    <div className="flex flex-col min-h-screen bg-linear-to-b from-white via-cyan-100 to-cyan-200 items-center justify-center ">
        <div className="p-20 rounded-2xl border-2 bg-linear-to-b to-white via-cyan-100 from-cyan-200 hover:from-cyan-300 hover:p-22 transition-all">
            <h2 className="justify-self-center text-2xl mb-8 " >LogIn</h2>
            <form action="" className="flex flex-col">
                <input type="text" className={`${inputClasses}`} placeholder="username" name="username" required/>
                <input type="password" className={inputClasses} placeholder="password" name="password" required />
                <button type="submit" className="cursor-pointer border-2 border-cyan-900 hover:bg-cyan-300 hover:rounded-2xl rounded-3xl transition-all text-cyan-950 my-2 w-40 self-end py-2 bg-cyan-500 text-xl">Login</button>
            </form>
            <h2 className="justify-self-center mt-4" >New here? - Signup</h2>
        </div>
    </div>    
    </>)
}