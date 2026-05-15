export default function LoginPage(){

    return (<>
    <div className="flex flex-col min-h-screen bg-linear-to-b from-white via-cyan-100 to-cyan-200 items-center justify-center">
        <div className="p-20 rounded-2xl border-2">
            <form action="" className="flex flex-col">
                <input type="text" className="border-2 my-2 w-96 hover:rounded-xl rounded-2xl px-2 transition-all bg-white  py-1" placeholder="username" name="username" required/>
                <input type="password" className="border-2 my-2 w-96 hover:rounded-xl rounded-2xl bg-white transition-all px-2 py-1" placeholder="password" name="password" required />
                <button type="submit" className="cursor-pointer border-2 border-cyan-900 hover:bg-cyan-300 hover:rounded-2xl rounded-3xl transition-all text-cyan-950 my-2 w-40 self-end py-2 bg-cyan-500 text-xl">Login</button>
            </form>
            <h2 className="justify-self-center mt-4" >New here? - Signup</h2>
        </div>
    </div>    
    </>)
}