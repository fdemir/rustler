import { useAccount } from "wagmi";
import Menu from "../components/Menu";
import Tools from "../components/Tools";
import Account from "../components/Account";
import { Outlet } from "react-router-dom";

function Root() {
  const { status } = useAccount();

  return (
    <div className="bg-black text-zinc-200 min-h-screen min-w-full pb-32">
      <main className="container mx-auto relative p-4">
        <h1 className="text-4xl font-bold">Rustler</h1>
        <p>
          Simple pet application that you can create your pet at BlockChain.
          List them, increase their level and more.
        </p>
        {status === "connected" ? (
          <section className="flex gap-4 flex-col mt-4">
            <Account />
            <Tools />
            <div>
              <Outlet />
            </div>
          </section>
        ) : (
          <>
            <p>You need to connect your wallet to use this application. </p>
          </>
        )}
        <Menu />
      </main>
    </div>
  );
}

export default Root;

// import {
//   useAccount,
//   useConnect,
//   useDisconnect,
//   useReadContract,
//   useWriteContract,
//   serialize,
// } from "wagmi";
// import abi from "./storage.json";

// function App() {
//   const account = useAccount();
//   const { connectors, connect, status, error } = useConnect();
//   const { disconnect } = useDisconnect();

//   const { data: hash, writeContract } = useWriteContract();

//   const { data: list } = useReadContract({
//     functionName: "listMyPets",
//     address: "0x222f1A3a361C67E5F6119C095D18bBc17934DBAf",
//     abi,
//     account: account.address,
//   });

//   async function handlePick(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     const formData = new FormData(e.target as HTMLFormElement);
//     const name = formData.get("name") as string;

//     writeContract({
//       address: "0x222f1A3a361C67E5F6119C095D18bBc17934DBAf",
//       abi,
//       functionName: "pick",
//       args: [name, "abc"],
//     });
//   }

//   return (
//     <>
//       <div>
//         <h2>Account</h2>

//         <div>
//           status: {account.status}
//           <br />
//           addresses: {JSON.stringify(account.addresses)}
//           <br />
//           chainId: {account.chainId}
//         </div>

//         {account.status === "connected" && (
//           <button type="button" onClick={() => disconnect()}>
//             Disconnect
//           </button>
//         )}
//       </div>

//       <div>
//         <h2>Connect</h2>
//         {connectors.map((connector) => (
//           <button
//             key={connector.uid}
//             onClick={() => connect({ connector })}
//             type="button"
//           >
//             {connector.name}
//           </button>
//         ))}
//         <div>{status}</div>
//         <div>{error?.message}</div>
//       </div>

//       <div>
//         <h2>Pick a pet</h2>
//         <form onSubmit={handlePick}>
//           <input type="text" name="name" />
//           <button type="submit">Create</button>
//         </form>
//         {hash}
//       </div>

//       <div>
//         <h2>My pets</h2>
//         {list?.map((pet) => <div>{pet.name}</div>)}
//       </div>
//     </>
//   );
// }

// export default App;
