import { useAccount, useConnect, useDisconnect } from "wagmi";

function Menu() {
  const account = useAccount();
  const { connectors, connect, status } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div className="flex justify-between items-center fixed bottom-0 left-0 p-4 w-full">
      <span className="font-semibold">Rustler</span>
      {account.status === "connected" ? (
        // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
        <span onClick={() => disconnect()} className="cursor-pointer">
          Disconnect
        </span>
      ) : (
        <select
          value={status}
          onChange={(e) => connect({ connector: connectors[+e.target.value] })}
        >
          <option value="disconnected">Connect</option>
          {connectors.map((c, idx) => (
            <option key={c.name} value={idx}>
              {c.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default Menu;
