import { useRef } from "react";
import abi from "../config/abis/storage.json";
import contracts from "../config/contract";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";

function Create() {
  const formRef = useRef<HTMLFormElement>(null);
  const { data: hash, writeContract, isPending } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  async function handleCreate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;

    writeContract({
      address: contracts.storage,
      abi,
      functionName: "pick",
      args: [name, "abc"],
    });
  }

  return (
    <div className="w-1/2">
      <form className="py-3 gap-3 flex" onSubmit={handleCreate} ref={formRef}>
        <input
          type="text"
          name="name"
          placeholder="Name your pet"
          className="border bg-transparent border-gray-300 rounded-md px-3 py-2"
          required
        />
        <button
          type="submit"
          className="border border-gray-300 rounded-md px-3 py-2 disabled:opacity-50"
          disabled={isPending}
        >
          Submit
        </button>
      </form>
      {hash && <div>Transaction Hash: {hash}</div>}
      {isConfirming && <div>Waiting for confirmation...</div>}
      {isConfirmed && (
        <div className="text-emerald-500">Transaction confirmed.</div>
      )}
    </div>
  );
}

export default Create;
