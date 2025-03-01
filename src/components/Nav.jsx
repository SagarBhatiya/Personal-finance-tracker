import { Link } from "react-router-dom";

function Nav() {
    return ( 
        <div className="h-[80vh] w-[15vw] bg-gray-100 flex flex-col gap-5 p-6 rounded-lg shadow-lg space-y-6">
            <div>
                <h1>sagar</h1>
            </div>
            <div className="font-semibold flex flex-col gap-10 mt-8">
              <Link to="/">Dashboard</Link>
              <Link to="/Transaction">Transaction</Link>
              <Link to="/Income">Income</Link>
              <Link to="/Expenses">Expenses</Link>
            
            </div>
            <div className="mt-15">
                <h1>signout</h1>
            </div>
            
        </div>
     );
}

export default Nav;