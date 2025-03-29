const Contact = () =>{
    return(
        <div>
            <h1 className="p-2 m-2 font-bold">Contact Us</h1>
            <form>
                <input className="p-2 m-2 border-2 rounded-lg" type="text" placeholder ="name" />
                <input className="p-2 m-2 border-black border-2 rounded-lg" type="text" placeholder ="email"/>
                <button className="px-4 py-2 m-2 bg-black text-white rounded-lg">Submit</button>
            </form>
        </div>
        
    )
}
export default Contact;