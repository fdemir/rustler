import { useAccount } from "wagmi";

function Account() {
  const account = useAccount();

  return (
    <div>
      <h2 className="text-2xl font-semibold">Account</h2>

      <div>
        status: {account.status}
        <br />
        chainId: {account.chainId}
      </div>
    </div>
  );
}

export default Account;
